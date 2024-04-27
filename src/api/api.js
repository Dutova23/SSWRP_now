import axios from 'axios' // Импорт библиотеки axios для работы с HTTP-запросами

// Создание экземпляра axios с базовым URL-адресом для запросов к JSONPlaceholder API
const exemplar = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
});

export default exemplar
