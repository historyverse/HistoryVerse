// ==========================================
// HistoryVerse V10 Ultimate
// admin.js
// PART 1
// ==========================================

// ==========================
// STORAGE
// ==========================
const STORAGE_KEY = "articles";
const LOGIN_KEY = "adminLoggedIn";
const PASSWORD = "1234";

// ==========================
// DATA
// ==========================
let articles = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
let editIndex = -1;

// ==========================
// SAVE ARTICLES
// ==========================
function saveArticles() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(articles));
}

// ==========================
// GET FORM DATA
// ==========================
function getFormData() {

    return {

        title: document.getElementById("title").value.trim(),
        author: document.getElementById("author").value.trim(),
        date: document.getElementById("date").value,
        category: document.getElementById("category").value,
        image: document.getElementById("image").value.trim(),
        tags: document.getElementById("tags").value.trim(),
        content: document.getElementById("content").value.trim(),
        featured: document.getElementById("featured").checked

    };

}

// ==========================================
// END OF PART 1
// ==========================================// ==========================================
// HistoryVerse V10 Ultimate
// admin.js
// PART 1
// ==========================================

// ==========================
// STORAGE
// ==========================
const STORAGE_KEY = "articles";
const LOGIN_KEY = "adminLoggedIn";
const PASSWORD = "1234";

// ==========================
// DATA
// ==========================
let articles = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
let editIndex = -1;

// ==========================
// SAVE ARTICLES
// ==========================
function saveArticles() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(articles));
}

// ==========================
// GET FORM DATA
// ==========================
function getFormData() {

    return {

        title: document.getElementById("title").value.trim(),
        author: document.getElementById("author").value.trim(),
        date: document.getElementById("date").value,
        category: document.getElementById("category").value,
        image: document.getElementById("image").value.trim(),
        tags: document.getElementById("tags").value.trim(),
        content: document.getElementById("content").value.trim(),
        featured: document.getElementById("featured").checked

    };

}

// ==========================================
// END OF PART 1
// ==========================================// ==========================================
// PART 3
// PUBLISH ARTICLE
// ==========================================

// ==========================
// PUBLISH ARTICLE
// ==========================
function publishArticle() {

    const article = getFormData();

    if (article.title === "" || article.content === "") {
        alert("Please enter Title and Content.");
        return;
    }

    if (editIndex === -1) {

        articles.push(article);

    } else {

        articles[editIndex] = article;
        editIndex = -1;

        document.getElementById("publishBtn").innerText =
            "Publish Article";

    }

    saveArticles();

    clearForm();

    loadArticles();

    updateDashboard();

    alert("Article Saved Successfully!");

}

// ==========================================
// END OF PART 3
// ==========================================// ==========================================
// PART 4
// EDIT ARTICLE
// ==========================================

// ==========================
// EDIT ARTICLE
// ==========================
function editArticle(index) {

    const article = articles[index];

    document.getElementById("title").value = article.title;
    document.getElementById("author").value = article.author;
    document.getElementById("date").value = article.date;
    document.getElementById("category").value = article.category;
    document.getElementById("image").value = article.image;
    document.getElementById("tags").value = article.tags;
    document.getElementById("content").value = article.content;
    document.getElementById("featured").checked = article.featured;

    editIndex = index;

    document.getElementById("publishBtn").innerText = "Update Article";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}

// ==========================================
// END OF PART 4
// ==========================================// ==========================================
// PART 5
// DELETE ARTICLE
// ==========================================

// ==========================
// DELETE ARTICLE
// ==========================
function deleteArticle(index) {

    if (!confirm("Are you sure you want to delete this article?")) {
        return;
    }

    articles.splice(index, 1);

    saveArticles();

    loadArticles();

    updateDashboard();

    alert("Article Deleted Successfully!");

}

// ==========================================
// END OF PART 5
// ==========================================// ==========================================
// PART 6
// CLEAR FORM
// ==========================================

// ==========================
// CLEAR FORM
// ==========================
function clearForm() {

    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("date").value = "";
    document.getElementById("category").value = "";
    document.getElementById("image").value = "";
    document.getElementById("tags").value = "";
    document.getElementById("content").value = "";
    document.getElementById("featured").checked = false;

    editIndex = -1;

    const publishBtn = document.getElementById("publishBtn");
    if (publishBtn) {
        publishBtn.innerText = "Publish Article";
    }

}

// ==========================================
// END OF PART 6
// ==========================================// ==========================================
// PART 7
// LOAD ARTICLES
// ==========================================

// ==========================
// LOAD ARTICLES
// ==========================
function loadArticles() {

    const articleList = document.getElementById("articleList");

    if (!articleList) return;

    articleList.innerHTML = "";

    articles.forEach((article, index) => {

        articleList.innerHTML += `
            <div class="article-card">

                <h3>${article.title}</h3>

                <p><strong>Author:</strong> ${article.author || "Unknown"}</p>

                <p><strong>Date:</strong> ${article.date || "-"}</p>

                <p><strong>Category:</strong> ${article.category || "-"}</p>

                <button class="edit-btn" onclick="editArticle(${index})">
                    ✏ Edit
                </button>

                <button class="delete-btn" onclick="deleteArticle(${index})">
                    🗑 Delete
                </button>

            </div>
        `;

    });

}

// ==========================================
// END OF PART 7
// ==========================================// ==========================================
// PART 8
// DASHBOARD + AUTO LOGIN
// ==========================================

// ==========================
// UPDATE DASHBOARD
// ==========================
function updateDashboard() {

    const totalArticles = document.getElementById("totalArticles");

    if (totalArticles) {
        totalArticles.innerText = articles.length;
    }

}


// ==========================
// AUTO LOGIN CHECK
// ==========================
document.addEventListener("DOMContentLoaded", () => {

    if (localStorage.getItem(LOGIN_KEY) === "true") {

        const loginBox = document.getElementById("loginBox");
        const adminPanel = document.getElementById("adminPanel");

        if (loginBox) {
            loginBox.style.display = "none";
        }

        if (adminPanel) {
            adminPanel.style.display = "block";
        }

    }

    loadArticles();
    updateDashboard();

});


// ==========================================
// END OF admin.js
// ==========================================