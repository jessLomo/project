<?php
    // require('connect.php');
    // $id = isset($_GET['id']) ? $_GET['id'] : null;
    // $sql = "select * from goods where";
    // if($id){
    //     $sql .= " id='$id' and";
    // }
    // $sql .= '1=1';

    // $res = $conn->query($sql);
    // $row = $res->fetch_all(MYSQLI_ASSOC);
    // echo json_encode($row,JSON_UNESCAPED_UNICODE);
        
    require('connect.php');
    $id = isset($_GET['id']) ? $_GET['id'] : null;
    // 编写sql语句
    $sql = "select * from goods where";
    if($id){
        $sql .= " id='$id' and"; 
    }
    $sql .= ' 1=1';
    $res = $conn->query($sql);
    // 使用查询结果集
    // 得到一个数组
    $row = $res->fetch_all(MYSQLI_ASSOC);
    echo json_encode($row,JSON_UNESCAPED_UNICODE);

    

?>