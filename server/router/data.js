const express = require('express')

const router = express.Router();

const Data = require('../model/data');


router.post('/addData',async (req,res)=>{
    const {DeviceId,DeviceType,Timestamp,location } = req.body;

    try {
        const data = new Data({DeviceId,DeviceType,Timestamp,location});
        await data.save();
        res.status(201).json({ message: 'data added' })
    } catch (error) {
        console.log(error);
    }
})


router.get('/getPlaneData', async (req,res)=>{
    

    try {
        const data = await Data.find();
        res.status(201).send(data);
    } catch (error) {
        console.log(error);
    }
})

router.get('/getDataById/:id', async (req,res)=>{


    try {
        const data = await Data.findOne({_id:req.params['id']});
        res.status(201).send(data);
    } catch (error) {
        console.log(error);
    }
})

router.get('/getDataByDId/:id', async (req,res)=>{


    try {
        const data = await Data.find({DeviceId:req.params['id']});
        res.status(201).send(data);
    } catch (error) {
        console.log(error);
    }
})

module.exports = router

