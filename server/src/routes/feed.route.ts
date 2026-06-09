import { Router } from "express";

const router = Router();
// same as express.Router() as in app.ts, but clearer this way as this file is only using Route

router.get('/', (req, res) => {

})

export default router;