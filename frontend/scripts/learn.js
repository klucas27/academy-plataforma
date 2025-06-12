import { getStoredUser } from './login.js';

const userObj = getStoredUser();

document.addEventListener("DOMContentLoaded", () => {
    editNameUser()
})


async function editNameUser() {
        document.getElementById("dropdown-username").innerText = userObj.username
    }
