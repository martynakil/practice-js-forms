const form = document.querySelector('form');
const label = document.querySelector('label');
// const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;




form.addEventListener('submit', function (e) {

    e.preventDefault();

    const email = e.target.elements.login.value;
    const pass1 = e.target.elements.pass1.value;
    const pass2 = e.target.elements.pass2.value;
    const confirm = e.target.elements['accept']

    const errors = [];



    if (email.includes('@')) {
        console.log('email jest poprawny')
    } else {
        console.log('email jest nie poprawny')

        errors.push(email)
        email.style.border = "red";


    }



    if (pass1 === pass2 && pass1.length > 6 || pass2.length > 6) {

        console.log('hasła się zgadzają i mają więcej niz 6 liczb')
    } else {

        console.log('hasła się nie zgadzają, albo mają za mało liczb')
    }


    if (confirm.checked) {
        console.log('ok, zatwierdzone')
    } else {
        console.log('zatwierdź regulamin!')
    }

})