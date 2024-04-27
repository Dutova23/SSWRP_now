import IconButton from '@mui/material/IconButton'; // Импорт компонента IconButton из библиотеки Material-UI для создания кнопки с иконкой
import PropTypes from 'prop-types'; // Импорт PropTypes для проверки типов пропсов

// Компонент BIconButton для создания кнопки с иконкой
const BIconButton = ({ 
  onClick = () => {}, // Обработчик клика по кнопке (по умолчанию пустая функция)
  size = "small", // Размер кнопки (по умолчанию small)
  color = "primary", // Цвет кнопки (по умолчанию primary)
  ariaLabel = "", // Текстовое описание кнопки для доступности (по умолчанию пустая строка)
  edge= "", // Положение кнопки относительно соседних элементов (по умолчанию пустая строка)
  sx= {}, // Стили компонента (по умолчанию пустой объект)
  children // Дочерние элементы (в данном случае - иконка)
}) => {
  return (
    <IconButton 
      size={size} // Размер кнопки
      color={color} // Цвет кнопки
      aria-label={ariaLabel} // Текстовое описание кнопки
      onClick={onClick} // Обработчик клика по кнопке
      edge={edge} // Положение кнопки относительно соседних элементов
      sx={sx} // Стили компонента
    >
      {children} {/* Дочерние элементы */}
    </IconButton>
  );
}

// Проверка типов пропсов
BIconButton.propTypes = {
  size: PropTypes.string, // Размер кнопки
  color: PropTypes.string, // Цвет кнопки
  onClick: PropTypes.func, // Обработчик клика по кнопке
  ariaLabel: PropTypes.string, // Текстовое описание кнопки
  children: PropTypes.node, // Дочерние элементы
  edge: PropTypes.string, // Положение кнопки относительно соседних элементов
  sx: PropTypes.object // Стили компонента
}

export default BIconButton;