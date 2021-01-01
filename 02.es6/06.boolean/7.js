const product = { desc: '', price: 0 };
const descInput = product.desc ?? '상품 설명을 입력하세요.';
const priceInput = product.price ?? 1000;

console.log(descInput);
console.log(priceInput);
