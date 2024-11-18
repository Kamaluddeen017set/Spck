// Get elements
const loginForm = document.querySelector('form');
const signUpForm = document.querySelector('.sign-up-form');
const loginBtn = document.getElementById('loginbtn');
const signUpBtn = document.getElementById('signupbtn');
const forgotPasswordLink = document.querySelector('.forgot-password a');
const checkbox = document.querySelector('.checkbox input');
const inputFields = document.querySelectorAll('.input-field input');

// Custom Alert Function
function customAlert(message) {
  const alertBox = document.createElement("div");
  alertBox.textContent = message;
  alertBox.style.position = "fixed";
  alertBox.style.top = "35%";
  alertBox.style.left = "50%";
  alertBox.style.fontSize = "30px";
  alertBox.style.transform = "translate(-50%, -50%)";
  alertBox.style.backgroundColor = "#f0f0f0";
  alertBox.style.padding = "30px";
  alertBox.style.border = "2px solid #ccc";
  alertBox.style.borderRadius = "20px";
  alertBox.style.boxShadow = "0 0 20px rgba(0, 0, 0, 0.5)";
  alertBox.style.width = "500px";
  alertBox.style.height = "200px";
  alertBox.style.textAlign = "center";
  alertBox.style.fontWeight = "bold";
  document.body.appendChild(alertBox);
  setTimeout(() => {
    alertBox.remove();
  }, 3000);
}

// Add event listeners
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  customAlert('Login successful!');
  setTimeout(() => {
    window.open("http://localhost:7700/SAFE%20RIDE/safeRide%20_Home.html", "_self");
  }, 3000);
});

signUpForm.addEventListener('submit', (e) => {
  e.preventDefault();
  customAlert('Sign-up successful!');
  setTimeout(() => {
    window.open("http://localhost:7700/SAFE%20RIDE/safeRide%20_Home.html", "_self");
  }, 3000);
});

loginBtn.addEventListener('click', () => {
  window.location.href = 'login-page.html';
});

signUpBtn.addEventListener('click', () => {
  window.location.href = 'sign-up-page.html';
});

forgotPasswordLink.addEventListener('click', () => {
  customAlert('Forgot password feature coming soon!');
});

checkbox.addEventListener('change', () => {
  if (checkbox.checked) {
    localStorage.setItem('rememberMe', 'true');
  } else {
    localStorage.removeItem('rememberMe');
  }
});

inputFields.forEach((field) => {
  field.addEventListener('focus', () => {
    field.parentNode.classList.add('focus');
  });
  field.addEventListener('blur', () => {
    field.parentNode.classList.remove('focus');
  });
});

// Add animation to input fields on focus
inputFields.forEach((field) => {
  field.addEventListener('focus', () => {
    field.parentNode.classList.add('animate');
    setTimeout(() => {
      field.parentNode.classList.remove('animate');
    }, 200);
  });
});

// Add ripple effect to buttons
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const ripple = document.createElement('span');
    ripple.classList.add('ripple');
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    button.appendChild(ripple);
    setTimeout(() => {
      ripple.remove();
    }, 500);
  });
});

// Validate input fields
inputFields.forEach((field) => {
  field.addEventListener('input', () => {
    if (field.value.length > 0) {
      field.parentNode.classList.add('filled');
    } else {
      field.parentNode.classList.remove('filled');
    }
  });
});

// Add password strength indicator
const passwordField = document.querySelector('input[type="password"]');
const passwordStrengthIndicator = document.querySelector('.password-strength-indicator');
passwordField.addEventListener('input', () => {
  const passwordStrength = getPasswordStrength(passwordField.value);
  passwordStrengthIndicator.textContent = passwordStrength;
  passwordStrengthIndicator.classList.add('show');
});

function getPasswordStrength(password) {
  let strength = 0;
  if (password.length >= 8) {
    strength += 1;
  }
  if (password.match(/[a-z]/)) {
    strength += 1;
  }
  if (password.match(/[A-Z]/)) {
    strength += 1;
  }
  if (password.match(/[0-9]/)) {
    strength += 1;
  }

if (password.match(/[^a-zA-Z0-9]/)) {
strength += 1;
}
switch (strength) {
case 0:
return 'Very Weak';
case 1:
return 'Weak';
case 2:
return 'Fair';
case 3:
return 'Good';
case 4:
return 'Strong';
case 5:
return 'Very Strong';
default:
return '';
}
}

// Validate email
function validateEmail(email) {
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;
return emailRegex.test(email);
}

// Validate password
function validatePassword(password) {
const passwordRegex = /^(?=._[a-z])(?=._[A-Z])(?=._\d)(?=._[@$!%_?&])[A-Za-z\d@$!%_?&]{8,}$/;
return passwordRegex.test(password);
}

// Login form submission
loginForm.addEventListener('submit', (e) => {
e.preventDefault();
const email = loginForm.email.value;
const password = loginForm.password.value;

if (!validateEmail(email)) {
customAlert('Invalid email');
} else if (!validatePassword(password)) {
customAlert('Invalid password');
} else {
customAlert('Login successful!');
setTimeout(() => {
window.open("http://localhost:7700/SAFE%20RIDE/safeRide%20_Home.html", "_self");
}, 3000);
}
});

// Sign-up form submission
signUpForm.addEventListener('submit', (e) => {
e.preventDefault();
const name = signUpForm.name.value;
const email = signUpForm.email.value;
const password = signUpForm.password.value;
const confirmPassword = signUpForm.confirmPassword.value;

if (!validateEmail(email)) {
customAlert('Invalid email');
} else if (!validatePassword(password)) {
customAlert('Invalid password');
} else if (password !== confirmPassword) {
customAlert('Passwords do not match');
} else {
customAlert('Sign-up successful!');
setTimeout(() => {
window.open("http://localhost:7700/SAFE%20RIDE/safeRide%20_Home.html", "_self");
}, 3000);
}
});
