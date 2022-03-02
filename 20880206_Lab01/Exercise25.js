console.clear();
let a = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
// insertion sort big o O(n^2)
// sắp xếp mảng
for (let i = 1; i < a.length; i++) {
    let value = a[i];
    while (value < a[i - 1] && i > 0) {
        a[i] = a[i - 1];
        a[i - 1] = value;
        i--;
    }
}
let b = (a.length-1)/2;
console.log("phan tu co gia tri giua nhat  " + a[3]);