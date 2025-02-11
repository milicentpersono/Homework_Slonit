function getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1) + min)
}

let number = getRandomInt(1, 100)
let g_num

let min = 1
let max = 100
i = 1

const interval_id = setInterval(function(){
    g_num = getRandomInt(min, max)

    console.log("PC#2: Is that " + g_num + "?")
    if(g_num < number){
        console.log("PC#1: Higher")

        if(g_num == min){
            min = g_num + 1
        }
        else{
            min = g_num
        }
    }
    else if(g_num > number){
        console.log("PC#1: Lower")

        if(g_num == max){
            max = g_num - 1
        }
        else{
            max = g_num
        }
    }
    else{
        console.log("Yes, It is!")
        clearInterval(interval_id)
    }
    console.log("Lap#" + (i) + ": range " + min + "/" + max)
    i++
    console.log()
}, 1000)