import {saveUser, updateUser, deleteUser, login, findUser, findById} from '../../services/user.service'
import jwt from 'jsonwebtoken';

export function signup(req, res) {
    let body = req.body;
    saveUser(body, (err, data) => {
        if (err) {
            res.json(err);
        } else {
            res.json(data);
        }
    })
}

export function userLogin(req, res) {
    let body = req.body;
    let post = {
        'email': body.email,
        'password': body.password
    }

    login(post, (err, data) => {
        if (err) {
            res.json(err);
        } else {
            jwt.sign({id: data._id}, 'scecretKey', (err, token) => {
                var myToken = {
                    token: token
                }
                res.json(myToken);
            })
        }
    })
}


export function updateUsers(req, res) {
    let body = req.body;
    let userId = req.params.userId;

    let post = {
        'name': body.name,
        'age': body.age
    }
    updateUser(userId, post, (err, data) => {
        res.json(err || data);
    })
}


export function deleteUsers(req, res) {
    let userId = req.params.userId;
    deleteUser(userId, (err) => {
        if (err) {
            res.json(err);
        } else {
            res.json('delete successfully');
        }
    })
}

export function getUser(req, res) {
    findUser((err, data) => {
        if (err) {
            res.json(err);
        } else {
            res.json(data);
        }
    })
}
export function getUserById(req, res) {

    let userId = req.params.userId;
    findById(userId, (err, data) => {
        if (err) {
            res.json(err);
        } else {
            res.json(data);
        }
    })
}