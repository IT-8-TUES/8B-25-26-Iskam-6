<?php
    $f_recipes = fopen("../data/recipes_table.csv", "r");
    $recipe = "";
    $recipe_id = $_GET['id'];
    for($recipe_id; $recipe_id >= 0; $recipe_id--){
        $recipe = fgets($f_recipes);
    }
    $recipe = explode("</>", $recipe);
    include_once 'view.php';
    fclose($f_recipes);
?>