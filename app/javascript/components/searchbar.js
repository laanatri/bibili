const search = () => {
  const searchbar = document.querySelector('.searchbar');
  if (searchbar) {
    const input = document.querySelector('#keyword')
    const api_key = input.dataset.googleBooksKey
    const form = document.getElementsByTagName("form")
    form[0].addEventListener('submit', function(event) {
      event.preventDefault()
      window.location.href = `http://localhost:3000/books/search/${input.value}`
    })
    input.addEventListener('keyup', function() { fetchPreview(input.value, api_key) })
  }
};

const fetchPreview = async (value, api_key) => {
  const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${value}&key=${api_key}`)
  const data = await response.json()
  console.log(data)
}

export { search };