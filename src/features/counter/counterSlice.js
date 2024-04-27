import { createSlice } from '@reduxjs/toolkit'; // Импорт функции createSlice из библиотеки Redux Toolkit

// Создание среза (slice) для счетчика
export const counterSlice = createSlice({
  name: 'counter', // Имя среза
  initialState: { // Начальное состояние счетчика
    value: 0, // Значение счетчика
  },
  reducers: { // Редукторы для изменения состояния счетчика
    increment: (state) => { // Увеличение счетчика на 1
      state.value += 1;
    },
    decrement: (state) => { // Уменьшение счетчика на 1
      state.value -= 1;
    },
    incrementByAmount: (state, action) => { // Увеличение счетчика на определенное значение
      console.log(action.payload); // Вывод в консоль значения payload из action
      state.value += action.payload; // Увеличение значения счетчика на значение payload
    },
    setValue: (state, action) => { // Установка определенного значения счетчика
      state.value = action.payload; // Установка значения счетчика равным значению payload из action
    },
  },
});

// Экспорт созданных действий (actions)
export const { increment, decrement, incrementByAmount, setValue } = counterSlice.actions;

// Селектор для получения текущего значения счетчика
export const selectCount = (state) => state.counter.value;

export default counterSlice.reducer;
