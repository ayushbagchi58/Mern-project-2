
const express=require('express');
const StudentEjsController = require('../controller/studentEjsController');


const router=express.Router();


router.get('/student/list',StudentEjsController.list)
router.get('/add/student',StudentEjsController.addView)
router.post('/create/student',StudentEjsController.createStudent)

router.get('/edit/student/:id', StudentEjsController.editView)
router.post('/update/student/:id', StudentEjsController.updateStudent)
router.get('/delete/student/:id', StudentEjsController.deleteStudent)




module.exports=router