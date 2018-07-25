/**
 * Created by prince on 23/04/18.
 */
import jwt from 'jsonwebtoken';
import userService from '../services/user.service';

export function verifyToken (req, res, next) {
    var token = req.header('authorization');

    if(typeof token != "undefined"){
        var decoded = jwt.verify(token, 'secretKey');
        var id = decoded.id;
        userService.findById(id, (err, data) => {
            if(err){
                next(err);
            }else {
                req.user = data
                next();
            }
        })
    }else{
        res.sendStatus(403)
    }
}

