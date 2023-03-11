const user = Sosapond;
const a = 1759;

function login() {

const form = document.getElementById("form");
const username = document.getElementById("username");
const p = document.getElementById("password");

    if (username.value === "") {
        alert("username required");
        return;
    }
    if (p.value === "") {
        alert("password required");
        return;
    }
    const user = "Sosapond";
    const a = 1759;
    if (username.value != user) {
        alert("Invalid Username or Password");
        return;
    }
    if (p.value != a) {
        alert("Invalid Username or password");
    } else {
        alert("Login Successful");
    }
}
