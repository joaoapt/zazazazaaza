import axios from 'axios'
const api = axios.create({
    baseURL: 'http://localhost:5000'
})

export async function cadastrarFilme(nome, avaliacao, lancamento, disponivel, sinopse, usuario) {
    const resposta = await api.post ('/filme', {
        nome: nome,
        sinopse: sinopse,
        avaliacao: avaliacao,
        disponivel: disponivel,
        lancamento: lancamento,
        usuario: usuario
    })
    return resposta.status;
}

export async function listarTodosFilmes(){
    const resposta = await api.get('/filme');
    return resposta.data;
}

export async function buscarFilmesPorNome(){
    const resposta = await api.get(`/filme/busca?nome=${nome}`);
    return resposta.data;
}