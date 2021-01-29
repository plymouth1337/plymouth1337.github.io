function week(){
  d0 = new Date();
  d0.setFullYear((new Date()).getMonth() < 9 ? (new Date()).getFullYear() - 1 : (new Date()).getFullYear(), 8, 1);
  d1 = new Date();
  dt = Math.floor(((d1.getTime() - d0.getTime() + 1000*60*60*24) / (1000*60*60*24*7)) + 1);
  return dt;
}


function showInfo(){
  if(document.getElementById('info').style.height=='210px'){
    document.getElementById('info').style.height='0px';
  }else{
    document.getElementById('info').style.height='210px';
  }
}


if(week() % 2){
  document.getElementById('p2').innerHTML='sem.ASD<br><span class="offline">cab.609</span>';
  document.getElementById('p3').innerHTML='lab.GC<br><span class="offline">cab.502</span>';
  document.getElementById('week').innerHTML='Odd';
  document.getElementById('week').style.color='#EF5350';
}else{
  document.getElementById('p1').innerHTML='c.TAP <br><span class="online">Online</span>';
  document.getElementById('p2').innerHTML='lab.ASD<br><span class="offline">cab.114</span>';
  document.getElementById('week').innerHTML='Even';
  document.getElementById('week').style.color='#9CCC65';
}


$('.schedule').ready(function(){
  $('td').each(function(){
    if($(this).html()==''){ $(this).css('background-color','#464646') }
  });
});

class Lesson{
  constructor(){
    this.date=new Date();
    this.startLesson = new Date();
    this.endLesson = new Date();
    this.week=week();
    this.Day=this.date.getDay();
    if(this.Day==1){
      if(this.week % 2){ this.Day=['c.ASD','c.RC','','','',''] }
      else{ this.Day=['c.ASD','c.RC','c.TAP','','','']  }
    }
    else if (this.Day==2) {  this.Day=['c.GC','','c.SI','','','']  }
    else if (this.Day==3) {
      if(this.week % 2){ this.Day=['','','','lab.TPA','sem.ASD','lab.SI']}
      else{ this.Day=['','','','lab.TPA','lab.ASD','lab.SI']  }
    }
    else if (this.Day==4) {  this.Day=['c.FER','c.TAP','c.FER','','',''] }
    else if (this.Day==5) {
      if(this.week % 2){ this.Day=['','','lab.RC','sem.FER','lab.GC','']  }
      else{ this.Day=['','','lab.RC','sem.FER','',''] }
    }
  }


  color_lesson(count){
    if(this.Day[count]!=''){
      document.getElementById('study-now').innerHTML='Lesson at the moment: '+this.Day[count];
      document.getElementById('study-now').style.color='#EF5350';
      let hours=this.startLesson.getHours()+':'+this.startLesson.getMinutes();
      let lesson=this.Day[count];
      $('.schedule').ready(function(){
        $('tr').each(function(){
          if($(this).is(":contains("+hours+")")){
            $(this).children('td:first-child').css('background-color','#EF5350')
            $(this).children("td:contains("+lesson+")").css('background-color','#EF5350')
          }
        });
      });
    }else{
      document.getElementById('study-now').innerHTML='No lessons at this time. Feel freedom!';
    }
  }


  lesson_now(){
    this.startLesson.setHours(8,0,0);
    this.endLesson.setHours(9,30,0);
    let count=0;
    while(true){
      if(this.date >= this.startLesson && this.date < this.endLesson ){
          this.color_lesson(count);
          return;
      }
      count++;
      if(count>5){
        document.getElementById('study-now').innerHTML='No lessons at this time. Feel freedom!';
        return;
      }
      if(this.startLesson.getHours()=='11'){
        this.startLesson.setHours(this.startLesson.getHours()+1,this.startLesson.getMinutes()+60,0);
        this.endLesson.setHours(this.endLesson.getHours()+1,this.endLesson.getMinutes()+60,0);
      }
      else {
        this.startLesson.setHours(this.startLesson.getHours()+1,this.startLesson.getMinutes()+45,0);
        this.endLesson.setHours(this.endLesson.getHours()+1,this.endLesson.getMinutes()+45,0);
      }
    }
  }

}


let today=new Lesson(new Date());
today.lesson_now();



















//
