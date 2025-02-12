array = [1, 2, 3, 4, 5, 6]

// #1. arr.slice()
function mySlice(array, start, end){
    if(start >= array.length || end >= array.length || start <= -1 || end <= -1){
        console.log("Incorrect range")
    }
    else{
        let sliced_array = []

        if(start > end){
            for(let i = start; i >= end; i--){
                sliced_array.push(array[i])
            }
        }
        else{
            for(let i = start; i <= end; i++){
                sliced_array.push(array[i])
            }
        }
        console.log(sliced_array)
    }
}

// #2 arr.indexOf()
function myIndexOf(array, item, from){
    let index
    for(let i = from; i < array.length; i++){
        if(array[i] == item){
            index = i
        }
    }

    if(index == null){
        console.log(-1)
    }
    else{
        console.log(`Element '${item}' on index: ${index}`)
    }
}

// #3 arr.includes()
function myIncludes(array, item, from){
    let reply = false
    for(let i = from; i < array.length; i++){
        if(array[i] == item){
            reply = true
            break
        }
    }

    console.log(reply)
}
