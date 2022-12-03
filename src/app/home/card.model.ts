export class Card {
    id:number = 0;
    firstName: string = "";  
    lastName: string = "";
    image: string = "";
    email: string = "";
    constructor(firstName: string, lastName: string, image: string, email: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.image = image;
        this.email = email;
    }
}
