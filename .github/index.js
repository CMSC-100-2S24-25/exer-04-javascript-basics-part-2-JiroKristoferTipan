//imports
import { appendFileSync } from 'node:fs';
import { v1 as uuidv1 } from 'uuid';
import isEmail from 'validator/lib/isEmail.js';

const generateUniqueID = (fname, lname) => {
    //get 1st letter of 1st name, full last name and random 8 long alphanumeric
    var ID1 = fname[0];
    var ID2 = lname;
    var ID3 = uuidv1().substring(0,8);

    //concatenate values and return
    var newID = ID1 + ID2 + ID3;
    return newID;
}

const addAccount = (fname, lname, email, age) => {
    //make sure all input present
    if (fname == null||lname == null||email == null||age == null){
        return false;
    }
    //check if email provided
    if (!(isEmail(email))){
        return false;
    }
    //check if 18+
    if(!(age >= 18)){
        return false;
    }
    //assuming all conditions met, create user info and save
    var userinfo = fname+","+lname+","+email+","+age+","+generateUniqueID(fname, lname)+"\n";
    //some error handling
    try {
    appendFileSync("users.txt", userinfo);
    console.log("Added info to file!");
    } catch (err) {
    console.log("Error with adding info!");
    } 
    return true;

}

export {generateUniqueID, addAccount}