const fylker = require('../data/fylker.json')

module.exports = async (request, response) => {
  response.json(fylker)
}
