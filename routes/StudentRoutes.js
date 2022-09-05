import express from "express";
const router = express.Router(); // router() function inside the express
import StudentController from "../controller/StudentController.js";
router.post("/addstudents", StudentController.RegisterID); //post the data in employee collection
router.get("/getstudents", StudentController.getEmployees);
router.post("/getstudent", StudentController.getEmployee); //get single employee data 
export default router;
