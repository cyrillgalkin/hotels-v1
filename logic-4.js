function findTotalPies() {
  // Пусть x - общее количество пирожков в столовой
  // Первый студент хочет купить треть всех пирожков и ещё 2 пирожка или x/3 + 2
  // Второй студент хочет купить четверть всех пирожков и ещё 3 пирожка или x/4 + 3
  // Третий студент хочет купить пятую часть всех пирожков и ещё 8 пирожков или x/5 + 8
  let x = 1;
  while (true) {
    if (x / 3 + 2 + (x / 4 + 3) + (x / 5 + 8) === x) {
      return x;
    } else {
      x++;
    }
  }
}

console.log('Количество пирожков в столовой:', findTotalPies());
