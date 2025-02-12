let man = {
    name: 'Tyler',
    age: 30,
    money: 3000,
    kids: 3,
    friends: 1
}

let woman = {
    name: 'Lana',
    age: 16,
    money: 20000,
    kids: 4999,
    friends: 600
}

// #1. Вывести суммы всех числовых полей объекта

function sumOfAllCountable(object){
    let sum = 0

    for(let key in object){
        if(Number(object[key])){
            sum += object[key]
        }
    }

    console.log(sum)
}

// #2. Со звездочкой**

function showArray(properties, values){
    for(let i = 0; i < properties.length; i++){
        console.log(`${properties[i]}: ${values[i]}`)
    }
}

function comparer(a, b){
    return b - a
}

function sortPropertiesByDesc(object){
    let array_values = [object.name]
    let array_properties = []

    for(let key in object){
        if(Number(object[key])){
            array_values.push(object[key])
        }
        else if(object[key] == 0){
            array_values.push(object[key])
        }
    }
    array_values = array_values.sort(comparer)

    for(let val in array_values){
        for(let key in object){
            if(object[key] == array_values[val]){
                array_properties.push(key)
            }
        }
    }

    showArray(array_properties, array_values)
}
sortPropertiesByDesc(woman)