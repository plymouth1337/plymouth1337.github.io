function week(){
  d0 = new Date();
  d0.setFullYear((new Date()).getMonth() < 9 ? (new Date()).getFullYear() - 1 : (new Date()).getFullYear(), 8, 1);
  d1 = new Date();
  dt = Math.floor(((d1.getTime() - d0.getTime() + 1000*60*60*24) / (1000*60*60*24*7)) + 1);
  if (dt%2){
    return false
  }
  else{
    return true
  }
}



class Week{
  constructor(){
    this.Monday={num:1,name:'Monday',
          l1:{name:'ASD',time:'08:00',type:'c.',place:'Online'},
          l2:{name:'RC',time:'09:45',type:'c.',place:'Online'},
          l3:{name:'TAP',time:'11:30',type:'c.',place:'Online'},
          l4:{name:'',time:'13:30',type:'',place:''},
          l5:{name:'',time:'15:15',type:'',place:''},
          l6:{name:'',time:'17:00',type:'',place:''}
          };
    this.Tuesday={num:2,name:'Tuesday',
          l1:{name:'GC',time:'08:00',type:'c.',place:'Online'},
          l2:{name:'',time:'09:45',type:'',place:''},
          l3:{name:'SI',time:'11:30',type:'c.',place:'Online'},
          l4:{name:'',time:'13:30',type:'',place:''},
          l5:{name:'',time:'15:15',type:'',place:''},
          l6:{name:'',time:'17:00',type:'',place:''}
          };
    this.Wednesday={num:3,name:'Wednesday',
          l1:{name:'',time:'08:00',type:'',place:''},
          l2:{name:'',time:'09:45',type:'',place:''},
          l3:{name:'',time:'11:30',type:'',place:''},
          l4:{name:'TAP',time:'13:30',type:'lab.',place:'cab.114'},
          l5:{name:'ASD',time:'15:15',type:'lab.',place:'cab.114'},
          l6:{name:'SI',time:'17:00',type:'lab.',place:'cab.114'}
          };
    this.Thursday={num:4,name:'Thursday',
          l1:{name:'FER',time:'08:00',type:'c.',place:'Online'},
          l2:{name:'TAP',time:'09:45',type:'c.',place:'Online'},
          l3:{name:'FER',time:'11:30',type:'c.',place:'Online'},
          l4:{name:'',time:'13:30',type:'',place:''},
          l5:{name:'',time:'15:15',type:'',place:''},
          l6:{name:'',time:'17:00',type:'',place:''}
          };
    this.Friday={num:5,name:'Friday',
          l1:{name:'',time:'08:00',type:'',place:''},
          l2:{name:'',time:'09:45',type:'',place:''},
          l3:{name:'RC',time:'11:30',type:'lab.',place:'cab.110/112'},
          l4:{name:'FER',time:'13:30',type:'sem.',place:'cab.609'},
          l5:{name:'',time:'15:15',type:'',place:''},
          l6:{name:'',time:'17:00',type:'',place:''}
          };
    if(!week()){
      this.Monday.l3.name='';
      this.Monday.l3.type='';
      this.Monday.l3.place='';
      this.Wednesday.l5.type='sem.';
      this.Wednesday.l5.place='cab.609';
      this.Friday.l5.name='GC';
      this.Friday.l5.type='lab.';
      this.Friday.l5.place='cab.502';
    }
    this.Pass=false;
    } //end constructor


    Get_Lesson(day,lesson){
      if(day==1){
        this.Day=this.Monday;
      }
      else if(day==2){
        this.Day=this.Tuesday;
      }
      else if(day==3){
        this.Day=this.Wednesday;
      }
      else if(day==4){
        this.Day=this.Thursday;
      }
      else if(day==5){
        this.Day=this.Friday;
      }

      if(lesson==1){
        let text=this.Day.l1.type+this.Day.l1.name+'<br><span>'+this.Day.l1.place+'</span></td>';
        return text;
      }
      else if(lesson==2){
        let text=this.Day.l2.type+this.Day.l2.name+'<br><span>'+this.Day.l2.place+'</span>';
        return text;
      }
      else if(lesson==3){
        let text=this.Day.l3.type+this.Day.l3.name+'<br><span>'+this.Day.l3.place+'</span>';
        return text;
      }
      else if(lesson==4){
        let text=this.Day.l4.type+this.Day.l4.name+'<br><span>'+this.Day.l4.place+'</span>';
        return text;
      }
      else if(lesson==5){
        let text=this.Day.l5.type+this.Day.l5.name+'<br><span>'+this.Day.l5.place+'</span>';
        return text;
      }
      else if(lesson==6){
        let text=this.Day.l6.type+this.Day.l6.name+'<br><span>'+this.Day.l6.place+'</span>';
        return text;
      }
    }

