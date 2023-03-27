<?php
if (isset($_POST['name']) && isset($_POST['page_url']) && isset($_POST['company']) && isset($_POST['phone'])  && isset($_POST['subject']) && isset($_POST['message'])) {
// Получаем значения полей формы
$name = $_POST['name'];
$page_url = $_POST['page_url'];
$company = $_POST['company'];
$phone = $_POST['phone'];
$subject = $_POST['subject'];
$message = $_POST['message'];

// Формируем тело письма
$email_body = "Full name: $name\n";
$email_body .= "Page URL: $page_url\n";
$email_body .= "Company: $company\n";
$email_body .= "Phone: $phone\n";
$email_body .= "Subject: $subject\n";
$email_body .= "Message:\n$message\n";

// Отправляем письмо
mail('advertising@theairport.org', 'Question Form', $email_body);
}


?>