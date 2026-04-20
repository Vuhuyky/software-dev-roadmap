let users = [
  { id: 1, name: "An Nguyen", age: 20, isActive: true },
  { id: 2, name: "Binh Tran", age: 17, isActive: false },
  { id: 3, name: "Cuong Le", age: 25, isActive: true },
];

for (i = 0; i < users.length; i++) {
  if (users[i].isActive == true) {
    console.log(users[i]);
  }
}
let keyword = "An";

for (i = 0; i < users.length; i++) {
  let name = users[i].name.toLowerCase();
  if (name.includes(keyword.toLowerCase())) {
    console.log(users[i]);
  }
}

let newUser = {
  id: 4,
  name: "Huy Ky",
  age: 20,
  isActive: true,
};

users.push(newUser);

for (i = 0; i < users.length; i++) {
  if (users[i].id == 2) {
    users[i].isActive = true;
  }
}
