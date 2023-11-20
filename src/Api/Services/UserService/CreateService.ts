import { UserInterface } from "./User";
import bcryptjs from "bcryptjs";
import { v4 as uuid } from "uuid";
import { User } from "../../Model/User";
import { Wallet } from "../../Model/Wallet";

class CreateService {

  async create(cpf:string, email:string, password:string): Promise<void> {
    try {

      const newUuid = uuid();
      const hashedPassword = bcryptjs.hashSync(password,10);

      const user = await User.create({
        cpf: cpf,
        email: email,
        uuid: newUuid,
        password: hashedPassword
      });

      await Wallet.create({
        balance: 0,
        user_id: user.id
      })
      console.log(user)


    } catch (e) {
      console.log(e)
      throw new Error()
    }
  }
}

export default new CreateService;