const express=require ('express')
const app=express();

const middleware1=(req,res,next)=>{
    console.log("midleware1")
    next()
}

const middleware2=(req,res,next)=>{
    console.log("midleware 2")
    next()
}
app.use(middleware2)

app.get('/link1',middleware1,(req,res)=>{
    res.send("<h1>link with middleware 1 and 2 <h1>")
})

app.get('/link2',(req,res)=>{
    res.send("<h1>link2 with middleware2 <h1>")
})
app.get('/link3',(req,res)=>{
    res.send("<h1>link3 with middleware2 <h1>")
})


app.get('/link4',middleware1,(req,res)=>{
    res.send("<h1>link4 with middleware 1 and 2 <h1>")
})

app.listen(5000,()=>{
    console.log("server started")
})