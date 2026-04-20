let users = [
  { id: 1, name: "An Nguyen", age: 18, isActive: true },
  { id: 2, name: "Binh Tran", age: 17, isActive: false },
  { id: 3, name: "Cuong Le", age: 16, isActive: false },
  { id: 4, name: "Hoang Anh", age: 19, isActive: true },
  { id: 5, name: "Huy Ky", age: 22, isActive: true },
];

for (i = 0; i < users.length; i++) {
  console.log(
    `Khach Hang ${i + 1}: ${users[i].name}, ID: ${users[i].id}, Tuoi: ${users[i].age}, Trang thai hoat dong: ${users[i].isActive}`,
  );
}

console.log("\nNguoi dung tren 18 tuoi: ");
for (i = 0; i < users.length; i++) {
  if (users[i].age > 18) {
    console.log(
      `Khach Hang ${i + 1}: ${users[i].name}, ID: ${users[i].id}, Tuoi: ${users[i].age}, Trang thai hoat dong: ${users[i].isActive}`,
    );
  }
}

console.log("\nKhach Hang co ten la Nguyen: ");
let keyword = "nguyen";
for (i = 0; i < users.length; i++) {
  let name = users[i].name.toLowerCase();
  if (name.includes(keyword.toLowerCase())) {
    console.log(
      `Khach Hang ${i + 1}: ${users[i].name}, ID: ${users[i].id}, Tuoi: ${users[i].age}, Trang thai hoat dong: ${users[i].isActive}`,
    );
  }
}

console.log("\nThem 1 khach hang moi: ");
let newUser = {
  id: 6,
  name: "Hoang Linh",
  age: 18,
  isActive: false,
};

users.push(newUser);
console.log("Khach hang moi them: ");
console.log(`ID: ${users[users.length - 1].id}`);
console.log(`Ten: ${users[users.length - 1].name}`);
console.log(`Tuoi: ${users[users.length - 1].age}`);
console.log(`Trang thai hoat dong: ${users[users.length - 1].isActive}`);

console.log("\nCap nhat trang thai hoat dong: ");
for (i = 0; i < users.length; i++) {
  if (users[i].id == 1) {
    users[i].isActive = false;
  }
  console.log(
    `Khach Hang ${i + 1}: ${users[i].name}, ID: ${users[i].id}, Tuoi: ${users[i].age}, Trang thai hoat dong: ${users[i].isActive}`,
  );
}

let maxUser = users[0];
for (i = 0; i < users.length; i++) {
  if (users[i].age > maxUser.age) {
    maxUser = users[i];
  }
}
console.log(`\nKhach hang lon tuoi nhat: ${maxUser.name} ${maxUser.age} tuoi`);

for (i = 0; i < users.length; i++) {
  if (users[i].age < 18) {
    console.log(
      `Khach hang duoi 18 tuoi: ${users[i].name} co ID: ${users[i].id} - ${users[i].age} tuoi`,
    );
  }
}

function findUserbyKeyword(users, keyword) {
  let result = [];
  for (let i = 0; i < users.length; i++) {
    let name = users[i].name.toLowerCase();
    if (name.includes(keyword)) {
      result.push(users[i]);
    }
  }
  return result;
}

const readlineSync = require("readline-sync");

let input = readlineSync
  .question("Nhap vao ten khach hang: ")
  .trim()
  .toLowerCase();

let findUser = findUserbyKeyword(users, input);

if (findUser.length === 0) {
  console.log("Khong co khach hang nao tuong ung!");
} else {
  console.log("Danh sach khach hang tim duoc: ");
  for (let i = 0; i < findUser.length; i++) {
    console.log(`Khach hang: ${findUser[i].name} - ${findUser[i].age} tuoi`);
  }
}
