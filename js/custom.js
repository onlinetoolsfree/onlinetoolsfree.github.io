//Days calculator Start
    function calculateDuration(event) {
        event.preventDefault();

        const startDay = parseInt(document.getElementById('startDay').value);
        const startMonth = parseInt(document.getElementById('startMonth').value) - 1;
        const startYear = parseInt(document.getElementById('startYear').value);

        const endDay = parseInt(document.getElementById('endDay').value);
        const endMonth = parseInt(document.getElementById('endMonth').value) - 1;
        const endYear = parseInt(document.getElementById('endYear').value);

        const includeEndDate = document.getElementById('includeEndDate').checked;

        const startDate = new Date(startYear, startMonth, startDay);
        const endDate = new Date(endYear, endMonth, endDay);

        let durationInMilliseconds = endDate - startDate;
        if (includeEndDate) {
            durationInMilliseconds += 24 * 60 * 60 * 1000; // Add 1 day in milliseconds
        }

        const durationInDays = Math.floor(durationInMilliseconds / (24 * 60 * 60 * 1000));
        
        // Calculate years, months, and days
        let remainingDays = durationInDays;
        const years = Math.floor(remainingDays / 365);
        remainingDays %= 365;

        const months = Math.floor(remainingDays / 30);
        remainingDays %= 30;

        const alternativeUnits = {
            seconds: durationInMilliseconds / 1000,
            minutes: durationInMilliseconds / (1000 * 60),
            hours: durationInMilliseconds / (1000 * 60 * 60),
            weeks: durationInDays / 7,
        };

        const yearText = years > 0 ? `${years} year${years > 1 ? 's' : ''}` : '';
        const monthText = months > 0 ? `${months} month${months > 1 ? 's' : ''}` : '';
        const dayText = remainingDays > 0 ? `${remainingDays} day${remainingDays > 1 ? 's' : ''}` : '';
        const combinedText = [yearText, monthText, dayText].filter(Boolean).join(', ');

        document.getElementById('resultText').innerHTML = `It is <strong>${durationInDays}</strong> days, or approximately <strong>${combinedText}</strong>, from the start date to the end date${includeEndDate ? ', end date included.' : '.'}`;
        document.getElementById('alternativeText').innerHTML = `
            Or <strong>${alternativeUnits.seconds.toLocaleString()}</strong> seconds<br>
            Or <strong>${alternativeUnits.minutes.toLocaleString()}</strong> minutes<br>
            Or <strong>${alternativeUnits.hours.toLocaleString()}</strong> hours<br>
            Or <strong>${alternativeUnits.weeks.toFixed(1)}</strong> weeks
        `;
        document.getElementById('result').style.display = 'block';

        // Show celebration popup and animation
        $('#celebrationPopup').modal('show');
        $('#animationOverlay').fadeIn(300).delay(1000).fadeOut(300);
    }

    //Days calculator End

    //Quiz Part Start
            // Sample questions, you can replace these with your 100+ questions
            const quizQuestions = [
                {
                    question: "What is the capital of France?",
                    answers: ["Paris", "Rome", "Berlin", "Madrid"],
                    correct: 0
                },
                {
                    question: "Which planet is known as the Red Planet?",
                    answers: ["Earth", "Mars", "Jupiter", "Venus"],
                    correct: 1
                },
                {
                    question: "What is the chemical symbol for water?",
                    answers: ["O2", "H2O", "CO2", "HO2"],
                    correct: 1
                },
                {
                    question: "Who wrote 'To Kill a Mockingbird'?",
                    answers: ["Harper Lee", "J.K. Rowling", "Ernest Hemingway", "Mark Twain"],
                    correct: 0
                },
                {
                    question: "What is the largest ocean on Earth?",
                    answers: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
                    correct: 3
                },
                {
                    question: "Who was the first person to walk on the Moon?",
                    answers: ["Buzz Aldrin", "Yuri Gagarin", "Neil Armstrong", "Michael Collins"],
                    correct: 2
                },
                {
                    question: "What is the hardest natural substance on Earth?",
                    answers: ["Gold", "Iron", "Diamond", "Platinum"],
                    correct: 2
                },
                {
                    question: "Which country hosted the 2016 Summer Olympics?",
                    answers: ["China", "Brazil", "UK", "Japan"],
                    correct: 1
                },
                {
                    question: "What is the smallest unit of matter?",
                    answers: ["Atom", "Molecule", "Electron", "Neutron"],
                    correct: 0
                },
                {
                    question: "Which planet is known as the Earth's Twin?",
                    answers: ["Mars", "Venus", "Jupiter", "Mercury"],
                    correct: 1
                },
                // Add 90 more questions below:
                {
                    question: "Which element has the chemical symbol 'Fe'?",
                    answers: ["Gold", "Iron", "Silver", "Lead"],
                    correct: 1
                },
                {
                    question: "What is the tallest mountain in the world?",
                    answers: ["K2", "Kangchenjunga", "Mount Everest", "Lhotse"],
                    correct: 2
                },
                {
                    question: "In which year did World War II end?",
                    answers: ["1942", "1945", "1948", "1950"],
                    correct: 1
                },
                {
                    question: "What is the most populous country in the world?",
                    answers: ["India", "China", "USA", "Indonesia"],
                    correct: 1
                },
                {
                    question: "Which animal is known as the King of the Jungle?",
                    answers: ["Tiger", "Lion", "Elephant", "Leopard"],
                    correct: 1
                },
                {
                    question: "Which gas do plants absorb from the atmosphere?",
                    answers: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
                    correct: 2
                },
                {
                    question: "Who painted the Mona Lisa?",
                    answers: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Claude Monet"],
                    correct: 1
                },
                {
                    question: "Which country is known as the Land of the Rising Sun?",
                    answers: ["China", "Japan", "Thailand", "India"],
                    correct: 1
                },
                {
                    question: "What is the longest river in the world?",
                    answers: ["Amazon", "Nile", "Yangtze", "Mississippi"],
                    correct: 1
                },
                {
                    question: "Which planet has the most moons?",
                    answers: ["Earth", "Mars", "Jupiter", "Saturn"],
                    correct: 2
                },
                {
                    question: "What is the largest desert in the world?",
                    answers: ["Sahara", "Gobi", "Kalahari", "Antarctica"],
                    correct: 3
                },
                {
                    question: "Which element is the most abundant in the Earth's atmosphere?",
                    answers: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Helium"],
                    correct: 1
                },
                {
                    question: "What is the name of the longest bone in the human body?",
                    answers: ["Femur", "Tibia", "Humerus", "Fibula"],
                    correct: 0
                },
                {
                    question: "Who was the first President of the United States?",
                    answers: ["Thomas Jefferson", "Abraham Lincoln", "George Washington", "John Adams"],
                    correct: 2
                },
                {
                    question: "Which country is known for the Eiffel Tower?",
                    answers: ["Germany", "Italy", "France", "Spain"],
                    correct: 2
                },
                {
                    question: "What is the main ingredient in guacamole?",
                    answers: ["Tomato", "Onion", "Avocado", "Cucumber"],
                    correct: 2
                },
                {
                    question: "Which country invented pizza?",
                    answers: ["France", "Italy", "Greece", "Turkey"],
                    correct: 1
                },
                {
                    question: "What is the currency of Japan?",
                    answers: ["Yuan", "Won", "Yen", "Ruble"],
                    correct: 2
                },
                {
                    question: "What is the capital of Australia?",
                    answers: ["Sydney", "Melbourne", "Canberra", "Perth"],
                    correct: 2
                },
                {
                    question: "Which planet is closest to the Sun?",
                    answers: ["Venus", "Earth", "Mercury", "Mars"],
                    correct: 2
                },
                {
                    question: "What is the chemical formula for table salt?",
                    answers: ["NaCl", "KCl", "H2O", "CO2"],
                    correct: 0
                },
                {
                    question: "Which scientist developed the theory of relativity?",
                    answers: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Niels Bohr"],
                    correct: 1
                },
                {
                    question: "Which is the smallest country in the world by area?",
                    answers: ["Monaco", "San Marino", "Vatican City", "Malta"],
                    correct: 2
                },
                {
                    question: "Who was the first man to fly solo across the Atlantic Ocean?",
                    answers: ["Amelia Earhart", "Charles Lindbergh", "Howard Hughes", "Orville Wright"],
                    correct: 1
                },
                {
                    question: "Which organ in the human body is responsible for pumping blood?",
                    answers: ["Brain", "Lungs", "Heart", "Liver"],
                    correct: 2
                },
                {
                    question: "Which continent is the Sahara Desert located on?",
                    answers: ["Asia", "Africa", "Australia", "South America"],
                    correct: 1
                },
                {
                    question: "What is the hardest mineral on Earth?",
                    answers: ["Quartz", "Topaz", "Diamond", "Corundum"],
                    correct: 2
                },
                {
                    question: "Which country is known as the Land of a Thousand Lakes?",
                    answers: ["Sweden", "Canada", "Finland", "Norway"],
                    correct: 2
                },
                {
                    question: "Which planet is famous for its rings?",
                    answers: ["Venus", "Mars", "Jupiter", "Saturn"],
                    correct: 3
                },
                {
                    question: "What is the speed of light?",
                    answers: ["300,000 km/s", "150,000 km/s", "450,000 km/s", "600,000 km/s"],
                    correct: 0
                },
                {
                    question: "Who discovered penicillin?",
                    answers: ["Alexander Fleming", "Marie Curie", "Isaac Newton", "Albert Einstein"],
                    correct: 0
                },
                {
                    question: "Which country is home to the Great Barrier Reef?",
                    answers: ["New Zealand", "Australia", "Indonesia", "Philippines"],
                    correct: 1
                },
                {
                    question: "Which gas is most abundant in the Earth's atmosphere?",
                    answers: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Helium"],
                    correct: 2
                },
                {
                    question: "What is the capital of Canada?",
                    answers: ["Toronto", "Vancouver", "Montreal", "Ottawa"],
                    correct: 3
                },
                {
                    question: "Which planet is known as the Morning Star?",
                    answers: ["Venus", "Mars", "Mercury", "Jupiter"],
                    correct: 0
                },
                {
                    question: "What is the largest continent by area?",
                    answers: ["Africa", "Asia", "Europe", "North America"],
                    correct: 1
                },
                {
                    question: "Which country is known for the Maple Leaf?",
                    answers: ["Canada", "USA", "UK", "Australia"],
                    correct: 0
                },
                {
                    question: "Which element is known as the 'King of Chemicals'?",
                    answers: ["Oxygen", "Nitrogen", "Sulfur", "Hydrogen"],
                    correct: 3
                },
                {
                    question: "Who invented the telephone?",
                    answers: ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "Guglielmo Marconi"],
                    correct: 0
                },
                {
                    question: "Which country has the most spoken languages?",
                    answers: ["India", "China", "USA", "Papua New Guinea"],
                    correct: 3
                },
                {
                    question: "What is the main language spoken in Brazil?",
                    answers: ["Spanish", "English", "Portuguese", "French"],
                    correct: 2
                },
                {
                    question: "Which country is known for its pyramids?",
                    answers: ["Mexico", "Peru", "India", "Egypt"],
                    correct: 3
                },
                {
                    question: "Which animal is known as the Ship of the Desert?",
                    answers: ["Horse", "Camel", "Elephant", "Donkey"],
                    correct: 1
                },
                {
                    question: "Who is known as the father of modern computers?",
                    answers: ["Charles Babbage", "Alan Turing", "John von Neumann", "Steve Jobs"],
                    correct: 0
                },
                {
                    question: "Which country is the largest producer of coffee?",
                    answers: ["Colombia", "Vietnam", "Brazil", "Indonesia"],
                    correct: 2
                },
                {
                    question: "Which is the largest mammal on Earth?",
                    answers: ["Elephant", "Whale", "Giraffe", "Hippopotamus"],
                    correct: 1
                },
                {
                    question: "Which city is known as the Big Apple?",
                    answers: ["Los Angeles", "Chicago", "New York City", "San Francisco"],
                    correct: 2
                },
                {
                    question: "What is the chemical symbol for gold?",
                    answers: ["Au", "Ag", "Pb", "Hg"],
                    correct: 0
                },
                {
                    question: "What is the largest organ in the human body?",
                    answers: ["Heart", "Liver", "Skin", "Lungs"],
                    correct: 2
                },
                {
                    question: "Which country is known as the Land of the Midnight Sun?",
                    answers: ["Sweden", "Norway", "Finland", "Iceland"],
                    correct: 1
                },
                {
                    question: "What is the capital of Italy?",
                    answers: ["Milan", "Venice", "Florence", "Rome"],
                    correct: 3
                },
                {
                    question: "Which is the most spoken language in the world?",
                    answers: ["English", "Mandarin Chinese", "Spanish", "Hindi"],
                    correct: 1
                },
                {
                    question: "Which element has the atomic number 1?",
                    answers: ["Oxygen", "Nitrogen", "Hydrogen", "Helium"],
                    correct: 2
                },
                {
                    question: "What is the chemical formula for carbon dioxide?",
                    answers: ["CO", "CO2", "CH4", "C2H5OH"],
                    correct: 1
                },
                {
                    question: "Who was the first female Prime Minister of the UK?",
                    answers: ["Margaret Thatcher", "Theresa May", "Angela Merkel", "Indira Gandhi"],
                    correct: 0
                },
                {
                    question: "Which country is famous for its maple syrup?",
                    answers: ["USA", "Canada", "Russia", "Australia"],
                    correct: 1
                },
                {
                    question: "Which planet is the hottest in the Solar System?",
                    answers: ["Mars", "Venus", "Mercury", "Jupiter"],
                    correct: 1
                },
                {
                    question: "What is the capital of Germany?",
                    answers: ["Munich", "Berlin", "Frankfurt", "Hamburg"],
                    correct: 1
                },
                {
                    question: "Which element is used in pencils?",
                    answers: ["Lead", "Graphite", "Charcoal", "Carbon"],
                    correct: 1
                },
                {
                    question: "Who was the first man in space?",
                    answers: ["Neil Armstrong", "Yuri Gagarin", "John Glenn", "Alan Shepard"],
                    correct: 1
                },
                {
                    question: "What is the currency of India?",
                    answers: ["Dollar", "Euro", "Rupee", "Yen"],
                    correct: 2
                },
                {
                    question: "Which city is the capital of Spain?",
                    answers: ["Barcelona", "Madrid", "Seville", "Valencia"],
                    correct: 1
                },
                {
                    question: "Which planet is known as the Earth's Twin?",
                    answers: ["Mars", "Venus", "Jupiter", "Mercury"],
                    correct: 1
                },
                {
                    question: "Who discovered America?",
                    answers: ["Leif Erikson", "Christopher Columbus", "Vasco da Gama", "Ferdinand Magellan"],
                    correct: 1
                },
                {
                    question: "Which country is known for its kangaroos?",
                    answers: ["South Africa", "Australia", "India", "Brazil"],
                    correct: 1
                },
                {
                    question: "Which is the longest bone in the human body?",
                    answers: ["Femur", "Tibia", "Humerus", "Fibula"],
                    correct: 0
                },
                {
                    question: "Which country is the largest producer of rice?",
                    answers: ["India", "China", "Vietnam", "Thailand"],
                    correct: 1
                },
                {
                    question: "Which is the smallest planet in the Solar System?",
                    answers: ["Venus", "Earth", "Mercury", "Mars"],
                    correct: 2
                },
                {
                    question: "What is the capital of Russia?",
                    answers: ["Moscow", "St. Petersburg", "Kiev", "Sochi"],
                    correct: 0
                },
                {
                    question: "Which organ in the human body is responsible for detoxifying chemicals?",
                    answers: ["Kidneys", "Liver", "Pancreas", "Lungs"],
                    correct: 1
                },
                {
                    question: "Who wrote 'Pride and Prejudice'?",
                    answers: ["Charlotte Brontë", "Emily Brontë", "Jane Austen", "Mary Shelley"],
                    correct: 2
                },
                {
                    question: "Which continent is known as the Dark Continent?",
                    answers: ["Asia", "South America", "Africa", "Australia"],
                    correct: 2
                },
                {
                    question: "Which is the smallest continent by area?",
                    answers: ["Europe", "Australia", "South America", "Antarctica"],
                    correct: 1
                },
                {
                    question: "Which ocean is the largest by volume?",
                    answers: ["Atlantic", "Indian", "Pacific", "Southern"],
                    correct: 2
                },
                {
                    question: "Who developed the theory of evolution?",
                    answers: ["Isaac Newton", "Albert Einstein", "Charles Darwin", "Gregor Mendel"],
                    correct: 2
                },
                {
                    question: "Which country is known for the Taj Mahal?",
                    answers: ["Pakistan", "India", "Bangladesh", "Nepal"],
                    correct: 1
                },
                {
                    question: "What is the capital of Brazil?",
                    answers: ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"],
                    correct: 2
                },
                {
                    question: "Which planet has the most moons?",
                    answers: ["Earth", "Mars", "Jupiter", "Saturn"],
                    correct: 3
                },
                {
                    question: "What is the capital of Japan?",
                    answers: ["Kyoto", "Osaka", "Tokyo", "Nagasaki"],
                    correct: 2
                },
                {
                    question: "Which is the longest river in the world?",
                    answers: ["Amazon", "Nile", "Yangtze", "Mississippi"],
                    correct: 1
                },
                {
                    question: "Which country is known as the Land of Fire and Ice?",
                    answers: ["Iceland", "Greenland", "Norway", "Canada"],
                    correct: 0
                },
                {
                    question: "Who is known as the father of electricity?",
                    answers: ["Albert Einstein", "Isaac Newton", "Michael Faraday", "Nikola Tesla"],
                    correct: 3
                },
                {
                    question: "Which ocean is the smallest by area?",
                    answers: ["Arctic", "Indian", "Southern", "Atlantic"],
                    correct: 0
                },
                {
                    question: "Which animal is known for its stripes?",
                    answers: ["Lion", "Zebra", "Giraffe", "Elephant"],
                    correct: 1
                },
                {
                    question: "Which planet is closest to the Sun?",
                    answers: ["Venus", "Earth", "Mercury", "Mars"],
                    correct: 2
                },
                {
                    question: "Which is the hottest desert in the world?",
                    answers: ["Gobi", "Sahara", "Kalahari", "Mojave"],
                    correct: 1
                },
                {
                    question: "Which country is known for its tulips?",
                    answers: ["France", "Netherlands", "Germany", "Belgium"],
                    correct: 1
                },
                {
                    question: "What is the main component of the sun?",
                    answers: ["Helium", "Hydrogen", "Oxygen", "Nitrogen"],
                    correct: 1
                },
                {
                    question: "Which country is the smallest by land area?",
                    answers: ["Monaco", "San Marino", "Vatican City", "Liechtenstein"],
                    correct: 2
                },
                {
                    question: "Who was the first person to walk on the moon?",
                    answers: ["Buzz Aldrin", "Yuri Gagarin", "Neil Armstrong", "Michael Collins"],
                    correct: 2
                },
                {
                    question: "Which animal is known as the King of the Jungle?",
                    answers: ["Elephant", "Tiger", "Lion", "Leopard"],
                    correct: 2
                },
                {
                    question: "Which country has the largest population?",
                    answers: ["India", "USA", "China", "Russia"],
                    correct: 2
                },
                {
                    question: "What is the capital of France?",
                    answers: ["Rome", "Paris", "Berlin", "London"],
                    correct: 1
                },
                {
                    question: "Which planet is known for its Great Red Spot?",
                    answers: ["Mars", "Saturn", "Jupiter", "Uranus"],
                    correct: 2
                },
                {
                    question: "Who wrote 'Romeo and Juliet'?",
                    answers: ["Charles Dickens", "William Shakespeare", "Jane Austen", "Mark Twain"],
                    correct: 1
                },
                {
                    question: "Which country is known as the Land Down Under?",
                    answers: ["Australia", "New Zealand", "South Africa", "Argentina"],
                    correct: 0
                },
                {
                    question: "Which city is the capital of China?",
                    answers: ["Shanghai", "Hong Kong", "Beijing", "Tianjin"],
                    correct: 2
                },
                {
                    question: "Which continent is the most populous?",
                    answers: ["Africa", "Asia", "Europe", "North America"],
                    correct: 1
                },
                {
                    question: "What is the capital of South Korea?",
                    answers: ["Seoul", "Busan", "Incheon", "Daegu"],
                    correct: 0
                },
                {
                    question: "Which element has the chemical symbol 'O'?",
                    answers: ["Oxygen", "Osmium", "Oganesson", "Oxygenium"],
                    correct: 0
                },
                {
                    question: "Who painted the Mona Lisa?",
                    answers: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
                    correct: 2
                },
                {
                    question: "Which country is known for its sushi?",
                    answers: ["China", "Japan", "Thailand", "South Korea"],
                    correct: 1
                },
                {
                    question: "Which planet is known for its blue color?",
                    answers: ["Uranus", "Neptune", "Earth", "Venus"],
                    correct: 1
                },
                {
                    question: "Which is the largest island in the world?",
                    answers: ["Madagascar", "Borneo", "Greenland", "New Guinea"],
                    correct: 2
                },
                {
                    question: "What is the main ingredient in guacamole?",
                    answers: ["Tomato", "Onion", "Avocado", "Pepper"],
                    correct: 2
                },
                {
                    question: "Who was the first President of the United States?",
                    answers: ["Thomas Jefferson", "John Adams", "Benjamin Franklin", "George Washington"],
                    correct: 3
                },
                {
                    question: "Which planet is the coldest in the Solar System?",
                    answers: ["Neptune", "Uranus", "Pluto", "Mars"],
                    correct: 1
                },
                {
                    question: "Which city is the capital of Canada?",
                    answers: ["Toronto", "Montreal", "Ottawa", "Vancouver"],
                    correct: 2
                },
                {
                    question: "What is the largest organ in the human body?",
                    answers: ["Heart", "Liver", "Skin", "Lungs"],
                    correct: 2
                },
                {
                    question: "Which is the largest mammal in the world?",
                    answers: ["Elephant", "Blue Whale", "Giraffe", "Rhinoceros"],
                    correct: 1
                },
                {
                    question: "Which is the most abundant gas in Earth's atmosphere?",
                    answers: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
                    correct: 2
                },
                {
                    question: "Which country is known for the Eiffel Tower?",
                    answers: ["Italy", "France", "Spain", "Germany"],
                    correct: 1
                },
                {
                    question: "Who wrote 'To Kill a Mockingbird'?",
                    answers: ["Harper Lee", "J.D. Salinger", "F. Scott Fitzgerald", "Ernest Hemingway"],
                    correct: 0
                },
                {
                    question: "Which city is known as the City of Love?",
                    answers: ["New York", "Venice", "Paris", "Rome"],
                    correct: 2
                },
                {
                    question: "Which planet has the most gravity?",
                    answers: ["Earth", "Jupiter", "Saturn", "Mars"],
                    correct: 1
                },
                {
                    question: "Which country is known for its chocolates?",
                    answers: ["Belgium", "France", "Switzerland", "Germany"],
                    correct: 2
                },
                {
                    question: "Who is the author of '1984'?",
                    answers: ["George Orwell", "Aldous Huxley", "Ray Bradbury", "Kurt Vonnegut"],
                    correct: 0
                },
                {
                    question: "Which country is home to the Amazon Rainforest?",
                    answers: ["Brazil", "Colombia", "Peru", "Venezuela"],
                    correct: 0
                },
                {
                    question: "Which element has the chemical symbol 'Na'?",
                    answers: ["Nitrogen", "Sodium", "Neon", "Nickel"],
                    correct: 1
                },
                {
                    question: "Which continent has the most countries?",
                    answers: ["Asia", "Africa", "Europe", "South America"],
                    correct: 1
                },
                {
                    question: "Which is the longest mountain range in the world?",
                    answers: ["Rocky Mountains", "Andes", "Himalayas", "Alps"],
                    correct: 1
                },
                {
                    question: "Which country is the largest producer of oil?",
                    answers: ["Saudi Arabia", "USA", "Russia", "China"],
                    correct: 1
                },
                {
                    question: "Which is the largest country in Africa by area?",
                    answers: ["Sudan", "Algeria", "Nigeria", "Libya"],
                    correct: 1
                },
                {
                    question: "Which city is known as the City of Angels?",
                    answers: ["Paris", "Los Angeles", "Bangkok", "London"],
                    correct: 2
                },
                {
                    question: "Who invented the light bulb?",
                    answers: ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "Albert Einstein"],
                    correct: 1
                },
                {
                    question: "Which element has the atomic number 2?",
                    answers: ["Hydrogen", "Helium", "Lithium", "Beryllium"],
                    correct: 1
                },
                {
                    question: "Which planet is known as the Earth's Twin?",
                    answers: ["Mars", "Venus", "Jupiter", "Mercury"],
                    correct: 1
                },
                {
                    question: "Which is the tallest mountain in the world?",
                    answers: ["K2", "Kangchenjunga", "Mount Everest", "Lhotse"],
                    correct: 2
                },
                {
                    question: "Who wrote 'Pride and Prejudice'?",
                    answers: ["Charlotte Bronte", "Jane Austen", "Emily Bronte", "Louisa May Alcott"],
                    correct: 1
                },
                {
                    question: "Which country is the largest producer of tea?",
                    answers: ["India", "China", "Sri Lanka", "Kenya"],
                    correct: 1
                },
                {
                    question: "Which ocean is the largest by area?",
                    answers: ["Atlantic", "Indian", "Southern", "Pacific"],
                    correct: 3
                },
                {
                    question: "Who was the first woman to win a Nobel Prize?",
                    answers: ["Marie Curie", "Mother Teresa", "Rosalind Franklin", "Florence Nightingale"],
                    correct: 0
                },
                {
                    question: "Which is the smallest country in the world by population?",
                    answers: ["San Marino", "Nauru", "Monaco", "Vatican City"],
                    correct: 3
                },
                {
                    question: "Which country is known for the Taj Mahal?",
                    answers: ["India", "Pakistan", "Bangladesh", "Sri Lanka"],
                    correct: 0
                }
                // Add more questions here
            ];
    
            let shuffledQuestions;
            let currentQuestionIndex;
            let score;
            let quizActive;
    
            function initializeQuiz() {
                shuffledQuestions = quizQuestions.sort(() => Math.random() - 0.5);
                currentQuestionIndex = 0;
                score = 0;
                quizActive = true;
                document.getElementById("result").innerHTML = "";
                document.getElementById("score").innerText = "";
                document.getElementById("restartButton").classList.add("hidden");
                loadQuestion();
            }
    
            function loadQuestion() {
                if (currentQuestionIndex < shuffledQuestions.length && quizActive) {
                    let currentQuestion = shuffledQuestions[currentQuestionIndex];
                    document.getElementById("question").innerHTML = `<h4>${currentQuestion.question}</h4>`;
                    document.getElementById("answers").innerHTML = "";
    
                    currentQuestion.answers.forEach((answer, index) => {
                        let button = document.createElement("button");
                        button.className = "btn btn-outline-primary btn-block mt-2";
                        button.innerText = answer;
                        button.onclick = () => checkAnswer(index);
                        document.getElementById("answers").appendChild(button);
                    });
    
                    document.getElementById("score").innerText = `Score: ${score}`;
                } else {
                    endQuiz();
                }
            }
    
            function checkAnswer(selectedIndex) {
                let correctIndex = shuffledQuestions[currentQuestionIndex].correct;
    
                if (selectedIndex === correctIndex) {
                    score++;
                    alert("Correct! Good job!");
                    currentQuestionIndex++;
                    loadQuestion();
                } else {
                    alert("Sorry, that's incorrect.");
                    endQuiz();
                }
            }
    
            function endQuiz() {
                quizActive = false;
                document.getElementById("question").innerHTML = "<h4>Quiz Completed!</h4>";
                document.getElementById("answers").innerHTML = "";
                document.getElementById("score").innerText = `Final Score: ${score}`;
                document.getElementById("result").innerHTML = "Thank you for playing! We hope you enjoyed the quiz!";
                document.getElementById("restartButton").classList.remove("hidden");
            }
    
            document.getElementById("stopButton").addEventListener("click", () => {
                quizActive = false;
                endQuiz();
            });
    
            document.getElementById("startButton").addEventListener("click", () => {
                document.getElementById("welcomeScreen").classList.add("hidden");
                document.getElementById("quizContent").classList.remove("hidden");
                initializeQuiz();
            });
    
            document.getElementById("restartButton").addEventListener("click", () => {
                initializeQuiz();
            });
    //Quiz Part End


