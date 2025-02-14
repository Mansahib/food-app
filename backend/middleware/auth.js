import jwt from 'jsonwebtoken';

const authMiddleware=async (req, res, next) => {
const {token}=req.headers;
      if(!token){
        return res.json( {success:false,message: 'No token provided'});
      }
      try {
        const token_decode = jwt.verify(token, process.env.JWt_SECRET);
        req.body.userId= token_decode.id;
        next();
        } catch (error) {
            return res.json( {success:false,message: 'Invalid token'});
            }


}

export default authMiddleware;