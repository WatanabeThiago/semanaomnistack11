const connection = require('../database/connection')


module.exports={
    async create(request, response){
        const { id } = request.body;
        const { password } = request.body;

        const ong = await connection ('ongs')
        .where('id', id)
        .where('password', password)
        .select('name')
        .first()


        if(!ong)
        {
            return response.status(400).json({ error: 'nao tem mano'})
        }

        if(!password)
        {
            return response.status(400).json({ error: 'senha errada manito'})
        }
        return response.json(ong)
    }
}