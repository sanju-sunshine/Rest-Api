const mongoose = require("mongoose")
mongoose.set('strictQuery', false)
mongoose.set('strictQuery', true)
mongoose.connect("mongodb://localhost:27017/olympic", {
    // useNewUrlParser: true,
    // useCreateIndex: true,
    // useUnifiedtopology: true,
}).then(() => {
    console.log("MongoDataBase Connected Succesfully")
}).catch((e) => {
    console.log("Connection Not Establised Succesfully")
})