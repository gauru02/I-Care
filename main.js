// setting up firebase with our website
const firebaseApp = firebase.initializeApp({ 
    apiKey: "AIzaSyAos_Y5Djv6sS9zX3kaK8oeaMa87A-ecC4",
    authDomain: "i-care-dc7c9.firebaseapp.com",
    projectId: "i-care-dc7c9",
    storageBucket: "i-care-dc7c9.appspot.com",
    messagingSenderId: "581577289456",
    appId: "1:581577289456:web:ceae29af39dc2acc1ddc35"
   });
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

// Sign up function
const signUp = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    console.log(email, password)
    // firebase code
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in 
            //document.write("You are Signed Up")
            window.location = 'Homepage.html';
            console.log(result)
            // ...
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message)
            document.write("Invalid Email or Password");
            // ..
        });
}

// Sign In function
const signIn = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    // firebase code
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((result) => {
            // Signed in 
            //document.write("You are Signed In")
            window.location = 'Homepage.html';
            console.log(result)
        })
        .catch((error) => {
            console.log(error.code);
            console.log(error.message)
            document.write("Invalid Email or Password");
        });
}