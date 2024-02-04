const regForm = document.forms.regForm


const firstName = regForm.firstname
const lastName = regForm.lastname
const email = regForm.email
const password = regForm.password

const modal = document.getElementById('modal')

// function to validation

const containsInlyRussioanLatters = (string) => {
    return /^[а-я]+$/i.test(string)
}

const isEmailValid = (string) => {
    return /^[a-z][a-z._0-9]+@[a-z]+\.[a-z]{2,3}$/i.test(string)
}

const containsADigit = (string) => {
    return /[0-9]/.test(string)
}

const containsUppercaseLatter = (string) => {
    return /[A-Z]/.test(string)
}

const containsLowercaseLatter = (string) => {
    return /[a-z]/.test(string)
}

const containsLatinLatters = (string) => {
    return /[a-z]/i.test(string)
}

// Checking the validity of the form

const isFormValid = () => {
    const errors = document.querySelectorAll('.error')

    return [...errors].every(error => {
        return window.getComputedStyle(error).display === 'none'
    })
}

//  Showing error messages 

const toggleErrorMessage = ({condition, errorMessage, errorType}) => {
    if (condition){
        errorMessage.namedItem(errorType).style.display = 'none'
    } else {
        errorMessage.namedItem(errorType).style.display = 'block'
    }
}

regForm.addEventListener('submit', (e) => {
    e.preventDefault()

    // firstNmae validation

    const firstNameErrorMessages = firstName.parentElement.children
    const firstNameValue = firstName.value

    toggleErrorMessage({
        condition: firstNameValue.length >= 2,
        errorMessage: firstNameErrorMessages,
        errorType: 'length'
    })

    toggleErrorMessage({
        condition: containsInlyRussioanLatters(firstNameValue),
        errorMessage: firstNameErrorMessages,
        errorType: 'alphabet'
    })

    // lastName validation

    const lastNameErrorMessages = lastName.parentElement.children
    const lastNameValue = lastName.value

    toggleErrorMessage({
        condition: lastNameValue.length >= 2,
        errorMessage: lastNameErrorMessages,
        errorType: 'length'
    })

    toggleErrorMessage({
        condition: containsInlyRussioanLatters(lastNameValue),
        errorMessage: lastNameErrorMessages,
        errorType: 'alphabet'
    })

    // email validation

    const emailErrorMessages = email.parentElement.children
    const emailValue = email.value

    toggleErrorMessage({
        condition: isEmailValid(emailValue),
        errorMessage: emailErrorMessages,
        errorType: 'emailerror'
    })

    // password validation

    const passwordErrorMessages = password.parentElement.children
    const passwordlValue = password.value

    toggleErrorMessage({
        condition: passwordlValue.length >= 8,
        errorMessage: passwordErrorMessages,
        errorType: 'length'
    })

    toggleErrorMessage({
        condition: containsADigit(passwordlValue),
        errorMessage: passwordErrorMessages,
        errorType: 'digit'
    })

    toggleErrorMessage({
        condition: containsLowercaseLatter(passwordlValue),
        errorMessage: passwordErrorMessages,
        errorType: 'lowercase'
    })

    toggleErrorMessage({
        condition: containsUppercaseLatter(passwordlValue),
        errorMessage: passwordErrorMessages,
        errorType: 'uppercase'
    })

    toggleErrorMessage({
        condition: containsLatinLatters(passwordlValue),
        errorMessage: passwordErrorMessages,
        errorType: 'latters'
    })

    // show message 'success registration'

    if (isFormValid()){
        modal.style.display = 'block'
        regForm.style.display = 'none'
    }

})

// change when clicking on the input field

const inputStyle = `
    border: 1px solid #ccc;
    border-radius: 4px;

    box-shadow: 0px 2px 2px 2px rgba(204, 204, 204, 0.1);
    padding: 20px 20px;

    outline-color: #3E708E;
`

const changeStyle = (element) => {
    element.addEventListener('focus', () => {
        element.style.cssText = inputStyle
    })
    element.addEventListener('blur', () => {
        element.style.padding = 10 + 'px'
    })
}

changeStyle(firstName)
changeStyle(lastName)
changeStyle(email)
changeStyle(password)

