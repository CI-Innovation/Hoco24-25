const fireworksContainer = document.querySelector('.fireworks-container');

function createFirework() {
    // Create a launching particle
    const launcher = document.createElement('div');
    launcher.classList.add('launching-particle');

    // Set its initial position at a random horizontal position at the bottom
    const launchX = Math.random() * window.innerWidth;
    launcher.style.left = `${launchX}px`;

    // Randomize the Y-value for explosion (e.g., between 10% and 70% of screen height)
    const explosionHeight = Math.random() * (window.innerHeight * 0.3) + window.innerHeight * 0.1;

    // Set custom animation to fly up to explosionHeight
    launcher.style.animation = `fly-up 1.5s ease-out forwards`;
    launcher.style.setProperty('--explosion-height', `${explosionHeight}px`);

    // Add the launching particle to the container
    fireworksContainer.appendChild(launcher);

    // Wait for the particle to "fly up," then trigger the explosion
    setTimeout(() => {
        launcher.remove(); // Remove the launching particle
        explode(launchX, explosionHeight); // Trigger explosion at the target height
    }, 1500);
}

function explode(centerX, centerY) {
    const numParticles = 30; // Number of particles for a dense explosion

    for (let i = 0; i < numParticles; i++) {
        const firework = document.createElement('div');
        firework.classList.add('firework');

        // Calculate direction for the particle to spread from the center
        const angle = (i / numParticles) * 2 * Math.PI; // Evenly distribute particles in a circle
        const distance = Math.random() * 100 + 50; // Uniform distance for a circle
        const offsetX = Math.cos(angle) * distance; // X offset based on angle
        const offsetY = Math.sin(angle) * distance; // Y offset based on angle

        // Set initial position to the center (same as launch)
        firework.style.left = `${centerX}px`;
        firework.style.top = `${centerY}px`;

        // Add animation to make the particle move from the center to the explosion position
        firework.style.animation = `fade 1.5s ease-out forwards, move-out 1.5s ease-out forwards`;

        firework.style.setProperty('--offset-x', `${offsetX}px`);
        firework.style.setProperty('--offset-y', `${offsetY}px`);

        // Append particle to the container
        fireworksContainer.appendChild(firework);

        // Remove the particle after the animation ends
        setTimeout(() => {
            firework.remove();
        }, 3500); // Longer duration to account for the fall animation
    }
}

// Trigger fireworks every 3 seconds
setInterval(createFirework, 1500);
