document.getElementById("login-submit").addEventListener("click", function() {
    const userEmailEIputBox = document.getElementById("user-email");
    const userEmailEIputBoxValue = userEmailEIputBox.value;

    const userPasswordBox = document.getElementById("user-password");
    const userPasswordValue = userPasswordBox.value;

    if (
        userEmailEIputBoxValue == "abc@gmail.com" &&
        userPasswordValue == "secret"
    ) {
        window.location.href = "banking.html";
    } else {
        alert("Please enter valid email and password");
    }
});