import passport from 'passport'
import {Strategy as LocalStrategy} from 'passport-local'
import bcrypt from 'bcrypt'
import { users } from '../models/authmodel.js'
const localstrategy = new LocalStrategy(
    {usernameField:"email"},
    async(email,password,done)=>{
        try
        {
            const user= await users.findOne({email});
            if(!user)
            {
                return done(null,false,{message:"user not found"});
            }
            const ismatch= await bcrypt.compare(password,user.password);
            if(!ismatch)
            {
               return done(null,false,{message:"password incorrect"});
            }
           return done(null,user)

        }
        catch(err)
        {
           return done(err);
        }


    }

);
passport.use(localstrategy);
passport.serializeUser((user,done)=>{
    done(null,user_id);

})
passport.deserializeUser(async(id,done)=>{
    const user=await users.findById(id);
    done(null,user);
    
})