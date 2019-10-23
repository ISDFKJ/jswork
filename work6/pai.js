function calculate(){
    //读取阶数输入框的数值
    let num = document.getElementById('num').value
    num = parseInt(num)&&Number(num)
    if(!isNaN(num)){
        //设置圆周率输入框的值；
        document.getElementById('pai').value = pi(num)
    }
}
//声明阶乘函数n  factorial()
function factorial(n){
    //声明阶乘汇总数并赋值为；
    let sum =1
    //for循环乘
    for(let i=1;i<=n; ++i){
        sum *= i;
    }
    return sum
}
//声明期数阶乘函数（2n+1）！！oddFactoraial（）
function oddFactorial(n){
    //乘阶汇总数赋值为1
    let sum = 1
    //for累乘
    for(let i=1;i<=n;++i){
        sum *=((2*i)+1)
    }
    return sum
}
//乘阶法计算圆周率函数
function pi(num){
    //汇总值变量，并赋值0
    let sum =0
//for循环计算
for(let i=0;i<=num;++i){
    //乘阶被除数 divdend，并用factorial函数取值
    let dividend = factorial(i)
    //divisor，并调用oddFactorial函数取值
    let divisor = oddFactorial(i)
    sum += (dividend/divisor)
}
//返回圆周率
return sum* 2
}
calculate()