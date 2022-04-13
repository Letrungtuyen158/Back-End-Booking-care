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
    html: `<h3>Xin chào ${dataSend.patientName}</h3>
            <p> Bạn nhận được email này vì đã đặt lịch khám bệnh online trên FPT BOOKING_CARE</p> 
            <p> Thông tin đặt lịch khám bệnh:</p>
            <div><b>Thời gian ${dataSend.time}</b></div>
            <div><b>Bác sĩ: ${dataSend.doctorName}</b></div>
            <p>Nếu các thông tin trên là đúng sự thật, vui lòng click vào đường link bên dưới để xác nhận và hoàn tất thủ tục đặt lịch khám bệnh</p>
            <div>
            <a href=${dataSend.redirectLink} target="_blank">Click here</a></div> 
            <div>Xin chân thành cảm ơn</div> `,
  });
};

module.exports = {
  sendSimpleEmail: sendSimpleEmail,
};
