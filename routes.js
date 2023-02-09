const express = require('express')
const routes = express.Router()

routes.get('/', (req,res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM empleados', (err,rows)=>{
            if(err) return res.send(err)

            res.json(rows)
        })
    })
})

routes.post('/', (req,res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('INSERT INTO empleados SET ?', [req.body], (err,rows)=>{
            if(err) return res.send(err)

            // res.json(rows)
            res.send('person insert') 
        })
    })
})

routes.delete('/:id', (req,res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('DELETE FROM empleados WHERE id = ?', [req.params.id], (err,rows)=>{
            if(err) return res.send(err)

            // res.json(rows)
            res.send('person excluded!!') 
        })
    })
})

routes.put('/:id', (req,res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('UPDATE empleados SET ? WHERE id= ?', [req.body, req.params.id], (err,rows)=>{
            if(err) return res.send(err)

            // res.json(rows)
            res.send('person updated!!') 
        })
    })
})


module.exports = routes