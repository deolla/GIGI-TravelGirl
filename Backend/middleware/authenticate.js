import jwt from 'jsonwebtoken';

const authenticate = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decoded = jwt.verify(token, process.env.JWT_KEY);

        req.userData = decoded;
        next();

    } catch (error) {
        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({
                message: 'Token expired!'
            });
        }else{
            return res.status(401).json({
                message: 'Authentication failed!'
            });
        }
    }
};

export default authenticate;
