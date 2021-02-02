const search = () => {
  const searchbar = document.querySelector('.searchbar');
  if (searchbar) {
    const input = document.querySelector('#keyword')
    const form = document.getElementsByTagName("form")
    form[0].addEventListener('submit', function(event) { 
      event.preventDefault();
      displaySearchResults(input.value); 
    })
    input.addEventListener('keyup', function() { fetchPreview(input.value) })
  }
};


const displaySearchResults = (value) => {
  window.location.href = `http://localhost:3000/books/search/${value}`
};

const fetchPreview = async (value) => {
  const response = await fetch(`https://www.decitre.fr/rechercher/result?q=${value}`)
  const text = await response.text();
  console.log(text)
};

export { search };