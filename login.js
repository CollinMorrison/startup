function login() {
    const nameEl = document.querySelector("#username");
    const passwordEl = document.querySelector("#password");
    localStorage.setItem("userName", nameEl.value);
    localStorage.setItem("password", passwordEl.value);
    window.location.href = "index.html";
}