PrizeSon =  ["一等獎" , "二等獎" , "三等獎" , "四等獎" , "五等獎" , "六等獎", "七等獎", "八等獎"] ; 
totalNum = 8 ; // 轉盤 總數
turnNum = [ 1 , 2 , 3 , 4 , 5 , 6, 7, 8 ]; //概率 獎品編號
isStatr = false ; //鎖住 不能重複點擊;
lenCloc = 0 ; 
turn  = 7 ; //轉盤最低幾圈 你想幾圈

//開始
  function start(item){
    if(!this.isStatr){
        this.isStatr = true;
        let random = this.PrizeSon.indexOf(item);   
        this.operation(random);
      }else{
        return false;
      }
  }

 function operation ( ran ) {
    var wheel = document.getElementById("wheel");
    this.lenCloc++;
    let Prize = this.turnNum[ran]-1 ;
    let sun = this.turn*360 ;  //最小圈数
    if(Prize>=this.totalNum){
      Prize = 0;
    }
    wheel.style.transform = "rotate("+(this.lenCloc*sun-Prize*45)+"deg)";
    setTimeout(function () {
        alert(this.PrizeSon[Prize]);   //傳什麼給你什麼 在那叫什麼
        this.isStatr = false;
    }.bind(this), 3000);
  }