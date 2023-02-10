const express = require('express')
const db = require('../db')

const utility = require('../utils')


const router = express.Router()


//add item api
router.post('/addItem', (request, response) => {
    const { name,description,unit_price,qty } = request.body

    const statement = `insert into inventory (name,description,unit_price,qty) values (?,?,?,?)`

    db.pool.query(
        statement,
        [
            name,description,unit_price,qty
        ], (error, users) => {
            response.send(utility.createResult(error, users))
        }
    )
})

//update item
router.put('/updateItem/:id', (request, response) => {
    const {id} = request.params
    const { name,description,unit_price,qty } = request.body

    const statement = `update inventory set name=?,description=?,unit_price=?,qty=? where product_id = ?`

    db.pool.query(
        statement,
        [name,description,unit_price,qty,id], 
        (error, users) => {
                response.send(utility.createResult(error, users))
        }
    )
})

//show All Items
router.get('/showAllItems', (request, response) => {
    
    const statement = `select * from inventory`

    db.pool.query(
        statement, 
        (error, users) => {
                response.send(utility.createResult(error, users))
        }
    )
})

//delete Item
router.delete('/deleteItem/:id', (request, response) => {
    const { id } = request.params

    const statement = `delete from inventory where product_id = ?`

    db.pool.query(
        statement,
        [id], 
        (error, users) => {
                response.send(utility.createResult(error, users))
        }
    )
})


module.exports = router