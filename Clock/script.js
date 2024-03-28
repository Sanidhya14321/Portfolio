var second=0;
var minute=0;
var hour=0;
var d=new Date();

setInterval(
    function(){
        d=new Date();
        second=d.getSeconds()*6;
        minute=d.getMinutes()*6+Math.round(second/60);
        hour=d.getHours()*30 + Math.round(minute/12);
        document.getElementById("sh").style.transform="rotate("+second+"deg)"
        document.getElementById("mh").style.transform="rotate("+minute+"deg)"
        document.getElementById("hh").style.transform="rotate("+hour+"deg)"
    },1000
);


setInterval(()=>{
    hr.innerHTML=(d.getHours()<10?"0":"")+d.getHours();
    min.innerHTML=(d.getMinutes()<10?"0":"")+d.getMinutes();
    sec.innerHTML=(d.getSeconds()<10?"0":"")+d.getSeconds();
},1000
);
