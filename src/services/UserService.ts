// src/services/UserService.ts
import { User } from "../types/User";
import { UserRepository } from "../repositories/UserRepository";
import { Service, Inject } from "typedi";

@Service()
export class UserService {
  constructor(@Inject() private userRepository: UserRepository) {}

  getAll(): Promise<User[]> {
    return this.userRepository.getAll();
  }

  getOne(id: number): Promise<User> {
    return this.userRepository.getOne(id);
  }

  create(user: User): Promise<User> {
    return this.userRepository.create(user);
  }

  update(id: number, user: User): Promise<User> {
    return this.userRepository.update(id, user);
  }

  delete(id: number): Promise<void> {
    return this.userRepository.delete(id);
  }
}
