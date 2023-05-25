// src/controllers/UserController.ts
import {
  JsonController,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from "routing-controllers";
import { UserService } from "../services/UserService";
import { Inject, Service } from "typedi";

// src/controllers/UserController.ts
import { User } from "../types/User";

@JsonController("/users")
@Service()
export class UserController {
  constructor(private userService: UserService) {}

  @Get("/")
  getAll(): Promise<User[]> {
    return this.userService.getAll();
  }

  @Get("/:id")
  getOne(@Param("id") id: number): Promise<User> {
    return this.userService.getOne(id);
  }

  @Post("/")
  create(@Body() user: User): Promise<User> {
    return this.userService.create(user);
  }

  @Put("/:id")
  update(@Param("id") id: number, @Body() user: User): Promise<User> {
    return this.userService.update(id, user);
  }

  @Delete("/:id")
  delete(@Param("id") id: number): Promise<void> {
    return this.userService.delete(id);
  }
}
