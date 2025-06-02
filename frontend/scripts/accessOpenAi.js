
export async function accessOpen(prompt) {

    const resposta = await fetch(`http://localhost:3001/api`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ prompt })
    });

    // console.log(resposta.json())

    return resposta.json();
}
