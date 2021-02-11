const displaySearchResults = () => {
  if (window.location.pathname.includes("/search/")) {
    const query = window.location.pathname.substring(8,)
    const titlesFilter = document.querySelector(".titles-filter")
    const authorsFilter = document.querySelector(".authors-filter")
    titlesFilter.addEventListener("click", function() {
      titlesFilter.disabled = true
      authorsFilter.disabled = false
      fetchAndDisplayTitles(query)
    })
    authorsFilter.addEventListener("click", function() {
      authorsFilter.disabled = true
      titlesFilter.disabled = false
      fetchAndDisplayAuthors(query)
    })
  }
};

const fetchAndDisplayTitles = async (query) => {
  const fetchedContent = document.querySelector(".fetched-content")
  fetchedContent.innerHTML = ""
  const response = await fetch(`https://www.decitre.fr/rechercher/result?q=${query}`)
  const text = await response.text();
  const page = document.createElement("html")
  page.innerHTML = text
  const titles = page.querySelectorAll(".product-title")
  titles.forEach(title => {
    const id = title.href
    const item = document.createElement("a")
    item.href = `http://localhost:3000/books/${btoa(id)}`
    item.innerText = title.innerHTML
    fetchedContent.insertAdjacentElement("beforeend", item)
  })
};

const fetchAndDisplayAuthors = async (query) => {
  const fetchedContent = document.querySelector(".fetched-content")
  fetchedContent.innerHTML = ""
  const response = await fetch(`https://www.decitre.fr/rechercher/result?q=${query}&search_field=author_name`)
  const text = await response.text();
  const page = document.createElement("html")
  page.innerHTML = text
  const authors = page.querySelectorAll(".authors")

  const authorsContainingQuery = []
  authors.forEach(author => {
    if (author.querySelector("a").href.toLowerCase().includes(query.replace("%20", "+").toLowerCase())) {
      authorsContainingQuery.push(author.querySelector("a"))
    }
  })
  
  const hrefArray = []
  const uniqueAuthors = []

  authorsContainingQuery.forEach(a => {
    if (hrefArray.includes(a.href) == false) {
      hrefArray.push(a.href)
      uniqueAuthors.push(a)
    }
  })

  uniqueAuthors.forEach(a => {
    const item = document.createElement("a")
    item.href = `http://localhost:3000/search/${a.innerHTML}`
    item.innerText = a.innerHTML
    fetchedContent.insertAdjacentElement("beforeend", item)
  })
}

export { displaySearchResults };
