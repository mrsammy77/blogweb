
import{auth,signInWithEmailAndPassword,onAuthStateChanged,signOut}from '../firebase.js'


let formfeild =document.querySelectorAll("form input");


const [ loginEmail ,loginPassword] = formfeild;

let loginBtn = document.getElementById('loginBtn')


const login =()=>{
    event.preventDefault();
    signInWithEmailAndPassword(auth, loginEmail.value, loginPassword.value)
    .then((userCredential) => {
     
      const user = userCredential.user;
       window.location.href ='/auth/dashboard/dashboard.html'
     console.log(user);
     
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    console.log(errorMessage);
    

    });
    
}



loginBtn.addEventListener('click',login)



onAuthStateChanged(auth, (user) => {
  if (user) {
  alert("login hogaya h");
//  window.location.href ='/auth/dashboard/dashboard.html'

  } else {
   
  }
});