var first_nameInput = document.getElementById("first_name");
var last_nameInput = document.getElementById("last_name");
var user_nameInput = document.getElementById("user_name");
var passwordInput = document.getElementById("password");
var emailInput = document.getElementById("email");
var ageInput = document.getElementById("age");
var student_idInput = document.getElementById("student_id");
var faculty_idInput = document.getElementById("faculty_id");
var employer_idInput = document.getElementById("employer_id");

var account = JSON.parse(localStorage.getItem("account-info"));

if (account) {
    first_nameInput.value = account.first_name;
    last_nameInput.value = account.last_name;
    user_nameInput.value = account.user_name;
    passwordInput.value = account.password;
    emailInput.value = account.email;
    ageInput.value = account.age;
    student_idInput.value = account.student_id;
    faculty_idInput.value = account.faculty_id;
    employer_idInput.value = account.employer_id;
    
}


document 
    .getElementByID("account-info")
    .addEventListener("submit", function (event) {
        event.preventDefault();
    
    var first_name = first_nameInput.value.trim();
    var last_name = last_nameInput.value.trim();
    var user_name = user_nameInput.value.trim();
    var password = passwordInput.value.trim();
    var email = emailInput.value.trim();
    var age = ageInput.value.trim();
    var student_id = student_idInput.value.trim();
    var faculty_id = faculty_idInput.value.trim();
    var employer_id = employer_idInput.value.trim();

    if (!first_name || !last_name || !user_name || !password || !email || !age || !student_id || !faculty_id || !employer_id) {
        return;
    }

    var account = {
        first_name: first_name,
        last_name: last_name,
        user_name: user_name,
        password: password,
        email: email,
        age: age,
        student_id: student_id,
        faculty_id: faculty_id,
        employer_id: employer_id,
    }; 

    localStorage.setItem("account-info", JSON.stringify(account));
});


    