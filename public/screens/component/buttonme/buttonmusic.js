function MusicButton({
    onMostPopularClick,
    onGameWiseClick,
    initialActive = 'MostPopular'
}) {
    const buttonContainer = document.createElement('div');
    buttonContainer.className = 'button-container';

    let isMostPopularActive = initialActive === 'MostPopular';

    function handleToggle() {
        isMostPopularActive = !isMostPopularActive;
        updateStyles();
    }

    function updateStyles() {
        mostPopularDiv.className = `buttonme ${isMostPopularActive ? 'button-active' : 'button-inactive'} popular-div`;
        gameWiseDiv.className = `buttonme ${isMostPopularActive ? 'button-inactive' : 'button-active'} game-div`;
    }

    const mostPopularDiv = document.createElement('div');
    mostPopularDiv.className = 'buttonme popular-div';
    mostPopularDiv.innerText = 'Popular Tracks';
    mostPopularDiv.addEventListener('click', () => {
        handleToggle();
        if (onMostPopularClick) onMostPopularClick(); // Trigger passed function
    });

    const gameWiseDiv = document.createElement('div');
    gameWiseDiv.className = 'buttonme game-div';
    gameWiseDiv.innerText = 'Yours Tracks';
    gameWiseDiv.addEventListener('click', () => {
        handleToggle();
        if (onGameWiseClick) onGameWiseClick(); // Trigger passed function
    });

    updateStyles();

    buttonContainer.appendChild(mostPopularDiv);
    buttonContainer.appendChild(gameWiseDiv);

    return buttonContainer;
}


