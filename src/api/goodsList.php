<?php
    
    $page_no = isset($_GET['pageNo']) ? $_GET['pageNo'] : null;
    $qty = isset($_GET['qty']) ? $_GET['qty'] : null;

    require('connect.php');

    $sql = "select * from goods";

    $res = $conn->query($sql);
    $row = $res->fetch_all(MYSQLI_ASSOC);

    //根据分页截取数据
    $result = array(
        'data'=>array_slice($row,($page_no-1)*$qty,$qty),
        'total'=>count($row),
        'qty'=>$qty,
        'pageNo'=>$page_no*1
    );

    echo json_encode($result,JSON_UNESCAPED_UNICODE);

?>