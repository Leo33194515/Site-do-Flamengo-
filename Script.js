const apiKey = "3ca9e5d8a09040d0a4ea54f4efc6ed8d"; // sua chave

async function loadNews() {
    const container = document.getElementById("news");

    try {
        let res = await fetch(`https://gnews.io/api/v4/search?q=flamengo&lang=pt&token=${apiKey}`);
        let data = await res.json();

        container.innerHTML = "";

        data.articles.slice(0, 6).forEach(noticia => {
            container.innerHTML += `
                <div class="card">
                    <img src="${noticia.image || 'https://via.placeholder.com/400'}">
                    <div class="card-content">
                        <h3>${noticia.title}</h3>
                        <p>${noticia.description || ''}</p>
                        <a href="${noticia.url}" target="_blank">Ler mais</a>
                    </div>
                </div>
            `;
        });

    } catch (erro) {
        container.innerHTML = "<p>Erro ao carregar notícias.</p>";
        console.error(erro);
    }
}

loadNews();

/* CHAT */
function toggleChat() {
    const chat = document.getElementById("chat");
    chat.style.display = chat.style.display === "flex" ? "none" : "flex";
}

function sendMessage() {
    let input = document.getElementById("inputMsg");
    let body = document.getElementById("chatBody");

    if (input.value.trim() !== "") {
        body.innerHTML += `<p>🧑 ${input.value}</p>`;
        body.innerHTML += `<p>🤖 Mengão sempre! 🔴⚫</p>`;
        body.scrollTop = body.scrollHeight;
        input.value = "";
    }
}
