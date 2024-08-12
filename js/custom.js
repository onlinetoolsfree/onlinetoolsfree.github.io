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

