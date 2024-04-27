import Button from "../Button.jsx"; // Импорт компонента Button из файла Button.jsx
import renderer from "react-test-renderer"; // Импорт библиотеки для создания снимков компонентов

// Тестирование компонента Button на наличие функции onPress
test("Button has onPress fn", () => {
  let x = 0; // Переменная x для отслеживания количества нажатий
  const component = renderer.create(<Button onClick = {() => x++} />); // Создание экземпляра компонента Button с функцией onClick, увеличивающей x
  const tree = component.toJSON(); // Получение снимка компонента

  // Проверка, что пропс onClick определен
  expect(tree.props.onClick).toBeDefined();
  expect(x).toBe(0); // Проверка начального значения переменной x
  tree.props.onClick(); // Вызов функции onClick
  expect(x).toBe(1); // Проверка, что переменная x увеличилась после вызова функции onClick
});
