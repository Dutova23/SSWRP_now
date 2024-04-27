import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import {
  flexRender,
} from '@tanstack/react-table'
import TableCell from '@mui/material/TableCell'
import PropTypes from 'prop-types'

// Компонент ячейки таблицы
const CTableCell = ({ cell }) => {
  // Использование хука для сортировки
  const { isDragging, setNodeRef, transform } = useSortable({
    id: cell.column.id,
  })

  const { column } = cell

  // Проверка, прикреплена ли колонка
  const isPinned = column.getIsPinned()
  // Проверка, является ли колонка последней закрепленной слева
  const isLastLeftPinnedColumn =
    isPinned === 'left' && column.getIsLastColumn('left')
  // Проверка, является ли колонка первой закрепленной справа
  const isFirstRightPinnedColumn =
    isPinned === 'right' && column.getIsFirstColumn('right')

  // Установка прозрачности и стилей для перемещаемой ячейки
  let opacity = 1
  if (isDragging) {
    opacity = 0.8
  } else if (isPinned) {
    opacity = 0.95
  }

  // Стили для ячейки
  const style = {
    opacity: opacity,
    position: isPinned ? 'sticky' : 'relative',
    transform: CSS.Translate.toString(transform), // translate вместо transform, чтобы избежать деформации
    transition: 'width transform 0.2s ease-in-out',
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
    boxSizing: 'border-box'
  }

  // Возвращение ячейки с установленными стилями
  return (
    <TableCell sx={style} ref={setNodeRef}>
      {flexRender(cell.column.columnDef.cell, cell.getContext())}
    </TableCell>
  )
}

// Определение propTypes для CTableCell
CTableCell.propTypes = {
  cell: PropTypes.object,
}

export default CTableCell
