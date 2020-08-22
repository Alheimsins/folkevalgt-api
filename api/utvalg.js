const fylker = require('../data/fylker.json')
const kommuner = require('../data/kommuner.json')

module.exports = async (request, response) => {
  const { omrade, utvalgsid } = request.query
  const area = fylker[omrade] || kommuner[omrade] || false
  if (!area) {
    response.status(404).send('Ukjent identifikator')
  } else {
    try {
      const adapter = require(`../adapters/${area.adapter.type}.js`) || false
      const options = Object.assign({}, area, { committeeId: utvalgsid })
      const data = await adapter(options)
      response.json(data)
    } catch (error) {
      response.status(500).send(error.message)
    }
  }
}
