<?php    
    include_once "../sources/model.php";
	session_start();
    //open page if user is loged in
    if(array_key_exists('status', $_SESSION) && $_SESSION['status'] == "loged in"){
        include_once "view.html";
        if($_SERVER['REQUEST_METHOD'] == "POST"){
            //prepare and put submited recipe into the recipe data file
            $recipe = prepare_recipe();
            file_put_contents("../data/recipes_table.csv", $recipe, FILE_APPEND);
            //go to page with all recipes
            header("location: /../recipes/");
        }
    }
	else{
        header("location: /login/?l=add_recipe");
    }
?>