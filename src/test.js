const arrayEntrada = [
  { name: 'Juan', age: 25, city: 'Bogotá' },
  { name: 'María', age: 30, city: 'Medellín' },
  { name: 'Pedro', age: 35, city: 'Bogotá' },
  { name: 'Ana', age: 28, city: 'Cali' },
  { name: 'Luis', age: 32, city: 'Medellín' }
];

export const objFunction = () => {
  const obj = {};
  arrayEntrada.map((element) => {
    if (!obj.hasOwnProperty(element.city)) {
      obj[element.city] = [];
    }
    obj[element.city].push(element);
  });
  return obj;
}