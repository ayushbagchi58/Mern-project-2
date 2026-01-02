const Student = require('../model/studentModel');

class StudentEjsController {

    async list(req, res) {
        try {
            const data = await Student.find();
            res.render('studentlist', {
                data: data
            });
        } catch (error) {
            console.log(error);
        }
    }

    async addView(req, res) {
        try {
            res.render('addstudent');
        } catch (error) {
            console.log(error);
        }
    }

    async createStudent(req, res) {
        try {
            const { name, email, phone, address } = req.body;

            const studentdata = new Student({
                name,
                email,
                phone,
                address
            });

            const data = await studentdata.save();
            console.log('data', data);

            if (data) {
                res.redirect('/student/list');
            }
        } catch (err) {
            console.log(err);
        }
    }

    async editView(req, res) {
        try {
            const { id } = req.params;
            const student = await Student.findById(id);
            
            if (student) {
                res.render('editstudent', {
                    student: student
                });
            } else {
                res.redirect('/student/list');
            }
        } catch (error) {
            console.log(error);
            res.redirect('/student/list');
        }
    }

    async updateStudent(req, res) {
        try {
            const { id } = req.params;
            const { name, email, phone, address } = req.body;

            const data = await Student.findByIdAndUpdate(
                id,
                {
                    name,
                    email,
                    phone,
                    address
                },
                { new: true }
            );

            console.log('updated data', data);

            if (data) {
                res.redirect('/student/list');
            }
        } catch (err) {
            console.log(err);
            res.redirect('/student/list');
        }
    }

    async deleteStudent(req, res) {
        try {
            const { id } = req.params;
            const data = await Student.findByIdAndDelete(id);

            console.log('deleted data', data);

            if (data) {
                res.redirect('/student/list');
            }
        } catch (err) {
            console.log(err);
            res.redirect('/student/list');
        }
    }

}

module.exports = new StudentEjsController();