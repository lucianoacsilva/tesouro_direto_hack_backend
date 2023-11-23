

import { Request, Response } from "express";

const helloController = (req: Request, res: Response) => {
    res.json({ message: 'hello world with Typescript' })
}

export default helloController;