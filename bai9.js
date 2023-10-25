var a = prompt('nhập số a: ');
var b = prompt('nhập số b: ');
var c = prompt('nhập số c: ');
if (a==0){
    if(b==0 && c==0){
        console.log('phương trình vô số nghiệm');
    }else if(b==0 && c!=0){
        console.log('phương trình vô nghiệm');
    }else{
        console.log('phương trình có 1 nghiệm: ', (-c/b).toFixed(2));
    }

}else{
    var dt = b**2 - (4*a*c);
    if(dt<0){
        console.log('phương trình vô nghiệm');
    }else if (dt==0){
        console.log('phương trình có nghiệm kép x1 = x2 = ',(-b/(2*a)).toFixed(2));
    }else
    var x1 = (-b - Math.sqrt(dt))/ (2*a);
    var x2 = (-b + Math.sqrt(dt))/ (2*a);
    console.log('phương trình có 2 nghiệm phân biệt x1 = ',x1.toFixed(2)+', x2 = ',x2.toFixed(2));

}
