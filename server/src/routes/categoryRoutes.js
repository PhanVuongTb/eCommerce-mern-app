import express from "express";
import { isAdmin, requireSignIn } from "./../middlewares/authMiddleware.js";
import {
  categoryControlller,
  createCategoryController,
  deleteCategoryCOntroller,
  singleCategoryController,
  updateCategoryController,
} from "./../controllers/categoryController.js";

const router = express.Router();

//routes
// create category
router.post("/category", requireSignIn, isAdmin, createCategoryController);

//update category
router.put("/category/:id", requireSignIn, isAdmin, updateCategoryController);

//getALl category
router.get("/category", categoryControlller);

//single category
router.get("/category/:slug", singleCategoryController);

//delete category
router.delete(
  "/category/:id",
  requireSignIn,
  isAdmin,
  deleteCategoryCOntroller
);

export default router;
