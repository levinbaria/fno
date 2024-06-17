document.addEventListener('DOMContentLoaded', () => {
	// Function to handle the fixed navbar on scroll
	function handleNavbarFixed() {
		const navbar = document.getElementById('navbar');
		const header = document.querySelector('.fno-theme__header');
		const headerHeight = header.offsetHeight;

		if (window.innerWidth > 1024) {
			if (window.scrollY >= headerHeight) {
				navbar.classList.add('fixed');
			} else {
				navbar.classList.remove('fixed');
			}
		} else {
			navbar.classList.remove('fixed');
		}
	}

	// Function to handle submenu toggling and interaction
	function handleSubMenu() {
		// Select all top-level menu items
		const menuItems = document.querySelectorAll('.fno-theme__nav-bar-items > li');

		// Iterate through each menu item
		menuItems.forEach((menuItem) => {
			// Find the submenu within the current menu item, if it exists
			const submenu = menuItem.querySelector('.fno-theme__nav-bar-items .sub-menu');

			// If the menu item has a submenu and has not been initialized yet
			if (submenu && !menuItem.classList.contains('submenu-init')) {
				// Add initialization class to avoid re-initializing
				menuItem.classList.add('submenu-init');

				// Click event to toggle submenu visibility and active state
				menuItem.addEventListener('click', (e) => {
					e.stopPropagation(); // Prevent click event from bubbling up

					// Close any open submenus that are not the current one
					document.querySelectorAll('.fno-theme__nav-bar-items .sub-menu').forEach((openSubmenu) => {
						if (openSubmenu !== submenu) {
							openSubmenu.style.display = 'none';
							openSubmenu.parentElement.classList.remove('submenu-open', 'active');
						}
					});

					// Toggle the current submenu and active state
					submenu.style.display = submenu.style.display === 'flex' ? 'none' : 'flex';
					menuItem.classList.toggle('submenu-open');
					menuItem.classList.toggle('active');
				});
			}
		});

		// Handle behavior for smaller screens
		if (window.innerWidth <= 1024) {
			// Hide all submenus initially
			menuItems.forEach((menuItem) => {
				const submenu = menuItem.querySelector('.fno-theme__nav-bar-items .sub-menu');
				if (submenu) {
					submenu.style.display = 'none';
				}
			});
			// Remove event listener for closing submenus on click
			document.removeEventListener('click', closeSubMenus);
		} else {
			// Add event listener to close all submenus when clicking outside
			document.addEventListener('click', closeSubMenus);
		}
	}

	// Function to close all submenus
	function closeSubMenus() {
		document.querySelectorAll('.fno-theme__nav-bar-items .sub-menu').forEach((submenu) => {
			submenu.style.display = 'none';
			submenu.parentElement.classList.remove('submenu-open', 'active');
		});
	}

	// Menu Toggle
	const closeBtn = document.querySelector('.fa-solid.fa-xmark');
	const navBarWrapper = document.querySelector('.fno-theme__nav-bar-wrapper');
	const headerIcons = document.querySelector('.fno-theme__header-icons');
	const logoImage = document.querySelector('.fno-theme__menu-icon');
	const searchBar = document.querySelector('.fno-theme__logo-section-addon-functionality form');

	function updateMenuDisplay() {
		const isSmallScreen = window.innerWidth <= 1024;

		navBarWrapper.style.display = isSmallScreen ? 'none' : 'flex';
		headerIcons.style.display = isSmallScreen ? 'none' : 'flex';
		logoImage.style.display = isSmallScreen ? 'block' : 'none';
		closeBtn.style.display = isSmallScreen ? 'block' : 'none';
		searchBar.style.display = isSmallScreen ? 'none' : 'flex';

		// Hide submenus on small screens
		if (isSmallScreen) {
			closeSubMenus();
		}
	}

	function toggleMenu() {
		const isNavBarVisible = navBarWrapper.style.display === 'flex';

		navBarWrapper.style.display = isNavBarVisible ? 'none' : 'flex';
		headerIcons.style.display = isNavBarVisible ? 'none' : 'flex';
		logoImage.style.display = isNavBarVisible ? 'block' : 'none';
		closeBtn.style.display = isNavBarVisible ? 'none' : 'flex';
		searchBar.style.display = isNavBarVisible ? 'none' : 'flex';
	}

	// Initial checks
	handleNavbarFixed();
	updateMenuDisplay();
	handleSubMenu();

	// Re-check on resize
	window.addEventListener('resize', () => {
		handleNavbarFixed();
		updateMenuDisplay();
		handleSubMenu();
	});

	// Re-check on scroll
	window.addEventListener('scroll', handleNavbarFixed);

	// Add toggle functionality
	closeBtn.addEventListener('click', toggleMenu);
	logoImage.addEventListener('click', toggleMenu);
});
