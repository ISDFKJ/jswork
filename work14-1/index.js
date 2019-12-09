
let time = new Date()
let m =s =0;
m =60-time.getMinutes()//getMinutes() 方法可返回时间的分钟字段
s =60 -time.getSeconds()
let id =setInterval(seckill,1000);
function seckill(){
    s--
    if(s == -1){
        s =60
        m--
    }
    if(m ==-1){
        m=60
    }

       
  document.getElementById('m').innerHTML = m + '分'; 
    document.getElementById('s').innerHTML = s + '秒';  
}
