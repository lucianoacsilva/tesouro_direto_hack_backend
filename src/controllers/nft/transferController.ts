

import { Request, Response } from "express";

const transferController = (req: Request, res: Response) => {
    try {
        res.status(200).json({
            message: 'Transfer' 
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error in transfering"
        });
    }
}

export default transferController;