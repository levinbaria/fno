<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title><?php bloginfo( 'name' ); ?></title>
	<?php wp_head(); ?>
</head>
<body>
	<header class="fno-theme__header">
		<div class="fno-theme__header-wrapper">
			<div class="fno-theme__logo-section">
			<div class="fno-theme__logo">
				<a href="<?php echo site_url(); ?>">
					<img src=<?php echo get_template_directory_uri() . '/assets/images/fno-logo.png'; ?> alt="fno-logo"/>
				</a>
			</div>
			<div class="fno-theme__logo-section-addon-functionality">
				<form action="#" method="post">
					<span><i class="fa-solid fa-magnifying-glass"></i></span>
					<input type="text" placeholder="Search...">
				</form>
				<div class="fno-theme__header-icons">
					<a href="#"><i class="fa-solid fa-cart-shopping"></i></a>
					<a href="#"><i class="fa-regular fa-user"></i></a>
					<a href="#"><i class="fa-solid fa-globe"></i></a>
					<i class="fa-solid fa-xmark"></i>
				</div>
				<img class="fno-theme__menu-icon" src="<?php echo get_template_directory_uri() . '/assets/images/menu-icon.png'; ?>" alt="">
			</div>
		</div>
		<nav class="fno-theme__nav-bar-wrapper" id="navbar">
			<?php
				wp_nav_menu(
					array(
						'theme_location' => 'primary_menu',
						'menu_class'     => 'fno-theme__nav-bar-items',
					)
				);
				?>
			<div class="fno-theme__contact-wrapper">
				<button class="contact-btn btn">Contact</button>
			</div>
		</nav>
		</div>
	</header>
</body>
</html>
