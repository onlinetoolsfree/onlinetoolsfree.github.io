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
    
    fetch("own-credit-footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("own-credit-footer-container").innerHTML = data;
        })
        .catch(error => console.error("Error loading the footer:", error));

    fetch("credit-footer.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("credit-footer-container").innerHTML = data;
        })
        .catch(error => console.error("Error loading the footer:", error));
});