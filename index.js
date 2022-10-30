let globalIsSubmitted = false

function validate(isSubmitted = false) {
    //getting elements from html
    let firstName = document.getElementById('first-name').value
    let lastName = document.getElementById('last-name').value
    let email = document.getElementById('email').value
    let phone = document.getElementById('phoneNu').value
    let country = document.getElementById('country').value
    let male = document.getElementById('male').checked
    let female = document.getElementById('female').checked
    let others = document.getElementById('others').checked
    let error = false

    if (isSubmitted) {
        ``
        globalIsSubmitted = true
    }

    if (globalIsSubmitted) {

        //for first Name
        var alphaExp = /^[a-zA-Z]+$/;
        if (firstName.length >= 3 && firstName.match(alphaExp)) {
            document.getElementById('first-name-valid').style.display = 'block'
            document.getElementById('first-name-invalid').style.display = 'none'
        } else {
            document.getElementById('first-name-invalid').style.display = 'block'
            document.getElementById('first-name-valid').style.display = 'none'
            error = true
        }

        //for last Name
        if (lastName.length >= 3 && lastName.match(alphaExp)) {
            document.getElementById('last-name-valid').style.display = 'block'
            document.getElementById('last-name-invalid').style.display = 'none'
        } else {
            document.getElementById('last-name-invalid').style.display = 'block'
            document.getElementById('last-name-valid').style.display = 'none'
            error = true
        }

        //for email
        if (
            email.includes("@") &&
            email.includes(".") &&
            email.indexOf("@") != 0 &&
            email.length - email.lastIndexOf(".") >= 3
        ) {
            document.getElementById("email-valid").style.display = "block";
            document.getElementById("email-invalid").style.display = "none";
        } else {
            document.getElementById("email-invalid").style.display = "block";
            document.getElementById("email-valid").style.display = "none";

            error = true
        }

        //for phone nu
        let PhoneNumber = parseInt(phone)
        if (phone.length === 10 && !isNaN(PhoneNumber)) {
            document.getElementById('phone-valid').style.display = 'block'
            document.getElementById('phone-invalid').style.display = 'none'
        } else {
            document.getElementById('phone-invalid').style.display = 'block'
            document.getElementById('phone-valid').style.display = 'none'
            error = true
        }

        //for gender
        if (male || female || others) {
            document.getElementById('gender-valid').style.display = 'block'
            document.getElementById('gender-invalid').style.display = 'none'
        } else {
            document.getElementById('gender-invalid').style.display = 'block'
            document.getElementById('gender-valid').style.display = 'none'
            error = true
        }

        //for country
        if (country != 'none') {
            document.getElementById('country-valid').style.display = 'block'
            document.getElementById('country-invalid').style.display = 'none'
        } else {
            document.getElementById('country-invalid').style.display = 'block'
            document.getElementById('country-valid').style.display = 'none'
            error = true
        }

        // for submit and reset
        if (!error && isSubmitted) {
            alert(`Your Details have been saved Successfully.`)

            document.getElementById('registration-form').reset()

            let validFeedbacks = document.getElementsByClassName('valid-feedback')
            for (let i = 0; i < validFeedbacks.length; i++) {
                validFeedbacks[i].style.display = 'none'
            }
            let invalidFeedbacks = document.getElementsByClassName('invalid-feedback')
            for (let i = 0; i < invalidFeedbacks.length; i++) {
                invalidFeedbacks[i].style.display = 'none'
            }
        }
    }

}