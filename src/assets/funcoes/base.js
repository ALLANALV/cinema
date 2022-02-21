import { sectionMovie } from "../../models/sectionMovie.js";

const filterfirstTop = () => {
    const filterGreatestRate = sectionMovie.filter((value) => {
        const { rate } = value
        if (rate > 4.6) {
            return value
        }
    });
    filterGreatestRate.sort((a, b) => a.rate - b.rate).reverse()

    const topFive = [];
    for (let index = 0; topFive.length !== 5; index++) {
        topFive.push(filterGreatestRate[index])
    }

    return topFive

}

const filterByCategory = (nameCategory) => {
    const filterMovie = sectionMovie.filter((value) => {
        const { category } = value;
        let validation = category.some((elem) => elem.toLowerCase() === nameCategory.toLowerCase());

        if (validation === true) {
            return value
        }
    })

    return filterMovie
}

export { filterfirstTop, filterByCategory }