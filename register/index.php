<?php
    include 'view.html';
	if($_SERVER['REQUEST_METHOD'] == "POST"){
        $users = fopen("../data/users.csv", "a+");
        $is_existing = false;
        while(!feof($users)){
            if(array_key_exists(1, explode("<>", $line = fgets($users))) && explode("<>", $line)[1] == $_POST['email']){
                $is_existing = true;
            }
        }
        if(!$is_existing){
            $username = htmlspecialchars($_POST['username']);
            $email = htmlspecialchars($_POST['email']);
            $password = implode("sfhkdj", str_split(htmlspecialchars($_POST['password']), 3));
            $phone_number = htmlspecialchars($_POST['phone_number']);
            $user_data =  $username."<>".$email."<>".password_hash($password, PASSWORD_DEFAULT)."<>".$phone_number;
            fwrite($users, "{$user_data}\n");
            echo '<script>window.alert("Log in to your new account.")</script>';
        }
        if($is_existing){
            echo '<script>window.alert("This account already exists.")</script>';
        }
        fclose($users);
    }
?>