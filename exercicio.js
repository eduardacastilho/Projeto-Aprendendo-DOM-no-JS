const newImagePath = './campo.atividade.jpg';
const originalImagePath = './mar.atividade.jpg';
const imageElement = document.getElementById('my-image');

function changeImage() {
   
    imageElement.src = newImagePath;
    imageElement.alt= "Nova Imagem";
}

function restoreImage() {
    imageElement.src = originalImagePath;
    imageElement.alt= "Imagem Original";
}   

function hideText() {
    document.getElementById('my-text').style.display = 'none';
}
function showText() {
    const textElement = document.getElementById('my-text');
    textElement.style.display = 'block';
}

function sumNumbers() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const result = num1 + num2;
    document.getElementById('result').innerText = `Resultado: ${result}`;

}
