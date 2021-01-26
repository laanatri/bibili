const userNav = () => {
  console.log("lili");
  const profilIcon = document.querySelector('.fa-user-circle');
  console.log(profilIcon);
  if (profilIcon) {

    profilIcon.addEventListener("click", (event) => {

      console.log("lolo");
      const navUser = document.querySelector('.sign-out');
      console.log(navUser);
      navUser.classList.toggle('inactive');

    });
  };
};

export { userNav };
