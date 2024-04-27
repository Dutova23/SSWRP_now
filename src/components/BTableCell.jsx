import TableCell from '@mui/material/TableCell'; // Импорт компонента TableCell из библиотеки Material-UI для создания ячейки таблицы
import PropTypes from 'prop-types'; // Импорт PropTypes для проверки типов пропсов

// Компонент BTableCell для создания ячейки таблицы
const BTableCell = ({ children }) => {
  return (
    <TableCell> {/* Ячейка таблицы */}
      {children} {/* Дочерние элементы */}
    </TableCell>
  );
}

// Проверка типов пропсов
BTableCell.propTypes = {
  children: PropTypes.node // Дочерние элементы
}

export default BTableCell; 
