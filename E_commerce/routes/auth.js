const express = require('express');
const User = require('../models/User');
const passport = require('passport');
const router = express.Router(); 

router.get('/register',(req,res)=>{
    res.render('auth/signup')
})
router.post('/register',async(req,res)=>{
    let {username,password,email,gender}=req.body;
    let user=new User({username,email,gender});
    let newUser=await User.register(user,password);
    req.flash('success' , `Welcome to CelestialCart ${username}`);
    res.redirect('/products');
});
router.get('/login',(req,res)=>{
    res.render('auth/login')
})

router.post('/login',
   passport.authenticate('local',{ 
   failureRedirect: '/login', failureMessage: true
   }),(req, res)=>{
   req.flash('success' , `Welcome back in CelestialCart`);
   res.redirect('/products'); 
});

router.get('/logout' , (req,res)=>{
    req.logout(()=>{
        req.flash('success' , 'Logged out successfully')
        res.redirect('/login');
    });
})







module.exports = router;

