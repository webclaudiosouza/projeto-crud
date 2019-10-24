const express = require('express')
const pessoasControllers = require('../controlles/pessoas')

const pessoasRouter = ({connection}) => {
    const router = express.Router()
      router.get('/', pessoasControllers.index.bind(null, connection))
      router.get('/delete/:id', pessoasControllers.deleteRow.bind(null, connection))
      router.get('/create', pessoasControllers.createForm)
      router.post('/create', pessoasControllers.createProcess.bind(null, connection))
      router.get('/update/:id', pessoasControllers.updateForm.bind(null, connection))
      router.post('/update/:id', pessoasControllers.updateProcess.bind(null, connection))
    return router
}

module.exports = pessoasRouter