    Lesson_Now(){
      this.Get_Lesson(this.Today(),1);
      if(!this.Lesson_Border()){
        return '<span>No lessons today</span>';
      }
      let lessonStart='';
      for (let i=1;1<7;i++){
        lessonStart=this.Pass_Time(i);
        if(lessonStart){
            break;
        }

      }
      if(lessonStart){
        for(var key in this.Day){
          if(  this.Day[key].hasOwnProperty('time')){
            if(this.Day[key].time.includes(lessonStart)){
              let place='';
              if(this.Day[key].place=='Online'){
                place='Place: <span class="online">';
              }else{
                place='Place: <span class="offline">';
              }
              if(this.Day[key].name==''){
                return '<span>No lessons at this time</span>';
              }
              let less='Lesson: <span class="lesson_now">'+this.Day[key].type+this.Day[key].name+'. </span>';
              let time='Started at: <span class="lesson_now">'+this.Day[key].time+'</span>';
              let code=less+place+this.Day[key].place+'. </span>'+time;
              return code;
            }
          }
        }
      }else{
        let code='<span>No lesson now!</span>';
        return code;
      }
    }


    Lesson_Border(){
      let start=new Date();
      let end=new Date();
      let now=new Date();
      start.setHours(8,0,0);
      end.setHours(18,30,0);
      if(now >= start && now < end ){
          return true;
      }else{
        return false;
      }
    }

    Load_Schedule(){
      for(let lesson=1;lesson<7;lesson++){
        let html='';
        for (let day=1;day<6;day++){
          html=html+'<td>'+this.Get_Lesson(day,lesson)+'</td>';
        }
        let tr=lesson;
        $('.schedule').ready(function(){
          let old=$('tr:eq('+tr+')').html();
          $('tr:eq('+tr+')').html(old+html);
        });
      }
    }


    Add_Color(){
          $('.schedule').ready(function(){
            $('td').each(function(){
              if($(this).is(":contains(Online)")){
                $(this).children("span").addClass('online');
              }else{
                  $(this).children("span").addClass('offline');
                  if($(this).html()=='<br><span class="offline"></span>'){ $(this).addClass('null') }
              }
            });
          });
    }


    Today(){
      let today=new Date().getDay();
      return today;
    }


    Pass_Day(){
      for (let i=1;i<6;i++){
        if(i==this.Today()){
          return;
        }
        let day=i+1;
        $('.days').children('td:nth-child('+day+')').addClass('passed time');
      }
    }


    Time_Next(lessonTime){
      if(lessonTime.getHours()=='11'){
        lessonTime.setHours(lessonTime.getHours()+1,lessonTime.getMinutes()+60,0);
      }
      else {
        lessonTime.setHours(lessonTime.getHours()+1,lessonTime.getMinutes()+45,0);
      }
      return lessonTime;
    }


    Pass_Time(lesson){
      let startLesson = new Date();
      let endLesson = new Date();
      startLesson.setHours(8,0,0);
      endLesson.setHours(9,30,0);
      let timenow=new Date();
      for(let i=1;i<lesson+1;i++){
        if(lesson!=1){
          // console.log(startLesson);
          startLesson=this.Time_Next(startLesson);
          endLesson=this.Time_Next(endLesson);
        }
      }
      // console.log('| time '+startLesson+'| time now-'+timenow.getHours()  );
      if(timenow >= startLesson && timenow < endLesson ){
          return startLesson.getHours();
      }else{
        return false;
      }

    }


    Pass_Lessons(){
      if(this.Pass){
        $('.schedule').ready(function(){
            $('tr').children('td').removeClass('passed lesson time');
            // $('tr:eq('+lesson+')').children('td:first-child').addClass('passed time');
        });
        this.Pass=!this.Pass;
        return;
      }else{
        this.Pass=!this.Pass;
      }
      for (let day=1;day<6;day++){
        if(day==this.Today()){
          for(let lesson=1;lesson<7;lesson++){
            let if_have_lesson=this.Pass_Time(lesson);
            $('.schedule').ready(function(){
              if(if_have_lesson){
                day=99;
                return false;
              }else{
                if(day==99){
                  return;
                }
                $('tr:eq('+lesson+')').children('td:eq('+day+')').addClass('passed lesson');
                $('tr:eq('+lesson+')').children('td:first-child').addClass('passed time');
              }
            });
          }
          return;
        } //end of if
        for(let lesson=1;lesson<7;lesson++){
        $('.schedule').ready(function(){
            $('tr:eq('+lesson+')').children('td:eq('+day+')').addClass('passed lesson');
          });
        }
      }
    }

    test(){
      let less='l1';
      for (var key in this.Day){
        // console.log(this.Day[key].name);
      }
    }


}

let schedule=new Week();
schedule.Load_Schedule();
schedule.Add_Color();

var button=document.getElementById('show_passed');
button.onclick=function(event) {
        schedule.Pass_Lessons();
        schedule.Pass_Day();
        if(schedule.Pass){
          button.innerHTML="<span>HIDE PASSED</span>";
        }
        else{
          button.innerHTML="<span>SHOW PASSED</span>";
        }
      };

var button2=document.getElementById('show_lesson');
button2.onclick=function(event) {
      let value=document.getElementById('lesson_now');
      if(value.style.opacity==1){
        value.style.opacity=0;
          value.innerHTML=' ';
      }else{
          value.innerHTML=schedule.Lesson_Now();
        value.style.opacity=1;
      }
};

$('.schedule').fadeIn(1000);










//
