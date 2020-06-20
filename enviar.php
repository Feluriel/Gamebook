<?php
$name = $_POST['nome'];
//pega os dados que foi digitado no ID name.

$email = $_POST['email'];
//pega os dados que foi digitado no ID email.

$subject = $_POST['assunto'];
//pega os dados que foi digitado no ID sebject.

$message = $_POST['mensagem'];
//pega os dados que foi digitado no ID message.
$myEmail = "theageofexiles@gmail.com";//é necessário informar um e-mail do próprio domínio
$headers = "From: $myEmail\r\n";
$headers .= "Reply-To: $email\r\n";

/*abaixo contém os dados que serão enviados para o email
cadastrado para receber o formulário*/

$corpo = "Formulário enviado\n";
$corpo .= "Nome: " . $name . "\n";
$corpo .= "Email: " . $email . "\n";
$corpo .= "Assunto: " . $subject . "\n";
$corpo .= "Mensagem: " . $message . "\n";

$email_to = "theageofexiles@gmail.com";
//não esqueça de substituir este email pelo seu.

$status = mail($email_to, $subject, $corpo, $headers);
//enviando o email.

if ($status) {
  echo "<script> window.location='contact.html';alert('$name sua mensagem foi enviada com sucesso! Estaremos retornando em breve');</script>";
  
//mensagem de form enviado com sucesso.

} else {
  echo "<script> alert('Falha ao enviar o Email.'); </script>";
  
//mensagem de erro no envio. 

}
?>