<?php
    
    require('connect.php');
    $username = isset($_GET['username']) ? $_GET['username'] : null;

    // 编写sql语句
    $sql = "select * from user where";
    if($username){
        $sql .= " username='$username' and"; 
    }
    $sql .= ' 1=1';
    $res = $conn->query($sql);
    // 使用查询结果集
    // 得到一个数组
    
    $row = $res->fetch_all(MYSQLI_ASSOC);
    echo json_encode($row,JSON_UNESCAPED_UNICODE);

    if(in_array($username,$row)){
        echo 'no';
    }else{
        echo 'yes';
    }
    
?>