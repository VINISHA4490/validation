document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('loginForm');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const passwordHelp = document.getElementById('passwordHelp');
    const phone = document.getElementById('phone');
    

    // Email validation
    email.addEventListener('input', function () {
        if (email.validity.typeMismatch) {
            email.setCustomValidity('Please enter a valid email address.');
        } else {
            email.setCustomValidity('');
        }
        email.reportValidity();
    });


    phone.addEventListener('input', function () {
        const phonePattern = /^(?:\d{10}|\d{3}[-.\s]\d{3}[-.\s]\d{4})$/;
        if (!phonePattern.test(phone.value)) {
            phone.setCustomValidity('Please enter a valid phone number.');
        } else {
            phone.setCustomValidity('');
        }
        phone.reportValidity();
    });


    // Password validation and strength indicator
    password.addEventListener('input', function () {
        const passwordValue = password.value;
        const lengthCriteria = /.{8,}/;
        const uppercaseCriteria = /[A-Z]/;
        const lowercaseCriteria = /[a-z]/;
        const numberCriteria = /[0-9]/;

      
          var strength = 'poor';
            var  color = 'red';
    
        
        if (lengthCriteria.test(passwordValue) && uppercaseCriteria.test(passwordValue) && lowercaseCriteria.test(passwordValue) && numberCriteria.test(passwordValue)) {
            strength = 'Strong';
            color = 'green';
        } else if(lengthCriteria.test(passwordValue) && (uppercaseCriteria.test(passwordValue) || lowercaseCriteria.test(passwordValue)) && numberCriteria.test(passwordValue)) {
            strength = 'Medium';
            color = 'orange';
        }
        

        pwdHelp.textContent = `Password strength : ${strength}`;
        pwdHelp.className = `form-text ${strength.toLowerCase()}`;
    });

    // Form submission
    form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        }
        form.classList.add('was-validated');
    }, false);
});



document.addEventListener('DOMContentLoaded', function() {
    const passwordInput = document.getElementById('password');
    const strengthIndicator = document.getElementById('strengthIndicator');
    const passwordHelp = document.getElementById('passwordHelp');

    passwordInput.addEventListener('input', function() {
        const password = passwordInput.value;
        const strength = checkPasswordStrength(password);

        updateStrengthIndicator(strength);
        updatePasswordHelp(strength);
    });

    function checkPasswordStrength(password) {
        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const hasNumber = /[0-9]/.test(password);
        const isLengthValid = password.length >= 8;

        let strength = 'weak';

        if (isLengthValid && hasUpperCase && hasLowerCase && hasNumber) {
            strength = 'strong';
        } else if (isLengthValid && (hasUpperCase || hasLowerCase) && hasNumber) {
            strength = 'medium';
        }

        return strength;
    }

    function updateStrengthIndicator(strength) {
        strengthIndicator.className = 'strength-indicator';
        if (strength === 'strong') {
            strengthIndicator.classList.add('strength-strong');
        } else if (strength === 'medium') {
            strengthIndicator.classList.add('strength-medium');
        } else {
            strengthIndicator.classList.add('strength-weak');
        }
    }

    function updatePasswordHelp(strength) {
        switch (strength) {
            case 'strong':
                passwordHelp.textContent = 'Strong password';
                passwordHelp.style.color = 'green';
                break;
            case 'medium':
                passwordHelp.textContent = 'Medium strength password';
                passwordHelp.style.color = 'orange';
                break;
            case 'weak':
                passwordHelp.textContent = 'Password is too weak';
                passwordHelp.style.color = 'red';
                break;
        }
    }
});
