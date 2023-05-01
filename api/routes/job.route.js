import express from "express";
import {
    createJob,
    deleteJob,
    getJob,
    getJobs,
}
from "../controllers/job.controller.js"
import {verifyToken} from "../middleware/jwt.js" 

const router = express.Router()

router.post("/" , verifyToken, createJob )
router.delete("/:id" , verifyToken, deleteJob )
router.get("/single/:id" , verifyToken, getJob )
router.get("/" , verifyToken, getJobs )


export default router;