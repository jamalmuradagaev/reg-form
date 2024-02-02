const regForm = document.forms.regForm


const firstName = regForm.firstname
const lastName = regForm.lastname
const email = regForm.email
const password = regForm.password

const modal = document.getElementById('modal')

regForm.addEventListener('submit', (e) => {
    e.preventDefault()

    // firstNmae validation

    const firstNameErrorMessages = firstName.parentElement.children
    const firstNameValue = firstName.value

    if (firstNameValue.length >= 3){
        firstNameErrorMessages.namedItem('length').style.display = 'none'
    } else {
        firstNameErrorMessages.namedItem('length').style.display = 'block'
    }
    if (/^[а-я]+$/i.test(firstNameValue)){
        firstNameErrorMessages.namedItem('alphabet').style.display = 'none'
    } else {
        firstNameErrorMessages.namedItem('alphabet').style.display = 'block'
    }

    // lastName validation

    const lasttNameErrorMessages = lastName.parentElement.children
    const lastNameValue = lastName.value

    if (lastNameValue.length >= 3){
        lasttNameErrorMessages.namedItem('length').style.display = 'none'
    } else {
        lasttNameErrorMessages.namedItem('length').style.display = 'block'
    }
    if (/^[а-я]+$/i.test(lastNameValue)){
        lasttNameErrorMessages.namedItem('alphabet').style.display = 'none'
    } else {
        lasttNameErrorMessages.namedItem('alphabet').style.display = 'block'
    }


    // email validation

    const emailErrorMessages = email.parentElement.children
    const emailValue = email.value

    if (/^[a-z][a-z._0-9]+@[a-z]+\.[a-z]{2,3}$/i.test(emailValue)){
        emailErrorMessages.namedItem('emailerror').style.display = 'none'
    } else {
        emailErrorMessages.namedItem('emailerror').style.display = 'block'
    }


    // password validation

    const passwordErrorMessages = password.parentElement.children
    const passwordlValue = password.value

    if (passwordlValue.length >= 8){
        passwordErrorMessages.namedItem('length').style.display = 'none'
    } else {
        passwordErrorMessages.namedItem('length').style.display = 'block'
    }

    if (/[0-9]/.test(passwordlValue)){
        passwordErrorMessages.namedItem('digit').style.display = 'none'
    } else {
        passwordErrorMessages.namedItem('digit').style.display = 'block'
    }

    if (/[a-z]/.test(passwordlValue)){
        passwordErrorMessages.namedItem('lowercase').style.display = 'none'
    } else {
        passwordErrorMessages.namedItem('lowercase').style.display = 'block'
    }

    if (/[A-Z]/.test(passwordlValue)){
        passwordErrorMessages.namedItem('uppercase').style.display = 'none'
    } else {
        passwordErrorMessages.namedItem('uppercase').style.display = 'block'
    }

    if (/[a-z]/i.test(passwordlValue)){
        passwordErrorMessages.namedItem('latters').style.display = 'none'
    } else {
        passwordErrorMessages.namedItem('latters').style.display = 'block'
    }

    const errors = document.querySelectorAll('.error')

    const isFormValid = [...errors].every(error => {
        return window.getComputedStyle(error).display === 'none'
    })

    if (isFormValid){
        modal.style.display = 'block'
        regForm.style.display = 'none'
    }

})

