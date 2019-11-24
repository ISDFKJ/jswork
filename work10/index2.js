function stat(){
    let str = document.getElementById("str").value
    let obj = {};
   //split(''):函数是用于按指定字符（串）或正则去分割某个字符串，结果以字符串数组形式返回；
   //sort():排列顺序；
    obj =str.split('').sort().reduce(function(obj,ne){   //reduce就是集合方法，相当于循环语句
        obj[ne[0]] ?obj[ne[0]]++ : obj[ne[0]]=1;
        return obj;
    },{});
   document.getElementById('result').innerText=JSON.stringify(obj);
}