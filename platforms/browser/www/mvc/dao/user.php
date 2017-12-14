<?php 
    include "../service/conexao.php";

    $dados = mysqli_query($conexao , "SELECT * FROM user");

    $result = mysqli_fetch_array($dados);

    $rows = mysqli_num_rows($dados);
    
    $login = $_POST['email'];
    $senha = $_POST['senha'];
    
    if($rows === 0){
        echo 0;
    } else {
        echo 1;
    }
    



    