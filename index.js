const express=require("express");
const app=express();

app.use(express.json());

app.post("/process",(req,res)=>{
    const data=req.body;

    if(!data || !Array.isArray(data.array)){
        return res.status(400).json({status:'Error',message:'Invalid Input'});
    }
    // const inputArray=data.array;

    const num=[];
    const alphabets=[];
    const low=[];

    data.array.forEach((item) => {
        if(typeof item === 'number'){
           num.push(item);
        }
        else if(typeof item === 'string' && /^[A-Za-z]+$/.test(item)){
            alphabets.push(item);
        }
        else if(typeof item === 'string' && /^[a-z]+$/.test(item)){
            low.push(item);
        }
    });
    res.json({
        status: "true",
        user_id: "john_doe_17091999",
        email_id: 'user@example.com',
        roll_number: "ABCD123",
        numbers: num,
        alphabets: alphabets,
        highest_lowercase_alphabet:low,
    });
});

app.listen(3000,()=>{
    console.log("Port connected");
});