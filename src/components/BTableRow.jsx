import TableRow from '@mui/material/TableRow'; // Импорт компонента TableRow из библиотеки Material-UI для создания строки таблицы
import PropTypes from 'prop-types'; // Импорт PropTypes для проверки типов пропсов

// Компонент BTableRow для создания строки таблицы
const BTableRow = ({ children }) => {
  return (
    <TableRow> {/* Строка таблицы */}
      {children} {/* Дочерние элементы */}
    </TableRow>
  );
}

// Проверка типов пропсов
BTableRow.propTypes = {
  children: PropTypes.node // Дочерние элементы
}

export default BTableRow; 
