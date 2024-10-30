import express, { Router } from "express";
import { getUsersForSidebar } from "../controllers/user.controller.js";
import protectRoute from "../middleware/protectRoute.js";

const router = new Router();

router.get("/",protectRoute, getUsersForSidebar)

export default router