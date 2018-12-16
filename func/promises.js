/**
 * There are several approaches to deal with an array of promises (Array<Promise>)
 * 1. CaI : Contrl as Individual
 * 2. CaG : Control as Group 
 * 3. CaS : Control as Sequence 
 */

const arr1 = [Promise.resolve(1), Promise.resolve(2), Promise.reject(3), Promise.resolve(4)];
const arr2 = [Promise.resolve(1), Promise.resolve(2), Promise.reject(3), Promise.resolve(4)];
const arr3 = [Promise.resolve(1), Promise.resolve(2), Promise.reject(3), Promise.resolve(4)];

/**
 * 1. CaI :  Control as Individual
 *   description: 
 *     Promises of arr1 will be individually handled. 
 *     Even if there is a rejected promise, every resolved promise will be regardlessly executed.
 *   result of the code below: 
 *     1
 *     2
 *     err: 3
 *     4
 */
// arr1.forEach(async (promise) => {
//     try {
//         console.log(await promise);
//     } catch (err) {
//         console.log('err:', err);
//     }
// });

/**
 * 2. CaG : Control as Group
 *   description:
 *     arr2 will be resolved to an array of resolve values only when every promises are to be resolved without error.
 *     Otherwise, an error that's occured first will be the resolved value of arr2, rather than an array.
 *   result of the code below: 
 *     err: 3
 */
Promise.all(arr2)
    .then((arr2_) => {
        for (const val of arr2_) {
            console.log(val);
        }
    })
    .catch((err) => {
        console.log('err:', err);
    });

/**
 * 3. CaS : Control as Sequence
 *   description: arr3's promises are gonna be resolved and consumed until a rejected promise appears.
 *   result of the code below:
 *     1
 *     2
 *     err: 3
 */
// (async () => {
//     try {
//         for await (const val of arr3) {
//             console.log(val);
//         }
//     } catch (err) {
//         console.log('err:', err);
//     }
// })();