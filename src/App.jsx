import { useState } from 'react'; // Импорт хука useState из библиотеки React
import './App.css'; // Импорт файла стилей для компонента App
import Header from './components/Header'; // Импорт компонента Header
import Menu from './components/Menu'; // Импорт компонента Menu
import Footer from './components/Footer'; // Импорт компонента Footer
import Content from './templates/Content'; // Импорт компонента Content
import LocalContainer from './templates/LocalContainer'; // Импорт компонента LocalContainer
import Grid from '@mui/material/Grid'; // Импорт компонента Grid из библиотеки MUI
import { Outlet } from "react-router-dom"; // Импорт компонента Outlet из библиотеки react-router-dom
import { Box } from '@mui/material'; // Импорт компонента Box из библиотеки MUI
import ThemeContext from './contexts/ThemeContext'; // Импорт контекста ThemeContext
import { THEME_LIGHT } from './contexts/ThemeContext'; // Импорт значения THEME_LIGHT из контекста ThemeContext
import useVisibility from './hooks/useVisibility'; // Импорт хука useVisibility

const menuItems = [ // Список элементов меню
  { id: 0, text: "Лабораторные работы", path: "" }, 
  { id: 1, text: "Лабораторная №1", path: "lab/1" }, 
  { id: 2, text: "Лабораторная №2", path: "lab/2" }, 
  { id: 4, text: "Лабораторная №4", path: "lab/4" }, 
  { id: 5, text: "Лабораторная №5", path: "lab/5" },
  { id: 6, text: "Лабораторная №6", path: "lab/6" }, 
  { id: 6, text: "Лабораторная №8", path: "lab/8" } 
];

const pages = [ // Список страниц
  { id: 1, title: 'Главная', path: "" },
  { id: 2, title: 'О себе', path: "about-me" } 
]

function App() { // Компонент App
  const [theme, setTheme] = useState(THEME_LIGHT); // Состояние темы и функция для его изменения
  const [isVisibleMenu, { show: menuOpen, hide: menuHide }] = useVisibility(); // Состояние видимости меню и функции для его открытия и закрытия

  return ( // Возвращаемая разметка компонента App
    <ThemeContext.Provider value={{ theme, setTheme }}> {/* Провайдер контекста для темы приложения */}
      <Menu // Компонент меню
        items={menuItems} // Передача элементов меню
        open={isVisibleMenu} // Состояние открытия меню
        onClose={menuHide} // Функция закрытия меню
      ></Menu>

      <LocalContainer> {/* Контейнер для локального содержимого */}
        <Header pages={pages} onClickMenu={menuOpen}></Header> {/* Компонент заголовка страницы с передачей списка страниц и функции открытия меню */}

        <Box height={"100%"} sx={{ padding: 2, overflow: "auto" }}> {/* Блок с высотой 100% */}
          <Grid container spacing={2}> {/* Контейнер сетки */}
            <Grid item xs={12}> {/* Элемент сетки */}
              <Content> {/* Компонент контента */}
                <Outlet /> {/* Компонент Outlet для отображения содержимого страниц */}
              </Content>
            </Grid>
          </Grid>
        </Box>

        <Footer></Footer> {/* Компонент подвала страницы */}
      </LocalContainer>
    </ThemeContext.Provider>
  )
}

export default App; 