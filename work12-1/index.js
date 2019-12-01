//获取当前年份
let year = new Date().getFullYear()
//调用calender函数，设置cal内容显示年历
document.getElementById("cal").innerHTML = calendar(year)

function setCalendar(year){
    
//设置preyear
//设置curyear
//设置nextyear
//设置cal显示年历
    document.getElementById('cal').innerHTML ='<div class="box" id="cal"></div>'
    var year =parseInt(year)
    var pre =year-1
    var next =year+1
    document.getElementById('curyear').setAttribute('data-year',year);//setAttribute() 方法创建或改变某个新属性。
    document.getElementById('preyear').setAttribute('data-year',pre); //如果指定属性已经存在,则只设置该值。
    document.getElementById('nextyear').setAttribute('data-year',next);//setAttribute(属性名,属性值)
    document.getElementById('curyear').innerText =year
    document.getElementById("preyear").innerText ="<<"+pre
    document.getElementById('nextyear').innerText =next + ">>"
    document.getElementById("cal").innerHTML =calendar(year)


}



