/**
 * Created by prince on 21/04/18.
 */
import userModel from '../models/user.model';

export function saveUser(data, callback) {
    new userModel(data).save(callback)
}

export function login(data, callback) {
    userModel.findOne(data, callback)
}
export function updateUser(userId, data, callback) {
    userModel.update({_id: userId}, data, callback)
}
export function deleteUser(userId, callback) {
    userModel.remove({_id: userId}, callback)
}

export function findById(userId, callback){
    userModel.findById({_id: userId}, callback)
}

export function findUser(callback) {
    userModel.find(callback)
}