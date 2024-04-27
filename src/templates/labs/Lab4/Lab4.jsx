import Button from "../../../components/Button"; // Импорт компонента кнопки из папки components/Button
import ThemeContext from "../../../contexts/ThemeContext"; // Импорт контекста темы из папки contexts/ThemeContext
import { THEME_LIGHT, THEME_DARK } from "../../../contexts/ThemeContext"; // Импорт констант темы из контекста ThemeContext
import { BUTTON_COLOR_ORANGE, BUTTON_COLOR_RED, BUTTON_COLOR_GREEN } from "../../../components/Button/config"; // Импорт цветов кнопки из конфигурации кнопки
import { useContext, useState, useEffect } from "react"; // Импорт хука useContext, useState, useEffect из библиотеки React
import { useSelector, useDispatch } from 'react-redux'; // Импорт хуков useSelector и useDispatch из библиотеки React Redux
import { decrement, increment, setValue, selectCount } from "../../../features/counter/counterSlice"; // Импорт экшенов и селекторов из фичи counterSlice

// Компонент Lab4
const Lab4 = () => {
  const { theme, setTheme } = useContext(ThemeContext); // Получение текущей темы и функции для её изменения из контекста ThemeContext
  const [count, setCount] = useState(0); // Состояние для отслеживания количества кликов
  const countRedux = useSelector(selectCount); // Получение значения счетчика из Redux хранилища
  const dispatch = useDispatch(); // Получение функции dispatch из Redux

  // Эффект для сброса счетчика и значения в Redux при изменении темы
  useEffect(() => {
    console.log("Use effect"); // Вывод в консоль сообщения о срабатывании эффекта
    setCount(0); // Сброс счетчика
    dispatch(setValue(0)); // Установка значения в Redux
  }, [theme, dispatch]); // Зависимости: theme и dispatch

  return (
    <div className="lab4-template"> {/* Контейнер для компонента */}
      <Button // Кнопка для установки светлой темы
        label="Light theme" // Текст на кнопке
        onClick={() => setTheme(THEME_LIGHT)} // Обработчик клика для установки светлой темы
      ></Button>

      <Button // Кнопка для установки темной темы
        label="Dark theme" // Текст на кнопке
        onClick={() => setTheme(THEME_DARK)} // Обработчик клика для установки темной темы
      ></Button>

      <div className="lab4-template__clicker-wrapper"> {/* Обертка для счетчика кликов */}
        <span>Кликнуто:{count}</span> {/* Отображение текущего значения счетчика */}
        <Button // Кнопка для увеличения счетчика
          color={BUTTON_COLOR_ORANGE} // Цвет кнопки
          label="Click me" // Текст на кнопке
          onClick={() => setCount(count + 1)} // Обработчик клика для увеличения счетчика
        ></Button>
      </div>

      <div className="lab4-template__clicker-wrapper"> {/* Обертка для счетчика Redux */}
        <span>Кликнуто:{countRedux}</span> {/* Отображение текущего значения счетчика из Redux */}
        <Button // Кнопка для инкремента счетчика в Redux
          color={BUTTON_COLOR_ORANGE} // Цвет кнопки
          label="Increment" // Текст на кнопке
          onClick={() => dispatch(increment())} // Обработчик клика для инкремента счетчика в Redux
        ></Button>

        <Button // Кнопка для декремента счетчика в Redux
          color={BUTTON_COLOR_ORANGE} // Цвет кнопки
          label="Decrement " // Текст на кнопке
          onClick={() => dispatch(decrement())} // Обработчик клика для декремента счетчика в Redux
        ></Button>
      </div>
    </div>
  );
}

export default Lab4;
