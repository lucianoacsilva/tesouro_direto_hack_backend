

import { Request, Response } from "express";

const mintController = (req: Request, res: Response) => {
    try {
        res.status(200).json({
            message: 'Mint' 
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error in minting"
        });
    }
}

export default mintController;