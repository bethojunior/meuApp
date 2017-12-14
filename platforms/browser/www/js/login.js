document.addEventListener("DOMContentLoaded" , function(){
    document.getElementById("btnLogar").addEventListener("click" , function(){
        document.getElementById("gif").style.display = "block";
        document.getElementById("divBody").style.display = "none";
        
        var login = document.getElementById("login").value;
        var senha = document.getElementById("senha").value;

        // if(login == '' || senha == ''){
        //     alert("Preencha os dados corretamente");
        //     location.reload();
        // }
        console.log(login);
        console.log(senha);
        $.ajax({
            contentType: "text/plain",          
            url:"https://betho1.000webhostapp.com/dao/user.php",        
            method:"POST",              
            data: "login="+login+"senha="+senha, //dados
               success: function (result){   
                    //console.log(result);   
                        if(result === "success" ){  
                            //location.href="http://gmail.com";
                            console.log("OK");
                            alert("ok");
                        }else{
                            //$('#errolog').show();    
                            console.log("error");
                            setTimeout(function(){
                                console.log("ERRO");
                                $('#erroLogin').modal('open'); 
                                //location.reload();
                                document.getElementById("gif").style.display = "none";
                                document.getElementById("divBody").style.display = "block";
                                navigator.vibrate([300 , 300 , 200 , 100]);
                            },100)
                        }
                    }
        })
        return false;
      })    
});