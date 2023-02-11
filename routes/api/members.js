const express = require('express')
const router = express.Router();
const members = require('../../members');
const uuid = require('uuid');

// get all members
router.get('/', (req, res) => res.json(members))

 
// get single member
router.get('/:id', (req,res)=>{
    const found = members.some(member=>member.id===parseInt(req.params.id))

    if (found) {    
        res.json(members.filter(member => member.id === parseInt(req.params.id)))   
    } else {
        res.status(400).json({
            msg: `Member with id ${req.params.id} not found`
        })
    }
});

// create a member
router.post('/', (req, res) => {
    const newMamber = {
        id: uuid.v4(),
        name: req.body.name,
        email: req.body.email,
        status: 'active'
    }
    if (!newMamber.name
        || !newMamber.email) {
            return res.status(400).json({
                msg: 'please include a name and email'
            })
    } 

    members.push(newMamber)
    res.json(members)
})

module.exports = router;
