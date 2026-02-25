<?php
    include_once "../sources/model.php";
    function save_recipe(){
        $recipe = prepare_recipe();
        $recipes = file("../data/recipes_table.csv");
        $recipes[$_GET['id']] = $recipe;
        file_put_contents("../data/recipes_table.csv", implode("", $recipes));
    }

    function get_recipe(){
        $f_recipes = fopen("../data/recipes_table.csv", "r");
        $recipe = [];
        $recipe_id = $_GET['id'];
        for($recipe_id; $recipe_id >= 0; $recipe_id--){
            $recipe = fgets($f_recipes);
        }
        $recipe = explode("</>", $recipe);
        fclose($f_recipes);
        return $recipe;
    }
?>