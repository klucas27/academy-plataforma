import { getStoredUser } from './login.js';

const userObj = getStoredUser();


document.addEventListener("DOMContentLoaded", () => {
    editNameUser();
});


function editNameUser() {
    if (userObj && userObj.username) {
        document.getElementById("dropdown-username").innerText = userObj.username;
    }
}
