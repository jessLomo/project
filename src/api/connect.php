<?php
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "project" ;

    //创建连接
    $conn = new mysqli($servername,$username,$password,$dbname);

    //检测连接，若失败则提示错误信息
    if($conn->connect_error){
        die("连接失败：".$conn->connect_error);
    }

    //设置字符集
    $conn->set_charset('utf8');

?>