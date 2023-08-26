const secreen = document.querySelector('.screen')
const buttons = document.querySelectorAll('button')

let cal = []
let accCal=""

function calculer(button){
    const value = button.textContent
    if(value === "Clear"){
        cal=[]
        secreen.textContent="0"
    }else if(value === "="){
        secreen.textContent=eval(accCal)
        cal=[]
        cal.push(eval(accCal))
    }else{
        cal.push(value)
        accCal=cal.join('')
        secreen.textContent=accCal
    }
}

//buttons.forEach(button=>button.addEventListener('click',()=>calculer(button)))
buttons.forEach(button => button.addEventListener('click',()=>calculer(button)));
