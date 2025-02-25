//imports
import { v1 as uuidv1 } from 'uuid';

function generateUniqueID(fname, lname){
    //get 1st letter of 1st name, full last name and random 8 long alphanumeric
    ID1 = fname[0];
    ID2 = lname;
    ID3 = uuidv1()[0-8];

    //concatenate values and return
    newID = ID1 + ID2 + ID3;
    return newID;
}

function addAccount(x){

}