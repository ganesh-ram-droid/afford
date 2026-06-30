    import { OAuth2Client } from "google-auth-library";
    import { user } from "../Model/UserSchema.js";
import { log } from "../middleware/log.js";
        
        const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID)

    export const Oauth = async(req,res)=>{
        try {
           await log("backend","info","Controller","Oauth request Recived")
            const{credential}=req.body
            if(!credential)
            {
               return res.status(400).json({
                    msg:"Credentails Not Found"
                })
            }
            const token =await client.verifyIdToken({
                idToken:credential,
                audience:process.env.GOOGLE_CLIENT_ID
            })
            if(!token){
                return res.status(400).json({
                    msg:"Credentails Not Found"
                })
            }
            const payload =  token.getPayload()
            const {name,email,picture}=payload
            let data =await user.findOne({email})
            if(!data){
                data  = await user.create({
    name,
    email,
    picture
});

            }
            return res.status(200).json({
                success:true,
                message:"Login",
                user:data
            })
            
    

            
            
        } catch (error) {
            return res.status(500).json({
            success: false,
            message: error.message
        });
            
        }
    }