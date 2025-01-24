const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(logger);

app.get("/", (req,res) => {
       res.render('index', { text: "God is good all the time"});
});

const userRouter = require('./routes/users');

app.use("/users", userRouter);

function logger(req, res, next) {
    console.log(req.originalUrl);
    next();
}
app.listen(4000);