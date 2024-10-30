document.getElementById('fontSizeForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const fontSizeInput = document.getElementById('fontSizeInput').value;
    const textParagraph = document.getElementById('text');
    textParagraph.style.fontSize = fontSizeInput + 'px';
});
