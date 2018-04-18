const database = require(`./database-connection`);

let numberOfEstablishments = null;

module.exports = {
    numberOfEstablishments,

    getNumberOfEstablishments() {
        return database(`establishments`).max(`id`).first()
            .then(id => { numberOfEstablishments = id.max })
    },

    async getEstablishments() {
        await this.getNumberOfEstablishments();
        let match = false;
        let ids = [0, 0, 0, 0, 0].reduce((acc, id, index) => {
          while (id === 0 || match === true) {
            id = Math.ceil(Math.random() * numberOfEstablishments);
            match = false;
            for (let i = 0; i < index; i++) {
                if (id === acc[i]) { match = true }
            }
          }
          acc.push(id);
          return acc;
        }, []);
        return database(`establishments`)
          .where(`id`, ids[0])
          .orWhere(`id`, ids[1])
          .orWhere(`id`, ids[2])
          .orWhere(`id`, ids[3])
          .orWhere(`id`, ids[4])
    },

    getEstablishmentsQuickly() {
        return database(`establishments`).where(`id`, `<`, 6)
    },

    getEstablishmentsByID(id) {
        return database(`establishments`).where(`id`, id)
    },

    getRatingsByID(id) {
        return database(`ratings`).where(`id`, id)
    },

    addRating(id, rating) {
        let ratingRow = {"establishment_id": id, "rating": rating}
        return database("ratings").insert(ratingRow)
    },

    getRatings(id) {
        return database(`ratings`).where(`establishment_id`, id)
    }
};