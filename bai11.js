var a =prompt('nhập cạnh a: ');
var b =prompt('nhập cạnh b: ');
var c =prompt('nhập cạnh c: ');
var check = true;
if (a == ''|| a ==null){
    console.log('vui lòng nhập lại cạnh a: ');
    check = false;
}else if(isNaN(a)){
    console.log('nhập cạnh a không đúng định dạng số!');
    check= false;
}else if(a<=0){
    console.log('cạnh a phải lớn hơn 0!');
    check =false;
}

if (b == ''|| b ==null){
    console.log('vui lòng nhập lại cạnh b: ');
    check = false;
}else if(isNaN(b)){
    console.log('nhập cạnh b không đúng định dạng số!');
    check= false;
}else if(b<0){
    console.log('cạnh b phải lớn hơn 0!');
    check =false;
}
if (c == ''|| c ==null){
    console.log('vui lòng nhập lại cạnh c: ');
    check = false;
}else if(isNaN(c)){
    console.log('nhập cạnh c không đúng định dạng số!');
    check= false;
}else if(c<0){
    console.log('cạnh c phải lớn hơn 0!');
    check =false;
}
if (check){
    if(a + b > c && a+c > b && b+c >a){
        if(a==b && b==c){
            console.log('là tam giác đều');
        }else if( a==b || b==c || a==c){
            console.log('là tam giác cân');
        }else if( a*a + b*b == c*c ||
                  a*a + c*c == b*b ||
                  b*b + c*c == a*a  ){
                    console.log('là tam giác vuông')
                  }else 
                    console.log('là tam giác thường')
    }else{
            console.log('ba cạnh không tạo được tam giác')
         }
    }
   


