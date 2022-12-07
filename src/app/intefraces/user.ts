export class User {
    id:number = 0;
    firstname: string = "";  
    lastname: string = "";
    image: string ="" ;
    email?: string =  "";
    classroom?: string = "";
    promotion?: string = "";
    level?: string = "";
}

export interface Image {
    id:number;
    image:string;
}
