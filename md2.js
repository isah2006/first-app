function validateUsername(username) {
    // Username validation rules
    const usernameRegex = /^[a-zA-Z0-9_-]{4,16}$/;
    return usernameRegex.test(username);
  }
  
  function validatePassword(password) {
    // Password validation rules
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
    return passwordRegex.test(password);
  }
  
  // Example usage
  const username = "myusername";
  const password = "MyP@ssw0rd";
  
  if (validateUsername(username)) {
    console.log("Username is valid.");
  } else {
    console.log("Username is invalid.");
  }
  
  if (validatePassword(password)) {
    console.log("Password is valid.");
  } else {
    console.log("Password is invalid.");
  }