import { Router } from 'express'
import * as assetsCtrl from '../controllers/assets.js'
import * as locksCtrl from '../controllers/locks.js'
import * as buildersCtrl from '../controllers/builders.js'
import * as usersCtrl from '../controllers/users.js'

const router = Router()

// Asset Controllers
router.get('/', assetsCtrl.index)

// Builder Controllers
router.post('/builders', buildersCtrl.create)
router.put('/builders/:id', buildersCtrl.update)
router.delete('/builders/:id', buildersCtrl.delete)

// Lock Controllers
router.post('/locks', locksCtrl.create)
router.put('/locks/:id', locksCtrl.update)
router.delete('/locks/:id', locksCtrl.delete)

// User Controllers
router.put('/users/:id', usersCtrl.update)
router.delete('/users/:id', usersCtrl.delete)

export {
  router
}
