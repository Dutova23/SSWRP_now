import PropTypes from 'prop-types'; // Импорт модуля PropTypes для проверки типов пропсов

// Компонент кнопки с заданными пропсами
const Button = ({ label = "Button", color = "orange", onClick = () => { }, disabled, ...props }) => {
  let classes = "b-button"; // Инициализация переменной classes со значением класса по умолчанию

  // Добавление класса для цвета кнопки в зависимости от значения пропса color
  classes += ` b-button__color-${color}`;

  return (
    <button 
      disabled={disabled ? "disabled" : false} // Установка состояния disabled в зависимости от значения пропса disabled
      className={classes} // Применение классов для стилизации кнопки
      onClick={onClick} {...props} // Обработчик клика и остальные пропсы передаются напрямую
    >
      {label} {/* Отображение текста кнопки */}
    </button>
  );
};

// Проверка типов пропсов
Button.propTypes = {
  label: PropTypes.string, // Пропс label должен быть строкой
  color: PropTypes.string, // Пропс color должен быть строкой
  onClick: PropTypes.func, // Пропс onClick должен быть функцией
  disabled: PropTypes.bool // Пропс disabled должен быть логическим значением
};

export default Button; 