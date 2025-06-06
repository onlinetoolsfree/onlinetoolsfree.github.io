//custom JavaScript here

document.getElementById('searchIcon').addEventListener('click', function(e) {
    e.preventDefault();
    var searchForm = document.getElementById('searchForm');
    if (searchForm.style.display === 'none' || searchForm.style.display === '') {
        searchForm.style.display = 'block';
    } else {
        searchForm.style.display = 'none';
    }
});

document.getElementById('searchIcon').addEventListener('click', function(e) {
        e.preventDefault();
        var searchForm = document.getElementById('searchForm');
        if (searchForm.classList.contains('show')) {
            searchForm.classList.remove('show');
        } else {
            searchForm.classList.add('show');
        }
    });

    document.querySelector('.navbar-toggler').addEventListener('click', function() {
        var navbar = document.getElementById('navbarSupportedContent');
        navbar.classList.toggle('show'); // Toggle class to show/hide navbar
    });
    
    document.getElementById('searchIcon').addEventListener('click', function(e) {
        e.preventDefault();
        var searchForm = document.getElementById('searchForm');
        searchForm.classList.toggle('show'); // Toggle search form visibility
    });
    

    // Scroll to Top Button
    document.addEventListener("DOMContentLoaded", function() {
        // Scroll to Top Button
        const myBtn = document.getElementById("myBtn");
        const header = document.querySelector("header");

        function scrollFunction() {
            if (document.documentElement.scrollTop > 20) {
                myBtn.style.display = "block";
            } else {
                myBtn.style.display = "none";
            }
        }

        myBtn?.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });

        let lastScrollTop = 0;
        window.addEventListener("scroll", function() {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            if (scrollTop > lastScrollTop) {
                header?.classList.add("header-hidden"); // Hide header on scroll down
            } else {
                header?.classList.remove("header-hidden"); // Show header on scroll up
            }
            lastScrollTop = scrollTop;
            scrollFunction(); // Call scroll function
        });

        // Search Icon Toggle
        const searchIcon = document.getElementById("searchIcon");
        const searchForm = document.getElementById("searchForm");

        searchIcon?.addEventListener("click", function(e) {
            e.preventDefault();
            searchForm?.classList.toggle("show");
        });

    });
	
	
        // Utility Functions for Robots txt file
        const isValidUrl = (url) => /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/.test(url);

        const toggleModal = (show) => {
            document.getElementById('modalOverlay').style.display = show ? 'flex' : 'none';
        };

        // Form Data Collection
        const getFormValues = () => {
            const values = {
                websiteType: document.getElementById('websiteType').value,
                allow: document.getElementById('allow').value,
                delay: document.getElementById('delay').value,
                sitemap: document.getElementById('sitemap').value,
                directories: Array.from(document.querySelectorAll('[name^="dir"]'))
                               .map(input => input.value.trim())
                               .filter(v => v),
                engines: {
					google: document.getElementById('google').value,
					gimage: document.getElementById('gimage').value,
					bing: document.getElementById('bing').value,
					yahoo: document.getElementById('yahoo').value,
					duckduckgo: document.getElementById('duckduckgo').value,
					baidu: document.getElementById('baidu').value,
					yandex: document.getElementById('yandex').value
				}
            };
            return values;
        };

        // Robots.txt Generation
        const generateRobotsTxt = (domain, values) => {
			const cleanDomain = domain.replace(/\/$/, '');
			let content = `User-agent: *\n`;

			// Common rules for all types
			content += `Disallow: /?sessionid=\n`;
			content += `Disallow: /*.pdf$\n`;
			content += `Disallow: /*.doc$\n`;

			// Type-specific rules
			const isEcommerce = values.websiteType === 'ecommerce';
			if (isEcommerce) {
				content += `# Ecommerce-specific rules\n`;
				content += `Disallow: /wp-admin/\n`;
				content += `Disallow: /cgi-bin/\n`;
				content += `Disallow: /tmp/\n`;
				content += `Disallow: /cart/\n`;
				content += `Disallow: /checkout/\n`;
				content += `Disallow: /login/\n`;
				content += `Disallow: /search/\n`;
				content += `Disallow: /thank-you/\n`;
				content += `Disallow: /private/\n`;
				content += `Disallow: /?s=\n`;
				content += `Allow: /wp-admin/admin-ajax.php\n\n`;
			} else {
				content += `# Blog-specific rules\n`;
				content += `Disallow: /private/\n`;
				content += `Disallow: /tmp/\n`;
				content += `Disallow: /wp-admin/\n`;
				content += `Allow: /wp-admin/admin-ajax.php\n\n`;
			}

			// Default rules
			content += values.allow === '/' ? 'Disallow: /\n' : 'Allow: /\n';

			// Crawl delay
			if (values.delay) content += `Crawl-delay: ${values.delay}\n`;

			// Directories
			values.directories.forEach(dir => {
				if (dir) content += `Disallow: ${dir}\n`;
			});

			// Search engine specific rules
			const engineMap = {
				google: 'Googlebot',
				gimage: 'Googlebot-Image',
				bing: 'Bingbot',
				yahoo: 'Slurp',
				duckduckgo: 'DuckDuckBot',
				baidu: 'Baiduspider',
				yandex: 'YandexBot'
			};

			Object.entries(values.engines).forEach(([id, value]) => {
				if (value !== '') {
					content += `\nUser-agent: ${engineMap[id]}\n`;
					content += value === '/' ? 'Disallow: /\n' : 'Allow: /\n';
				}
			});

			// Sitemap
			content += `\nSitemap: ${values.sitemap || `${cleanDomain}/sitemap.xml`}`;

			return content;
		};


        // Main Generation Flow
        const generateRobots = () => {
            const url = document.getElementById('websiteUrl').value.trim();
            if (!isValidUrl(url)) {
                alert('Please enter a valid URL');
                return;
            }
            
            toggleModal(true);
            setTimeout(() => {
                const formValues = getFormValues();
                document.getElementById('generatedContent').value = 
                    generateRobotsTxt(url, formValues);
                document.getElementById('loadingState').style.display = 'none';
                document.getElementById('contentState').style.display = 'block';
            }, 1500);
        };

        // Directory Management
        let dirCount = 1;
        const addDirectory = () => {
            dirCount++;
            const newDir = document.createElement('div');
            newDir.className = 'row mb-2';
            newDir.innerHTML = `
                <div class="col-10">
                    <input class="tool_inp_sty" type="text" 
                           placeholder="/directory/" name="dir${dirCount}">
                </div>
                <div class="col-2 text-end">
                    <div class="new_input" onclick="this.parentElement.parentElement.remove()">×</div>
                </div>
            `;
            document.getElementById('directories').appendChild(newDir);
        };

        // File Operations
        const downloadRobots = () => {
            const content = document.getElementById('generatedContent').value;
            const blob = new Blob([content], { type: 'text/plain' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'robots.txt';
            a.click();
            URL.revokeObjectURL(url);
        };

        const copyToClipboard = async () => {
            try {
                await navigator.clipboard.writeText(
                    document.getElementById('generatedContent').value
                );
                alert('Copied to clipboard!');
            } catch (err) {
                alert('Failed to copy!');
            }
        };

        const resetGenerator = () => {
            toggleModal(false);
            document.getElementById('loadingState').style.display = 'block';
            document.getElementById('contentState').style.display = 'none';
            document.getElementById('websiteUrl').value = '';
            document.getElementById('generatedContent').value = '';
            dirCount = 1;
            document.querySelectorAll('[name^="dir"]').forEach((input, index) => {
                if(index > 0) input.parentElement.parentElement.remove();
            });
        };

    // Index Page JavaScript
        // Password Generator
    function generatePassword() {
      const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
      let password = "";
      for (let i = 0; i < 12; i++) {
        password += chars.charAt(Math.floor(Math.random() * chars.length));
      }
      document.getElementById("passwordOutput").value = password;
    }

    // Text Counter
    function countCharacters() {
      const input = document.getElementById("textInput").value;
      document.getElementById("charCount").textContent = "Characters: " + input.length;
    }

    // Color Picker
    function updateColor(color) {
      document.getElementById("colorPreview").style.backgroundColor = color;
    }

    // Countdown Timer 
    let timerInterval;

    function startTimer() {
      clearInterval(timerInterval);
      const minutes = parseInt(document.getElementById("timerMinutes").value);
      if (isNaN(minutes) || minutes <= 0) {
        alert("Please enter valid number of minutes.");
        return;
      }

      let totalSeconds = minutes * 60;

      timerInterval = setInterval(() => {
        if (totalSeconds <= 0) {
          clearInterval(timerInterval);
          document.getElementById("timerDisplay").textContent = "Time's up!";
        } else {
          const mm = Math.floor(totalSeconds / 60);
          const ss = totalSeconds % 60;
          document.getElementById("timerDisplay").textContent = `${String(mm).padStart(2, '0')}:${String(ss).padStart(2, '0')}`;
          totalSeconds--;
        }
      }, 1000);
    }

    // Copy to Clipboard
     function copyText() {
        const text = document.getElementById("copyText").value;
        navigator.clipboard.writeText(text).then(() => {
            document.getElementById("status").textContent = "Copied to clipboard!";
        }).catch(err => {
            alert("Failed to copy: ", err);
        });
    }
    
    // QR Code 
    function generateQR() {
        const data = document.getElementById("qrInput").value.trim();
        const container = document.getElementById("qrcode");
        container.innerHTML = '';
        if (data) {
            new QRCode(container, {
            text: data,
            width: 200,
            height: 200,
            colorDark : "#000000",
            colorLight : "#ffffff",
            correctLevel : QRCode.CorrectLevel.H
            });
        }
    }
    
    // JSON Beautifier
    function beautifyJSON() {
        const input = document.getElementById("jsonInput").value;
        try {
          const parsed = JSON.parse(input);
          const formatted = JSON.stringify(parsed, null, 2);
          document.getElementById("jsonOutput").textContent = formatted;
        } catch (e) {
          document.getElementById("jsonOutput").textContent = "Invalid JSON input.";
        }
      }
      // Password Generator
      function generatePassword() {
            const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
            let password = "";
            for (let i = 0; i < 12; i++) {
                password += chars.charAt(Math.floor(Math.random() * chars.length));
            }
            document.getElementById("passwordOutput").value = password;
        }
