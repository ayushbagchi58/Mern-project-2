const Student = require("../model/studentModel");
const fs = require("fs");
const path = require("path");

class StudentApiController {

    
    async createStudent(req, res) {
        try {
            const { name, email, phone, address } = req.body;

            const studentData = new Student({
                name,
                email,
                phone,
                address
            });

            
            if (req.file) {
                studentData.image = req.file.filename;
            }

            const data = await studentData.save();

            return res.status(201).json({
                status: true,
                message: "Student created successfully!",
                data: data
            });

        } catch (error) {
            return res.status(500).json({
                status: false,
                message: error.message
            });
        }
    }


   
    async getStudent(req, res) {
        try {
            const data = await Student.find();

            return res.status(200).json({
                status: true,
                total: data.length,
                message: "Students fetched successfully!",
                data: data
            });

        } catch (error) {
            return res.status(500).json({
                status: false,
                message: error.message
            });
        }
    }


  
    async getSingleStudent(req, res) {
        try {
            const id = req.params.id;
            const data = await Student.findById(id);

            return res.status(200).json({
                status: true,
                message: "Single student fetched",
                data: data
            });

        } catch (error) {
            return res.status(500).json({
                status: false,
                message: error.message
            });
        }
    }



    async UpdateStudentData(req, res) {
        try {
            const id = req.params.id;
            const student = await Student.findById(id);

            if (!student) {
                return res.status(404).json({
                    status: false,
                    message: "Student not found"
                });
            }

            let updatedData = req.body;

           
            if (req.file) {

               
                if (student.image && student.image !== "no-image.jpg") {

                    const oldImagePath = path.join(
                        __dirname,
                        "../../uploads",
                        student.image
                    );

                    if (fs.existsSync(oldImagePath)) {
                        fs.unlinkSync(oldImagePath);
                        console.log("Old image deleted:", oldImagePath);
                    } else {
                        console.log("Old image not found:", oldImagePath);
                    }
                }

                
                updatedData.image = req.file.filename;
            }

            await Student.findByIdAndUpdate(id, updatedData);

            return res.status(200).json({
                status: true,
                message: "Student updated successfully!"
            });

        } catch (error) {
            return res.status(500).json({
                status: false,
                message: error.message
            });
        }
    }


    
    async DeleteStudent(req, res) {
        try {
            const id = req.params.id;
            const student = await Student.findById(id);

            if (!student) {
                return res.status(404).json({
                    status: false,
                    message: "Student not found"
                });
            }

           
            if (student.image && student.image !== "no-image.jpg") {
                const oldImagePath = path.join(
                    __dirname,
                    "../../uploads",
                    student.image
                );

                if (fs.existsSync(oldImagePath)) {
                    fs.unlinkSync(oldImagePath);
                    console.log("Deleted image:", oldImagePath);
                } else {
                    console.log("File not found:", oldImagePath);
                }
            }

            await Student.findByIdAndDelete(id);

            return res.status(200).json({
                status: true,
                message: "Student deleted successfully!"
            });

        } catch (error) {
            return res.status(500).json({
                status: false,
                message: error.message
            });
        }
    }
}

module.exports = new StudentApiController();
