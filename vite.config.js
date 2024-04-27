import { defineConfig } from 'vite' // Импорт функции defineConfig из библиотеки Vite
import react from '@vitejs/plugin-react' // Импорт плагина для поддержки React

// Конфигурация Vite
export default defineConfig({
  plugins: [react()], // Использование плагина react()
})
