/**
 * Created by prince on 21/04/18.
 */
import mongoose from 'mongoose';
let Schema = mongoose.Schema;

let userSchema = new Schema({
    name: {type: String},
    email: {type: String},
    password: {type: String},
    age: {type: Number},
    token: {type: String},
    status: {type: String, enum: ['Active', 'Deactive'], default: 'Active'}
});


var user = mongoose.model("user", userSchema)
export default user

