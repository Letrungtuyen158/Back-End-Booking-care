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
const getDetailDoctorById = async (req, res) => {
  try {
    let infor = await doctorService.getDetailDoctorById(req.query.id);
    return res.status(200).json(infor);
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      errMessage: "error from the sever",
    });
  }
};
const bulkCreateSchedule = async (req, res) => {
  try {
    let infor = await doctorService.bulkCreateSchedule(req.body);
    return res.status(200).json(infor);
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      errMessage: "Error from the sever",
    });
  }
};
const getScheduleByDate = async (req, res) => {
  try {
    let infor = await doctorService.getScheduleByDate(
      req.query.doctorId,
      req.query.date
    );
    return res.status(200).json(infor);
  } catch (error) {
    console.log(error);
    return res.status(200).json({
      errCode: -1,
      errMessage: "Error from the sever",
    });
  }
};
const getExraInforDoctorById = async (req, res) => {
  try {
    let infor = await doctorService.getExraInforDoctorById(req.query.doctorId);
    return res.status(200).json(infor);
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      errMessage: "Error from the sever",
    });
  }
};
const getProfileDoctorById = async (req, res) => {
  try {
    let infor = await doctorService.getProfileDoctorById(req.query.doctorId);
    return res.status(200).json(infor);
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      errMessage: "Error form the server",
    });
  }
};
const getListPatientForDoctor = async (req, res) => {
  try {
    let infor = await doctorService.getListPatientForDoctor(
      req.query.doctorId,
      req.query.date
    );
    return res.status(200).json(infor);
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      errMessage: "Error from the sever",
    });
  }
};
module.exports = {
  getTopDoctorController: getTopDoctorController,
  getAllDoctors: getAllDoctors,
  postInforDoctor: postInforDoctor,
  getDetailDoctorById: getDetailDoctorById,
  bulkCreateSchedule: bulkCreateSchedule,
  getScheduleByDate: getScheduleByDate,
  getExraInforDoctorById: getExraInforDoctorById,
  getProfileDoctorById: getProfileDoctorById,
  getListPatientForDoctor: getListPatientForDoctor,
};
