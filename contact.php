<?php
if (isset($_POST['subscriber']) && isset($_POST['page_url'])) {
    $subscriber = $_POST['subscriber'];
    $page_url = $_POST['page_url'];

    $mail_from = 'advertising@theairport.org';
    $mail_to = 'genev@theairport.org';

    $subject = 'New subscriber';

    $headers  = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
    $headers .= 'From: '.$mail_from.' <'.$mail_from.'>' . "\r\n";

    $message = 'You have got a new subscriber ' . $subscriber . ' from ' . $page_url;

    if (mail($mail_to, $subject, $message, $headers)) {
        echo 'Message has been sent successfully';
    } else {
        echo 'Could not send a message';
    }
}
?>