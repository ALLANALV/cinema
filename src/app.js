import { Person } from "./models/watcher.js"
import { filterByCategory, filterfirstTop } from "./assets/funcoes/base.js";

const list_top_five = document.getElementById("listTopFive");
const list_filmes_acao = document.getElementById("list_filmes_acao");
const list_filmes_aventura = document.getElementById("list_filmes_avent");
const list_filmes_terror = document.getElementById("list_filmes_terror");
const list_filmes_ficcao = document.getElementById("list_filmes_ficcao");
const list_filmes_fantasia = document.getElementById("list_filmes_fantasia");

function createlist(id, movies) {
    movies.forEach(({ name, poster, ticketPrice, avalaibleSeats, rate, restriction, category }) => {
        const item_list = document.createElement('li');
        const poster_movie = document.createElement('img');
        const box_infor = document.createElement('article');

        poster_movie.src = poster;
        box_infor.classList.add('infor');

        createInfor(box_infor, 'p', `filme: ${name}`)
        createInfor(box_infor, 'p', `Nº assentos disponiveis: ${avalaibleSeats}`)
        createInfor(box_infor, 'p', `avaliação: ${rate}`)
        createInfor(box_infor, 'p', `categoria: ${category}`)
        createInfor(box_infor, 'span', restriction)

        item_list.appendChild(poster_movie)
        item_list.appendChild(box_infor)
        createButton(item_list, ticketPrice)

        id.appendChild(item_list)
    });
}

function createButton(parent, value) {
    const button = document.createElement('button');
    button.innerText = `Comprar por: R$${value},00`

    parent.appendChild(button)
}

function createInfor(parent, element, information) {
    const infor = document.createElement(element);
    infor.innerText = information;

    parent.appendChild(infor)
}

createlist(list_top_five, filterfirstTop());
createlist(list_filmes_acao, filterByCategory('acao'));
createlist(list_filmes_aventura, filterByCategory('aventura'));
createlist(list_filmes_terror, filterByCategory('terror'));
createlist(list_filmes_ficcao, filterByCategory('ficcao cientifica'));
createlist(list_filmes_fantasia, filterByCategory('fantasia'))
