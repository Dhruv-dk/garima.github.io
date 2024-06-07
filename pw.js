function checkPassword() {
    var password = document.getElementById("password").value;
    var correctPassword = "137alley13723";

    if (password === correctPassword) {
        document.getElementById("congoButton").style.display = "block";
    } else {
        alert("Incorrect password. Please try again.");
    }
}
