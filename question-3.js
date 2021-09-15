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

const convertStrToRgbArray = (str) => {
    const limit = 3;
    const rgbTemp = [];

    str.split('').map((value, index) => {
    const targetIndex = parseInt(index/limit);
    if (rgbTemp[targetIndex]) {
        rgbTemp[targetIndex].push(value);
    } else {
        rgbTemp[targetIndex] = [value];
    }
    });

    const rgb = rgbTemp.map(codes => +codes.join(''));
    return rgb;
};

// auto detect string format
// input: string | number[]
const convert = (input) => {
    if (typeof input === 'string') {
        if(input.startsWith('#') || (/[a-zA-Z]+/).test(input) || input.length <= 7) {
            // start with '#'
            // or contains some alphabet
            return convertHexToRgb(input);
        } else {
            return convertRgbToHex(convertStrToRgbArray(input));
        }
    } else if (typeof input === 'object') { // array
        // split string into array
        return convertRgbToHex(input);
    }
    return;
}

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
console.log('-----------------------------');


console.log('<1>. HEX:', convert(rgb));
console.log('<1>. RGB:', convert(hex));
console.log('<2>. HEX:', convert(rgb2));
console.log('<2>. RGB:', convert(hex2));