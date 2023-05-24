// src/services/UserService.ts
import { UserRepository } from "../repositories/UserRepository";

import { User } from "../types/User";

export class UserService {
  constructor(private userRepository: UserRepository) {}

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
