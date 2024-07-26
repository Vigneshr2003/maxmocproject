function update() {
    
    return Math.floor(Math.random() * 10); 
}

function updateLevel() {
    const MeasureLevel = document.getElementById('circle1');
    const Level = update();

    MeasureLevel.textContent = Level;

    if (Level > 0) {
        MeasureLevel.style.backgroundColor = 'green';
        MeasureLevel.style.boxShadow = '0 0 20px 5px rgba(0, 255, 0, 0.3)';
    } else {
        MeasureLevel.style.backgroundColor = 'red';
        MeasureLevel.style.boxShadow = '0 0 10px 5px rgba(255, 0, 0, 0.3)';
    }
}


setInterval(updateLevel, 1000);
