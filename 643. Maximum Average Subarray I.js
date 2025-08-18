/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  let begin = 0;
  let windowSum = 0;
  let res = -Infinity;

  // Прокачиваем окно
  for (let end = 0; end < nums.length; end++) {
    windowSum += nums[end]; // Добавляем текущий элемент в окно

    // Когда окно достигло размера k
    if (end - begin + 1 === k) {
      res = Math.max(res, windowSum); // Обновляем результат
      windowSum -= nums[begin]; // Убираем старый элемент
      begin++; // Двигаем левый край окна
    }
  }

  return res / k; // Возвращаем максимальное среднее значение
};
