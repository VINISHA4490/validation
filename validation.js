function validate() {
    let isValid = true;

    // Email Validation
    const emailInput = document.getElementById('em');
    const emailError = document.getElementById('error1');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value)) {
      emailError.textContent = 'Please enter a valid email address.';
      isValid = false;
    } else {
      emailError.textContent = '';
    }


document.getElementById('validationForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    // Password Validation
    const passwordInput = document.getElementById('password');
    const passwordError = document.getElementById('passwordError');
    const passwordStrength = document.getElementById('passwordStrength');
    const password = passwordInput.value;

    // Regular expressions for validation
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const isLengthValid = password.length >= 8;

    let isValid = true;

    // Password Error Messages
    if (!isLengthValid) {
      passwordError.textContent = 'Password must be at least 8 characters long.';
      isValid = false;
    } else if (!hasUpperCase) {
      passwordError.textContent = 'Password must contain at least one uppercase letter.';
      isValid = false;
    } else if (!hasLowerCase) {
      passwordError.textContent = 'Password must contain at least one lowercase letter.';
      isValid = false;
    } else if (!hasNumber) {
      passwordError.textContent = 'Password must contain at least one number.';
      isValid = false;
    } else if (!hasSpecialChar) {
      passwordError.textContent = 'Password must contain at least one special character.';
      isValid = false;
    } else {
      passwordError.textContent = '';
    }

    // Password Strength Indicator
    if (isValid) {
      let strength = 'weak';
      if (password.length >= 12 && hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar) {
        strength = 'strong';
      } else if (password.length >= 8) {
        strength = 'medium';
      }
      passwordStrength.textContent = `Password strength: ${strength}`;
      passwordStrength.className = `password-strength strength-${strength}`;
    } else {
      passwordStrength.textContent = '';
      passwordStrength.className = 'password-strength';
    }
    
    return isValid; // Allow form submission if valid
  })
}

document.getElementById('phoneForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    const phoneInput = document.getElementById('phone');
    const phoneError = document.getElementById('phoneError');
    const phone = phoneInput.value;

    // Regular expression patterns for different formats
    const phonePattern = /^(?:\d{10}|\d{3}[-.\s]\d{3}[-.\s]\d{4})$/;
    
    // Check if phone number matches the pattern
    if (!phonePattern.test(phone)) {
      phoneError.textContent = 'Please enter a valid phone number. Format options: 1234567890, 123-456-7890, 123.456.7890, 123 456 7890';
      return false;
    } else {
      phoneError.textContent = '';
      return true;
    }
  });