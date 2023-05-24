// src/repositories/UserRepository.ts
import { User } from "../types/User";

export class UserRepository {
  // 仮のデータベース代わりに配列を使います。
  private users: User[] = [
    { id: 1, name: "User 1" },
    { id: 2, name: "User niko" },
  ];

  getAll(): Promise<User[]> {
    return Promise.resolve(this.users);
  }

  getOne(id: number): Promise<User> {
    const user = this.users.find((user) => user.id === id);
    if (!user) throw new Error("User not found");
    return Promise.resolve(user);
  }

  create(user: User): Promise<User> {
    this.users.push(user);
    return Promise.resolve(user);
  }

  update(id: number, newUser: User): Promise<User> {
    const userIndex = this.users.findIndex((user) => user.id === id);
    if (userIndex === -1) throw new Error("User not found");
    this.users[userIndex] = newUser;
    return Promise.resolve(newUser);
  }

  delete(id: number): Promise<void> {
    const userIndex = this.users.findIndex((user) => user.id === id);
    if (userIndex === -1) throw new Error("User not found");
    this.users.splice(userIndex, 1);
    return Promise.resolve();
  }
}
