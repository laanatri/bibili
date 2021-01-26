const displaySearchResults = () => {
  if (window.location.pathname.includes("books/search/")) {
    const query = window.location.pathname.substring(14,)
    const api_key = document.querySelector('#keyword').dataset.googleBooksKey
    fetchTitle(query, api_key);
    fetchAuthor(query, api_key);
  }
};

const fetchTitle = async (query, key) => {
  const responseTitle = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}&maxResults=20&key=${key}`)
  const dataTitle = await responseTitle.json()
  dataTitle.items.forEach(item => {
    console.log(item.volumeInfo.title)
  });
};

const fetchAuthor = async (query, key) => {
  const responseAuthor = await fetch(`https://www.googleapis.com/books/v1/volumes?q=inauthor:${query}&maxResults=40&key=${key}`)
  const dataAuthor = await responseAuthor.json()
  const authors = []
  dataAuthor.items.forEach(item => {
    authors.push(item.volumeInfo.authors)
  })
  const uniqueAuthors = [...new Set(authors.flat())];
  const stringAuthors = uniqueAuthors.filter(auth => typeof auth == "string");
  const authorsList = stringAuthors.filter(auth => auth.includes(`${query.charAt(0).toUpperCase() + query.slice(1)}`));
}

export { displaySearchResults };