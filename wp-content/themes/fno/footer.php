<?php
wp_footer(); ?>
<footer class="fno-theme__footer">
	<div class="fno-theme__footer-wrapper">
		<div class="fno-theme__footer-menu-wrapper">
			<div class="fno-theme__fno-short-details-wrapper">
				<a href="<?php echo site_url(); ?>">
					<img src=<?php echo get_template_directory_uri() . '/assets/images/fno-logo.png'; ?> alt="fno-logo" />
				</a>
				<p class="fno-theme__fno-short-desc">
					FNO is leading the transformation from analog to digital imaging with scalable, digital, award-winning products.
				</p>
			</div>
			<nav class="fno-theme__footer-nav-bar-wrapper" id="footer-navbar">
				<?php
				wp_nav_menu(
					array(
						'theme_location' => 'footer_menu',
						'menu_class' => 'fno-theme__footer-nav-bar-items'
					)
				);
				?>
			</nav>
		</div>
		<div class="fno-theme__footer-extra-details">
			<div class="fno-theme__copyright-wrapper">

			</div>
			<div class="fno-theme__follow-us-wrapper">
				<p>Follow Us</p>
				<ul class="fno-theme__social-icons-wrapper">
					<a>
						<li>
							<i class="fa-brands fa-facebook-f"></i>
						</li>
					</a>
					<a>
						<li>
							<i class="fa-brands fa-twitter"></i>
						</li>
					</a>
					<a>
						<li>
							<i class="fa-brands fa-youtube"></i>
						</li>
					</a>
					<a>
						<li>
							<i class="fa-brands fa-x-twitter"></i>
						</li>
					</a>
					<a>
						<li>
							<i class="fa-brands fa-instagram"></i>
						</li>
					</a>
				</ul>
			</div>
		</div>
	</div>

</footer>