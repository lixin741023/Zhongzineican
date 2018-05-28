var eye1 = document.getElementById("eye1");  eye2 = document.getElementById("eye2");  pas2 = document.getElementById("pas2");  shoucang1 = document.getElementById("shoucang1");shoucang2 = document.getElementById("shoucang2");
FI = document.getElementById("FI"); activity1 = document.getElementById("activity1");lx1 = document.getElementById("activity1-1"); lx2 = document.getElementById("activity1-14"); jimu = document.getElementById("jimu"); span1 = document.getElementById("span1"); span2 = document.getElementById("span2"); span3 = document.getElementById("span3"); lx715a = document.getElementById("lx715a"); lx715b = document.getElementById("lx715b"); lx715c = document.getElementById("lx715c");

function a(){
	eye1.style.display = "none";
	eye2.style.display = 'block';
	pas2.type = "text";
	}
function a1(){
	eye1.style.display = "block";
	eye2.style.display = "none";
	pas2.type = "password"
	}
function b(){
	shoucang1.style.display = "none";
	shoucang2.style.display = "block";
	}
function b1(){
	shoucang1.style.display = "block";
	shoucang2.style.display = "none";
	}
function c(){
	activity1.style.height = "40rem";
	FI.style.display = "block";
	lx1.style.display = "none";
	jimu.style.display = "none";
	}
function c1(){
	activity1.style.height = "20rem";
	FI.style.display = "none";
    lx1.style.display = "block";
	jimu.style.display = "block";
	}	
function p1(){
	span2.style.display = "none";
	span3.style.display = "none";
	span1.style.display = "block";
	lx715a.style.background = "red";
	lx715b.style.background = "#cccccc";
	lx715c.style.background = "#cccccc";
	}
function p2(){
	span1.style.display = "none";
	span3.style.display = "none";
	span2.style.display = "block";
	lx715a.style.background = "#cccccc";
	lx715b.style.background = "red";
	lx715c.style.background = "#cccccc";
	}
function p3(){
	span1.style.display = "none";
	span2.style.display = "none";
	span3.style.display = "block";
	lx715a.style.background = "#cccccc";
	lx715b.style.background = "#cccccc";
	lx715c.style.background = "red";
	}

var NowImg=1;//表示当前显示的div
            var MaxImg=3;//表示div的个数
            function show(){
                for(var i=1;i<=MaxImg;i++){
                    if(NowImg==i)
                        document.getElementById("span"+NowImg).style.display='block';
						//当前显示的div                
                    else
                        document.getElementById("span"+i).style.display='none';
                }
                if(NowImg==MaxImg)//判断当前div是否是最后一个，如果是则从第一个重新轮回显示
                    NowImg=1;
                else
                    NowImg++;//设置下一个显示的图片
           
	if(span1.style.display == "block"){
		lx715a.style.background = "red";
		lx715b.style.background = "#CCC";
		lx715c.style.background = "#CCC";
		}
	if(span2.style.display == "block"){
		lx715a.style.background = "#ccc";
		lx715b.style.background = "red";
		lx715c.style.background = "#ccc";
		}			   
	if(span3.style.display == "block"){
		lx715a.style.background = "#ccc";
		lx715b.style.background = "#ccc";
		lx715c.style.background = "red";
		}	   
		    }
            theTimer=setInterval("show()",3000);