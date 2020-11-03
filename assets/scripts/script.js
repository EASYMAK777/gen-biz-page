// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAPRBExURJI0AQjEJjM1r3-Z-5Fc6f8oPI",
    authDomain: "gen-biz-page.firebaseapp.com",
    databaseURL: "https://gen-biz-page.firebaseio.com",
    projectId: "gen-biz-page",
    storageBucket: "gen-biz-page.appspot.com",
    messagingSenderId: "956031152234",
    appId: "1:956031152234:web:a1ae164a683c7d308a1a13"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


// Listen form form submit

// Grabs an the quote form element and turns it into an even listener
document.getElementById('quoteForm').addEventListener('submit', submitForm);

// Function that submits information on form to db
function submitForm(event){
    // Prevents page from refreshing and erasing information when submit button is clicked
    event.preventDefault();
    // Backend alert that lets developer know the buttion and even listener is functioning
    console.log(123)
    
    
    // Get user input values
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let message = document.getElementById('message').value;
    console.log(name, phone, message, email );

    saveContactInfo(name,phone,message,email);
    
};




