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




