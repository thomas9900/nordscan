<?php
 
 $to      = 'thomas.soolaid@gmail.com';
$subject = 'Nordscan - Contact form';
$message = $_POST["text"];
$headers = 'From: [' . $_POST["name"] . ', ' . $_POST["email"] . ']';
$mail = mail($to, $subject, $message, $headers);


if ($mail) {
	echo ("<script type='text/javascript'>
			window.location.href='/';
			alert('Message sent successfully!');
		</script>");
} else {
	echo ("<script type='text/javascript'>
			window.location.href='/';
			alert('Message not delivered.');
		</script>");
}
?>