import { getCustomRepository, Repository } from "typeorm";
import { User } from "../entities/User";
import { UserRepository } from "../repositories/UsersRespository";

class UserService {
  private usersRepository: Repository<User>;

  constructor() {
    this.usersRepository = getCustomRepository(UserRepository);
  }

  async create(email: string) {
    // Verificar se o usuario existe

    const userExistis = await this.usersRepository.findOne({
      email,
    });

    // Se existir, return user
    if (userExistis) {
      return userExistis;
    }

    // Se não existir, salvar no DB

    const user = this.usersRepository.create({
      email,
    });

    await this.usersRepository.save(user);

    return user;
  }
}

export { UserService };
