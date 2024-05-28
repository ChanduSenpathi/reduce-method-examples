//reduce method

// ex:1

// let arr = ["1", "2", ["chandu", "senapathi"], "edu", [220, 7]]

// const nestedArr = [
//     [1, 2, 3],
//     [4, [5, 20], 6],
//     [7, 8, 9], 10
// ];
// const flattenArr = (nestedArr, f) => {
//     return nestedArr.reduce((total, curr) => {
//         // console.log(total);

//         if (Array.isArray(curr)) {
//             return flattenArr(curr, total);
//         } else {
//             total.push(curr);
//             return total;
//         }

//     }, f);
// };
// console.log(flattenArr(nestedArr, []))

// ---------------------------------------------------------------------

// ex:2

// let arr = ["1", "2", ["chandu", [3, 5, 6], "senapathi"], "edu", [220, 7]]

// let flattened_array = (a, f_arr) => {
//     return a.reduce((acc, val) => {
//         if (Array.isArray(val)) {
//             return flattened_array(val,acc);
//         }
//         return acc.concat(val);
//     }, f_arr);
// }

// console.log(flattened_array(arr, []));

// ---------------------------------------------------------------------------

// ex:3

// const fruitBasket = [
//     'banana',
//     'cherry',
//     'orange',
//     'apple',
//     'cherry',
//     'orange',
//     'apple',
//     'banana',
//     'cherry',
//     'orange',
//     'fig',
// ];

// const fruitBasketFun = (fruitBasket, obj) => {
//     return fruitBasket.reduce((empty, acc) => {

//         if (empty[acc]) {
//             let dup = empty[acc]
//             empty[acc] = dup + 1
//         }else {
//             empty[acc] = 1;
//         }
//         console.log(empty);
//         // return empty;
//     }, obj);
// }

// let final_call = fruitBasketFun(fruitBasket, {})
// console.log(final_call);

// -------------------------------------------------------------------------

// ex:4

// let people = [
//   { name: 'John', age: 21 },
//   { name: 'Oliver', age: 55 },
//   { name: 'Michael', age: 55 },
//   { name: 'Michael2', age: 55 },
//   { name: 'Dwight', age: 19 },
//   { name: 'Oscar', age: 21 },
//   { name: 'Kevin', age: 55 },
// ];

// let calltwinAges = (people, obj) => {
//   return people.reduce((total, acc)=> {

//       if(total[acc.age]){
//           total[acc.age].push(acc.name);
//       }else {
//           total[acc.age] = [acc.name];
//       }
//       return total;
//   }, {})
// }

// let final_result = calltwinAges(people, {});
// console.log(final_result);

// -----------------------------------------------------------------------

// ex:5

// const fromArr = [
//   { name: 'a', values: [1, 2] },
//   { name: 'b', values: [3] },
//   { name: 'a', values: [4, 5] },
//   { name: 'a', values: [10, 15] },
// ];

// let findingSameValues = (fromArr, obj) => {
//   return fromArr.reduce((total,acc)=> {
//       if(total[acc.name]){
//           let dup = acc.values
//           let initial = total[acc.name]
//           let final_concat = initial.concat(dup)
//           total[acc.name] = final_concat;
//       }else {
//           total[acc.name] = acc.values
//       }
//       return total
//   }, {})
// }

// let array_value = findingSameValues(fromArr,{});
// console.log(array_value);
