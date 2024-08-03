document.addEventListener('DOMContentLoaded', () => {
    const activitiesContainer = document.getElementById('activities-container');
    const toggleThemeButton = document.getElementById('toggle-theme');

    // Fetching activities from JSON Placeholder API
    async function fetchActivities() {
        try {
            const response = await fetch('http://localhost:3000/activities');
            const data = await response.json();
            displayActivities(data);
        } catch (error) {
            console.error('Error fetching activities:', error);
        }
    }

    // Displaying activities
    function displayActivities(activities) {
        activities.forEach(activity => {
            const activityElement = document.createElement('div');
            activityElement.classList.add('activity');
            activityElement.innerHTML = `
                <h2>${activity.title}</h2>
                <p>${activity.description}</p>
                <img src="${activity.image}" alt="${activity.title}">
                <button class="like-button">Like</button>
            `;
            activitiesContainer.appendChild(activityElement);
        });
        addLikeButtonListeners();
    }

    // Adding event listeners for like buttons
    function addLikeButtonListeners() {
        const likeButtons = document.querySelectorAll('.like-button');
        likeButtons.forEach(button => {
            button.addEventListener('click', () => {
                alert('Liked!');
            });
        });
    }

    // Toggle theme event listener
    toggleThemeButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });

    // Fetch activities on page load
    fetchActivities();
});
