

import { Request, Response } from "express";

const burnController = (req: Request, res: Response) => {
    try {
        res.status(200).json({
            message: 'Burn' 
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error in burning"
        });
    }
}

export default burnController;