const Router = require('router')
const finalhandler = require('finalhandler')

// Utilities
const handler = require('./lib/handler')

// Initialize a new router
const router = Router()

// ROUTES
router.get('/', handler.getFrontpage)
router.get('/kommuner', handler.getKommuner)
router.get('/fylker', handler.getFylker)
router.get('/:areaId', handler.getUtvalg)
router.get('/:areaId/:committeeId', handler.getUtvalg)

module.exports = (request, response) => {
  if (request.method.toLowerCase() === 'options') {
    response.writeHead(200)
    response.end('')
  } else {
    router(request, response, finalhandler(request, response))
  }
}
