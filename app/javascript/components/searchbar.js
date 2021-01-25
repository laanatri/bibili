const search = () => {
  const searchbar = document.querySelector('.searchbar');
  if (searchbar) {
    const input = document.querySelector('#keyword')
    const api_key = input.dataset.googleBooksKey
    input.addEventListener('keyup', function() { fetchPreview(input.value, api_key) })
  }
};


const fetchPreview = async (value, api_key) => {
  const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${value}&key=${api_key}`)
  const data = await response.json()
  console.log(data)
}

export { search };