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
    res.redirect('/')
})

// Update a member
router.put('/:id', (req, res) => {
    const found = members.some(member=>member.id===parseInt(req.params.id));

    if (found) {
        const updatedMember = req.body;
        members.forEach(member=>{
            if (member.id===parseInt(req.params.id)) {
              member.name = updatedMember.name ? updatedMember.name : member.name;
              member.email = updatedMember.email ? updatedMember.email: member.email

              res.json({
                msg: 'Member updated', member
              })
            }
        })
    } else {
        res.status(400).json(
            {
                msg: `No member with id of ${req.params.id}`
            }
        )
    }  
})

// Delete a member
router.delete('/:id', (req, res) => {
    const found = members.some(member=>member.id===parseInt(req.params.id));

    if (found) {
        res.json({
        msg: 'Member deleted', 
        member: members.filter(member=>member.  id!==parseInt(req.params.id))
        })
    }
    else {
        res.status(400).json(
        {
            msg: `No member with id of ${req.params.id}`
        }
    )
}  
});

module.exports = router;
