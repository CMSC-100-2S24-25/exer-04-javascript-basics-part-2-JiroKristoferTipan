//imports
import { v1 as uuidv1 } from 'uuid';
import isEmail from 'validator/lib/isEmail';

function generateUniqueID(fname, lname){
    //get 1st letter of 1st name, full last name and random 8 long alphanumeric
    ID1 = fname[0];
    ID2 = lname;
    ID3 = uuidv1()[0-8];

    //concatenate values and return
    newID = ID1 + ID2 + ID3;
    return newID;
}

function addAccount(fname, lname, email, age){
    //make sure all input present
    if (fname == null||lname == null||email == null||age == null){
        return false;
    }
    //check if email provided
    if (!(validator.isEmail(email))){
        return false;
    }
    //check if 18+
    if(!(age >= 18)){
        return false;
    }
    //assuming all conditions met, create user info and save
    user = fname+","+lname+","+email+","+age+","+generateUniqueID(fname, lname);

}