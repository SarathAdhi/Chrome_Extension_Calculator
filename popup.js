var textField = document.getElementById("textField");

document.getElementById("submit").addEventListener("click", calculate)
document.getElementById("7").addEventListener("click", () => (addVals(7)))
document.getElementById("8").addEventListener("click", () => (addVals(8)))
document.getElementById("9").addEventListener("click", () => (addVals(9)))
document.getElementById("4").addEventListener("click", () => (addVals(4)))
document.getElementById("5").addEventListener("click", () => (addVals(5)))
document.getElementById("6").addEventListener("click", () => (addVals(6)))
document.getElementById("1").addEventListener("click", () => (addVals(1)))
document.getElementById("2").addEventListener("click", () => (addVals(2)))
document.getElementById("3").addEventListener("click", () => (addVals(3)))
document.getElementById("0").addEventListener("click", () => (addVals(0)))
document.getElementById("+").addEventListener("click", () => (addVals("+")))
document.getElementById("/").addEventListener("click", () => (addVals("/")))
document.getElementById("-").addEventListener("click", () => (addVals("-")))
document.getElementById("*").addEventListener("click", () => (addVals("*")))
document.getElementById(".").addEventListener("click", () => (addVals(".")))
document.getElementById("pi").addEventListener("click", () => { addVals("(22/7)") })
document.getElementById("clear").addEventListener("click", () => { ClearAll() })
document.getElementById("mode").addEventListener("click", () => { changeMode() })

let count = 0;

function calculate() {
    var input = textField.value
    const value = eval(input)
    if(value)
        textField.value = value
}

function ClearAll() {
    textField.value = ''
}

function addVals(val) {
    textField.value += val
}

function changeMode(){
    if(count%2 === 0)
        document.getElementById("mode").innerHTML = 'D'
    else
        document.getElementById("mode").innerHTML = 'L'
    count++;

    document.body.classList.toggle('light')

}