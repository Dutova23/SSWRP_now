import { useState, useEffect, useCallback, useMemo, useRef } from 'react'
import {
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table"
import {
  keepPreviousData,
  useInfiniteQuery,
} from '@tanstack/react-query'
import { useVirtualizer } from '@tanstack/react-virtual'
import PropTypes from 'prop-types'

// Необходимо для настройки перетаскивания на уровне тела таблицы
import {
  DndContext,
  KeyboardSensor,
  MouseSensor,
  TouchSensor,
  closestCenter,
  useSensor,
  useSensors,
} from '@dnd-kit/core'
import { restrictToHorizontalAxis } from '@dnd-kit/modifiers'
import {
  arrayMove,
  SortableContext,
  horizontalListSortingStrategy,
} from '@dnd-kit/sortable'

import CTableCell from './CTableCell'
import CTableHeaderCell from './CTableHeaderCell'

import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

const CTable = ({ columns, columnPinning, queryFn, queryKey, totalDBRowCount, estimateRowHeight }) => {
  const [sorting, setSorting] = useState([])
  const [columnOrder, setColumnOrder] = useState(() =>
    columns.map(c => c.id)
  )
  const tableContainerRef = useRef(null)


  const { data, fetchNextPage, isFetching } =
    useInfiniteQuery({
      queryKey: [
        queryKey,
        sorting, // Повторный запрос при изменении сортировки
      ],
      queryFn: ({ pageParam = 0 }) => {
        return queryFn(sorting, pageParam)
      },
      initialPageParam: 0,
      getNextPageParam: (_lastGroup, groups) => groups.length,
      refetchOnWindowFocus: false,
      placeholderData: keepPreviousData,
    })

  // Выравнивание массива массивов из хука useInfiniteQuery
  const flatData = useMemo(
    () => data?.pages?.flatMap(page => page) ?? [],
    [data]
  )
  const totalFetched = flatData.length

  // Вызывается при прокрутке и возможно при монтировании, чтобы загрузить больше данных, когда пользователь прокручивает и достигает нижней части таблицы
  const fetchMoreOnBottomReached = useCallback(
    (containerRefElement) => {
      if (containerRefElement) {
        const { scrollHeight, scrollTop, clientHeight } = containerRefElement
        // Как только пользователь прокрутил в пределах 500px от нижней части таблицы, загрузите больше данных, если это возможно
        if (
          scrollHeight - scrollTop - clientHeight < 500 &&
          !isFetching &&
          totalFetched < totalDBRowCount
        ) {
          fetchNextPage()
        }
      }
    },
    [fetchNextPage, isFetching, totalFetched, totalDBRowCount]
  )

  // Проверка при монтировании и после запроса, чтобы увидеть, находится ли таблица уже прокручена до нижней части и сразу требует загрузки большего количества данных
  useEffect(() => {
    fetchMoreOnBottomReached(tableContainerRef.current)
  }, [fetchMoreOnBottomReached])

  const table = useReactTable({
    data: flatData,
    columns,
    state: {
      sorting,
      columnOrder
    },
    onColumnOrderChange: setColumnOrder,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    initialState: {
      columnPinning
    },
    debugTable: true,
    debugHeaders: true,
    debugColumns: true,
  })

  // Прокрутка к началу таблицы при изменении сортировки
  const handleSortingChange = updater => {
    setSorting(updater)
    if (table.getRowModel().rows.length) {
      rowVirtualizer.scrollToIndex?.(0)
    }
  }

  const { rows } = table.getRowModel()

  // Поскольку этот параметр таблицы происходит из состояния модели строки таблицы, мы используем утилиту table.setOptions
  table.setOptions(prev => ({
    ...prev,
    onSortingChange: handleSortingChange,
  }))

  const rowVirtualizer = useVirtualizer({
    count: rows.length,
    estimateSize: () => estimateRowHeight, // Оценка высоты строки для точного перетаскивания полосы прокрутки
    getScrollElement: () => tableContainerRef.current,
    // Измерение динамической высоты строки, кроме Firefox, потому что он неправильно измеряет высоту границы таблицы
    measureElement:
      typeof window !== 'undefined' &&
        navigator.userAgent.indexOf('Firefox') === -1
        ? element => element?.getBoundingClientRect().height
        : undefined,
    overscan: 5,
  })

  function handleDragEnd(event) {
    const { active, over } = event
    if (active && over && active.id !== over.id) {
      setColumnOrder(columnOrder => {
        const oldIndex = columnOrder.indexOf(active.id)
        const newIndex = columnOrder.indexOf(over.id)
        return arrayMove(columnOrder, oldIndex, newIndex) // это просто утилита splice
      })
    }
  }

  const sensors = useSensors(
    useSensor(MouseSensor, {}),
    useSensor(TouchSensor, {}),
    useSensor(KeyboardSensor, {})
  )

  return (
    <DndContext
      collisionDetection={closestCenter}
      modifiers={[restrictToHorizontalAxis]}
      onDragEnd={handleDragEnd}
      sensors={sensors}
    >
      <TableContainer
        onScroll={e => fetchMoreOnBottomReached(e.target)}
        ref={tableContainerRef}
        sx={{
          overflow: 'auto', // наша прокручиваемая область таблицы
          position: 'relative', // необходимо для зафиксированного заголовка
          height: '600px', // должен быть фиксированным
        }}
        component={Paper}
      >
        <Table sx={{ display: 'grid', width: table.getTotalSize() }} aria-label="simple table">
          <TableHead
            sx={{
              display: 'grid',
              position: 'sticky',
              top: 0,
              zIndex: 1,
            }}
          >
            {table.getHeaderGroups().map(headerGroup => (
              <TableRow key={headerGroup.id}>
                <SortableContext
                  items={columnOrder}
                  strategy={horizontalListSortingStrategy}
                >
                  {headerGroup.headers.map(header => (
                    <CTableHeaderCell key={header.id} header={header} />
                  ))}
                </SortableContext>
              </TableRow>
            ))}
          </TableHead>
          <TableBody
            sx={{
              display: 'grid',
              height: `${rowVirtualizer.getTotalSize()}px`, // сообщает полосе прокрутки, насколько велика таблица
              position: 'relative', // необходимо для абсолютного позиционирования строк
            }}
          >
            {rowVirtualizer.getVirtualItems().map(virtualRow => {
              const row = rows[virtualRow.index]
              return (
                <TableRow
                  data-index={virtualRow.index} // необходимо для измерения динамической высоты строки
                  ref={node => rowVirtualizer.measureElement(node)} // измерение динамической высоты строки
                  key={row.id}
                  sx={{
                    display: 'flex',
                    position: 'absolute',
                    transform: `translateY(${virtualRow.start}px)`, // это всегда должно быть в стиле, поскольку оно изменяется при прокрутке
                    width: '100%',
                  }}
                >
                  {row.getVisibleCells().map(cell => {
                    return (
                      <SortableContext
                        key={cell.id}
                        items={columnOrder}
                        strategy={horizontalListSortingStrategy}
                      >
                        <CTableCell key={cell.id} cell={cell}></CTableCell>
                      </SortableContext>
                    )
                  })}
                </TableRow>
              )
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </DndContext>
  )
}

CTable.propTypes = {
  columns: PropTypes.array,
  columnPinning: PropTypes.object,
  queryFn: PropTypes.func,
  queryKey: PropTypes.string,
  totalDBRowCount: PropTypes.number,
  estimateRowHeight: PropTypes.number
}

export default CTable
