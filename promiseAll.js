function promiseAll(promises) {
    // Возвращаем новый Promise, который будет завершён,
    // когда завершатся *все* переданные промисы (или отклонён при первой ошибке)
    return new Promise((resolve, reject) => {

        // Проверяем, что аргумент — массив. Если нет — выбрасываем ошибку.
        if (!Array.isArray(promises)) {
            return reject(new TypeError("Argument must be an array"));
        }

        // Массив для хранения результатов в том же порядке, что и входные промисы
        const result = [];

        // Счётчик успешно завершённых промисов
        let completed = 0;

        // Если массив пуст — возвращаем сразу пустой результат
        if (promises.length === 0) {
            return resolve([]);
        }

        // Перебираем каждый элемент входного массива
        promises.forEach((el, index) => {

            // Оборачиваем элемент в Promise.resolve — на случай, если это не промис, а обычное значение.
            Promise.resolve(el)
                .then(value => {
                    // Сохраняем результат в том же индексе, что и исходный элемент
                    result[index] = value;

                    // Увеличиваем счётчик успешно завершённых промисов
                    completed += 1;

                    // Если все промисы завершены — резолвим итоговый массив
                    if (completed === promises.length) {
                        resolve(result);
                    }
                })
                // Если хотя бы один промис отклонён — весь promiseAll должен завершиться с ошибкой
                .catch(reject);
        });
    });
}
