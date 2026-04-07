// let students = [
//   { name: "Vu", age: 20, address: "Hanoi" },
//   { name: "Huy", age: 20, address: "Long Phu" },
//   { name: "Ky", age: 20, address: "Ha Tay" },
// ];
// console.log(students);
// console.log(students[0].address);
// console.log(students[1].name);

let products = [
  { name: "Laptop", price: 1500, brand: "Dell" },
  { name: "Mouse", price: 20, brand: "Logitech" },
  { name: "Keyboard", price: 50, brand: "keychron" },
];
for (let i = 0; i < products.length; i++) {
  console.log(products[i]);
}
console.log(products[0].name);
console.log(products[1].price);
console.log(products[2].brand);
console.log(products[0]);

let students = [
  { name: "An", age: 20, major: "IT" },
  { name: "Binh", age: 21, major: "Business" },
  { name: "Cuong", age: 22, major: "Design" },
];

for (let i = 0; i < students.length; i++) {
  console.log("Sinh vien " + (i + 1));
  console.log("Ten: " + students[i].name);
  console.log("Tuoi: " + students[i].age);
  console.log("Nganh: " + students[i].major);
  console.log("-------------------");
}

let studentss = [
  { name: "An", age: 20, major: "IT" },
  { name: "Binh", age: 21, major: "Business" },
];

studentss.push({ name: "Cuong", age: 22, major: "Design" });

console.log(studentss);
