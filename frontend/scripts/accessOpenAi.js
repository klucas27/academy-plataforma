
export async function accessOpen(prompt) {

    const resposta = await fetch(`https://estokeasy.com.br/academy/openai-access/openai`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ prompt })
    });

    // console.log(resposta.json())

    return resposta.json();
}
