function checkReverse(str) {
    let reversedstring = '';
    for (let i = str.length - 1; i>0; i--)
        reversedstring = reversedstring + str[i]
}

if (reversedstring === str){
    return true;
    }    else {
        return false;
    }