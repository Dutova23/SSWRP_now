module.exports = {
  presets: [
    '@babel/preset-env', // Предустановленные настройки для преобразования JavaScript в старые версии
    ['@babel/preset-react', { runtime: 'automatic' }], // Предустановленные настройки для преобразования JSX в JavaScript с использованием автоматического импорта
  ],
};
