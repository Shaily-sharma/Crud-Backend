const express =require('express');
const router=express.Router();
const studentUser =require('../models/studentModel');

//create new student
router.post("/create", async (req, res) => {
    try {
      const user = new studentUser(req.body);
      console.log(req.body);
      const insertUser = await user.save();
      res.status(201).send(insertUser);
    } catch (error) {
      res.status(400).send(error);
    }
  });

  // get student by id 
router.get("/read/:id", async (req, res) => {
    try {
      console.log(req.body);
      const studentid = req.params.id
      const studentlist = await studentUser.findById(studentid);
      res.send(studentlist)
    } catch (e) {
      res.status(400).send(e);
    }
  })

  //update student by id
  router.patch('/update/:id', async (req, res) => {
    try {
      const studentlist = await studentUser.findByIdAndUpdate(req.params.id, req.body, {
        new: true
      })
      res.send(studentlist);
    } catch (e) {
      res.status(400).send(e);
    }
  })

  //delete student by id
  router.delete('/delete/:id', async (req, res) => {
    try {
      const studentlist = await studentUser.findByIdAndDelete(req.params.id)
      res.status(201).send({ message: "deleted!!" });
    } catch (e) {
      res.status(400).send(e);
    }
  })
  
  module.exports=router;