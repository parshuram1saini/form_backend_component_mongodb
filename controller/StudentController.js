import joiValidation from "../validation/ValidationSchema.js";
import StudentModal from "../model/StudentModal.js";
class StudentController {
  static RegisterID = async (req, res) => {
    const { error } = joiValidation.validate(req.body);
    if (error) {
      res.status(400).json({
        status: "false",
        message: error.message,
      });
    } else {
      try {
        const emp = await StudentModal.create(req.body);
        res.status(201).json({
          status: 1,
          message: "successful registrated",
        });
        console.log(emp);
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
    }
  };
  static getEmployees = async (req, res) => {
    const user = await StudentModal.find({});
    if (user) {
      return res.status(201).json({
        status: 1,
        message: user,
      });
    } else return res.status(404).send({ message: "data is not found" });
  };
  static getEmployee = async (req, res) => {
    try {
      const { username, password } = req.body;
      if (!(username && password)) {
        res
          .status(400)
          .json({ status: 0, message: "username & Password are mandatory" });
      } else if (username && password) {
        const user = await StudentModal.findOne({ username:username });
        console.log(user);
        if (user) {
          if (password * 1 === user.password) {
            res.status(200).json({
              status: true,
              message: "You Logged Successfully ",
              data: user,
            });
          } else {
            res
              .status(404)
              .json({ status: false, message: "Password doesn't match" });
          }
        } else {
          return res.status(404).json({
            status: false,
            message: "Username isn't exists, Try with correct username",
          });
        }
      }
    } catch (error) {
      res.status(400).send({ message: "something is not found" });
    }
  };
}
export default StudentController;
