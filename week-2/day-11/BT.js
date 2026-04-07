// Tạo array books gồm 3 object, mỗi object có:

// title
// author
// price

// Sau đó in ra tên sách đầu tiên và giá sách thứ hai.

let books = [
  { title: "Hello", author: "Vu", price: 1 },
  { title: "World", author: "Huy", price: 2 },
  { title: "JavaScript", author: "Ky", price: 3 },
];

console.log(books[0].title);
console.log(books[1].price);

// Tạo array users gồm 3 object, mỗi object có:

// name
// age
// email

// Dùng for để in ra toàn bộ user.

let users = [
  { name: "Vu", age: 20, email: "Vu@gmail.com" },
  { name: "Huy", age: 20, email: "Huy@gmail.com" },
  { name: "Ky", age: 20, email: "Ky@gmail.com" },
];

for (let i = 0; i < users.length; i++) {
  console.log("Nguoi dung ", i + 1);
  console.log("Ten: ", users[i].name);
  console.log("Tuoi: ", users[i].age);
  console.log("Email: ", users[i].email);
  console.log("-------------------");
}

// Tạo array doctors gồm 2 object, mỗi object có:
// name
// specialty
// experience
// Sau đó:
// cập nhật số năm kinh nghiệm của bác sĩ thứ 1
// thêm 1 bác sĩ mới vào danh sách
// in ra toàn bộ danh sách
let doctors = [
  { name: "Vu", specialty: "Rang mieng", experience: 10 },
  { name: "Ky", specialty: "Da lieu", experience: 20 },
];

doctors[0].experience = 11;
doctors.push({ name: "Huy", specialty: "Tai mui hong", experience: 15 });
for (let i = 0; i < doctors.length; i++) {
  console.log(doctors[i]);
}

// Tạo array orders gồm 3 object:
// id
// customerName
// total
// status
// Sau đó:
// in toàn bộ đơn hàng
// cập nhật trạng thái đơn hàng thứ 2
// thêm 1 đơn hàng mới
// in tổng số đơn hàng

let orders = [
  { id: 10, customerName: "Vu", total: 10, status: "Da giao" },
  { id: 5, customerName: "Huy", total: 20, status: "Dang giao" },
  { id: 1, customerName: "Ky", total: 100, status: "Dang giao" },
];
console.log(
  "Tong so don hang: ",
  orders[0].total + orders[1].total + orders[2].total,
);
orders[1].status = "Da giao";
console.log("Cap nhat trang thai don hang thu 2: ", orders[1].status);
orders.push({ id: 2, customerName: "Anh", total: 99, status: "Dang giao" });

console.log(
  "Tong so don hang: ",
  orders[0].total + orders[1].total + orders[2].total + orders[3].total,
);
