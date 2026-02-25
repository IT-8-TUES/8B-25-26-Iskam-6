<?php
    include_once "model.php";
	session_start();
    if(array_key_exists('status', $_SESSION) && $_SESSION['status'] == "loged in"){
        $recipe = get_recipe();
        include_once "view.php";
        if($_SERVER['REQUEST_METHOD'] == "POST"){
            save_recipe();
            header("location: /../recipe/?id=" . $_GET['id']);
        }
    }
	else{
        header("location: /login/?l=edit_recipe&id=" . $_GET['id']);
    }
?>