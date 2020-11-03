// Listen form form submit

// Grabs an the quote form element and turns it into an even listener
document.getElementById('quoteForm').addEventListener('submit', submitForm);

// Function that submits information on form to db
function submitForm(e){
    // Prevents page from refreshing and erasing information when submit button is clicked
    e.preventDefault();
    // Backend alert that lets developer know the buttion and even listener is functioning
    console.log("Button Works!")
    
    // Get Values
    var name = getInputVal('name')
}

// Function to get form values
function getInputVal(id){
    return document.getElementById(id).value;
}


