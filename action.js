document.getElementById("email").addEventListener("keypress", checkEmail);
document.getElementById("name").addEventListener("keypress", checkName);
document.getElementById("age").addEventListener("keypress", checkAge);
//------- by name ,age ,email
// ----------------------------------------------- Check Email

function checkEmail() {
    console.log("Checking email...");
    var regExp = new RegExp('[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?');
    var useremail = document.getElementById("email").value;
    var userEmailBool = regExp.test(userEmail);
    if(userEmailBool == false) {
        document.getElementById("email").style.backgroundColor = "red";//---- grab element by "id"
        alert("Please check the email again.");
    }
    else {
        document.getElementById("email").style.backgroundColor = "";
        console.log(userEmail);
        validate();
    }
    return userEmail;

}
// ----------------------------------------------- Check Name
function checkName() {
    console.log("Checking name...");
    var regEx = new RegExp('<');
    var Name = document.getElementById("name").value;
    if(regEx.test(userName)){
        //if the regEx.test tests true, it will recognize invalid
        //characters, turning the background red.
        document.getElementById("name").style.backgroundColor = "red";
        //no hackers on my forms!
        alert("An invalid character has been put in. Please don't try hacking me.");
    }
    else {
        //keeps the background color the same
        document.getElementById("email").style.backgroundColor = "white";
    }
}

// ----------------------------------------------------------- CheckAge
function checkAge() {
    console.log("Checking age...");
    var regEx = new RegExp('^(([0-9][1-9])|([1-9][0-9])|[1-9])$|');
    var userAge = document.getElementById('age').value;
    if(regEx.test(userAge))
    //if the test is true, it will recognize the invalid age
    {
        document.getElementById("age").style.backgroundColor = "red";
        alert("Please check your age again. If it's correct, you're too old or too young.");
    }
    else {
        //same background
        document.getElementById("age").style.backgroundColor = "";
    }
}

// ----------------------------------------------- Validate
function validate(userEmail) {
    console.log("Checking validation...");//// remember to use consol.log
    myAjaxFunction();
}
// ----------------------------------------------- myAjaxFunction
function myAjaxFunction() {
    console.log("Checking ajax...");
    alert("AJAX call has been made!");

}