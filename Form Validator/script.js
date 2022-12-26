const form = document.getElementById('form');
const username = document.getElementById('user');
const email = document.getElementById('emailid');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


function validateLength(element) {
    const value = element.value;
    if(value) {
        if(value.length < 6) {
            showError(element, `${element.id} must have minimum length of 6`);
            return;
        }
        else if (value.length > 15) {
            showError(element, `${element.id} must be less than 15 chars`);
            return;
        }
    }
}


function  validateEmailId(email) {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );

}

function showError(element, msg) {
    const formcontrol = element.parentElement;
    formcontrol.className = 'form__control error';
    const small = formcontrol.querySelector('small');
    small.innerText = msg;

}

function showSuccess(element) {
    const formControl = element.parentElement;
    formControl.className = 'form__control success';
    
}


function validateFields(fields)
{

    if (fields.length > 0) {
        fields.forEach(element => {
            if (element.value.trim() === '') {
                showError(element, `${element.id} can't be empty`);
            } 
            else {
                showSuccess(element);
            }
        });
    }

}

function validatePassword (pass1, pass2) {
    
    validateLength(pass1);
    validateLength(pass2);

    if (pass1.value !== pass2.value) {
        console.log('--------------');
        showError(pass2, `${pass2.id} value should be same as above`);
    }
}

//Event listener
form.addEventListener('submit', function(e) {
    e.preventDefault();

    validateFields([username, email, password, password2]);

    if(!validateEmailId(email.value)) {
        
        showError(email, `${email.id} is invalid`);
    }; 

    validatePassword(password, password2);
});
