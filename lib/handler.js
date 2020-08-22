const { send } = require('micro')
const kommuner = require(`${__dirname}/../data/kommuner.json`)
const fylker = require(`${__dirname}/../data/fylker.json`)

exports.getKommuner = async (request, response) => {
  send(response, 200, kommuner)
}

exports.getFylker = async (request, response) => {
  send(response, 200, fylker)
}

exports.getUtvalg = async (request, response) => {
  const { areaId, committeeId } = request.params
  const area = fylker[areaId] || kommuner[areaId] || false
  if (!area) {
    send(response, 404, 'Ukjent identifikator')
  } else {
    try {
      const adapter = require(`../adapters/${area.adapter.type}.js`) || false
      const options = Object.assign({}, area, { committeeId: committeeId })
      const data = await adapter(options)
      send(response, 200, data)
    } catch (error) {
      send(response, 500, error.message)
    }
  }
}
