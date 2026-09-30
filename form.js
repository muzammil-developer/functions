function checkUsername(username) {
  if (username.includes(" ")) {
    throw "No empty spaces are allowed in username";
  }

  if (username.length < 5) {
    throw "Username length should be greater than 5";
  }
}

function checkPassword(password, confirm_password) {
  var specialChar = ["#", "@", "%", ";"];

  var passwordRules = {
    hasNumber: false,
    hasSpecialCharacters: false,
  };

  if (password !== confirm_password) {
    throw "Password and Confirm Password is not matching";
  }

  if (password.includes(" ") || confirm_password.includes(" ")) {
    throw "No empty spaces are allowed in password";
  }
  // m7@uhazzib
  for (var i = 0; i < password.length; i++) {
    var currentCharInNum = Number(password[i]);
    var isCurrentCharNaN = isNaN(currentCharInNum);

    if (!isCurrentCharNaN) {
      passwordRules.hasNumber = true;
    }

    if (specialChar.includes(password[i])) {
      passwordRules.hasSpecialCharacters = true;
    }
  }

  if (!passwordRules.hasNumber) {
    throw "Password should contain number";
  }

  if (!passwordRules.hasSpecialCharacters) {
    throw "Password should contain special characters";
  }
}

function signup(e) {
  e.preventDefault();

  try {
    var email = document.getElementById("email").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var confirm_password = document.getElementById("confirm-password").value;
    if (!username || !password || !confirm_password || !email) {
      throw "Please provide required fields";
    }

    checkUsername(username);
    checkPassword(password, confirm_password);
  } catch (error) {
    alert(error);
  }
}
