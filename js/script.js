d0 = new Date();
d0.setFullYear((new Date()).getMonth() < 9 ? (new Date()).getFullYear() - 1 : (new Date()).getFullYear(), 8, 1);
d1 = new Date();
dt = Math.floor(((d1.getTime() - d0.getTime() + 1000*60*60*24) / (1000*60*60*24*7)) + 1);
let color='';
if(dt % 2){
  //alert('Неделя нечётная');
   color='#EF5350';
  document.getElementById('p1').innerHTML='c.TPA <br>Online';
  document.getElementById('p2').innerHTML='lab.ASD<br>cab.114';
  document.getElementById('p3').innerHTML='';
  document.getElementById('week').innerHTML='Odd';
  document.getElementById('week').style.color=color;
}else{
  //alert('Неделя чётная');
   color='#9CCC65';
  document.getElementById('p1').innerHTML='';
  document.getElementById('p2').innerHTML='sem.ASD<br>cab.609';
  document.getElementById('p3').innerHTML='lab.GC<br>cab.502';
  document.getElementById('week').innerHTML='Even';
  document.getElementById('week').style.color=color;
}
document.getElementById('p1').style.backgroundColor=color;
document.getElementById('p2').style.backgroundColor=color;
document.getElementById('p3').style.backgroundColor=color;

function showInfo(){
  if(document.getElementById('info').style.height=='200px'){
    document.getElementById('info').style.height='0px';
  }else{
    document.getElementById('info').style.height='200px';
  }
}

$('.schedule').ready(function(){
  $('td').each(function(){
    if($(this).html()==''){
      $(this).css('background-color','#464646')
    }
  });


});
