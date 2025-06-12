import { getUser } from './login.js'

const { user, passwd } = getUser()


document.addEventListener("DOMContentLoaded", () => {
    editNameUser()
})


async function editNameUser() {
        document.getElementById("dropdown-username").innerText = user
    }
