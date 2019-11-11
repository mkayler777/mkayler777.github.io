var winningNumber = Math.floor(Math.random() * 20)
var losingNumber = Math.floor(Math.random() * 20)
var counter = 4

function clicked(){
    alert("Ouch!! I said don't click me!")
}

function tableClick(location){
    counter -= 1
    document.getElementById("counter").innerHTML = counter
    if(location === winningNumber){
        document.getElementById(location).innerHTML = "🎄"
        alert("HO! HO! HO! YAYYYYYYY!")
    }   else if(location === losingNumber) {
        document.getElementById(location).innerHTML = "❄️"
        alert("BOOOOOOOO! YOU LOST!")
    }   else {
        document.getElementById(location).innerHTML = "🎅"
        alert("Keep trying!! Didn't win yet!!")
        if (counter === 0){
        alert("Game Over!")
        }
    }

}
