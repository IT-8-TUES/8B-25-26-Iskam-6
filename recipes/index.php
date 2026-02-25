<?php
    $f_recipes = fopen("../data/recipes_table.csv", "r");
    $recipe_titles = [];
    while(!feof($f_recipes)){
        $f_row = fgets($f_recipes);
        if($f_row != ""){
            array_push($recipe_titles, (explode("</>", $f_row)[0]));
        }
    }
    fclose($f_recipes);
    include_once 'view.php';
?>