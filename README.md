################################## Работа сборки ##################################
1. Для работы сборки должен быть глобально установлен Gulp CLI
npm i -g gulp-cli

2. Для работы в режиме разработки набрать в консоли:
npm start или npm run start

3. Для финальной сборки пректа набрать в консоли:
npm run build


#### Проблемы сборки ####

1. Периодически глючит browser-sync: начинает брать не текущую, а какую-то старую таблицу стилей.
2. Не работает автоматическое распознование isDevelopment
Для финальной сборки пректа раскомментировать const isDevelopment = false и после этого набрать в консоли npm run build# template-Win10
# template-Win10