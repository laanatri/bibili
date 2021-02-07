const displaySearchResults = () => {
  if (window.location.pathname.includes("books/search/")) {
    const query = window.location.pathname.substring(14,)
    const titlesFilter = document.querySelector(".titles-filter")
    const authorsFilter = document.querySelector(".authors-filter")
    titlesFilter.addEventListener("click", function() {
      titlesFilter.disabled = true
      authorsFilter.disabled = false
      fetchTitles(query)
    })
    authorsFilter.addEventListener("click", function() {
      authorsFilter.disabled = true
      titlesFilter.disabled = false
      fetchAuthors(query)
    })
  }
};

const fetchTitles = async (query) => {
  const fetchedContent = document.querySelector(".fetched-content")
  fetchedContent.innerHTML = ""
  const response = await fetch(`https://www.decitre.fr/rechercher/result?q=${query}`)
  const text = await response.text();
  const page = document.createElement("html")
  page.innerHTML = text
  const titles = page.querySelectorAll(".product-title")
  titles.forEach(title => {
    const item = document.createElement("p")
    item.innerText = title.innerHTML
    fetchedContent.insertAdjacentElement("beforeend", item)
  })
};

const fetchAuthors = async (query) => {
  const fetchedContent = document.querySelector(".fetched-content")
  fetchedContent.innerHTML = ""
  const response = await fetch(`https://www.decitre.fr/rechercher/result?q=${query}&search_field=author_name`)
  const text = await response.text();
  const page = document.createElement("html")
  page.innerHTML = text
  const authors = page.querySelectorAll(".authors")
  authors.forEach(author => {
    const item = document.createElement("p")
    item.innerText = author.querySelector("a").innerHTML
    fetchedContent.insertAdjacentElement("beforeend", item)
  })
}

export { displaySearchResults };