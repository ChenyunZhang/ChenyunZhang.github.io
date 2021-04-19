const key = "JC0T7bCpESCb2SGJBe6axdrSFW0X03H7"
const main = document.querySelector("main")
const section = ["arts", "automobiles", "books", "business", "fashion", "food", "health", "home", "insider", "magazine", "movies", "nyregion", "obituaries", "opinion", "politics", "realestate", "science", "sports", "sundayreview", "technology", "theater", "t-magazine", "travel", "upshot", "us", "world"]
const sectionSelector = document.querySelector("#sectionSelector")
const defaultSection = "home"

window.addEventListener("load", e => {
    updateNews()
    updateSections()
    sectionSelector.value = defaultSection
    sectionSelector.addEventListener("change", e => {
        updateNews(e.target.value)
    })
    // service worker here
    if ("serviceWorker" in navigator) {
        try {
            navigator.serviceWorker.register("sw.js");
            console.log("SW register Successfully")
        } catch (error) {
            console.log("SW register failed");
        }
    }
})

window.addEventListener('online', () => updateNews(sectionSelector.value)); 

async function updateNews(section = defaultSection) {
    const res = await fetch(`https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${key}`)
    const json = await res.json()
    main.innerHTML = json.results.map(creatArticle).join('\n')
}

async function updateSections() {
    sectionSelector.innerHTML = section.map(sec => `<option value=${sec}>${sec}</option>`)
}


function creatArticle(article) {
    return `
    <div class="article">
        <a href="${article.url}">
            <h2></h2>
            <img src="${article.multimedia[0].url}">
            <p>${article.abstract}</p>
        </a>
    </div>
    `
}
