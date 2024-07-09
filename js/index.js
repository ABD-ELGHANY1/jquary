//<reference types =" ../@types/jquery" />
$('.open').on('click',function(){
    $('#icon').css('margin-left','200px')
$('#bar').show(800)   


})

$('#sp2').on('click',function(){
    $('#bar').hide(800)
    $('#icon').css('margin-left','0px')

    })

$(function(){
    Timer('12 july 2024 22:00:00')
})
function Timer(i){
    let getdate=new Date(i)
     let pre= (getdate.getTime()/1000)
     let now=new Date().getTime()/1000
let time=(pre-now)
    let day= Math.floor( time / (24*60*60));
    let hour=Math.floor((time - (day * (24*60*60))) / 3600)
      let min=Math.floor((time - (day * (24*60*60)) - (hour * 3600 )) / 60)
      let sec = Math.floor((time - (day * (24*60*60)) - (hour* 3600) - (min * 60)))
     let cartona=''
     cartona=`
    <div class="col-2 col-md-2  border-div bg-transparent"><span class="text-center"> ${day} d</span></div>
<div class="col-2 col-md-2 border-div text-center bg-transparent"><span class="text-center"> ${hour}h</span></div>
<div class="col-2 col-md-2 border-div bg-transparent"><span class="text-center"> ${min}m</span></div>
     <div class="col-2 col-md-2 border-div bg-transparent"><span class="text-center"> ${sec}s</span></div>
     
     
     
     `
     setInterval(function() {  Timer(i); }, 1000);
     document.getElementById('time-date').innerHTML=cartona
}
$('#h1').on('click',function(){
 $('#p1').animate({height:'toggle'},1000)   
})
$('#h2').on('click',function(){
    $('#p2').animate({height:'toggle'},1000)   
   })
   $('#h3').on('click',function(){
    $('#p3').animate({height:'toggle'},1000)   
   })
   $('#h4').on('click',function(){
    $('#p4').animate({height:'toggle'},1000)   
   })
   let num=100;
   $('#floatingTextarea2').on('keyup',function(e){
let length=$(this).val().length
let max=num-length
if(max<=0){
$('#num').text('your available character finished')
}
else{
    $('#num').text(max)
}
} )

