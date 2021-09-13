// assume the item in array is number
// arr: number[]
const cleanTheRoom = (arr) => {
  const result = {}; // { [key: string]: number[]}
  arr.map(item => {
    const key = item;
    if(result[key]) {
      result[key].push(key)
    } else {
      result[key] = [key];
    }
  });

  return Object.values(result).map(item => {
    return item.length === 1 && item[0] || item; // number | number[]
  });
};

const array = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];
console.log('array', array);
console.log('Answer:', cleanTheRoom(array));
