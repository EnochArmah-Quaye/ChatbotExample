<?php

require_once('config.php');

if(isset($_GET['message'])){

    $message = $_GET['messages'];

    $stmt = $conn->prepare("SELECT response FROM messages WHERE text = ? LIMIT 1");
    $stmt->bind_param('s',$messages);
}
?>