import {
    IsString,
    IsNotEmpty,
    IsEmail,
    IsDate,
    IsEmpty
} from 'class-validator';

export class LoginDTO {
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsEmpty()
    @IsString()
    password: string;
    constructor(data: any){
        this.email = data.email;
        this.password = data.password;
    }
}