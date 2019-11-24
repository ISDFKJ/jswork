function monkey(){     //设置函数
    let total= document.getElementById("monkeytotal").value   //对应按钮，进行访问
    let kick = document.getElementById("monkeykick").value
    total = parseInt(total) && Number(total)
    kick = parseInt(kick)&& Number(kick)
    if(isNaN(total)||isNaN(kick)){  //输入猴子的总数
        alert("请输入数字")
        return
    }
    let monkey=[]
    for (let i=1;i<=total;i++) {    //创建猴子数组
        monkey.push(i)
    }
    let i=0
    while (monkey.length>1){//在猴子数量大于1时进行循环
        i++;                //猴子报数
        head = monkey.shift()   //从monky数组的开头，取出猴子
        if(i%kick!=0){  //  判断是否踢出猴子，不踢出则把该猴子添加到monkey数组尾部
            monkey.push(head);  //继续参加游戏的猴子
        }
    }
    document.getElementById('monkeyking').innerText = monkey[0] 
}