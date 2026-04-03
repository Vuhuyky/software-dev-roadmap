let name = "Vu Huy Ky";
let age = 20;
let score = 10;
let isAttending = true;

function checkPass(score) {
  if (score >= 5) {
    return "pass";
  } else {
    return "fail";
  }
}

function XepLoai(score) {
  if (score >= 9) {
    return "Xuat sac!";
  } else if (score >= 8) {
    return "Gioi!";
  } else if (score >= 6.5) {
    return "Kha";
  } else if (score >= 4) {
    return "Trung binh!";
  } else {
    return "truot!";
  }
}
console.log("==== Thong tin sinh vien ====");
console.log(`| Ho va ten: ${name}      |`);
console.log(`| Tuoi: ${age}                  |`);
console.log(`| Diem: ${score}                  |`);
console.log(`| ${isAttending ? "Co" : "Khong"} di hoc day du !        |`);
console.log(`| Ket qua: ${checkPass(score)}             |`);
console.log(`| Xep loai diem: ${XepLoai(score)}  |`);
for (let i = 1; i <= 5; i++) {
  console.log("| Dang xu ly du lieu ...    |");
}
console.log("=============================");
