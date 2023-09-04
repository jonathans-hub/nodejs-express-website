const express = require('express')
const path = require('path')


const server= express()

// routeHandlers
const aboutRouteHandler =(req, res)=>{
 const aboutPath = path.join(__dirname, 'public', 'about.html')
 res.sendFile(aboutPath)
}
const contactRouteHandler =(req, res)=>{
 const contactPath = path.join(__dirname, 'public', 'contact.html')
 res.sendFile(contactPath)
}
const servicesRouteHandler =(req, res)=>{
 const servicesPath = path.join(__dirname, 'public', 'services.html')
 res.sendFile(servicesPath)
}

// middlewares
server.use(express.static('public'))

// routes
server.get('/about', aboutRouteHandler)
server.get('/contact', contactRouteHandler)
server.get('/services', servicesRouteHandler)

server.listen(3002, ()=>console.log('server is ready'))