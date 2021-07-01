const { Router } = require('express')
const route = Router()
const infosRepo = require('../controllers/infosRepo')
class Route {
    static initialize(app) {
        route.get('/', (_, res) => res.json(this.defaultObject()))
        route.get('/infos', infosRepo)
        app.use('/', route)
        return route
    }
    static defaultObject() {
        return {
            core: 'API by CompassoUOL - BU Cognitive Computing - BliP team',
            version: 'v1',
        }
    }
}
module.exports = Route