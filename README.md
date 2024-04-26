Видео которое помогло мне в реализации: [this video](https://youtu.be/lGokKxJ8D2c)

Сборка контейнера Docker:
docker build -t my-web-app .

Запуск контейнера Docker:
docker run --rm -dit -p 3000:3000 my-web-app