import express from "express";
const app = express();

app.get('/', (req, res)=>{

    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    const today = new Date();
    const day = weekday[today.getDay()];

    let type = "a weekend"
    let adv = "It's time to have fun"
    
    if(today === 0 || today === 6){
        type = "a weekend"
        adv = "It's time to have fun"
    } else {
        type = "a weekday"
        adv = "It's time to work hard"
    }

    res.render("index.ejs", {
        dayType: `${type}`,
        advice: `${adv}`,
        realday: `${day}`
    });
})



app.listen(3000, ()=>(
    console.log("listening on port 3000")
))