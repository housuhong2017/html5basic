<!--播放-->
	var btn1 = document.getElementById("btn-play");
		btn1.onclick = function(){
		 	 if(audio.paused){                 
				audio.play();
			}
		}
	
	<!--暂停-->
	var btn2 = document.getElementById("btn-stop");
		btn2.onclick = function(){
		 	 if(audio.played){                 
				audio.pause();
			}
		}
		
	var music = new Array();
	music = ["杨梓琪呀 - 可不可以","不才 - 化身孤岛的鲸","王以太 - 目不转睛"];//歌单
	var num = 0;
	var name = document.getElementById("name");
 
	
	<!--上一首-->
	var btn3 = document.getElementById("btn-pre");
	btn3.onclick = function(){
			num = (num +1)%3;
		 	audio.src =  "music/"+music[num]+".mp3";
			name.innerHTML = music[num];
			audio.play();
		}
		
	<!--下一首-->
	var btn4 = document.getElementById("btn-next");
	btn4.onclick = function(){
		 	num = (num +1)%3;
		 	audio.src =  "music/"+music[num]+".mp3";
			name.innerHTML = music[num];
			audio.play();
		}
<!--自动播放下一首-->
	audio.addEventListener('ended', function () {  
    btn4.onclick();
}, false);
