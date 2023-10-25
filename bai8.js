var a = prompt('nhập số a: ');
var b = prompt('nhập số b: ');
if (a==0 && b == 0){
    console.log('phương trình vô số nghiệm');
}else if (a==0 && b!=0){
    console.log('phương trình vô nghiệm');
}
else{
    console.log('phương trình có 1 nghiệm: ', (-b/a).toFixed(2));
}