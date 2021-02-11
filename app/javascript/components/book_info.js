const displayBookInfo = () => {
  const bookInfoContainer = document.querySelector(".book-info-container")
  if (bookInfoContainer) {
    const id = window.location.pathname.substr(7, )
    const decryptedId = atob(id)

    fetchBookInfo(decryptedId)
  }
};


const fetchBookInfo = async (url) => {
  const response = await fetch(url)
  const text = await response.text();
  const page = document.createElement("html")
  page.innerHTML = text
  const title = page.querySelector(".product-title")
  console.log(title.innerText)
};

export { displayBookInfo };
