let express = require('express');
const PORT = process.env.PORT || 80;
let app = express()

app.get("/",(req,res) =>{
    res.send("Hello Parth Zala")
})

app.use((req,res)=>{
    res.status(400).send("Not Found")
});

app.listen(PORT,()=>{
    console.log(`Listing on port ${PORT}`);
})