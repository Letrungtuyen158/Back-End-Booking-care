import doctorService from "../services/doctorService";

const getTopDoctorController = async (req, res) => {
  let limit = req.query.limit;
  if (!limit) limit = 10;
  try {
    let response = await doctorService.getTopDoctorHome(+limit);
    return res.status(200).json(response);
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      message: "Error from sever...",
    });
  }
};

const getAllDoctors = async (req, res) => {
  try {
    let doctor = await doctorService.getAllDoctors();
    return res.status(200).json(doctor);
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      errMessage: "Error form",
    });
  }
};

const postInforDoctor = async (req, res) => {
  try {
    let response = await doctorService.saveDetailInforDoctor(req.body);
    return res.status(200).json(response);
  } catch (error) {
    console.log(error);
    return error.status(200).json({
      errCode: -1,
      errMessage: "Error from the sever",
    });
  }
};

module.exports = {
  getTopDoctorController: getTopDoctorController,
  getAllDoctors: getAllDoctors,
  postInforDoctor: postInforDoctor,
};
