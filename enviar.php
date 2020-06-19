<?php

$nome = $_POST['nome']; // Nome de quem esta enviando
$d_email = $_POST['email'];  // Email destinatário
$assunto = $_POST['assunto']; //Assunto  do Email
$mensagem = $_POST['mensagem']; //Mensagem do Email

require 'PHPMailerAutoload.php';
// Incluir a class class.phpmailer.php
date_default_timezone_set('America/Sao_Paulo');
// Caso queira ter data no email


$mail = new PHPMailer();
$mail->IsSMTP(); // Send via SMTP
$mail->Host = "smtp.gmail.com"; // Seu servidor SMTP
$mail->SMTPAuth = true; // 'true' para autenticaÃ§Ã£o
$mail->Username = "theageofexiles@gmail.com"; // UsuÃ¡rio de SMTP
$mail->Password = "oloko.com"; // Senha de SMTP
$mail->SMTPDebug = 1;  
$mail->SMTPSecure = "tls";s
$mail->Port = 587;
$mail->AddAddress("theageofexiles@gmail.com","Gabriel");

ini_set('max_execution_time','2000');
// Aumenta o tempo de execuÃ§Ã£o do servidor "2000 segundos"

$mail->IsHTML(true); // Envio como HTML se 'true'
$mail->Subject = $assunto;    // Envia o assunto
$mail->Body = "Assunto: $assunto\nMensagem: $mensagem\nE:mail: $d_email\nNome: $nome" ;
// Envia o titulo

$mail->AltBody = "Para mensagens somente texto";
// Envia corpo da msg


if 
(!$mail-> Send ()) 

{
  echo "Erro ao enviar email.";
}
else
{
   echo "<script> window.location='contact.html';alert('$email sua mensagem foi enviada com sucesso! Estaremos retornando em breve');</script>";
}



 ?>