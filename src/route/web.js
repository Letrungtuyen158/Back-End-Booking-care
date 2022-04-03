import express from "express";
import homeController from "../controllers/homeController";
import userController from "../controllers/userController";
import doctorController from "../controllers/doctorController";

let router = express.Router();

let initWebRoutes = (app) => {
  router.get("/", homeController.getHomePage);

  //Manage User
  router.post("/api/login", userController.handleLongin);
  router.get("/api/get-all-users", userController.handleGetAllUsers);
  router.post("/api/create-new-users", userController.handleCreateUser);
  router.put("/api/edit-users", userController.handleEditUsers);
  router.delete("/api/delete-users", userController.handleDeleteUsers);

  router.get("/api/allcode", userController.getAllcode);

  router.get("/api/top-doctor-home", doctorController.getTopDoctorController);

  router.get("/api/get-all-doctors", doctorController.getAllDoctors);
  router.post("/api/save-infor-doctors", doctorController.postInforDoctor);

  return app.use("/", router);
};

module.exports = initWebRoutes;
