export const assembleiaGeral = [
  {
    nome: "Joel Augusto Pinheiro Ferreira",
    funcao: "Presidente",
    img: "/equipa/direcao/Joel Ferreira.webp",
  },
  {
    nome: "Bruno Micael de Sousa Moreira",
    funcao: "1º Secretário",
    img: "/equipa/direcao/Micael Moreira.webp",
  },
  {
    nome: "Vítor Manuel Bessa Ribeiro",
    funcao: "2º Secretário",
    img: "/equipa/direcao/Vitor Ribeiro.webp",
  },
];

export const direcao = [
  {
    nome: "Luísa Manuela Ribeiro Teixeira de Almeida",
    funcao: "Presidente",
    img: "/equipa/direcao/Luísa Teixeira.webp",
  },
  {
    nome: "Andreia Marina Sousa Pereira",
    funcao: "Vice-Presidente",
    img: "/equipa/direcao/Andreia Pereira.webp",
  },
  {
    nome: "Joana Alexandra Cunha Teixeira",
    funcao: "Secretário",
    img: "/equipa/direcao/Joana Teixeira.webp",
  },
  {
    nome: "Filipa Daniela Teixeira de Sousa",
    funcao: "Tesoureiro",
    img: "/equipa/direcao/Daniela Sousa.webp",
  },
  {
    nome: "Maria da Conceição Teixeira Ribeiro",
    funcao: "1º Vogal",
    img: "/equipa/direcao/Maria Ribeiro.webp",
  },
  {
    nome: "Tânia Filipa Sousa Ribeiro",
    funcao: "2º Vogal",
    img: "/equipa/direcao/Tânia Ribeiro.webp",
  },
  {
    nome: "Cecília Silva Sousa",
    funcao: "3º Vogal",
    img: "/equipa/direcao/Cecília Sousa.webp",
  },
  {
    nome: "Fernanda Pinheiro Correira",
    funcao: "4º Vogal",
    img: "/equipa/direcao/Fernanda Correia.webp",
  },
  {
    nome: "Pedro Miguel Baldaia Almeida e Sousa",
    funcao: "5º Vogal",
    img: "/equipa/direcao/Pedro Sousa.webp",
  },
  {
    nome: "Augusto Pinheiro Teixeira",
    funcao: "6º Vogal",
    img: "/equipa/direcao/Augusto Teixeira.webp",
  },
  {
    nome: "Artur Moreira Ribeiro",
    funcao: "7º Vogal",
    img: "/equipa/direcao/Artur Ribeiro.webp",
  },
  {
    nome: "Adriano Miguel Penetro",
    funcao: "8º Vogal",
    img: "/equipa/direcao/Adriano Penetro.webp",
  },
  {
    nome: "César Daniel Moreira da Silva",
    funcao: "9º Vogal",
    img: "/equipa/direcao/César Silva.webp",
  },
  {
    nome: "Diogo Manuel Teixeira Magalhães",
    funcao: "10º Vogal",
    img: "/equipa/direcao/Diogo Ganilho.webp",
  },
];

export const conselhoFiscal = [
  {
    nome: "Rui Filipe Mendes Coelho de Almeida",
    funcao: "Presidente",
    img: "/equipa/direcao/Rui Almeida.webp",
  },
  {
    nome: "Carlos Miguel Teixeira Pereira da Mota",
    funcao: "1º Secretário",
    img: "/equipa/direcao/Carlos Teixeira.webp",
  },
  {
    nome: "Jorge Manuel Teixeira Rebelo",
    funcao: "2º Secretário",
    img: "/equipa/direcao/Jorge Rebelo.webp",
  },
];

export const EQUIPA_REVEAL_FROM_ID = 18;
export const EQUIPA_REVEAL_START = "2026-08-13T21:00:00+01:00";

export function getEquipaRevealDate(id) {
  if (id < EQUIPA_REVEAL_FROM_ID) return null;

  const startMs = new Date(EQUIPA_REVEAL_START).getTime();
  const dayMs = 24 * 60 * 60 * 1000;
  return new Date(startMs + (id - EQUIPA_REVEAL_FROM_ID) * dayMs);
}

export function isEquipaRevealed(id, now = new Date()) {
  const revealDate = getEquipaRevealDate(id);
  return revealDate === null || now.getTime() >= revealDate.getTime();
}

export const equipaTecnica = [
  { id: 1, img: "/equipa/tecnica/1.webp" },
  { id: 2, img: "/equipa/tecnica/2.webp" },
  { id: 3, img: "/equipa/tecnica/3.webp" },
];

export const plantel = [
  { id: 1, img: "/equipa/plantel/1.webp" },
  { id: 2, img: "/equipa/plantel/2.webp" },
  { id: 3, img: "/equipa/plantel/3.webp" },
  { id: 4, img: "/equipa/plantel/4.webp" },
  { id: 5, img: "/equipa/plantel/5.webp" },
  { id: 6, img: "/equipa/plantel/6.webp" },
  { id: 7, img: "/equipa/plantel/7.webp" },
  { id: 8, img: "/equipa/plantel/8.webp" },
  { id: 9, img: "/equipa/plantel/9.webp" },
  { id: 10, img: "/equipa/plantel/10.webp" },
  { id: 11, img: "/equipa/plantel/11.webp" },
  { id: 12, img: "/equipa/plantel/12.webp" },
  { id: 13, img: "/equipa/plantel/13.webp" },
  { id: 14, img: "/equipa/plantel/14.webp" },
  { id: 15, img: "/equipa/plantel/15.webp" },
  { id: 16, img: "/equipa/plantel/16.webp" },
  { id: 17, img: "/equipa/plantel/17.webp" },
  { id: 18, img: "/equipa/plantel/18.webp" },
  { id: 19, img: "/equipa/plantel/19.webp" },
  { id: 20, img: "/equipa/plantel/20.webp" },
  { id: 21, img: "/equipa/plantel/21.webp" },
  { id: 22, img: "/equipa/plantel/22.webp" },
];
