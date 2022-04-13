import patientService from "../services/patientService";

const postBookAppointment = async (req, res) => {
  try {
    let infor = await patientService.postBookAppointment(req.body);
    return res.status(200).json({
      infor,
    });
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      errMessage: "Error from the sever",
    });
  }
};

module.exports = {
  postBookAppointment: postBookAppointment,
};
