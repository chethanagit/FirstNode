const express = require ('express');

const router = express.Router();

const Tables = require('../models/model');
//get a from db

router.get('/tables' , function(req,res){

    Tables.find({}).then(function(tables){

        res.send(tables);
        res.render(tables);
    });


});

//add new table to db

router.post('/tables', function(req,res){
    console.log(req.body);
    Tables.create(req.body).then(function(tables){
        res.send(tables);



    })
        
});

router.delete('/tables/:id' , function(req,res){
    console.log(req.params.id);
    Tables.findByIdAndRemove({_id:req.params.id}).then(function(table){

        res.send(table);
    })
    res.send("deleted");

})


router.put('/tables/:id', function(req,res){

    Tables.findByIdAndUpdate({_id:req.params.id},req.body).then(function(){
        Tables.findOne({_id:req.params.id}).then(function(table){
            res.send(table)
        });

    })

})
    

module.exports = router;
