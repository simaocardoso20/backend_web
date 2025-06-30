// Função que faz a consulta a API, traz o resultado em json e transforma de forma a que o JS consiga interpretar

const loadTvShow = async() => {
  const result = await fetch('https://api.tvmaze.com/singlesearch/shows?q=friends');
  const data = await result.json();
  return data;
}

// Função que constroi com o resultado da API (qd ele chegar) o HTML
const getData = async () => {
  const result = await loadTvShow();


// Console log ou criar elementos
console.log(result)
}

getData();