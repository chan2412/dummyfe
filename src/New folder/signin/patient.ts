export class Patient{
    constructor(
        public username:string,
        public password:string,
        public phonenumber:string,
        public firstname:string,
        public lastname:string,
        public hospital:string
    ){
    }
}
export class Doctor{
    constructor(
        public firstname:string,
        public lastname:string,
        public degree:string,
        public speciality:string,
        public experience:string,
        public email:string,
        public gender:string,
        public address:string,
        public phonenumber:string,
        public username:string,
        public password:string,
        public hospital:string
    ){
    }
}
export class Labstaff{
    constructor(
        public firstname:string,
        public lastname:string,
        public degree:string,
        public speciality:string,
        public experience:string,
        public email:string,
        public gender:string,
        public address:string,
        public phonenumber:string,
        public username:string,
        public password:string,
        public hospital:string
    ){
    }
}
export class signin {
    constructor(
        public username:string,
        public password:string,
        public role:string,
        public hospital:string
    ) {
        
    }
}
export class DignosisReport {
    constructor(
        public patient_username:string,
        public labstaff_username:string,
        public patient_gender:string,
        public patient_age:string,
        public pregnancies:string,
        public glucose:string,
        public blood_pressure:string,
        public skin_thickness:string,
        public bmi:string,
        public diabetespedigreefunction:string,
        public outcome:string,
    ) {
        
    }
}
export class changepassword{
    constructor(
        public Currentpassword:string,
        public Newpassword:string,
        public Confirmpassword:string,
    ){
    }
}