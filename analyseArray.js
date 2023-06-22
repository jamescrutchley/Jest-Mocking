
const analyseArray = {
    average: (ar) => (ar.reduce((prev, cur) => prev + cur) / ar.length),
    min: (ar) => ar.reduce((prev, cur) => (cur < prev) ? cur : prev),
    max: (ar) => ar.reduce((prev, cur) => (cur > prev) ? cur : prev),
    length: (ar) => ar.length,
};



export default analyseArray;