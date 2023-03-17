export async function getData() {
    return new Promise(async function(resolve, reject) {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');

            if (response.ok) {
                resolve(await response.json())
            }
            else {
                reject (new Error('Erro na requisição'));
            }
        }
        catch (error) {
            reject(new Error('Erro fora de escopo'));
        }
    })
}