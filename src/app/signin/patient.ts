export class Patient{
    constructor(
        public firstname:string,
        public lastname:string,
        public email:string,
        public gender:string,
        public address:string,
        public age:string,
        public disease:string,
        public weight:string,
        public height:string,
        public phonenumber:string,
        public emergencynumber:string,
        public username:string,
        public password:string,
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

export class changepassword{
    constructor(
        public Currentpassword:string,
        public Newpassword:string,
        public Confirmpassword:string,

    ){}
}

export class DignosisReport {
    constructor(
        public patient_username:string,
        public labstaff_username:string,
        public patient_gender:string,
        public patient_age:string,
        public pregnancies:string,
        public glucose:string,
        public insulin:string,
        public blood_pressure:string,
        public skin_thickness:string,
        public bmi:string,
        public diabetespedigreefunction:string,
        public outcome:string,
    ) {
        
    }

}


export interface PatientRecord{
    firstname:string,
    lastname:string,
    email:string,
    gender:string,
    address:string,
    age:string,
    disease:string,
    weight:string,
    height:string,
    phonenumber:string,
    emergencynumber:string,
    username:string,
    password:string,
    hospital:string
}

export class Healthrec{
    constructor(
        public record_id:string,
        public hospital:string,
        public patient:string,
        public doctor:string,
        public previousprb:string,
        public previousmediprb:string,
        //public visited_date_and_time
        public labtesttaken:string,
        public report_id:string,
        public currentprb:string,
        public plannedmedication:string,
        public otherdetail:string

    ){}

}



export class Alzheimer {
    constructor(
        public age:string,
        public gender:string,
        public memory_loss:string,
        public mood_swings:string,
        public changes_in_sleeping_habits:string,
        public depression:string,
        public apathy:string,
        public hospital:string,
        public patient_username:string,
        public docType:string,
        public disease:string,
    ) {
        
    }

}

export class Asthma {
    constructor(
        public age:string,
        public gender:string,
        public chest_tightness_or_pain:string,
        public wheezing:string,
        public coughing:string,
        public shortness_of_breathe:string,
        public hospital:string,
        public patient_username:string,
        public docType:string,
        public disease:string,
    ) {
        
    }

}

export class Cirrhosis {
    constructor(
        public n_days:string,
        public status:string,
        public drug:string,
        public age:string,
        public sex:string,
        public hepatomegaly:string,
        public spiders:string,
        public edema:string,
        public bilirubin:string,
        public cholesterol:string,
        public albumin:string,
        public copper:string,
        public alk_phos:string,
        public sgot:string,
        public tryglicerides:string,
        public platelets:string,
        public prothrombin:string,
        public stage:string,
        public hospital:string,
        public patient_username:string,
        public docType:string,
        public disease:string,
    ) {
        
    }

}

export class Cold {
    constructor(
        public age:string,
        public gender:string,
        public cough:string,
        public throat_Infection:string,
        public sneezing:string,
        public nasal_congestion:string,
        public cold:string,
        public hospital:string,
        public patient_username:string,
        public docType:string,
        public disease:string,
    ) {
        
    }

}

export class Diabetes {
    constructor(
        public pregnancies:string,
        public glucose:string,
        public bloodpressure:string,
        public skinthickness:string,
        public insulin:string,
        public bmi:string,
        public diabetespedigreeFunction:string,
        public age:string,
        public outcome:string,
        public hospital:string,
        public patient_username:string,
        public docType:string,
        public disease:string,
    ) {
        
    }

}

export class Diarrhea {
    constructor(
        public age:string,
        public gender:string,
        public vomiting:string,
        public abdominal_cramps_or_pain:string,
        public blood_in_stool:string,
        public fever:string,
        public bloating:string,
        public hospital:string,
        public patient_username:string,
        public docType:string,
        public disease:string,
    ) {
        
    }

}

export class Fever {
    constructor(
        public temperature:string,
        public age:string,
        public cold:string,
        public body_pain:string,
        public cough:string,
        public fever:string,
        public hospital:string,
        public patient_username:string,
        public docType:string,
        public disease:string,
    ) {
        
    }

}

export class Heart {
    constructor(
        public age:string,
        public sex:string,
        public cp:string,
        public trestbps:string,
        public chol:string,
        public fbs:string,
        public restecg:string,
        public thalach:string,
        public exang:string,
        public oldpeak:string,
        public slope:string,
        public ca:string,
        public thal:string,
        public target:string,
        public hospital:string,
        public patient_username:string,
        public docType:string,
        public disease:string,
    ) {
        
    }

}

export class Hiv {
    constructor(
        public age:string,
        public gender:string,
        public rapid_weightloss:string,
        public extreme_tiredness:string,
        public prolonged_swelling:string,
        public sores_of_mouth_anus_or_genitals:string,
        public fever:string,
        public hospital:string,
        public patient_username:string,
        public docType:string,
        public disease:string,
    ) {
        
    }

}

export class Lungcancer {
    constructor(
        public gender:string,
        public age:string,
        public smoking:string,
        public yellow_fingers:string,
        public anxiety:string,
        public peer_pressure:string,
        public chronic_disease:string,
        public fatigue:string,
        public allergy:string,
        public wheezing:string,
        public alcohol_consuming:string,
        public shortness_of_breath:string,
        public swallowing_difficulty:string,
        public chest_pain:string,
        public lung_cancer:string,
        public hospital:string,
        public patient_username:string,
        public docType:string,
        public disease:string,
    ) {
        
    }

}

export class Malaria {
    constructor(
        public age:string,
        public gender:string,
        public fever:string,
        public fatigue:string,
        public shivering_or_sweating:string,
        public muscle_pain:string,
        public hospital:string,
        public patient_username:string,
        public docType:string,
        public disease:string,
    ) {
        
    }

}

export class Stomachcancer {
    constructor(
        public age:string,
        public gender:string,
        public nausea:string,
        public indigestion:string,
        public heartburn:string,
        public bloating:string,
        public stomach_pain:string,
        public unIntentional_weight_loss:string,
        public hospital:string,
        public patient_username:string,
        public docType:string,
        public disease:string,
    ) {
        
    }

}

export class StrokeDatabase {
    constructor(
        public gender:string,
        public age:string,
        public hypertension:string,
        public heart_disease:string,
        public ever_married:string,
        public work_type:string,
        public Residence_type:string,
        public avg_glucose_level:string,
        public bmi:string,
        public smoking_status:string,
        public stroke:string,
        public hospital:string,
        public patient_username:string,
        public docType:string,
        public disease:string,
    ) {
        
    }

}

export class Tuberculosis {
    constructor(
        public age:string,
        public gender:string,
        public loss_of_appetite:string,
        public chills:string,
        public night_sweats:string,
        public fever:string,
        public fatigue:string,
        public hospital:string,
        public patient_username:string,
        public docType:string,
        public disease:string,
    ) {
        
    }

}
