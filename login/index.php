<?php
    include_once "view.html";
	session_start();
	session_unset();
	if($_SERVER['REQUEST_METHOD'] == "POST"){
        $users = fopen("../data/users.csv", "r");
        $is_existing = false;
        while(!feof($users)){
            $user = explode("<>", fgets($users));
            if(array_key_exists(1, $user) && $user[1] == $_POST['email'] && password_verify(implode("sfhkdj", str_split(htmlspecialchars($_POST['password']), 3)), $user[2])){
            	$is_existing = true;
            }
        }
        if($is_existing){
            if (array_key_exists('l', $_GET)){
                $location = "/" . $_GET['l'] . "/?id=" . $_GET['id'];
                $_SESSION['status'] = "loged in";
                header("location: $location");
            }
            else {
                header("location: /../");
            }
        }
        else{
            echo '<script>window.alert("This email/password is wrong.")</script>';
        }
        fclose($users);
    }
?>