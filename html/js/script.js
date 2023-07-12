$(".main-menu > li").mouseover(function(){
    $(this).children(".sub").stop().slideDown();
//    $(".sub").stop().slideDown();
});
$(".main-menu > li").mouseleave(function(){
     $(this).children(".sub").stop().slideUp();
//    $(".sub").stop().slideUp();
});

start();
var imgs=5;
var now =0;

function start(){
$(".imgs>img").eq(0).siblings().css({"margin-left":"-2000px"});    
setInterval(function(){slide();}, 2000);
}

function slide(){
now = now == imgs?0:now+=1;
$(".imgs>img").eq(now-1).css({"margin-left":"-2000px"});
$(".imgs>img").eq(now).css({"margin-left":"0px"});
}

function winOpen1(){
var win1 = window.open('login.html','child1','toolbar = no, location= no , status = no, menubar = no, resizable = no , scrollbars = no, width = 700, height = 700')
}
function winOpen2(){
var win2 = window.open('join.html','child2','toolbar = no, location= no , status = no, menubar = no, resizable = no , scrollbars = no, width = 1850, height = 1700')
}

const todayDiv = document.getElementById("today")
const timeDiv = document.getElementById("time")

function getTime(){
let now = new Date();
timeDiv.textContent = now;
let year = now.getFullYear();
let month = now.getMonth()+1;
let date = now.getDate();
let hour = now.getHours();
let minute = now.getMinutes();
let second = now.getSeconds();

month = month < 10 ? `0${month}` : month
date = date < 10 ? `0${date}` : date
hour = hour < 10 ? `0${hour}` : hour
minute = minute < 10 ? `0${minute}` : minute
second = second < 10 ? `0${second}` : second

todayDiv.textContent = `${year}년 ${month}월 ${date}일`
timeDiv.textContent = `${hour}시 ${minute}분 ${second}초`
}

setInterval(getTime, 1000)

