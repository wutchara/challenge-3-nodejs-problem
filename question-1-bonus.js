const assignItem = (result, key, item) => {
  if (result[key]) {
    result[key].push(item);
  } else {
    result[key] = [item];
  }
};
const numberType = (arr) => {
  const result = {}; // { [key: string]: number[]}
  arr.map(item => {
    const key = item;
    assignItem(result, key, item);
  });

  return Object.values(result).map(item => {
    return item.length === 1 && item[0] || item; // number | number[]
  });
};

const otherType = (arr) => {
  const result = {};  // { [key: string]: <T>[] }
  arr.map(item => {
    const key = typeof item;
    assignItem(result, key, item);
  });

  return Object.values(result);
};

// assume the item in array is number
// arr: number[]
const cleanTheRoom = (arr) => {
  // check is the same type
  let isAllNumber = true;
  for(let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== 'number') {
      isAllNumber = false;
      break;
    }
  }

  // process
  return isAllNumber ? numberType(arr) : otherType(arr);
};

console.log('--------------------------');
const array = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];
console.log('array', array);
console.log('Answer:', cleanTheRoom(array));
console.log('--------------------------');

const array2 = [1, "2", "3", 2];
console.log('array2', array2);
console.log('Answer2:', cleanTheRoom(array2));
console.log('--------------------------');

const array3 = [undefined,1, "2", "3", 2, null, false, false];
console.log('array3', array3);
console.log('Answer3:', cleanTheRoom(array3));
console.log('--------------------------');
