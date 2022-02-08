import userService from "../services/userService";

const handleLongin = async (req, res) => {
  let email = req.body.email;
  let password = req.body.password;

  if (!email || !password) {
    return res.status(500).json({
      errcode: 1,
      message: "missing imputs parameter! ",
    });
  }

  let userData = await userService.handleUserLogin(email, password);

  //   check email exits
  //   compare password
  //   return userInfor
  //   accsess_token:JWT json web token

  return res.status(200).json({
    errcode: userData.errCode,
    message: userData.errMessage,
    user: userData.user ? userData.user : {},
  });
};

const handleGetAllUsers = async (req,res) =>{
  let id = req.query.id

  if(!id) {
    return res.status(200).json({
      errcode: 1,
      message: "missing parameters",
      users:[]
    })
  }
  let users = await userService.getAllUsers(id)
  
  return res.status(200).json({
    errcode: 0 ,
    message: "ok",
    users
  })



}
const handleCreateUser = async(req,res) =>{
    
    let message =  await userService.createNewUser(req.body);
    return res.status(200).json(message);
}
const handleEditUsers = async(req,res) =>{

}
const handleDeleteUsers = async(req,res) =>{
    if(!req.body.id){
         return res.status(200).json({
           errCode: 1 ,
           message: 'missing Id parameters !!'
         })
    }
  let message =  await userService.deleteUser(req.body.id);
    return res.status(200).json(message);
}

module.exports = {
  handleLongin: handleLongin,
  handleGetAllUsers : handleGetAllUsers,
  handleCreateUser:handleCreateUser,
  handleEditUsers:handleEditUsers,
  handleDeleteUsers:handleDeleteUsers,
};
