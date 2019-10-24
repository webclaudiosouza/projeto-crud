const pessoas = require('../models/pessoas')

const index = async(connection, req, res) => {
    const results = await pessoas.findAll(connection)
    res.render('./pessoas/index', {
        pessoas: results
    })
}

const deleteRow = async(connection, req, res) => {
    await pessoas.deleteOne(connection, req.params.id)
    res.redirect('/pessoas')
}

const createForm = (req, res) => {
    res.render('pessoas/create')
}

const createProcess = async(connection, req, res) => {
  await pessoas.create(connection, req.body)
  res.redirect('/pessoas')
}

// edit form

const updateForm = async(connection, req, res) => {
    const pessoa = await pessoas.findById(connection, req.params.id)
    res.render('pessoas/update',{ pessoa })
}

const updateProcess = async(connection, req, res) => {
  await pessoas.create(connection, req.body)
  res.redirect('/pessoas')
}

module.exports = {
    index,
    deleteRow,
    createForm,
    createProcess,
    updateForm,
    updateProcess
}