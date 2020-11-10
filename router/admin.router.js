//admin-bro dependencies
const AdminBro = require('admin-bro')
const adminBroExpress = require('admin-bro-expressjs')
const adminBroMongoose = require('admin-bro-mongoose')

const mongoose = require('mongoose')

//Access AdminPanel on Express server
AdminBro.registerAdapter(adminBroMongoose)

//Importing adminSchema
const adminSchema = require('../models/admin')

const contentNavigation = {
    name: 'Manager',
    icon: 'Accessibility',
  }

const adminBro = new AdminBro({
    //Accessing all the mongoose databases
    databases: [mongoose],

    //Access specified models
    resources: [{
        resource: adminSchema,
        options: { navigation: contentNavigation }
    }],
    rootPath: '/admin',

    //Editing AdminPanel
    branding: {
        logo: 'https://www.qries.com/images/banner_logo.png',
        companyName: 'TutORIAL'
    }
})

const ADMIN = {
    email: process.env.EMAIL || 'admin@gmail.com',
    password: process.env.PASSWORD || 'password'
}

//Choose any one of the below authentications
//Unauthenticated AdminPanel
const router = adminBroExpress.buildRouter(adminBro)

//Authenticated AdminPanel
// const router = adminBroExpress.buildAuthenticatedRouter(adminBro, {
//     cookieName : process.env.COOKIE_NAME || 'admin',
//     cookiePassword : process.env.COOKIE_PASSWORD || '123',
//     authenticate : async (email, password) => {
//         if(email === ADMIN.email && password === ADMIN.password){
//             return ADMIN
//         } else {
//             return null
//         }   
//     }  
// })

module.exports = router;