import express from "express";
import {
  createProductController,
  deleteProductController,
  getProductController,
  getSingleProductController,
  productPhotoController,
  updateProductController,
} from "../controllers/productController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import formidable from "express-formidable";

const router = express.Router();

//routes
router.post(
  "/products",
  requireSignIn,
  isAdmin,
  formidable(),
  createProductController
);
//routes
router.put(
  "/products/:id",
  requireSignIn,
  isAdmin,
  formidable(),
  updateProductController
);

//get products
router.get("/products", getProductController);

//single product
router.get("/products/:slug", getSingleProductController);

//get photo
router.get("/products-photo/:id", productPhotoController);

//delete rproduct
router.delete("/products/:id", deleteProductController);

export default router;
