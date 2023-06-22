
function reverse(str) {
    let ar = Array.from(str);
    let rev = [];
    while (ar.length > 0) {
        rev.push(ar.pop())
    }
    return rev.toString().replaceAll(",", '');
}


export default reverse;