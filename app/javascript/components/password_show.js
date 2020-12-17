const passwordShow = () => {
  const eye = document.querySelector('.eye-sign-in');
  if (eye) {
    const password = document.getElementById('user_password');
    
    eye.addEventListener("click", (event) => {
    
        eye.classList.toggle("fa-eye");
        eye.classList.toggle("fa-eye-slash");
        const typeAttr = password.getAttribute('type');
        if(typeAttr == 'password'){
          password.setAttribute('type', 'text');
        }else{
          password.setAttribute('type', 'password');
        }
      
    });
  }
};


export { passwordShow };
