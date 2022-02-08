import express from "express";
import homeController from "../controllers/homeController";
import userController from "../controllers/userController";

let router = express.Router();

let initWebRoutes = (app) => {
  router.get("/", homeController.getHomePage);
  router.get("/about", homeController.getAboutPage);
  router.get("/crud", homeController.getCRUD);

  router.post("/post-crud", homeController.postCRUD);
  router.get("/get-crud", homeController.displayGetCRUD);
  router.get("/edit-crud", homeController.getEditCRUD);

  router.post("/api/login", userController.handleLongin);
  router.get("/api/get-all-users", userController.handleGetAllUsers)
  router.post('/api/create-new-users',userController.handleCreateUser)
  router.put("/api/edit-users",userController.handleEditUsers)
  router.delete("/api/delete-users",userController.handleDeleteUsers)

  return app.use("/", router);
};

module.exports = initWebRoutes;
