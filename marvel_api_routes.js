const express =require('express');
const router = express.Router();

router.get('/', (req,res)=>{
    res.send('GET')
});

router.post('/',(req,res)=>{
    res.send('POST')
    
});

router.put('/:id',(req,res)=>{
    res.send('PUT')
    
});

router.delete('/:id',(req,res)=>{
    res.send('DELETE')
    
});

module.exports = router;
