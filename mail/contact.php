<?php
if(empty($_POST['name']) || empty($_POST['message']) || !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
  http_response_code(500);
  exit();
}

$name = strip_tags(htmlspecialchars($_POST['name']));
$email = strip_tags(htmlspecialchars($_POST['email']));
$m_subject = strip_tags(htmlspecialchars($_POST['subject']));
$nacionalidad = strip_tags(htmlspecialchars($_POST['nacionalidad']));
$telefono = strip_tags(htmlspecialchars($_POST['telefono']));
$message = strip_tags(htmlspecialchars($_POST['message']));

$to = "juanyn1984@gmail.com";
$subject_email = "ABOGO - Contacto: $m_subject - $name";
$body = "Has recibido un nuevo mensaje desde el formulario de contacto de ABOGO.\n\n";
$body .= "Detalles:\n\n";
$body .= "Nombre: $name\n";
$body .= "Email: $email\n";
$body .= "Nacionalidad: $nacionalidad\n";
$body .= "Teléfono: $telefono\n";
$body .= "Asunto: $m_subject\n";
$body .= "Mensaje: $message\n";

$header = "From: info@abogo.cl\r\n";
$header .= "Reply-To: $email\r\n";

if(!mail($to, $subject_email, $body, $header))
  http_response_code(500);
?>