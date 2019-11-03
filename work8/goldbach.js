function goldbach() {
     // 输入任意一个大于2的偶数并返回结果;
    let start= document.getElementById('odd').start
            if(start%2!==0){
               alert("请输入偶数")
    }
    let goldbach= document.getElementById('goldbach')
    let arr =[]
    let z = 0;
    // 判断一个数是否是质数
    for(var i=2;i<=start;i++){
        z = 0
        for(var j=2;j<i;j++){
            if(i%j==0){z++}
        }
        if(z==0){
            arr.push(i);
        }
    }
    let str = ''
    console.log()
    for(let i=0;i<(arr.length)/2;i++){     //减去重叠数组
       for(let j=0;j<arr.length;j++){       //    
           if((arr[i]+arr[j])===Number(start)){
               str += '<div>'+start+"可以拆分为两个质数"+arr[i]+"与"+arr[j]+"的和"+ '</div>'
              console.log(start+"可以拆分为两个质数"+arr[i]+"与"+arr[j]+"的和");
           }
       }
    }
    goldbach.innerHTML = str
}