import type { Request, Response } from "express"
import UserService from "../services/user.service"

const userService = new UserService()
const createUser = async (req: Request, res: Response) => {
    try {
        const user = await userService.createUser(req.body);
        return res.status(201).json({
            message: "User created successfully",
            data: user
        })
    } catch (error) {
        console.log("Something went wrong in User Controller");
        throw error;
    }

}

export {
    createUser,
}