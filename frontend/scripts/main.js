import { loginAndStoreUser } from './login.js';


document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("enter-button-login").addEventListener("click", async (e) => {
        e.preventDefault();
        await enterLogin();
    });
});


async function enterLogin() {
    const user_add = document.getElementById("usuario").value;
    const passwd_add = document.getElementById("senha").value;
    document.getElementById('login-error').classList.add('d-none');

    const result = await loginAndStoreUser(user_add, passwd_add);

    if (result.success) {
        window.location.href = "home.html";
    } else {
        document.getElementById('login-error').classList.remove('d-none');
    }
}