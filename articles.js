// ======================================
// HistoryVerse V10 Ultimate
// article.js
// ======================================

// Storage Key
const STORAGE_KEY = APP_CONFIG.storageKey;

// Load Articles
const articles = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

// Get Selected Article
const selectedIndex = localStorage.getItem("selectedArticle");

// Load Article
function loadArticle() {

    const title = document.getElementById("articleTitle");
    const content = document.getElementById("articleContent");

    if (
        selectedIndex === null ||
        !articles[selectedIndex]
    ) {
        title.textContent = "Article Not Found";
        content.textContent = "The requested article does not exist.";
        return;
    }

    const article = articles[selectedIndex];

    title.textContent = article.title;
    content.textContent = article.content;
}

// Start
loadArticle();