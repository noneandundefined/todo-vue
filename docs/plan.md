# Веб-приложение ToDo (Vue.js + Tailwind CSS) (Английская версия сайта)

## Main Design

Это веб приложение представляет собой простое веб-приложение ToDo, разработанное с использованием Vue.js для реактивности и компонентной архитектуры, Tailwind CSS для стилизации и JavaScript для логики приложения. Изначально задачи ToDo хранятся в LocalStorage браузера.

**Статус** В настоящее время находится на этапе статического макета


## Функциональность


- **Создание задач ToDo:** Добавление новых задач с названиями, статусами, владельцами, приоритетами и диапазонами дат.
- **Просмотр задач ToDo:** Отображение задач в табличном формате.
- **Фильтрация задач ToDo:** Фильтрация задач по статусу (Done, In Progress, Planning, Canceled).
- **Поиск задач ToDo:** Поиск задач по названию.
- **Сохранение данных:** Хранение задач ToDo в LocalStorage.
- **Локализация:** Поддержка нескольких языков (английский, русский).
- **Расширенные функции (В будущем):** Аутентификация пользователей, назначение задач, сроки выполнения, уведомления.

## Планируемая Структура Данных (JSON)

```json
[
 {
  "id": 1,
  "todo_title": "Купить продукты",
  "status": "In Progress", // Done | Canceled | Planning
  "owner": "Ivan Ivanov",
  "priority": "Hihg", // Low | Medium
  "startDate": "Sep 16, 2024",
  "endDate": "Sep 18, 2024"
 },
 ...
]
```

## Ресурсы

### Поиск иконков (Обязательно в svg формате -> после чего адаптировать в vue формат)

- Иконки нужно искать на сайте - [heroicons](https://heroicons.com/solid)
- Хранить иконки в папки constants/ -> svgs/ delete.vue

delete.vue (ниже показан метод на React)

```tsx
interface IconProps {
	fill: string;
	size?: number;
	style?: any;
	className?: string;
	onClick?: () => any;
}

export const Delete: React.FC<IconProps> = ({
	fill,
	size = 24,
	className,
	style,
	onClick,
}) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			className={className}
			viewBox={`0 0 24 24`}
			fill={fill}
			style={style}
			width={size}
			height={size}
			onClick={onClick}
		>
			<path d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" />
		</svg>
	);
};
export default Delete;
```