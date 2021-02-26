import express, { response } from 'express';

const app= express();

//métodos disponiveis para uso:
/*
*GET = > Buscar
*POST => Salvar
*PUT => ALterar
*DELETE => Deletar
*PATCH => Alteração específica
*/

app.get("/", (req, res) => {
    return res.json({message: "Hello World  - NLW04"})
})

app.post('/', (req, res) => {
    // Recebeu os dados para salvar
    return res.json({message: "Os Dados foram salvos com sucesso!"})
})

app.listen(3333, () => console.log("Server is Running!"))