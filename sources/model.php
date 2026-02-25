<?php
    function prepare_recipe(){
        $recipe = "";
        $recipe .= htmlspecialchars($_POST['title']);
        foreach($_POST as $key => $element){
            if(str_contains($key, "ingredient_")){
                if($key == "ingredient_0"){
                    $recipe .= "</>".htmlspecialchars($element);
                }
                else{
                    $recipe .= "<>".htmlspecialchars($element);
                }
            }
            if(str_contains($key, "step_")){
                if($key == "step_0"){
                    $recipe .= "</>".htmlspecialchars($element);
                }
                else{
                    $recipe .= "<>".htmlspecialchars($element);
                }
            }
        }
        return $recipe . "\n";
    }
?>