import express, { Request, Response } from "express";

const router = express.Router();

router.get("/", (req: Request, res: Response) => {
    res.send("Olá, mundo");
});

router.get("/contact", (req: Request, res: Response) => {
    res.send("Área de contato");
});

export default router;
