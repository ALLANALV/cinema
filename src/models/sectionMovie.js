import { dataFilms } from "../assets/datafilms.js"
//const films = require("../assets/datafilms.json")

class Movie {
    constructor(name, poster, ticketPrice, avalaibleSeats, rate, restriction, category) {
        this.name = name;
        this.poster = poster;
        this.ticketPrice = ticketPrice;
        this.avalaibleSeats = avalaibleSeats;
        this.rate = rate;
        this.restriction = restriction;
        this.category = category;
        this.profit = 0
        this.seatsBusy = 0;
    }

    buy = () => {
        if (this.avalaibleSeats !== this.avalaibleSeats) {
            this.profit += this.ticketPrice
            this.avalaibleSeats--
            this.seatsBusy++
            return 'Pagamento com sucesso!'
        } else {
            return 'sessão desse filme lotada!'
        }
    }

    chooseMovie = (ageUser) => {
        if (ageUser < this.restriction) {
            return 'Desculpe! Mas você não pode assistir esse filme por ser menor.'
        }
    }

}

const sectionMovie = dataFilms.map((film) => {
    const { name, poster, ticketPrice, qtdSeats, rate, restriction, category } = film
    let newfilm = new Movie(name, poster, ticketPrice, qtdSeats, rate, restriction, category)
    return newfilm
});

export { sectionMovie };
