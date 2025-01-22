let n = 5;

const resultDiv = document.getElementById("result");

for (let i = 0; i <= 10; i++) {
    const result = `${i} x ${n} = ${i * n}`;
    
    const paragraph = document.createElement("p");
    paragraph.textContent = result;
    
    resultDiv.appendChild(paragraph);
}
