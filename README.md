# Descripción de la pagina web:

Aplicación web desarrollada en Front End que permite publicar, visualizar y eliminar comentarios usando una Web API.

---

# Funcionalidades

- Ver comentarios (GET)
- Crear comentarios (POST)
- Eliminar comentarios (DELETE)
- Ordenar comentarios del más reciente al más antiguo
- Interfaz tipo cards con scroll
  
Validaciones en formulario:
- Nombre obligatorio
- Mensaje mínimo de 5 caracteres
- Confirmación antes de eliminar comentarios

---

# Tecnologías utilizdas

- HTML
- CSS
- JavaScript (Vanilla)
- MockAPI (API online)
- json-server (API local para pruebas)
- Nada de frameworks ni librerias externas.

---

# Api en producción

Se utilizó MockAPI para simular una API REST online:

https://mi-api.mockapi.io/comments

Esto permite que la aplicación funcione al ser desplegada en GitHub Pages.

---
# Uso en local

También se puede ejecutar la API de forma local usando json-server.

1. Instalar dependencias
npm install

2. Ejecutar la API
npm run api

3. Endpoint local
http://localhost:3000/comments

---

# Ejecución

- Abrir el archivo index.html en el navegador o desde esta ruta (con api online: https://dsgc-222220993.github.io/comment-api/)
- Asegurarse de que la API esté activa (MockAPI o local)

---

# Licencia

Proyecto realizado con fines educativos.

La aplicación no maneja datos sensibles ni credenciales.
La API utilizada es pública y solo almacena información de prueba.

---

# Aplicación web en ejecución:
<img width="760" height="435" alt="image" src="https://github.com/user-attachments/assets/f1408c5c-8025-45f2-914a-3ca1bb6bbd87" />
<img width="1009" height="568" alt="image" src="https://github.com/user-attachments/assets/f73b27c7-f124-4503-9097-fd203632c364" />
<img width="481" height="217" alt="image" src="https://github.com/user-attachments/assets/e6b71df6-f372-45e1-ae41-d2b500bd7bad" />

