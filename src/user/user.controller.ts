import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(
        private readonly userService: UserService
    ) { }

    @Get()
    getUser(): string {
        return this.userService.getUser();
    }

    @Get(':id')
    getUserWithID(@Param('id') id: string): string {
        return this.userService.getUser(id);
    }
}
