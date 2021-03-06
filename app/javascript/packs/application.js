// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")
import { passwordShow } from "../components/password_show.js"
import { passwordShowRegis } from "../components/password_regis_show.js"
import { passwordShowRegisConf } from "../components/password_regis_show.js"
import { search } from "../components/searchbar.js"
import { displaySearchResults } from "../components/search_results.js"
import { displayBookInfo } from "../components/book_info.js"


document.addEventListener('turbolinks:load', () => {
passwordShow();
passwordShowRegis();
passwordShowRegisConf();
search();
displaySearchResults();
displayBookInfo();

});
// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)
