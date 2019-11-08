//解构赋值
const user = {name: "sunny", years: "199" };
const {name, years:age, isAdmin="false"} = user;
console.log(name);
console.log(age);
console.log(isAdmin);



//对数字求和到给定值
    //第一种for循环
    const sumTo1 = (n) => {
        let result = 0;
        for (let i = 0; i < n+1; i++){
            result += i;
        }
        return result;
    }
    console.log(sumTo1(100));
    //第二种递归
    const sumTo2 = (n) =>{ 
        if(n==1){
            return n;
        }else{
            return n + sumTo2(n - 1);
        }
    }
    console.log(sumTo2(100));
    //第三种等差数列求和
    const sumTo3 = (n) => (1+n)*n/2;
    console.log(sumTo3(100));


//创建new Accumlator
function Accumulator(startingValue) {
    this.value=startingValue;
    this.read=function(){
        this.value+=+prompt("x","");
    }
}
const accumulator = new Accumulator(1);
accumulator.read();
accumulator.read();
console.log(accumulator.value);


//深拷贝
var arr=[{a:1,b:2},{c:1,d:2}];
    var arr2=[];
    
    arr.forEach(item=>{
      var {...obj}=item;
      arr2.push(obj);
    })
    arr2[1].d=7;
    console.log(arr,arr2);