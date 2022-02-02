let time=document.querySelector('.time')
let pause=document.querySelector('.pause')
let reset=document.querySelector('.reset')

let timeCounters={
    minutes:0,
    seconds:0,
    hour:0,
    centSeconds:0,
    currentTime:[0,0,0,0],
    running:false
}

function controls(){
    pause.onclick=function(e){
        pause.innerHTML=timeCounters.running ? '<i class="fas fa-play"></i>' : '<i class="fas fa-pause"></i>' 
        timeCounters.running=timeCounters.running ? false:true
    }
    reset.onclick=function(){
        pause.innerHTML=timeCounters.running ? '<i class="fas fa-play"></i>': '<i class="fas fa-play"></i>'
        timeCounters.minutes=0
        timeCounters.seconds=0
        timeCounters.centSeconds=0
        timeCounters.hour=0
        timeCounters.running=false
    }
}

function counter(){
    setInterval(()=>{
        if(timeCounters.running){

            timeCounters.centSeconds++
            if(timeCounters.seconds==60){
                timeCounters.minutes++
                timeCounters.seconds=0
            }
            if(timeCounters.minutes==60){
                timeCounters.hour++
                timeCounters.minutes=0
            }
            if(timeCounters.hour==24){
                timeCounters.seconds=0
                timeCounters.minutes=0
                timeCounters.hour=0
            }
            if(timeCounters.centSeconds==100){
                timeCounters.seconds++
                timeCounters.centSeconds=0
            }
        }
            timeCounters.hour>=10?timeCounters.currentTime[0]=timeCounters.hour:timeCounters.currentTime[0]=`0${timeCounters.hour}`
            timeCounters.minutes>=10?timeCounters.currentTime[1]=timeCounters.minutes:timeCounters.currentTime[1]=`0${timeCounters.minutes}`
            timeCounters.seconds>=10?timeCounters.currentTime[2]=timeCounters.seconds:timeCounters.currentTime[2]=`0${timeCounters.seconds}`        
            timeCounters.centSeconds>=10?timeCounters.currentTime[3]=timeCounters.centSeconds:timeCounters.currentTime[3]=`0${timeCounters.centSeconds}`
            time.innerHTML=`${timeCounters.currentTime[0]}:${timeCounters.currentTime[1]}:${timeCounters.currentTime[2]}:${timeCounters.currentTime[3]}`
    },10)
}

counter()
controls()