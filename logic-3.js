function findMaxAttemptsForTotalDistance(totalDistance) {
  let metersInSection = 1; // Начинаем с 1 секции, которая включает в себя 1 метр
  let distanse = 0; // Общая сумма метров пройденной дистанции
  let count = 0;

  while (distanse < totalDistance) {
    distanse += metersInSection; // Прибавляем количество метров в текущей секции к общей сумме пройденной дистанции
    metersInSection++; // Увеличиваем количество метров в 1 секции
    count++; //cчитаем количество попыток
  }

  metersInSection - 1; // Возвращаемcя к предыдущему количеству метров в одной секции, так как последнее значение было добавлено к сумме, но не удовлетворило условию
  return count;
}

console.log(findMaxAttemptsForTotalDistance(5000));

function findMaxAttemptsForBreakPoint(totalDistance, breakPoint) {
  let lastSectionEndsAtMeters = findMaxAttemptsForTotalDistance(totalDistance);
  let distanse = lastSectionEndsAtMeters - 1;
  let count = 0;

  // Бросаем первый предмет
  while (lastSectionEndsAtMeters < breakPoint) {
    lastSectionEndsAtMeters += distanse;
    distanse--; // Уменьшаем дистанцию в каждой следующей секции, чтоба сбалансировать результаты
    count++; // Считаем количество попыток
  }

  let previousSectionEndsAtMeters = lastSectionEndsAtMeters - distanse;

  // Бросаем второй предмет и используем линейный поиск для получения результата
  while (previousSectionEndsAtMeters <= breakPoint) {
    previousSectionEndsAtMeters++;
    count++;
  }

  return count;
}

console.log(findMaxAttemptsForBreakPoint(5000, 4995));
