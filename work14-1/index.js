//设置秒杀结束时间
let endtime = new Date().getTime() + 10 *60000;
//1s=1000;
//声明变量保存剩余的时间；
let m=s=0;
//射中定时器，实现限时秒杀效果
//setInterval() 方法可按照指定的周期（以毫秒计）来调用函数或计算表达式。
let id =setInterval(seckill,1000);
function seckill(){
    let nowtime = new Date();//获取当前时间；
    let remaining = parseInt((endtime - nowtime.getTime()) / 1000);
    if(remaining>0){
        m =parseInt((remaining /60)%60);//计算剩余的分钟（处于6转动为分钟，与60取模，获取剩余的分钟）
        s =parseInt(remaining % 60);//计算剩余秒（与60取模，获取剩余的秒数）
        m = m<10?'0'+m:m;
        s = s<10?'0'+s:s;
}else{
    clearInterval(id);//秒杀过期，取消定时器
    m = s ='00';

}
    document.getElementById('m').innerHTML = m + '分'; 
    document.getElementById('s').innerHTML = s + '秒';  
}
