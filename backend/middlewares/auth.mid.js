import pkg from 'jsonwebtoken';
const { verify } = pkg;
import { HTTP_UNAUTHORIZED } from "/Users/rishabhdadheech/Desktop/Dhruv/webd/express/backend/constants/http_status.js";

export default (req, res, next) => {
        return next();

};