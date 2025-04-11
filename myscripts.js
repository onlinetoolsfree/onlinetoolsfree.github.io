	// Scroll to Top Button
	var scrollToTopBtn = document.getElementById("scrollToTopBtn");

	window.onscroll = function() {
		scrollFunction();
	};

	function scrollFunction() {
		if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
			scrollToTopBtn.style.display = "block";
		} else {
			scrollToTopBtn.style.display = "none";
		}
	}

	function topFunction() {
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	}

	// Open Google Gemini Chatbot
	function openChatbot() {
		window.open("https://your-google-gemini-bot-link", "_blank", "width=400,height=600");
	}

	// Function to load navbar and footer
	document.addEventListener("DOMContentLoaded", function () {
		fetch("navbar.html")
			.then(response => response.text())
			.then(data => {
				document.getElementById("navbar-container").innerHTML = data;
			})
			.catch(error => console.error("Error loading the navbar:", error));
		
		fetch("page-navbar.html")
			.then(response => response.text())
			.then(data => {
				document.getElementById("navbar-container-page").innerHTML = data;
			})
			.catch(error => console.error("Error loading the navbar:", error));
		
		fetch("related-post.html")
			.then(response => response.text())
			.then(data => {
				document.getElementById("relatedpost-container-page").innerHTML = data;
			})
			.catch(error => console.error("Error loading the navbar:", error));

		
		fetch("sidebar.html")
			.then(response => response.text())
			.then(data => {
				document.getElementById("sidebar-container-page").innerHTML = data;
			})
			.catch(error => console.error("Error loading the navbar:", error));

		fetch("footer.html")
			.then(response => response.text())
			.then(data => {
				document.getElementById("footer-container").innerHTML = data;
			})
			.catch(error => console.error("Error loading the footer:", error));
	});