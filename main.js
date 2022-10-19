// //declare your variables for the text field and access DOM
let form = document.querySelector('#form')
const submit = document.querySelector('button[type="submit"]')
const inputsDiv = document.querySelectorAll('.form-control')
const inputs = document.querySelectorAll('.form-control input')
let firstName = inputsDiv[0]
let lastName = inputsDiv[1]
let email = inputsDiv[2]
let phoneNumber = inputsDiv[3]
let password = inputsDiv[4]
let confirmation = inputsDiv[5]
let successCount;
let generalError = ' cannot be left blank'
let emailInput = email.querySelector('input')
let firstNameInput = firstName.querySelector('input')
let lastNameInput = lastName.querySelector('input')
let passwordInput = password.querySelector('input')
let confiirmationInput = confirmation.querySelector('input')
let phoneNumberInput = phoneNumber.querySelector('input')

function checkAll(e){
    successCount = 0;
    
    
    //check email is  valid
    let emailValue = emailInput.value
    let passwordValue = passwordInput.value
    let confirmationValue = confiirmationInput.value
    let phoneValue = phoneNumberInput.value

    checkName(false, firstNameInput)
    checkName(false, lastNameInput)
    checkEmail(false, emailValue)
    checkNumber(false, phoneValue)
    checkPassword(false, passwordValue)
    checkConfirmationPassword(false, confirmationValue, confiirmationInput)
}
//add event listener for Submit button
successCount = submit.addEventListener('click', checkAll)


form.addEventListener('submit', (e) => {
    if (successCount != 6) e.preventDefault()
})



function successError(nodeElement, value, ErrorMessage) {
    let errorText = nodeElement.querySelector('small')
    if (value) { nodeElement.classList.add('success'); nodeElement.classList.remove('error')
    errorText.textContent = ''
    successCount += 1
}
    else {
        nodeElement.classList.add('error'); nodeElement.classList.remove('success')
        errorText.textContent = ErrorMessage
    }
}

function checkEmail(eventTaken, emailValue){
    if (!emailValue) emailValue = this.value
    let emailRegex = /\w*.?\w*@\w*\.\w*/
    let emailCheck = emailRegex.test(emailValue)
    let emailError = 'Wrong email format'
    if (!emailValue) emailError= 'Email' + generalError
    
    successError(email, emailCheck,emailError)
    }
    
    function checkNumber(eventTaken, phoneValue){
        if(!phoneValue) phoneValue = this.value
        let phoneRegex = /\d{11}/g
        
        let phoneCheck = phoneRegex.test(phoneValue)
        let phoneError = 'Phone Format: 11 digits number'
        if (!phoneValue) phoneError = 'Phone Number' + generalError

        successError(phoneNumber, phoneCheck, phoneError)
    }
    

    function checkName(eventTaken, nodeElement){
        debugger
        if(!nodeElement) {
            nodeElement = this.parentNode
            userNameValue = this.value
        }
        else {
            userNameValue = nodeElement.value
            nodeElement = nodeElement.parentNode
        }  
        userError = 'Username' + generalError
        successError(nodeElement, userNameValue, userError)

    }
    
    
    function checkPassword(eventTaken, passwordValue){
        // check input length for password
        if (passwordValue === undefined) passwordValue = this.value
      
    let passwordCheck = passwordValue.length >= 5
    let passwordError = 'Password must be at least 5 characters'
    if (!passwordValue) passwordError = 'Password' + generalError
    successError(password, passwordCheck, passwordError)
    }
    
    
    
    function checkConfirmationPassword(eventTaken, confirmationValue, passwordValue = this){
        passwordValue = passwordValue.parentNode.previousElementSibling.querySelector('input').value
        // check the two passwords match
    let checkConfirmation = (confirmationValue == passwordValue) && confirmationValue
    if (confirmationValue === undefined) confirmationValue = this.value; 
    let confirmationError = 'Passwords are not the same'
    if (!confirmationValue) confirmationError= 'Field' + generalError
    successError(confirmation, checkConfirmation, confirmationError)
    }

    function removeError(){
        let parentElement = this.parentNode
        if(parentElement.classList.contains('error')){
            parentElement.classList.remove('error')
        }
    }

    inputs.forEach(input => {
        input.addEventListener('input', removeError)
    })

    phoneNumberInput.addEventListener('change', checkNumber)
    confiirmationInput.addEventListener('change', checkConfirmationPassword)
    emailInput.addEventListener('change', checkEmail)
    firstNameInput.addEventListener('change', checkName)
    lastNameInput.addEventListener('change', checkName)
    passwordInput.addEventListener('change', checkPassword)