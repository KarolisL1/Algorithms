function bookIndex(input){
    let arr = [];
    for (var i = 0; i < input.length; i++){
        let temp = i;
        while (input[i] + 1 == input[i + 1]){
            i++;
        }
        if (temp == i){
            arr.push(input[i].toString())
        }
        else {
            arr.push(input[temp].toString() + "-" + input[i].toString())
        }
        
    }
    return buildString(arr);
}

function buildString(input) {
    let string = ""
    for (var i = 0; i < input.length; i++){
        if (input[i] == input[input.length -1]){
            string += input[i]
        }
        else{
            string += input[i] + ", "
        }
    }
    return string;
}