let a ="Green";
function duplicate(){
    for (let i = 0; i < a.length; i++) {
        let value = a[i];
        for (let j = 0; j < a.length; j++) {
            if (a[i]==a[j] && i != j ) {
                return false;
            }
        }
    }
    return true;
}
console.log("ket qua bai 30: ");
duplicate()==true ? console.log(true): console.log(false);
    
