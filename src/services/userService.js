import db from "../models/index";
import bcrypt from "bcryptjs";

const handleUserLogin = (email, password) => {
  return new Promise(async (resolve, reject) => {
    try {
      let userData = {};

      let isExist = await checkUserEmail(email);
      if (isExist) {
        //user already exists
        //compare password
        let user = await db.User.findOne({
          where: { email: email },
          attributes: ["email", "roleId", "password"],
          raw: true,
        });
        if (user) {
          //compare password
          let check = await bcrypt.compareSync(password, user.password);
          if (check) {
            userData.errCode = 0;
            userData.errMessage = "ok";
            console.log(user);
            delete user.password;
            userData.user = user;
          } else {
            userData.errCode = 3;
            userData.errMessage = "Wrong password";
          }
        } else {
          userData.errCode = 2;
          userData.errMessage = `usser not found`;
        }
      } else {
        //return Erros
        userData.errCode = 1;
        userData.errMessage = `Plz try orther email`;
      }
      resolve(userData);
    } catch (e) {
      reject(e);
    }
  });
};

const checkUserEmail = (userEmail) => {
  return new Promise(async (resolve, reject) => {
    try {
      let user = await db.User.findOne({
        where: { email: userEmail },
      });
      if (user) {
        resolve(true);
      } else {
        resolve(false);
      }
    } catch (e) {
      reject(e);
    }
  });
};

const getAllUsers = (userId) =>{
  return new Promise ( async (resolve,reject) =>{
    try{
         let users = ""
         if(userId === "ALL") {
           users = await db.User.findAll({
            attributes: {
              exclude: ["password"]
            }
           })
         }
         if(userId && userId !== "ALL"){
          users = await db.User.findOne({
            where:{id: userId},
            attributes: {
              exclude: ["password"]
            }
          })
         }
      resolve(users)
    }
    catch(e){
      reject(e)
    }
  }) 

  



}





module.exports = {
  handleUserLogin: handleUserLogin,
  getAllUsers: getAllUsers,
};
