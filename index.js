const express=require("express");
const app=express();

app.use(express.json());

app.post("/process",(req,res)=>{
    const data=req.body;

    if(!data || !Array.isArray(data.array)){
        return res.status(400).json({status:'Error',message:'Invalid Input'});
    }
    // const inputArray=data.array;

    const even=[];
    const odd=[];
    const alphabets=[];

    data.array.forEach((item) => {
        if(typeof item === 'number'){
            if(item % 2 === 0){
                even.push(item);
            }
            else{
                odd.push(item);
            }
        }
        else if(typeof item === 'string' && /^[A-Za-z]+$/.test(item)){
            alphabets.push(item.toUpperCase());
        }
    });
    res.json({
        status: 'success',
        user_id: 12345,
        email_id: 'user@example.com',
        college_roll_number: 'CRN2024001',
        even_numbers: even,
        odd_numbers: odd,
        alphabets: alphabets,
    });
});

app.listen(3000,()=>{
    console.log("Port connected");
});