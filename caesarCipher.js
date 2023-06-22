

function generateMap() {
    const alpha = Array.from(Array(26)).map((e, i) => i + 65);
    const alphabet = alpha.map((x) => String.fromCharCode(x));
    let map = {};
    let lowerCaseMap = {}
    for (let i = 0; i < alphabet.length; i++) {
        let letter = alphabet[i]
        map[letter] = i + 1
        lowerCaseMap[letter.toLowerCase()] = i + 27;
    }

    return [map, lowerCaseMap];
}

function cipher(str, shift) {
    let [upperMap, lowerMap] = generateMap();
    let ar = [];
    let result = ''

    for (let letter of str) {
        if (!upperMap[letter] && !lowerMap[letter]) {
            ar.push(letter)
        } else {
            ar.push(upperMap[letter] ? upperMap[letter] : lowerMap[letter])
        }
    }

    for (let element of ar) {
        if (isNaN(element) || element == ' ') {
            result += element;
        } else if (element > 26) {     
            element = (element + shift) % 26 + 26;
            const key = Object.keys(lowerMap).find((k) => lowerMap[k] === element);
            result += key
        } else if (element <= 26) {
            element = (element + shift) % 26;
            const key = Object.keys(upperMap).find((k) => upperMap[k] === element);
            result += key      
        }
    }
    return result;

    }

export default cipher;