let product = {
  name: "Laptop",
  price: 1500,
  brand: "Dell",
  stock: 10,
};

console.log("=== Thong tin san Pham ===");
console.log("Ten san pham: " + product.name);
console.log("Gia san pham: " + product.price);
console.log("Hang san pham: " + product.brand);
console.log("So luong san pham con lai: " + product.stock);

product.stock = 8;
console.log("Cap nhat ton kho: " + product.stock);

product.category = "Electronics";
console.log("Danh muc san pham: " + product.category);

console.log("=== Thong tin san Pham sau khi cap nhat ===");
console.log("Ten san pham: " + product.name);
console.log("Gia san pham: " + product.price);
console.log("Hang san pham: " + product.brand);
console.log("So luong san pham con lai: " + product.stock);
console.log("Danh muc san pham: " + product.category);
