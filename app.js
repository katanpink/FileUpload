const express = require('express');
const multer = require('multer')
// const upload = multer({ dest: 'uploads/' })


const app = express();

app.set('views', './views');
app.set('view engine', 'ejs');

const storage = multer.diskStorage({
    destination: "./public/uploads",
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})

const upload = multer({ storage: storage })

app.get('/', (req, res) => {
    res.render('upload', {})
})

app.post('/upload', upload.single("uploaded_file"), (req, res) => {
    if(res.err){
        res.sendStatus(404)
    }
    else{
        console.log('You got that image')
    }
    console.log(req.file)
})


app.listen(3000, (req, res) => {
    console.log('This is a server')
})