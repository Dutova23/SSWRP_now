import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import {
  flexRender,
} from '@tanstack/react-table'
import TableCell from '@mui/material/TableCell'
import { ArrowDownward, ArrowUpward, DragHandle } from '@mui/icons-material'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import PropTypes from 'prop-types'

// Компонент ячейки заголовка таблицы
const CTableHeaderCell = ({ header }) => {
  // Использование хука для сортировки
  const { attributes, isDragging, listeners, setNodeRef, transform } =
    useSortable({
      id: header.column.id,
    })

  const { column } = header

  // Проверка, прикреплена ли колонка
  const isPinned = column.getIsPinned()
  // Проверка, является ли колонка последней закрепленной слева
  const isLastLeftPinnedColumn =
    isPinned === 'left' && column.getIsLastColumn('left')
  // Проверка, является ли колонка первой закрепленной справа
  const isFirstRightPinnedColumn =
    isPinned === 'right' && column.getIsFirstColumn('right')

  // Установка прозрачности и стилей для перемещаемой ячейки заголовка
  let opacity = 1
  if (isDragging) {
    opacity = 0.8
  } else if (isPinned) {
    opacity = 0.95
  }

  // Стили для ячейки заголовка
  const style = {
    opacity,
    position: isPinned ? 'sticky' : 'relative',
    transform: CSS.Translate.toString(transform), // translate вместо transform, чтобы избежать деформации
    transition: 'width transform 0.2s ease-in-out',
    whiteSpace: 'nowrap',
    width: column.getSize(),
    zIndex: isDragging || isPinned ? 1 : 0,
    boxShadow: isLastLeftPinnedColumn
      ? '-4px 0 4px -4px gray inset'
      : isFirstRightPinnedColumn
        ? '4px 0 4px -4px gray inset'
        : undefined,
    left: isPinned === 'left' ? `${column.getStart('left')}px` : undefined,
    right: isPinned === 'right' ? `${column.getAfter('right')}px` : undefined,
    backgroundColor: 'white',
    height: '62px',
    boxSizing: 'border-box'
  }

  // Возвращение ячейки заголовка с установленными стилями
  return (
    <TableCell colSpan={header.colSpan} sx={style} ref={setNodeRef}>
      <Stack direction="row" spacing={2} alignItems="center" justifyContent="flex-start">
        {/* Типография для отображения заголовка */}
        <Typography onClick={header.column.getToggleSortingHandler()}>
          {flexRender(header.column.columnDef.header, header.getContext())}
        </Typography>

        {/* Кнопка для перемещения колонки */}
        <button {...attributes} {...listeners}><DragHandle fontSize="small"/></button>

        {/* Блок для отображения иконки сортировки */}
        <Box onClick={header.column.getToggleSortingHandler()}>
          {
            // Условное отображение иконки сортировки в зависимости от текущего состояния сортировки
            {
              asc: <ArrowUpward fontSize="small" />,
              desc: <ArrowDownward fontSize="small" />,
            }[header.column.getIsSorted()] ?? null
          }
        </Box>
      </Stack>
    </TableCell >
  )
}

// Определение propTypes для CTableHeaderCell
CTableHeaderCell.propTypes = {
  header: PropTypes.object,
}

export default CTableHeaderCell
