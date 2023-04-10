const advice_array = [
    {
        id: Math.floor(Math.random()*1000) + 1,
        text: "An apple a day keeps the doctor away."
    },

    {
        id: Math.floor(Math.random()*1000) + 1,
        text: "Two things in life are certain.  Death and taxes."
    },

    {
        id: Math.floor(Math.random()*1000) + 1,
        text: "You can't change how others behave.  Focus on changing yourself."
    },

    {
        id: Math.floor(Math.random()*1000) + 1,
        text: "Life is short.  Make the most of it."
    },

    {
        id: Math.floor(Math.random()*1000) + 1,
        text: "Just one small positive thought in the morning can change your whole day."
    },

    {
        id: Math.floor(Math.random()*1000) + 1,
        text: "Opportunities don't happen, you create them."
    },

    {
        id: Math.floor(Math.random()*1000) + 1,
        text: "Love your family, work super hard, live your passion."
    },

]

function getRandomAdvice(){
    let idx = Math.floor(Math.random()*advice_array.length)
    return advice_array[idx]
}

let buttonNext = document.querySelector("#button-next-advice")

buttonNext.onclick = () => {
    let adviceIDText = document.querySelector('#advice-id-text')
    let adviceText = document.querySelector('.advice-text')
    let adviceObj = getRandomAdvice()
    adviceText.textContent = adviceObj.text;
    adviceIDText.textContent = adviceObj.id;
}
