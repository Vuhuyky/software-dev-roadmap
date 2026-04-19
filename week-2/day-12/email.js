let email = "   VUHUYKY@GMAIL.COM    ";

email = email.trim();
email = email.toLowerCase();
console.log("Email sau khi lam sach: ", email);
if (email.includes("@")) {
  console.log("Email hop le");
} else {
  console.log("Email khong hop le");
}
