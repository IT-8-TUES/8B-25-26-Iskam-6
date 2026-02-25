<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>edit recipe</title>
    </head>
    <body>
        <h1>Edit recipe</h1>
        <form method = "post">
            <label>title:</label><br>
            <input type = "text" name = "title" value = "<?php echo $recipe[0]; ?>" oninput="this.size = this.value.length"><br><br>
            <div id = "ingredient">
                <label>ingredients:</label><br>
                <?php foreach (explode("<>", $recipe[1]) as $index => $ingredient) {?>
                <input type = "text" name = "ingredient_<?php echo $index ?>" value = "<?php echo $ingredient; ?>" oninput="this.size = this.value.length"><br><br>
                <?php } ?>
            </div>
            <button type="button" onclick = add_ingredient()>add ingredient</button><br><br>
            <div id = "preperation">
                <label>preperation:</label><br>
                <?php foreach (explode("<>", $recipe[2]) as $index => $step) {?>
                <input type = "text" name = "step_<?php echo $index ?>" value = "<?php echo $step; ?>" oninput="this.size = this.value.length"><br><br>
                <?php } ?>
            </div>
            <button type="button" onclick = add_prep_step()>add preparation step</button><br><br>
            <input type = "submit" value = "submit">
        </form>
        <a href = "/recipes/">recipes</a>
        <script src = '../sources/recipe.js'></script>
    </body>
</html>