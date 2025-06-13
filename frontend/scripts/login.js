export async function loginAndStoreUser(username, password) {
    try {
        const response = await fetch(`https://estokeasy.com.br/bugapi/users/login`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })

        });
        const data = response.json();

        if (response.ok && data.success) {
            // Salva todas as informações do usuário no localStorage
            localStorage.setItem('user', JSON.stringify(data.user));
            return { success: true, user: data.user };
        } else {
            return { success: false, error: data.error || 'Usuário ou senha incorretos.' };
        }
    } catch (error) {
        return { success: false, error: 'Erro ao conectar ao servidor.' };
    }
}

export function getStoredUser() {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
}
