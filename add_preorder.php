<?php

if($_SERVER['REQUEST_METHOD'] == 'POST'){
    $name = htmlspecialdchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);

    echo "<h1>Preorder Confirmed!</h1>";
    echo "<p>Thank you, <strong>$name</strong>.</p>";
    echo "<p>Your email <strong>$email</strong> has been added to the preorder list.</p>";
} else {
    echo "<p>Error: Please submit the form from the account creation page.</p>";
}
?>