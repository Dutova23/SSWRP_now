import { useState } from 'react'; // Импорт хука useState из библиотеки React

// Определение пользовательского хука useVisibility
const useVisibility = () => {
  // Создание состояния isVisible и функций для его изменения с помощью useState
  const [isVisible, setIsVisible] = useState(false);

  // Функция show для установки isVisible в значение true
  const show = () => {
    setIsVisible(true);
  };

  // Функция hide для установки isVisible в значение false
  const hide = () => {
    setIsVisible(false);
  };

  // Возврат массива с текущим значением isVisible и объекта, содержащего функции show и hide
  return [
    isVisible, // Текущее значение isVisible
    {
      show, // Функция для отображения
      hide, // Функция для скрытия
    }
  ];
};

export default useVisibility;
