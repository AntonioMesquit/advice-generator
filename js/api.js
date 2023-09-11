export async function fetchText() {
    const response = await fetch(`https://api.adviceslip.com/advice/${Math.floor(Math.random() * 220)}`)

    if (response.status === 200) {
        let data = await response.json();
        let adviceID = data.slip.id;
        let adviceText = data.slip.advice;

        document.querySelector('.advice-number').innerHTML = `Advice#<span id="advice-id">${adviceID}</span>`;
        document.querySelector('.advice-text').innerHTML = `“${adviceText}”`;
    }
   
    
}
