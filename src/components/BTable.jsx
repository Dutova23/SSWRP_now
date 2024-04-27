import Table from '@mui/material/Table'; // Импорт компонента Table из библиотеки Material-UI для создания таблицы
import TableBody from '@mui/material/TableBody'; // Импорт компонента TableBody из библиотеки Material-UI для создания тела таблицы
import TableContainer from '@mui/material/TableContainer'; // Импорт компонента TableContainer из библиотеки Material-UI для создания контейнера таблицы
import TableHead from '@mui/material/TableHead'; // Импорт компонента TableHead из библиотеки Material-UI для создания заголовка таблицы
import Paper from '@mui/material/Paper'; // Импорт компонента Paper из библиотеки Material-UI для создания контейнера
import BTableRow from './BTableRow'; // Импорт компонента BTableRow для создания строки таблицы
import BTableCell from './BTableCell'; // Импорт компонента BTableCell для создания ячейки таблицы
import PropTypes from 'prop-types'; // Импорт PropTypes для проверки типов пропсов

// Компонент BTable для создания таблицы
const BTable = ({ headers = [], children }) => {
  return (
    <TableContainer component={Paper}> {/* Контейнер таблицы */}
      <Table aria-label="simple table"> {/* Таблица */}
        <TableHead> {/* Заголовок таблицы */}
          <BTableRow> {/* Строка таблицы */}
            {
              headers.map((header) => {
                return (<BTableCell key={header.key}>{header.title}</BTableCell>) // Ячейка заголовка
              })
            }
          </BTableRow>
        </TableHead>
        <TableBody> {/* Тело таблицы */}
          {children} {/* Дочерние элементы */}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

// Проверка типов пропсов
BTable.propTypes = {
  headers: PropTypes.array, // Массив заголовков
  children: PropTypes.node // Дочерние элементы
}

export default BTable; 
