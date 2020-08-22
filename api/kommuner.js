const kommuner = require('../data/kommuner.json')

module.exports = async (request, response) => {
  response.json(kommuner)
}
