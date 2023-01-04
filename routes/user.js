const express = require('express')
const UserModel = require('../models/user')
const bcrypt = require ('bcryptjs')

const router = express.Router()


router.get('/', async (req, res) => {
    try {
        const users = await UserModel.find()
        res.send(users)
    } catch(error) {
        //console.log(error);
        res.status(200).send('Cannot create')
    }    
})

// Render a sign-up form
router.get('/user/signup', (req, res) => {
    res.render('Users/Signup')
})

router.post('/user/signup', async (req, res) => {
    try {
        // checking if user already exists
        const existingUser = await UserModel.find({email: req.body.email})
        
        // checking if there is an object in the array (idx 0)
        if (existingUser[0]) {
            return res.send('User already exists!')
        }
        
    // === CREATE a new user
    const SALT = await bcrypt.genSalt(10) // mixes with password to make a hash that prevents predictability
    req.body.password = await bcrypt.hash (req.body.password, SALT)
    const user = await UserModel.create(req.body)
        res.redirect('/user/Signin')
    } catch(error) {
        //console.log(error);
        res.status(200).send('Cannot POST')
    }

})

// Render the sign-in form
router.get('/user/signin', (req, res) => {
    res.render('Users/Signin')
})

// Sign a User in
router.post('/user/signin', async (req, res) => {
    try{
        // find user by email
        const user = await UserModel.findOne({email: req.body.email})
        if (!user) return res.send('Incorrect email or password')
        // checks if passwords match
        const decodedPassword = await bcrypt.compare(req.body.password, user.password)
        if (!decodedPassword) return res.send('Incorrect email or password')
        // set the user session 
        // create new username in session object using user info from database
        req.session.username = user.username
        req.session.loggedIn = true
        res.redirect('/product')
    } catch (error){

    }
})

// Sign user out and destroy session
router.get('/user/signout', (req, res) => {
    try {
        req.session.destroy()
        res.redirect('/')
    } catch (error) {
        //console.log(error);
    }
})



module.exports = router