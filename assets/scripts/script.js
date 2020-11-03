// Listen form form submit

document.getElementById('quoteForm').addEventListener('submit', submitForm);

function submitForm(e){
    e.preventDefault();

    console.log("Button Works!")
}

