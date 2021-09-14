// arr: number[]
// target: number
const answer= (arr, target) => {
    const len = arr.length;
    let result = null;
    for (let i = 0; i < len - 1; i++) {
        for (let j = i + 1; j < len; j++) {
            const added = arr[i] + arr[j];
            if (added === target) {
                result = [arr[i], arr[j]];
                break;
            }
        }
        
        if (result) {
            break;
        }
    }

    return result || [];
};

console.log('=============================');
const arr = [1,2,3];
const target = 4;
console.log('arr:', arr);
console.log('target:', target);
console.log('Answer:', answer(arr, target));
console.log('=============================');

console.log('=============================');
const arr2 = [-1, -2, -3];
const target2 = 4;
console.log('arr2:', arr2);
console.log('target2:', target2);
console.log('Answer:', answer(arr2, target2));
console.log('=============================');

console.log('=============================');
const arr3 = [-1, -2, -3];
const target3 = -3;
console.log('arr3:', arr3);
console.log('target3:', target3);
console.log('Answer:', answer(arr3, target3));
console.log('=============================');
