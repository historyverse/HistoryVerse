// ======================================
// HistoryVerse V10 Ultimate
// script.js (Part 1)
// ======================================

// Storage Key
const STORAGE_KEY = APP_CONFIG.storageKey;

// Load Articles
let articles = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

// Show Articles
function displayArticles(list = articles) {

    const container = document.getElementById("articlesContainer");

    if (!container) return;

    if (list.length === 0) {
        container.innerHTML = `
            <h2 style="text-align:center;">
                No Articles Found
            </h2>
        `;
        return;
    }

    container.innerHTML = "";

    list.forEach((article, index) => {

        container.innerHTML += `
            <div class="article-card">
                <h2>${article.title}</h2>

                <p>
                    ${(article.content || "").substring(0,150)}...
                </p>

                <button onclick="openArticle(${index})">
                    Read More
                </button>
            </div>
        `;

    });

}

// Search
const searchBox = document.getElementById("searchBox");

if (searchBox) {

    searchBox.addEventListener("input", function () {

        const text = this.value.toLowerCase();

        const filtered = articles.filter(article =>
            article.title.toLowerCase().includes(text) ||
            article.content.toLowerCase().includes(text)
        );

        displayArticles(filtered);

    });

}

// Open Article
function openArticle(index) {

localStorage.setItem("selectedArticle", articles[index].id);

    window.location.href = "article.html";

}

// Start
displayArticles();