import pkg from 'jsonwebtoken';
const { verify } = pkg;
import { HTTP_UNAUTHORIZED } from "/Users/rishabhdadheech/Desktop/Dhruv/webd/express/backend/constants/http_status.js";

export default (req, res, next) => {
    const token = req.headers.access_token;
    if (!token) return res.status(HTTP_UNAUTHORIZED).send();

    try {
        const decodedUser = verify(token, process.env.JWT_SECRET);
        req.user = decodedUser;
        return next();
    } catch (error) {
        return res.status(HTTP_UNAUTHORIZED).send();
    }
};