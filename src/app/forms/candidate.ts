export class Candidate {

    public passwordsMatch:boolean = false

    constructor(
        public fname:string,
        public lname:string,
        public email:string, 
        public password:string,
        public password1:string,
    ) { }

    checkPasswords():boolean {
        if(this.password == this.password1) {
            this.passwordsMatch = true
            return true
        } 
        else {
            this.passwordsMatch = false
            return false
        }
    }

    print():string {
        return `
            First Name: ${this.fname},
            Last Name: ${this.lname},
            Email: ${this.email},
            Password: ${this.password},
            Password1: ${this.password1}
        `
    }
    
}