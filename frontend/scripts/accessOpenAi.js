
export async function accessOpen(prompt) {

    const resposta = await fetch(`https://129.148.55.107/bugapi/`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ prompt })
    });

    // console.log(resposta.json())

    return resposta.json();
}
