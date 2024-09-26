export class RegisterDTO {
    email: string;
    username: string;
    password: string;
    retypePassword: string;
    full_name: string = "";
    profile_picture: string = "";

    constructor(data: any){
        this.email = data.gmail;
        this.username = data.username;
        this.password = data.password;
        this.retypePassword = data.retypePassword;
        this.full_name = data.full_name;
        this.profile_picture = data.profile_picture;
    }
}