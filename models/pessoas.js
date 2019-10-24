const findAll = (connection) => {
    return new Promise((resolve, reject) => {
        connection.query('select * from pessoas', (err, results) =>{
            if(err){
                reject(err)
            }else{
                resolve(results)
            }
        })
    })
    
}

//edit form

const findById = (connection, id) => {
    return new Promise((resolve, reject) => {
        connection.query('select * from pessoas where id ='+id, (err, results) =>{
            if(err){
                reject(err)
            }else{
                resolve(results)
            }
        })
    })
    
}

const create = (connection, data) => {
    return new Promise((resolve, reject) => {
        connection.query(`insert into pessoas (nome, nascimento, cargo) values('${data.nome}', '${data.nascimento}', '${data.cargo}')`, (err) =>{
            if(err){
                reject(err)
            }else {
                resolve()
            }
        })
    })
}

const deleteOne = (connection, id) => {
    return new Promise((resolve, reject) =>{
        connection.query('delete from pessoas where id ='+id, (err) =>{
            if(err){
                reject(err)
            }else{
                resolve()
            }
        })
    })
}

module.exports = {
    findAll,
    findById,
    deleteOne,
    create
}