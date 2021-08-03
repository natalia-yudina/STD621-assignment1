
// ================ Form "Contact us" validation begin ============== 

// if the field is empty, fieldIsEmpty() returns true
function fieldIsEmpty(fieldName) {
    return document.questions[fieldName].value == "";
}

//sets focus in the field fieldName
function setFocus(fieldName) {
    return document.questions[fieldName].focus();
}
// shows alert about filling the field fieldTitle to the user
function showAlert(fieldTitle) {
    alert("Please enter " + fieldTitle);
}

// Submit button event
function validate() {

    // check all input fields
    var setOfInputs = document.querySelectorAll("input");
    for (const el of setOfInputs) {
        if (fieldIsEmpty(el.name)) {
            showAlert(el.labels[0].innerText);
            setFocus(el.name);
            return false;
        }
    }
    // check Email
    if (!validateEmail()){
        return false;
    };

    // check field "Message"
    if (document.questions.message.value == "") {
        showAlert("Message");
        document.questions.message.focus();
        return false;
    }

    alert("Your message has been sent");
    return (true);
}


function validateEmail() {
    var emailID = document.questions.textEmail.value;
    atpos = emailID.indexOf("@");
    dotpos = emailID.lastIndexOf(".");
    if (atpos < 1 || (dotpos - atpos < 2)) {
        alert("Please enter correct email")
        document.questions.textEmail.focus();
        return false;
    }
    return (true);
}


function setEmptyValue() {
    document.questions[fieldName].value == "";
}

// Reset button event
function reset() {
    // assign an empty value to all fields
    var setOfInputs = document.querySelectorAll("input");
    for (const el of setOfInputs) {
        if (!fieldIsEmpty(el.name)) {
            setEmptyValue(el.name);
        }
    }
    document.questions.message.value == ""; 
    return (true);       
}

// ================ Form Form "Contact us" validation end ==============


function validatePayment(form) {
    fail = validateName(form.textName.value)
    textNamefail = validateName(form.textName.value)

    fail += validateAddress(form.textAddress.value)
    textAddressfail = validateAddress(form.textAddress.value)

    fail += validateEmailAddress(form.textEmail.value)
    emailfail = validateEmailAddress(form.textEmail.value)

    fail += validateCardNumber(form.textCreditCard.value)
    cardNumberfail = validateCardNumber(form.textCreditCard.value)

    fail += validateCardType()
    cardTypefail = validateCardType()

    fail += validateTerms(form.inCheck)
    termsfail = validateTerms(form.inCheck)

    if (fail == "") {

        alert("Hi " + form.textName.value + ", thanks for purchasing our product using  your " +
            // cardType    
            getSelected().labels[0].innerText +
            " credit  card  no. " +
            form.textCreditCard.value.substr(0, 12).replace(/[0-9]/g, "X") +
            form.textCreditCard.value.substr(-4) +
            ". We will email your receipt on " + form.textEmail.value +
            " and send the product to "
            + form.textAddress.value + "."
        );
        return true
    }
    else {
        alert(fail);

        if (textNamefail == "") { }
        else {
            document.getElementById("textName").style.borderColor = "red";
        }

        if (textAddressfail == "") { }
        else {
            document.getElementById("textAddress").style.borderColor = "red";
        }

        if (emailfail == "") { }
        else {
            document.getElementById("textEmail").style.borderColor = "red";
        }

        if (cardNumberfail == "") { }
        else {
            document.getElementById("textCreditCard").style.borderColor = "red";
        }

        if (cardTypefail == "") { }
        else {
            var setOfRadio = document.getElementsByName("cardType");
            for (const el of setOfRadio) {
                el.labels[0].style.color = "red";
            }
        }

        if (termsfail == "") { }
        else {
            document.getElementById("inCheck").labels[0].style.color = "red";
        }

        return false
    }
}

function validateName(field) {
    return (field == "") ? "No Name was entered.\n" : ""
}

function validateAddress(field) {
    return (field == "") ? "No Address was entered.\n" : ""
}


function validateCardNumber(field) {
    if (field == "") return "No Card Number was entered.\n"
    else if (field.length !== 16)
        return "Card Number must be 16 characters.\n"
    else if (/[^0-9]/.test(field))
        return "Only 0-9 allowed in Card Number.\n"
    return ""
}

function validateCardType() {

    var typeSelected = false;
    // check all input fields
    var setOfRadio = document.getElementsByName("cardType");
    for (const el of setOfRadio) {
        if (el.checked) {
            typeSelected = true;
            break;
        }
    }
    return (!typeSelected) ? "Please choose Card Type.\n" : ""

}

function validateTerms(field) {
    return (!field.checked) ? "Please agree with terms and conditions.\n" : ""
}

function getSelected() {
    // check all input fields
    var setOfRadio = document.getElementsByName("cardType");
    for (const el of setOfRadio) {
        if (el.checked) {
            return el;
        }
    }
    return ""
}

function validateEmailAddress(field) {
    if (field == "") return "No Email was entered.\n"
    else if (!((field.indexOf(".") > 0) &&
        (field.indexOf("@") > 0)) ||
        /[^a-zA-Z0-9.@_-]/.test(field))
        return "The Email address is invalid.\n"
    return ""
}



