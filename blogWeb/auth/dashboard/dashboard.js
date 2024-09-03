import{auth,onAuthStateChanged,signOut}from '../firebase.js'

let logoutBtn =document.getElementById('logout')



const logout =()=>{
    console.log("clicked");
    
    
signOut(auth).then(() => {
  
     window.location.href ='/auth/login/login.html'
}).catch((error) => {
    alert("bhai data daal da")
    
 
}
 );
}

    logoutBtn.addEventListener('click',logout);


// onAuthStateChanged(auth, (user) => {
//     if (user) {
    
//    window.location.href ='./auth/login/login.html'
    // } 
//   });
