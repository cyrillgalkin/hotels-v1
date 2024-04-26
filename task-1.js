function formatComputers(number) {
  const str = number.toString();

  if (['14', '13', '12', '11'].some((ending) => str.endsWith(ending))) {
    return `${str} компьютеров`;
  } else if (['4', '3', '2'].some((ending) => str.endsWith(ending))) {
    return `${str} компьютера`;
  } else if (str.endsWith('1')) {
    return `${str} компьютер`;
  } else {
    return `${str} компьютеров`;
  }
}

console.log(formatComputers(25));
console.log(formatComputers(41));
console.log(formatComputers(1048));
