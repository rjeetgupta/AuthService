import UserRepository from "../repository/user.repository";
import type { registerInput } from "../validations/user.validation";


class UserService {
    private userRepository: UserRepository;
    
    constructor() {
        this.userRepository = new UserRepository();
    }

    async createUser(data: registerInput) {
        try {
            const response = await this.userRepository.create(data)
            return response;
        } catch (error) {
            console.log("Something went wrong in User Service");
            throw error;
        }
    }
}

export default UserService;