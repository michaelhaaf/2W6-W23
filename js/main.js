let currentTheme = window.matchMedia("(prefers-color-scheme: light)").matches
  ? "light"
  : "dark";
localStorage.setItem("currentTheme", currentTheme);

function toggleTheme() {
  let newTheme = localStorage.getItem("currentTheme") === "light" ? "dark" : "light";
  document.querySelector(":root").setAttribute("data-theme", newTheme);
  localStorage.setItem("currentTheme", newTheme);
}

// Adapted from www.bram.us/2020/01/10/smooth-scrolling-sticky-scrollspy-navigation/index.html
window.addEventListener('DOMContentLoaded', () => {

	const observer = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			const id = entry.target.getAttribute('id');
			if (entry.intersectionRatio > 0) {
				document.querySelector(`nav li a[href="#${id}"]`).classList.add('active');
			} else {
				document.querySelector(`nav li a[href="#${id}"]`).classList.remove('active');
			}
		});
	});

	// Track all sections that have an `id` applied
	document.querySelectorAll('section[id]').forEach((section) => {
		observer.observe(section);
	});
	
});
