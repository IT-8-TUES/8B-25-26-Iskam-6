<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>recipes</title>
        <link rel="stylesheet" href="/sources/style.css">
    </head>
    <body>
        <div class="container1">
            <header>
            <h1>Recipes</h1>
                                <nav>
                    <a href="*">COMPANY</a>
                    <a href="*">SERVICES</a>
                    <a href="*">TEAM</a>
                    <a href="*">CONTACTS</a>
                </nav>
                    <button class="btn-signin1">Sign In</button>
            </header>   
            <main>
                <div class="content">
                <?php foreach ($recipe_titles as $index => $recipe) { ?>
                <div class="recipe-card">
                    <div class="horizontal">
                        <div class="text-side">
                            <div class="tag-box">
                                <a href="/recipe/?id=<?php echo $index; ?>" class="recipe-link">
                                    <div class="tag"><?php echo $recipe; ?></div>
                                </a>
                            </div>
                                <p class="description">
                                    This is a short description of the recipe.
                                    You can later replace this with real data from your database.
                                </p>
                            </div>
                        <spline-viewer class="robot-3d"
                            url="https://prod.spline.design/GMeXEYiP5RaVcQ-Q/scene.splinecode">
                        </spline-viewer>
                        
                    </div>
                </div>
                <?php } ?>
                <a href = "/add_recipe/"><h2>add</h2></a>
                </div>
            </main>
        </div>
        <script type="module" src="https://unpkg.com/@splinetool/viewer@1.12.58/build/spline-viewer.js"></script>
	</body>
</html>