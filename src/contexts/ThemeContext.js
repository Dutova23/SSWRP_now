import { createContext } from "react"; // Импорт функции createContext из библиотеки React

// Константы для тем светлой и темной
const THEME_LIGHT = "light";
const THEME_DARK = "dark";

// Создание контекста темы
const ThemeContext = createContext();

export default ThemeContext; // Экспорт контекста темы

export { THEME_LIGHT, THEME_DARK }; 
