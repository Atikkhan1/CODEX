username = ["atik", "zahid"];
password = ["a", "z"];

function check() {
  // query the DOM elements once
  var userinput = document.querySelector("#username");
  var passwordinput = document.querySelector("#password");

  // use a variable to store the validity of the user input
  var valid = false;

  // use a for-of loop to iterate over the array values
  for (let name of username) {
    // check if the input values match the array values
    if (
      userinput.value == name &&
      passwordinput.value == password[username.indexOf(name)]
    ) {
      // set the valid variable to true
      valid = true;
      // redirect to another page
      window.location.href = "my site/main_interference/index.html";
      // break the loop
      break;
    }
  }

  // if the valid variable is still false, show the alert message
  if (!valid) {
    alert("wrong username and password");
  }
}

