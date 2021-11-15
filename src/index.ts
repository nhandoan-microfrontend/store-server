import express from 'express';
import routes from './routes';
import {connect} from 'mongoose';
import {config} from 'dotenv';

config();

const app = express();
const port = 8000;
connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    next();
})

;app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(routes);

app.use((error, req, res, next) => {
    let statusCode: number = 500;
    if (error.code) {
        statusCode = error.code
    }
    res.status(statusCode).json(error);
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
