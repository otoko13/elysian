<?php
    $success = false;
    $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);
    $message = $request->msg;
    $from = $request->from;

    if (!empty($message)){

        $today = gmdate("Ymd");
        $now = gmdate("Y-m-d H:i:s");

        $success = true;

        $to = "eighthsamurai@hotmail.com";
        $subject = "Message from Elysian Events contact form";
        $message = $message;
        $headers = 'From: ' . $from . "\r\n" . 'Reply-To: ' . $from . "\r\n" . 'X-Mailer: PHP/' . phpversion();

        mail($to, $subject, $message, $headers);
        mysqli_free_result($result);
    }
?>
