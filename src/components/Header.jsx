import AppBar from '@mui/material/AppBar'; // Импорт компонента AppBar из библиотеки Material-UI для создания верхней панели
import Toolbar from '@mui/material/Toolbar'; // Импорт компонента Toolbar из библиотеки Material-UI для создания контейнера панели
import BIconButton from './BIconButton'; // Импорт пользовательского компонента BIconButton
import MenuIcon from '@mui/icons-material/Menu'; // Импорт иконки MenuIcon из библиотеки Material-UI
import Box from '@mui/material/Box'; // Импорт компонента Box из библиотеки Material-UI для создания контейнера
import Button from '@mui/material/Button'; // Импорт компонента Button из библиотеки Material-UI для создания кнопки
import { useNavigate } from "react-router-dom"; // Импорт хука useNavigate из библиотеки react-router-dom для навигации
import ThemeContext from '../contexts/ThemeContext'; // Импорт контекста темы приложения
import { THEME_LIGHT, THEME_DARK } from "../contexts/ThemeContext"; // Импорт констант темы приложения
import { useContext } from 'react'; // Импорт хука useContext из библиотеки React для работы с контекстом
import DarkModeIcon from '@mui/icons-material/DarkMode'; // Импорт иконки DarkModeIcon из библиотеки Material-UI
import WbSunnyIcon from '@mui/icons-material/WbSunny'; // Импорт иконки WbSunnyIcon из библиотеки Material-UI
import IconButton from '@mui/material/IconButton'; // Импорт компонента IconButton из библиотеки Material-UI для создания кнопки с иконкой
import PropTypes from 'prop-types'; // Импорт библиотеки PropTypes для проверки типов пропсов

// Компонент Header
const Header = ({ pages, onClickMenu }) => {
  const { theme, setTheme } = useContext(ThemeContext); // Получение значения темы из контекста
  const navigate = useNavigate(); // Получение функции навигации из хука useNavigate

  // Функция изменения темы приложения
  const onThemeChange = () => {
    // Проверка текущей темы и установка противоположной
    if (theme === THEME_DARK) {
      setTheme(THEME_LIGHT);
    } else {
      setTheme(THEME_DARK);
    }
  }

  return (
    <AppBar position="static" sx={{ backgroundColor: 'green' }}> {/* Верхняя панель приложения */}
      <Toolbar> {/* Контейнер для элементов панели */}
        <BIconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={onClickMenu}
        >
          <MenuIcon /> {/* Иконка меню */}
        </BIconButton>

        <Box sx={{ flexGrow: 1, display: 'flex' }}> {/* Контейнер для кнопок */}
          {pages.map((page) => (
            <Button
              key={page.id}
              onClick={() => navigate(page.path)}
              sx={{ my: 2, color: 'white', display: 'block' }}
            >
              {page.title}
            </Button>
          ))}
        </Box>

        {/* Кнопка изменения темы приложения */}
        <IconButton 
         sx={{ ml: 1 }} 
         onClick={onThemeChange}
         style={{ color: 'white' }} // Устанавливаем белый цвет иконки
        >
          {/* Условный рендеринг иконки в зависимости от текущей темы */}
          {theme === THEME_DARK ? <DarkModeIcon/> : <WbSunnyIcon/>}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

// Проверка типов пропсов компонента Header
Header.propTypes = {
  pages: PropTypes.array, // Массив страниц
  onClickMenu: PropTypes.func // Функция обработки нажатия на кнопку меню
}

export default Header; 
