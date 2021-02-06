const displaySearchResults = () => {
  if (window.location.pathname.includes("books/search/")) {
    const query = window.location.pathname.substring(14,)
    fetchTitle(query);
    fetchAuthor(query);
  }
};

const fetchTitle = async (query) => {
  const response = await fetch(`https://www.decitre.fr/rechercher/result?q=${query}`)
  const text = await response.text();
  const page = document.createElement("html")
  page.innerHTML = text
  const titles = page.querySelectorAll(".product-title")
  titles.forEach(title => {
    console.log(title.innerHTML)
  })
};

const fetchAuthor = async (query) => {
  const response = await fetch(`https://www.decitre.fr/rechercher/result?q=${query}&search_field=author_name`)
  const text = await response.text();
  const page = document.createElement("html")
  page.innerHTML = text
  const authors = page.querySelectorAll(".authors")
  authors.forEach(author => {
    console.log(author.querySelector("a").innerHTML)
  })
}

export { displaySearchResults };