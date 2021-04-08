const key = "4356361c0167497ca9323489c48b461e"
const main = document.querySelector("main")
window.addEventListener("load", e => {
    updateNews()
})

async function updateNews() {
    const res = await fetch(`https://newsapi.org/v2/everything?q=tesla&from=2021-03-08&sortBy=publishedAt&apiKey=${key}`)
    const json = await res.json()
    console.log(json)
    main.innerHTML = json.articles.map(creatArticle).join('\n')
}

function creatArticle(article){
    return `
    <div class="article">
        <a href="${article.url}">
            <h2></h2>
            <img src="${article.urlToImage}">
            <p>${article.description}</p>
        </a>
    </div>
    `
}
