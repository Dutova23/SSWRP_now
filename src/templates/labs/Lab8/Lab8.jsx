import {
  createColumnHelper
} from "@tanstack/react-table" // Импорт функции createColumnHelper из библиотеки @tanstack/react-table
import exemplar from '../../../api/api' // Импорт экземпляра API из файла api.js
import CTable from '../../../components/CTable/CTable' // Импорт компонента CTable из файла CTable.jsx

const fetchSize = 15 // Размер пакета для запроса

// Создание помощника для работы с колонками
const columnHelper = createColumnHelper()

// Определение колонок таблицы
const columns = [
  columnHelper.accessor("id", {
    accessorKey: 'id',
    id: 'id',
    header: () => "Id", // Заголовок колонки "Id"
    cell: info => info.renderValue(), // Отображение значения ячейки
    size: 150 // Ширина колонки
  }),
  columnHelper.accessor("title", {
    accessorKey: 'title',
    id: 'title',
    header: () => "Title", // Заголовок колонки "Title"
    cell: info => info.renderValue(), // Отображение значения ячейки
    size: 350 // Ширина колонки
  }),
  columnHelper.accessor("body", {
    accessorKey: 'body',
    id: 'body',
    header: () => "Body", // Заголовок колонки "Body"
    cell: info => info.renderValue(), // Отображение значения ячейки
    size: 500 // Ширина колонки
  }),
  columnHelper.accessor("userId", {
    accessorKey: 'userId',
    id: 'userId',
    header: () => "UserId", // Заголовок колонки "UserId"
    cell: info => info.renderValue(), // Отображение значения ячейки
    size: 150 // Ширина колонки
  })
]

// Определение закрепления колонок
const columnPinning = {
  left: ['id'] // Закрепление колонки "Id" слева
}

// Функция запроса данных
const queryFn = async (sorting, pageParam) => {
  const start = pageParam * fetchSize // Вычисление начального индекса для запроса
  const sort = sorting[0] // Получение информации о сортировке
  const response = await exemplar.get("/posts", { // Выполнение запроса к API
    params: {
      _start: start, // Начальный индекс для запроса
      _limit: fetchSize, // Размер пакета для запроса
      _sort: sort ? sort.id : null, // Поле для сортировки
      _order: sort ? (sort.desc ? "desc" : "asc") : null // Направление сортировки
    }
  })
  return response.data // Возврат данных из ответа
}

// Компонент для лабораторной работы №8
const Lab8 = () => {
  return (
    <CTable // Компонент для отображения таблицы
      columns={columns} // Передача колонок
      columnPinning={columnPinning} // Передача закрепления колонок
      queryFn={queryFn} // Передача функции запроса данных
      queryKey={"posts"} // Ключ запроса
      totalDBRowCount={100} // Общее количество строк в базе данных
      estimateRowHeight={166} // Предполагаемая высота строки
    ></CTable>
  )
}

export default Lab8 
