require("dotenv").config();
import nodemailer from "nodemailer";

const sendSimpleEmail = async (dataSend) => {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_APP, // generated ethereal user
      pass: process.env.EMAIL_APP_PASSWORD, // generated ethereal password
    },
  });

  let info = await transporter.sendMail({
    from: '"FPT BOOKING_CARE 👻" <nhoctengi158@gmail.com>', // sender address
    to: dataSend.reciverEmail, // list of receivers
    subject: "Thông tin đặt lịch khám bệnh ✔", // Subject line
    html: getBodyHTMLEmail(dataSend),
  });
};

const getBodyHTMLEmail = (dataSend) => {
  let result = "";
  if (dataSend.language === "vi") {
    result = `<h3>Xin chào ${dataSend.patientName}</h3>
    <p> Bạn nhận được email này vì đã đặt lịch khám bệnh online trên FPT BOOKING_CARE</p> 
    <p> Thông tin đặt lịch khám bệnh:</p>
    <div><b>Thời gian: ${dataSend.time}</b></div>
    <div><b>Bác sĩ: ${dataSend.doctorName}</b></div>
    <p>Nếu các thông tin trên là đúng sự thật, vui lòng click vào đường link bên dưới để xác nhận và hoàn tất thủ tục đặt lịch khám bệnh</p>
    <div>
    <a href=${dataSend.redirectLink} target="_blank">Click here</a></div> 
    <div>Xin chân thành cảm ơn</div> `;
  }
  if (dataSend.language === "en") {
    result = `<h3>Dear ${dataSend.patientName} !</h3>
           <p> you received this email because you booked  an online medical appoiment  FPT BOOKING_CARE</p> 
           <p> Informartion on schedule an appoiment:</p>
           <div><b>Time: ${dataSend.time}</b></div>
           <div><b>Doctor : ${dataSend.doctorName}</b></div>
           <p>If the above information is true, please click on the link below to conect</p>
           <div>
           <a href=${dataSend.redirectLink} target="_blank">Click here</a></div> 
           <div>Sincerely thank!</div> `;
  }

  return result;
};

module.exports = {
  sendSimpleEmail: sendSimpleEmail,
};
