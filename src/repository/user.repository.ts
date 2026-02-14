import { prisma } from "../config/prisma";
import type { registerInput } from "../validations/user.validation";


class UserRepository {
    async create(data: registerInput) {
        try {
            const user = await prisma.user.create({ data });
            return user;
        } catch (error) {
            console.log("Something went wrong in User Repository");
            throw error;
        }
    }
}

export default UserRepository;