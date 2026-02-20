import { User, UserModel } from "./user.types";

export default class UserRepository {
    constructor(private userModel: UserModel) {}

    async registerUser(user: Partial<User>) {
        const createdUser = new this.userModel(user)
        await createdUser.save()
    }
}