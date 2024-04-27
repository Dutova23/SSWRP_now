module.exports = {
  root: true, // Указывает ESLint, что это корневой конфигурационный файл
  env: { browser: true, es2020: true }, // Определяет глобальные переменные и окружение (браузер и ES2020)
  extends: [ // Подключение настроек расширений
    'eslint:recommended', // Рекомендуемые настройки ESLint
    'plugin:react/recommended', // Рекомендуемые настройки для React
    'plugin:react/jsx-runtime', // Настройки для поддержки React JSX Runtime
    'plugin:react-hooks/recommended', // Рекомендуемые настройки для React Hooks
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'], // Игнорируемые файлы и директории
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' }, // Опции парсера (последняя версия ECMAScript, модульный синтаксис)
  settings: { react: { version: '18.2' } }, // Настройки для плагина React
  plugins: ['react-refresh'], // Подключение плагина React Refresh
  rules: { // Правила линтинга кода
    'react/jsx-no-target-blank': 'off', // Разрешить использование target="_blank" без noopener и noreferrer
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }], // Проверка, что экспортируются только компоненты React
    "indent": ["error", 2] // Настройка отступов: два пробела
  },
}
