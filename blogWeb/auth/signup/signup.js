import{auth,createUserWithEmailAndPassword,onAuthStateChanged} from '../firebase.js' 

let formfeild =document.querySelectorAll("form input");

const [ userEmail ,userPassword] = formfeild;

let signUpBtn   = document.getElementById('signUpBtn');

const signup = ()=>{
    event.preventDefault();
    signUpBtn.innerText = 'lodaing.......'
    createUserWithEmailAndPassword(auth, userEmail.value, userPassword.value)
      .then((userCredential) => {
        signUpBtn.innerText = 'signup'
        const user = userCredential.user;
          console.log(user);
        
      })

      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        signUpBtn.innerText = 'signup'
     
        
      });
    
}



signUpBtn.addEventListener('click',signup);







onAuthStateChanged(auth, (user) => {
  if (user) {
  
 window.location.href ='/auth/dashboard/dashboard.html'
  } 
});

