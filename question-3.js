const getHex = (str) => {
    return parseInt(str, 16);
};

const parseStrToHex = (hexStr) => {
    return [getHex(hexStr.slice(1, 3)),
        getHex(hexStr.slice(3, 5)),
        getHex(hexStr.slice(5))];
};

const validateHex = (hexStr) => {
    let rgbArr;
    if (hexStr.startsWith('#') && hexStr.length === 7) {
        // assume all digit is numeric
        rgbArr = parseStrToHex(hexStr);
        if (rgbArr.find(n => n === NaN) !== undefined) {
            return undefined;
        }
    }

    return rgbArr;
}

const convertHexToRgb = (hexStr) => {
    const testHex = validateHex(hexStr);
    
    return testHex || [];
};

const parseRgbToString = (rgb) => {
    return '#' + rgb.map(num => num.toString(16).toUpperCase()).join('');
};

// rgb: number[red, green, blue]
const convertRgbToHex = (rgb) => {
    let result;
    if (rgb.length === 3) {
        const wrongNumber = rgb.find(n => n > 255 || n < 0);

        if (!wrongNumber ) {
            result = parseRgbToString(rgb);
        }
    }
    return result;
};

// TODO: auto detect string format

console.log('-----------------------------');
const hex = '#FBA190';
const rgb = [251, 161, 144];
console.log('Input => HEX:', hex, ', RGB:', rgb);
console.log('HEX:', convertRgbToHex(rgb));
console.log('RGB:', convertHexToRgb(hex));
console.log('-----------------------------');

// wrong input
const hex2 = '#FBA1';
const rgb2 = [251, 161, 900];
console.log('Input => HEX:', hex2, ', RGB:', rgb2);
console.log('HEX:', convertRgbToHex(rgb2));
console.log('RGB:', convertHexToRgb(hex2));
console.log('-----------------------------');