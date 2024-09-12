
((express,server,body_parser,fs)=>{
    server.use(bodyParser.urlencodded({extended: true}));

    server.get("/",(req,res)=>{
        fs.readFile("./template/index.html","utf8",(err,results)=>{
            res.send(results);
        });
    });



    server.listen(8000,(err)=>{
        console.log(err || "server is ready at 8000...");
    })

})(
    require("express"),
    require("express"),
    require("body_parser"),
    require("fs")
);