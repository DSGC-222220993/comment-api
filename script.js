// online
const API_URL = "https://69c15cd6085e1a9fae40d5fc.mockapi.io/comments";
// local 
// const API_URL = "http://localhost:3000/comments";

const container = document.getElementById("commentsContainer");
const btnPost = document.getElementById("btnPost");
const usernameInput = document.getElementById("username");
const messageInput = document.getElementById("message");
const emptyMsg = document.getElementById("emptyMsg");

//API


async function getComments() {
  try {
    const res = await fetch(API_URL);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error al obtener comentarios", error);
  }
}

async function createComment(comment) {
  try {
    await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(comment)
    });
  } catch (error) {
    console.error("Error al crear comentario", error);
  }
}

async function deleteComment(id) {
  try {
    await fetch(`${API_URL}/${id}`, {
      method: "DELETE"
    });
  } catch (error) {
    console.error("Error al eliminar", error);
  }
}

//UI
function formatDate(date) {
  const diff = Math.floor((new Date() - new Date(date)) / 60000);

  if (diff < 1) return "Justo ahora";
  if (diff < 60) return `Hace ${diff} min`;

  const hours = Math.floor(diff / 60);
  return `Hace ${hours} h`;
}

function renderComments(comments) {
  container.innerHTML = "";

  if (comments.length === 0) {
    container.appendChild(emptyMsg);
    return;
  }

  comments
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .forEach(comment => {
      const card = document.createElement("div");
      card.classList.add("card");

      card.innerHTML = `
        <div class="card-header">
          <strong>${comment.username}</strong>
          <span>${formatDate(comment.date)}</span>
        </div>
        <p>${comment.message}</p>
        <button class="delete-btn">Eliminar</button>
      `;

      card.querySelector("button").addEventListener("click", async () => {
        if (confirm("¿Eliminar comentario?")) {
          await deleteComment(comment.id);
          loadComments();
        }
      });

      container.appendChild(card);
    });
}

//logica
async function loadComments() {
  const comments = await getComments();
  renderComments(comments||[]);
}

btnPost.addEventListener("click", async () => {
  const username = usernameInput.value.trim();
  const message = messageInput.value.trim();

  if (!username) {
    alert("El nombre es obligatorio");
    return;
  }

  if (message.length < 5) {
    alert("El mensaje debe tener al menos 5 caracteres");
    return;
  }

  const newComment = {
    username,
    message,
    date: new Date().toISOString()
  };

  await createComment(newComment);

  usernameInput.value = "";
  messageInput.value = "";

  loadComments();
});

//INIT
loadComments();