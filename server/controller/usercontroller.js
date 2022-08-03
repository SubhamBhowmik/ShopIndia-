
import User from '../model/userSchema.js'


export const userSignup=async(req,res)=>{
    try {

        const exist=await User.findOne({username:req.body.username});
        if(exist){
            return res.status(401).json("username already exist");
        }
        const user=req.body;
        const newUser=new User(user);
        await newUser.save();
        res.status(200).json("signup api successfull");
    } catch (error) {
        console.log("error in usersignup",error);
    }
  
}

export const userLogIn = async (request, response) => {
    try {
        let user = await User.findOne({ username: request.body.username, password: request.body.password });
        if(user) {
            return response.status(200).json(`${request.body.username} login successfull`);
        } else {
            return response.status(401).json('Invalid Login');
        }

    } catch (error) {
        response.json('Error: ', error.message);        
    }
}