// Tạo array chứa 3 môn học.
// Sau đó dùng push() để thêm 1 môn mới.

let subjects = ["Math", "Physics", "English"];
subjects.push("Chemistry");
console.log("Subjects sau khi push: ", subjects);

// Tạo array chứa 4 món ăn.
// Dùng pop() để xoá món cuối cùng.

let foods = ["Pizza", "Burger", "Chicken", "Rice"];
foods.pop();
console.log("Foods sau khi pop: ", foods);

// Tạo array chứa 3 tên sinh viên.
// Dùng:

// unshift() để thêm 1 sinh viên vào đầu
// shift() để xoá sinh viên đầu tiên

let students = ["Vu", "Huy", "Ky"];
students.unshift("Dep");
console.log("Sau khi unshift: ", students);
students.shift();
console.log("Sau khi shift: ", students);

// Tạo array notifications:
// Sau đó:
// thêm "Tin nhan 3" vào cuối
// thêm "Thong bao khan" vào đầu
// xoá 1 thông báo đầu
// in ra danh sách cuối cùng

let notifications = ["Tin nhan 1", "Tin nhan 2"];
notifications.push("Tin nhan 3");
console.log("Sau khi push: ", notifications);
notifications.unshift("Thong bao khan");
console.log("Sau khi unshift: ", notifications);
notifications.shift();
console.log("sau khi shift: ", notifications);
console.log("Danh sach thong bao cuoi cung: ", notifications);
