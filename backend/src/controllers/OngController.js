const connection = require('../database/connection')
const crypto = require('crypto')


module.exports = {

    async index(request, response) {
        const ongs = await connection('ongs').select.toString('*')

        return response.json(ongs)

    },


    async create(request, response) {
        const { name, email, whatsapp, city, uf, password } = request.body;

        const id = crypto.randomBytes(4).toString('HEX')

        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
          password,

        })


        return response.json({ id })

    }
}