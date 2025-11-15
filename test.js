// const data = [
//     { id: 1, category: "fruit", name: "apple" },
//     { id: 2, category: "fruit", name: "banana" },
//     { id: 3, category: "vegetable", name: "carrot" },
// ];

// const groupBy = (data, key) => {

//     return data.reduce((acc, cat) => {
//         if (!acc[cat[key]]) {
//             acc[cat[key]] = []
//         }

//         acc[cat[key]].push(cat)

//         return acc
//     }, {})

// }

// console.log(groupBy(data, 'category'))

/*
🧩 Задача 1.2: Мы писали код через Console Driven Development.
Часть кода у нас потерялась, но остался последний вывод. Расставьте тексты для console.log.
Последний вывод: 1, 2, 3, 4, 5 💫
*/

// async function first() {
//     await Promise.resolve(1).then(r => console.log(r));
//     await queueMicrotask(() => console.log(3));
//     await console.log(4);
// }

// async function second() {
//     first();
//     await Promise.resolve(2).then(r => console.log(r));
//     setTimeout(() => console.log(5), 0);
// }

// second();

// const funcArray = createFunctions(5);

// function createFunctions(number) {
//     let result = []
//     for (let i = 0; i < number; i++) {
//         result.push(
//             function () {
//                 return i
//             }
//         )
//     }
//     return result
// }
// console.log(funcArray[2]());
// const arr = [1, 2, 3, 4, 5];




Promise.myAll = function (promisses) {
    return new Promise((resolve, reject) => {

        if (!Array.isArray(promisses)) {
            return reject(new TypeError("Argument must be an array"));
        }

        if (promisses.length === 0) {
            return resolve([]);
        }

        let count = 0;
        const result = [];

        promisses.forEach((promise, idx) => {

            Promise.resolve(promise)
                .then(res => {
                    result[idx] = res;
                    count++;
                    if (count === promisses.length) {
                        resolve(result);
                    }
                })
                .catch(err => {
                    reject(err);
                    return
                })

        })
    })


}
