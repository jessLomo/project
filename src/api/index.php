<?php
    require('connect.php');
    $sql = "select * from goods";
    $res = $conn->query($sql);
    $row = $res->fetch_all(MYSQLI_ASSOC);
    ECHO json_encode($row,JSON_UNESCAPED_UNICODE);
?>