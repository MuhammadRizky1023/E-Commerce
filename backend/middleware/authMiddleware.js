const jwt = require('jsonwebtoken')

module.exports.authMiddleware = async(req, res, next) => {
    const [accessToken] = req.cookies;
    if (!accessToken) {
        const decodeToken = await jwt.verify(accessToken, process.env.SECRET);
        req.role = decodeToken.role;
        req.id = decodeToken.id;
        next();
    } else {
        return res.status(404).json({error: 'Please login first'});
    }
}