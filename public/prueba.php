<?php

   
	        	$destinatario = "airvisioncolombia@gmail.com";

	            // El asusnto del correo electronico
	            $asunto = "Correo airvisioncolombia"; 
	            // Aqui debe ir  el contenido de 
	            
	            $cuerpo = ' 
	            <html> 
	            <head> 
	            <title>Recuperar Contrase�a</title> 
	            </head> 
	            <body> 
	            <h1>Buen d�a. </h1> 
	            <p> 
	            <b>Usted ha solicitado una nueva Contrase�a</b><br/>. 
		           Nueva contrase�a:
	            </p> 
	            </body> 
	            </html>
	            '; 
            
	            $headers = "MIME-Version: 1.0\r\n"; 
	            $headers .= "Content-type: text/html; charset=iso-8859-1\r\n"; 

	            //direcci�n del remitente 
	            $headers .= "From: SimSena <simsena7@misena.edu.co>\r\n"; 

	            mail($destinatario,$asunto,$cuerpo,$headers); 
	           

    	
    

   

?>