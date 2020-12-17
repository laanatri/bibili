const passwordShowRegis = () => {
  const eyeFirst = document.querySelector('.eye-sign-up-first');
  if (eyeFirst) {
    const password = document.getElementById('user_password');
    
    eyeFirst.addEventListener("click", (event) => {
    
        eyeFirst.classList.toggle("fa-eye");
        eyeFirst.classList.toggle("fa-eye-slash");
        const typeAttr = password.getAttribute('type');
        if(typeAttr == 'password'){
          password.setAttribute('type', 'text');
        }else{
          password.setAttribute('type', 'password');
        }
      
    });
  }
};


export { passwordShowRegis };

const passwordShowRegisConf = () => {
  const eyeSecond = document.querySelector('.eye-sign-up-second');
  if (eyeSecond) {
    const password = document.getElementById('user_password_confirmation');
    
    eyeSecond.addEventListener("click", (event) => {
    
        eyeSecond.classList.toggle("fa-eye");
        eyeSecond.classList.toggle("fa-eye-slash");
        const typeAttr = password.getAttribute('type');
        if(typeAttr == 'password'){
          password.setAttribute('type', 'text');
        }else{
          password.setAttribute('type', 'password');
        }
      
    });
  }
};


export { passwordShowRegisConf };
