var express = require("express"), 
http = require("http"),
app = express(),
server = http.createServer(app),
path = require('path'); 
var querystring = require('querystring')
var nodemailer = require('nodemailer');
var smtpTransport = nodemailer.createTransport('smtps://airvisioncolombia%40gmail.com:luisfelipeholguin@smtp.gmail.com'
);

server.listen(8000);

app.use(express.static(path.join(__dirname, "public")));
app.set("views",__dirname + "/views");


app.get("/", (req,res)=>{
	res.sendFile(__dirname+"/views/index.html");
	//res.sendFile("/Users/farleyetc/Documents/chatNodeJSSocketIO/views/index.html");
	//res.send("<h1>HOLA</h1>");
}); 

app.post("/sendmail", (req,res)=>{

	

    var info = '';
    req.on('data', function(parcialdata){
        info += parcialdata;
    });

    req.on('end', function(){
        var formulario = querystring.parse(info);
        var name = formulario['name'];
		var email = formulario['email'];
		var asunto = formulario['subject'];
		var msg = formulario['message'];

        var mivariable = '<p><b>Asunto: </b>'+ asunto +
		'.</p><p><b>Nombre: </b>'+ name+'.</p><p><b>Email: </b>'+email+
		'</p>'


		var cuerpohtml = '<tbody><tr><td><table width="100%" border="0" cellspacing="0" cellpadding="0"><tbody><tr><td align="left"></tr></tbody></table></td></tr><tr height="16"></tr><tr><td><table bgcolor="#E6E6E6" width="100%" border="0" cellspacing="0" cellpadding="0" style="min-width:332px;max-width:600px;border:1px solid #e0e0e0;border-bottom:0;border-top-left-radius:3px;border-top-right-radius:3px"><tbody><tr><td height="72px" colspan="3"></td></tr><tr><td width="32px"></td><td style="font-family:Roboto-Regular,Helvetica,Arial,sans-serif;font-size:24px;color:#000000;line-height:1.25">Email proporcionado del portal web de Air Vision</td><td width="32px"></td></tr><tr><td height="18px" colspan="3"></td></tr></tbody></table></td></tr><tr><td><table bgcolor="#FAFAFA" width="100%" border="0" cellspacing="0" cellpadding="0" style="min-width:332px;max-width:600px;border:1px solid #f0f0f0;border-bottom:1px solid #c0c0c0;border-top:0;border-bottom-left-radius:3px;border-bottom-right-radius:3px"><tbody><tr height="16px"><td width="32px" rowspan="3"></td><td></td><td width="32px" rowspan="3"></td></tr><tr><td><table style="min-width:300px" border="0" cellspacing="0" cellpadding="0"><tbody><tr><td style="font-family:Roboto-Regular,Helvetica,Arial,sans-serif;font-size:13px;color:#202020;line-height:1.5">Hola, Air:</td></tr><tr><td style="font-family:Roboto-Regular,Helvetica,Arial,sans-serif;font-size:13px;color:#202020;line-height:1.5">'+msg+'<br><br><br><b>Informacion de usuario</b><br>'+ mivariable +'</td></tr><tr height="32px"></tr><tr><td style="font-family:Roboto-Regular,Helvetica,Arial,sans-serif;font-size:13px;color:#202020;line-height:1.5">Atentamente.<br><img src="https://docs.google.com/uc?export=download&id=0B4SBkDGHu2xWZGEtSEJlMXRiX1E" alt="Air Vision" style="width:160px;height:80px;"></td></tr><tr height="16px"></tr><tr><td><table style="font-family:Roboto-Regular,Helvetica,Arial,sans-serif;font-size:12px;color:#b9b9b9;line-height:1.5"><tbody><tr></tr></tbody></table></td></tr></tbody></table></td></tr><tr height="32px"></tr></tbody></table></td></tr><tr height="16"></tr><tr><td style="max-width:600px;font-family:Roboto-Regular,Helvetica,Arial,sans-serif;font-size:10px;color:#bcbcbc;line-height:1.5"></td></tr><tr><td><table style="font-family:Roboto-Regular,Helvetica,Arial,sans-serif;font-size:10px;color:#666666;line-height:18px;padding-bottom:10px"><tbody><tr><td>Te enviamos este correo para informarte actividad en el contacto de tu pagina web.</td></tr><tr><td><div style="direction:ltr;text-align:left"></div></td></tr></tbody></table></td></tr></tbody>'

    var mailOptions = {
        from:'AirvisionColombia',
        to:'airvisioncolombia@gmail.com',
        subject:'Portal web Air Vision', 
        text: 'hola mundo',
        html: cuerpohtml 
}

sendwebmail(mailOptions)
    });

    function sendwebmail(mailOptions){

        	smtpTransport.sendMail(mailOptions, function(err, res){
        if(err){
            console.log('err'+err);
        }else{
            console.log("msj enviado");
        }
         
    });

    };

   // console.log("datos: "+req.body.firstname);
    res.sendFile(__dirname+"/views/index.html");
});