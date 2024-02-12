import express from 'express' 
import path from 'path'
// Create an express app
const app = express()
const router = express.Router()
app.use(
    router, 
    express.static('./static')
)
const port = +process.env.PORT || 4000
// Routers: express
router.get('^/$|/express', display, (req, res)=>{
    res.status(200).sendFile(path.resolve('./static/html/index.html' ))
})
router.get('/about', (req, res)=>{
    res.json({
        status: res.statusCode,
        msg: 'About Page'
    })
})
// Middleware
function display(req, res, next){
    console.log("Hello there");
    next()
}

app.listen(port)