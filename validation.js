function validate() {
  let valid = true;

  
  document.querySelectorAll('.error').forEach(span => span.textContent = '');
  document.getElementById('passwordStrength').textContent = '';

  const username = document.getElementById('username').value;
  if (username.trim() === '') {
      document.getElementById('error1').textContent = 'Username is required';
      valid = false;
  }

  
  const email = document.getElementById('email').value;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
      document.getElementById('error2').textContent = 'Invalid email address';
      valid = false;
  }


  const password = document.getElementById('password').value;
  const passwordStrength = document.getElementById('passwordStrength');
  if (password.length < 6) {
      document.getElementById('error3').textContent = 'Password must be at least 6 characters long';
      valid = false;
  } else {
      let strength = 'Weak';
      if (password.length > 8) strength = 'Moderate';
      if (password.length > 12) strength = 'Strong';
      passwordStrength.textContent = 'Password strength: ' + strength;
  }

  
  const phone = document.getElementById('phone').value;
  const phonePattern = /^\d{10}$/; 
  if (!phonePattern.test(phone)) {
      document.getElementById('error4').textContent = 'Invalid phone number';
      valid = false;
  }

  return valid; 
}

