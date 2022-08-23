var canvas = document.getElementById("canvas")
/*
canvas.width=1680;
canvas.height=1160;//*/

canvas.onselectstart = function() {
    return false;
};

var g = canvas.getContext("2d")

var speedrunnerMode=0;
var slowgoervanila=false;
  canvas.addEventListener("touchstart",function(e)
  {
  var  ddx=e.changedTouches[0].clientX;
   var ddy=e.changedTouches[0].clientY+window.pageYOffset;
   //setColor(0,0,0,100);fillRect(ddx-25,ddy-25,50,50)
   /*drawImage(buttonLeft,10,430,120,120)
	drawImage(buttonRight,140+50,430,120,120)
	drawImage(buttonJump,840-130,430,120,120)*/
   if(dist(10+60,430+60,ddx,ddy)<=60)key_left=true
     if(dist(140+50+60,430+60,ddx,ddy)<=60)key_right=true
	 if(dist(840-130+60,430+60,ddx,ddy)<=60)
	 {
	 if(touchTheEarth)
		{
		gra=-5.3
		key_up=true
		touchTheEarth=false;
		
		}
		if(touchTheEarth2)
		{
			key_up=true
			gra2=-5.3
			touchTheEarth2=false;
		}
	 }
  });
  
   canvas.addEventListener("touchmove",function(e)
  {
  //  x=e.changedTouches[0].clientX;
  //  y=e.changedTouches[0].clientY;
  });
  
  canvas.addEventListener("touchend",function(e)
  {
	   var  ddx=e.changedTouches[0].clientX;
   var ddy=e.changedTouches[0].clientY+canvas.scrollTop;
	  if(ddx<=140+120+50){key_left=false;key_right=false}else{key_up=false}
 
  
  });

var nowtime=0;

document.addEventListener('keydown', function(e){
	if(actiontime==0)
	{
	switch (e.keyCode)
	{
		case 83:
		if(noleftpressed&&norightpressed&&nouppressed)
		{
		if(speedrunnerMode!==true)
		speedrunnerMode++;
		if(speedrunnerMode>=5){speedrunnerMode=true;console.log("You are speedrunner now!");nowtime=new Date(); slowgoervanila=true; endscreen= getImage("endscreenspeed.png");}
		}
		break;
		case 65:
		case 37:
		key_left=true
		break;
		case 68:
		case 39:
		key_right=true;
		break;
		case 87:
		case 38:
		key_up=true;
		if(touchTheEarth)
		{
		gra=-5.3
		
		touchTheEarth=false;
		
		}
		if(touchTheEarth2)
		{
			gra2=-5.3
			touchTheEarth2=false;
		}
		
		
		
		break;
	}
	}
	
});
	var TouchTheEarth=false;
	var TouchTheEarth2=false;
	var key_left=false;
	var key_right=false;
	var key_up = false;
	var key_e=false;

document.addEventListener('keyup', function(e){
	if(actiontime==0)
	{
	switch (e.keyCode)
	{
		case 65:
		case 37:
		key_left=false
		break;
		case 68:
		case 39:
		key_right=false;
		break;
		case 87:
		case 38:
		key_up=false;
		break;
	
	default:
    console.log('Key: ', e.key);
    console.log('keyCode: ', e.keyCode);
	
	break;
	}
	}
});
var mousedown=false;
var tx,ty,dx,dy,ux,uy,mx,my;
document.addEventListener('mousedown',(e)=> {
	mousedown=true
	tx=(e.clientX)-8
	ty=(e.clientY)-8
	
	var butisntpressed=true
	for(var i = 0;i<Object.keys(map.rail).length;i++)
		{
			if(dist(x+20,y+22,map.rail[i].buttonX+10,map.rail[i].buttonY+15)<40)
			{
				if(dist(tx,ty,map.rail[i].buttonX+10,map.rail[i].buttonY-50)<=25){map.rail[i].active=!map.rail[i].active; butisntpressed=false;nobuttonpressed=false;}//vern
			}else
			if(dist(x2+20,y2+22,map.rail[i].buttonX+10,map.rail[i].buttonY+15)<40)
			{
				if(dist(tx,ty,map.rail[i].buttonX+10,map.rail[i].buttonY-50)<=25){map.rail[i].active=!map.rail[i].active; butisntpressed=false;nobuttonpressed=false}
			}
		}
		
		for(var i=0;i<Object.keys(map.block).length;i++)
		{
			if(tx>=map.block[i].x&&tx<=map.block[i].x+40&&ty>=map.block[i].y&&ty<=map.block[i].y+40)
				butisntpressed=false;
		}
		
	if(butisntpressed)
	if(invisible)
	{
		if(tx>=map.invis[relinv].x&&tx<=map.invis[relinv].x+map.invis[relinv].w)
			if(ty>=map.invis[relinv].y&&ty<=map.invis[relinv].y+map.invis[relinv].h)
			{
				sectel=!sectel;
				
				var plunder=false;
				var ax=tx-20
				var ay=ty-22
				
				if(ax<map.invis[relinv].x)
					ax=map.invis[relinv].x
				if(ax+40>map.invis[relinv].x+map.invis[relinv].w)
					ax=map.invis[relinv].x+map.invis[relinv].w-40
				
				if(ay<map.invis[relinv].y)
					ay=map.invis[relinv].y
				
				if(ay+44>map.invis[relinv].y+map.invis[relinv].h)
					ay=map.invis[relinv].y+map.invis[relinv].h-44;
				
					for(var i = 0; i<Object.keys(map.camera).length;i++)
	{
		drawImage(camera[map.camera[i].side],map.camera[i].x,map.camera[i].y,20,20)
		if(dist(map.camera[i].x+10,map.camera[i].y+10,ax,ay)<map.camera[i].range)
		{
			cross=false
			cross2=false
			cross3=false
			cross4=false
			
			for(var j = 0; j<Object.keys(map.block).length;j++)
				if(blockIsNear(j,map.camera[i].x+10,map.camera[i].y+10,tx-20,ty-22))
				{
					if(thoughTheBlock(map.camera[i].x+10,map.camera[i].y+10,ax,ay,map.block[j].x,map.block[j].y,40,40))
						cross=true;
					if(thoughTheBlock(map.camera[i].x+10,map.camera[i].y+10,ax+40,ay,map.block[j].x,map.block[j].y,40,40))
						cross2=true;
					if(thoughTheBlock(map.camera[i].x+10,map.camera[i].y+10,ax+40,ay+44,map.block[j].x,map.block[j].y,40,40))
						cross3=true;
					if(thoughTheBlock(map.camera[i].x+10,map.camera[i].y+10,ax,ay+44,map.block[j].x,map.block[j].y,40,40))
						cross4=true;
					
				}
				
				
					setColor(0,255,0,100)
				
				
					if(!cross||!cross2||!cross3||!cross4)
					{plunder=true;	}
				
				
		}
	}
				
				if(!plunder)
				if(sectel)
				{
				x2=tx-20;
				y2=ty-22;
				noteleported=false;
				if(x2<map.invis[relinv].x)
					x2=map.invis[relinv].x
				if(x2+40>map.invis[relinv].x+map.invis[relinv].w)
					x2=map.invis[relinv].x+map.invis[relinv].w-40
				
				if(y2<map.invis[relinv].y)
					y2=map.invis[relinv].y
				
				if(y2+44>map.invis[relinv].y+map.invis[relinv].h)
					y2=map.invis[relinv].y+map.invis[relinv].h-44;
				}
				else{
					x=tx-20;
					y=ty-22;
					noteleported=false;
					if(x<map.invis[relinv].x)
					x=map.invis[relinv].x
				if(x+40>map.invis[relinv].x+map.invis[relinv].w)
					x=map.invis[relinv].x+map.invis[relinv].w-40
				
				if(y<map.invis[relinv].y)
					y=map.invis[relinv].y
				
				if(y+44>map.invis[relinv].y+map.invis[relinv].h)
					y=map.invis[relinv].y+map.invis[relinv].h-44;
				}
			}
	}
	
	
	
	
})

document.addEventListener('mousemove', (e) => {
 
});

document.addEventListener('mouseup',(e)=>{
	mousedown=false;
	
	dx=0;
	dy=0;
	tx=0;
	ty=0;
})

skinW=getImage("headwhite.png")
skinWGo=getImage("headwhitego.png");
skinB=getImage("headblack.png")
skinBGo=getImage("headblackgo.png");

hairFemLight=getImage("hairfemalelight.png");
hairFemLightGo=getImage("hairfemalelightgo.png");
hairMalLight=getImage("hairmalelight.png");

hairFemDark=getImage("hairfemaledark.png");
hairFemDarkGo=getImage("hairfemaledarkgo.png");
hairMalDark=getImage("hairmaledark.png");


skinWGoLeft=getImage("headwhitegol.png");
skinBGoLeft=getImage("headblackgol.png");
hairFemLightGoLeft=getImage("hairfemalelightgol.png");
hairFemDarkGoLeft=getImage("hairfemaledarkgol.png");

invmonke=getImage("invmonke.png");//q
monke=getImage("monke.png");
monkeGo1=getImage("monkego1.png");
monkeGo0=getImage("monkego0.png");
monkeGo0Left=getImage("monkego0l.png");
monkeGo1Left=getImage("monkego1l.png");


block = getImage("block.png");
movingBlock=getImage("blockmovable.png");

butt = getImage("buttonred.png");
activeButt=getImage("buttongreen.png");

buticon0 = getImage("butticon0.png")
buticon1 = getImage("butticon1.png")

suit=[getImage("suitpurp.png"),getImage("suitred.png"),getImage("suitgreen.png"),getImage("suitscienist.png"),getImage("suitsecurity.png"),getImage("suitsecuritygo.png"),getImage("glasses.png"),getImage("glassesb.png"),getImage("glassesgo.png"),getImage("glassesbgo.png")]
suitleft=[getImage("suitsecuritygol.png"),getImage("glassesgol.png"),getImage("glassesbgol.png")]
spike=[getImage("spikesright.png"),getImage("spikesup.png"),getImage("spikesdown.png"),getImage("spikesleft.png")]
camera=[getImage("cameraleft.png"),getImage("cameraup.png"),getImage("cameradown.png"),getImage("cameraright.png"),]
railVert = getImage("railvert.png")
railVertActive = getImage("railvertactive.png")
railVertEndUp = getImage("railvertend.png");
railVertEndDown = getImage("railvertendd.png");
railVertEndUpActive = getImage("railvertendactive.png");
railVertEndDownActive = getImage("railvertendactived.png");

railHor=getImage("rail.png")
railHorActive=getImage("railactive.png")
railHorEndLeft=getImage("railendl.png")
railHorEndRight=getImage("railend.png")
railHorEndLeftActive=getImage("railendactivel.png")
railHorEndRightActive=getImage("railendactive.png")
banana=getImage("out.png");

buttonLeft=getImage("leftbutt.png");
buttonRight=getImage("rightbutt.png");
buttonJump=getImage("upbutt.png");

buttonLeftinv=getImage("leftbuttinv.png");
buttonRightinv=getImage("rightbuttinv.png");
buttonJumpinv=getImage("upbuttinv.png");

cube = getImage("companioncube.png");
bread = getImage("bread.png");
budka = getImage("budka.png");
budkadoor = getImage("budkadoor.png");
endscreen= getImage("endscreen.png");

arrowDown= getImage("arrowdown.png");
arrowRight= getImage("arrowright.png");

upSign= getImage("upsign.png");
leftSign= getImage("leftsign.png");
rightSign= getImage("rightsign.png");
clicksign = getImage("clicksign.png");
var noleftpressed=true;
var norightpressed=true;
var nouppressed=true;
var nobuttonpressed=true
var noteleported=true;
function createPeople()
{
people = new Object;	

for(var i = 0; i<10;i++)
{
	people[i]=
	{
		isBlack: (Math.random()<0.5),
		color: (Math.floor(Math.random()*3)),
		isFemale: (Math.round(Math.random()*2)==1),
		isDark: (Math.random()<0.5),
		hummode: 0,
		side: 0,
		x: 100+Math.random()*(840-200),	
	}
	people[i].targetX=people[i].x;
}

people[10]=
	{
		isBlack: (Math.random()<0.5),
		color: (Math.floor(Math.random()*3)),
		isFemale: (Math.round(Math.random()*2)==1),
		isDark: (Math.random()<0.5),
		hummode: 1,
		side: 0,
		x: 100+Math.random()*(840-200),	
	}
	people[10].targetX=people[i].x;

people[11]=
	{
		isBlack: (Math.random()<0.5),
		color: (Math.floor(Math.random()*3)),
		isFemale: (Math.round(Math.random()*2)==1),
		isDark: (Math.random()<0.5),
		hummode: 1,
		side: 0,
		x: 100+Math.random()*(840-200),	
	}
	people[i].targetX=people[11].x;
}
people = new Object;

var map= new Object;

buildMap();


var x=80,y=500;
var x2=x+50,y2=y;
var speed2=0;
var gra2=0;
var timer = setInterval(draw,10);

function draw()
{
	if(key_left)noleftpressed=false
	if(key_right)norightpressed=false
	if(key_up&&level>0)nouppressed=false
	if(dying){key_left=false;key_right=false;}
	drawBackground()
	
	
	drawLevel();
	if(level==13)
	drawImage(budkadoor,40*11,540-40*8,80,160)
	
	countThings();
	drawMonke(x2,y2,40,44,speed2)
	drawMonke(x,y,40,44,speed)
	
	
	
		if(key_left)
	drawImage(buttonLeft,10,430,120,120)
	if(key_right)
	drawImage(buttonRight,140+50,430,120,120)
	if(key_up)
	drawImage(buttonJump,840-130,430,120,120)
	
	if(noleftpressed)
	drawImage(leftSign,10+(-4+Math.random()*8),430+(-4+Math.random()*8),120,120)
	else if(!key_left)drawImage(buttonLeftinv,10,430,120,120)
	if(norightpressed)
	drawImage(rightSign,140+50+(-4+Math.random()*8),430+(-4+Math.random()*8),120,120)
	else if(!key_right)drawImage(buttonRightinv,140+50,430,120,120)
	if(nouppressed&&level>0)
	drawImage(upSign,840-130+(-4+Math.random()*8),430+(-4+Math.random()*8),120,120)
	else if(!key_up&&level>0)drawImage(buttonJumpinv,840-130,430,120,120)
	
	//setColor("#000")
	if(changelevel!=0)
	{
		if(changelevel==1)
		{
			if(firstpart)
			{
			changelevelx+=10
			fillPolygon([0,0,+changelevelx,-50+changelevelx],[580,0,0,580])
			if(changelevelx-50>=840){firstpart=false;buildMap();changelevelx=0;dying=false;dyingx=0;}
			}else{
				
				changelevelx+=10;
				fillPolygon([840,840,+changelevelx,-50+changelevelx],[580,0,0,580])
				if(changelevelx-50>=840){firstpart=true;changelevel=0;changelevelx=0;}
			}
		}
		if(changelevel==-1)
		{
			if(firstpart)
			{
				
			changelevelx+=10
			fillPolygon([840,840,840-changelevelx,840+50-changelevelx],[580,0,0,580])
			if(changelevelx-50>=840){firstpart=false;buildMap();changelevelx=0;dying=false;dyingx=0;}
			}else{
				changelevelx+=10;
				fillPolygon([0,0,840-changelevelx,840+50-changelevelx],[580,0,0,580])
				if(changelevelx-50>=840){firstpart=true;changelevel=0;changelevelx=0;}
			}
		}
	}
	
	
	
	if(level==12)
	{
		if(y<40*7)
			ligt++;
		
			setColor(255,255,255,ligt);
	if(ligt>=255){level++;buildMap();}
	fillRect(0,0,840,580)
	}
	
	if(level==13)
	{
		
		
		if(actiontime>600){drawImage(cube,actiontimex,540-40*6,80,80)}
		
		var xx = -2+Math.random()*4
		var yy = -2+Math.random()*4
		
		if(actiontime<200||actiontime>600){xx=0;yy=0;}
		drawImage(budka,40*9+xx,540-40*8+yy,80,160)
		
		
		if(actiontime>600&&(650-actiontime>0)){actiontimex+=(650-actiontime)/5}
		
		if(x>=756)
		{
			x=757
			key_left=false;
			key_true=false;
			speed=0;
			actiontime++;
			if(actiontime<200){speed=0.1;speed2=0.1;key_right=true}
			else
				{speed=-0.1;speed2=-0.1;key_left=true}
		}
		
		
		
		
		
		for(var i = 0; i<21;i++)
			drawImage(bread,40*i,540-40*5,40,40)//stpp
		setColor(255,216,0)
		fillRect(0,540-40*4,840,400)
		
		
		if(ligt>0)ligt--;
		setColor(255,255,255,ligt);
		fillRect(0,0,840,580)
		
		if(actiontime>800)
		{
			setColor("#000")
			fillRect(0,0,840,580)
			if(actiontime>1000)
			{drawImage(endscreen,0,0,840,580)
				if(speedrunnerMode===true)
				{
					g.font = "bold 50px Arial";
					setColor("#FFF")
					g.fillText(+min+":"+sec+":"+mil,140,540);
				}
			}
		}
		
	}
	
	if(speedrunnerMode===true&&actiontime<=1000)
	{
	var aftertime=new Date;
	g.font = "bold 17px Arial";
	var al=aftertime.getTime()-nowtime.getTime();
	 min=Math.floor(al/1000/60);
	 sec=Math.floor(al/1000)-60*min;
	 mil=Math.floor((al/1000-Math.floor(al/1000))*1000);
	
	if(min<10)min="0"+min;
	if(sec<10)sec="0"+sec;
	if(mil<10)mil="0"+mil
	if(mil<100)mil="0"+mil
	setColor("#000")
g.fillText("Time: "+min+":"+sec+":"+mil+".",40,20);
setColor("#FFF")
g.fillText("Time: "+min+":"+sec+":"+mil+".",668,20);
	}
	
}
//var aftertime=0;
var min=0,sec=0,mil=0;
var actiontime=0;
var actiontimex=40*9;
var loaded=false
function drawBackground()
{
	if(level<9||!loaded)
	{
	setColor("#888888")
	fillRect(0,0,840,580);
	for(var i = 0;i<Object.keys(people).length;i++)
	{
		drawHuman(people[i],people[i].x,480-80,80,88)
	}
	setColor(0,255,255,50)
	fillRect(100,100,740,480);
	setColor("#CCCCCC")
	fillRect(0,0,840,100)
	fillRect(0,0,100,580)
	fillRect(0,480,840,100)
	fillRect(840-(580-480),0,100,580)
	}else{
		if(level==12)
			setColor("#000")
		else
			if(level==13)
				setColor("#4d8fac")
			else
		setColor("#CCCCCC")
	fillRect(0,0,840,580);
	}
	
	
	
	setColor(0,0,0,darkness);
	fillRect(0,0,840,580)
	
}

var ligt = 0;

var inonke = new Object
var invtime = 100;
var invagain=0;
invonkes = 0;
var speed = 0;
var gra = 0;
var invisible=false;
var relinv = 0;
var darkness=0;
var invX=-100, invY=-100;
var invX1=-100, invY1=-100;
var invtime1=0;
var sectel=false;

var dying=false;
var dyingx=0;
function countThings()
{
	if(!changelevel)
	if((x>=map.endX&&x<=map.endX+50&&y>=map.endY&&y<=map.endY+50)||(x+40>=map.endX&&x+40<=map.endX+50&&y>=map.endY&&y<=map.endY+50)||(x>=map.endX&&x<=map.endX+50&&y+44>=map.endY&&y+44<=map.endY+50)||(x+40>=map.endX&&x+40<=map.endX+50&&y+44>=map.endY&&y+44<=map.endY+50))
	{
		level++;
		if(key_left)
		changelvl(false)
		else
			changelvl(true)
	}
	
	
	for(var i = 0;i<Object.keys(map.spike).length;i++)
	{
		if((x>=map.spike[i].x&&x<=map.spike[i].x+40&&y>=map.spike[i].y&&y<=map.spike[i].y+40)||(x+40>=map.spike[i].x&&x+40<=map.spike[i].x+40&&y>=map.spike[i].y&&y<=map.spike[i].y+40)
			||(x>=map.spike[i].x&&x<=map.spike[i].x+40&&y+40>=map.spike[i].y&&y+40<=map.spike[i].y+40)||(x+40>=map.spike[i].x&&x+40<=map.spike[i].x+40&&y>=map.spike[i].y&&y+40<=map.spike[i].y+40))
			{dying=true;x2=x;y2=y;}
			else
			if((x2>=map.spike[i].x&&x2<=map.spike[i].x+40&&y2>=map.spike[i].y&&y2<=map.spike[i].y+40)||(x2+40>=map.spike[i].x&&x2+40<=map.spike[i].x+40&&y2>=map.spike[i].y&&y2<=map.spike[i].y+40)
			||(x2>=map.spike[i].x&&x2<=map.spike[i].x+40&&y2+40>=map.spike[i].y&&y2+40<=map.spike[i].y+40)||(x2+40>=map.spike[i].x&&x2+40<=map.spike[i].x+40&&y2>=map.spike[i].y&&y2+40<=map.spike[i].y+40))
			{dying=true; x=x2,y=y2;}
	}
	
		for(var i = 0;i<Object.keys(map.rail).length;i++)
		{
			if(map.rail[i].active)
			{
				if(map.rail[i].blocks.x<(map.rail[i].length-1)*40)map.rail[i].blocks.x+=map.rail[i].speed
			}else{
				if(map.rail[i].blocks.x>0)map.rail[i].blocks.x-=map.rail[i].speed
			}
		}
	
	invisible=false;
	if(!dying)
		if(!underthecam&&!underthecam2){//console.log(underthecam+" "+underthecam2)
	for(var i = 0;i<Object.keys(map.invis).length;i++)
	{
		if(x>=map.invis[i].x&&x<=map.invis[i].x+map.invis[i].w)
			if(x+40>=map.invis[i].x&&x+40<=map.invis[i].x+map.invis[i].w)
				if(y>=map.invis[i].y&&y<=map.invis[i].y+map.invis[i].h)
					if(y+44>=map.invis[i].y&&y+44<=map.invis[i].y+map.invis[i].h)
						if(x2>=map.invis[i].x&&x2<=map.invis[i].x+map.invis[i].w)
			if(x2+40>=map.invis[i].x&&x2+40<=map.invis[i].x+map.invis[i].w)
				if(y2>=map.invis[i].y&&y2<=map.invis[i].y+map.invis[i].h)
					if(y2+44>=map.invis[i].y&&y2+44<=map.invis[i].y+map.invis[i].h)
					{invisible=true;relinv=i;}
		}}
	
if(underthecam){x2=x;y2=y}if(underthecam2){x=x2;y=y2}
	
	if(!invisible)
	{
		var isFinv=0;
		var isSinv=0;
		
		for(var i = 0;i<Object.keys(map.invis).length;i++)
		{
		if(x>=map.invis[i].x&&x<=map.invis[i].x+map.invis[i].w)
			if(x+40>=map.invis[i].x&&x+40<=map.invis[i].x+map.invis[i].w)
				if(y>=map.invis[i].y&&y<=map.invis[i].y+map.invis[i].h)
					if(y+44>=map.invis[i].y&&y+44<=map.invis[i].y+map.invis[i].h)
					{isFinv++;}
				
				
				if(x2>=map.invis[i].x&&x2<=map.invis[i].x+map.invis[i].w)
			if(x2+40>=map.invis[i].x&&x2+40<=map.invis[i].x+map.invis[i].w)
				if(y2>=map.invis[i].y&&y2<=map.invis[i].y+map.invis[i].h)
					if(y2+44>=map.invis[i].y&&y2+44<=map.invis[i].y+map.invis[i].h)
					{isSinv++;}
				
				
		}
		
		if(isFinv==0&&isSinv==0){if(Math.random()<0.5)isSinv=1;else isFinv=0}
	if(isFinv==0){x2=x;y2=y;}
	if(isSinv==0){x=x2;y=y2;}
	}
	
	if(invisible)
	{
		if(darkness<200){darkness+=5}
		invtime--;invtime1--;
		if(invtime <=0)
		{
			invtime=10;
			var chec=false;
			while(!chec)
			{
			invX=map.invis[relinv].x+Math.random()*(map.invis[relinv].w-40)
			invY=map.invis[relinv].y+Math.random()*(map.invis[relinv].h-44)
			chec=invisibleForCameras(invX,invY)
			}
		}
		
		if(invtime1<=0)
		{
			invtime1=10;
			
			
			var chec=false;
			while(!chec)
			{
			invX1=map.invis[relinv].x+Math.random()*(map.invis[relinv].w-40)
			invY1=map.invis[relinv].y+Math.random()*(map.invis[relinv].h-44)
			chec=invisibleForCameras(invX1,invY1)
			}
		}
		
	}
		
	else{
	
		if(darkness>0){darkness-=5}
	invtime1=5;
	invtime=10;
	
	}
	
	for(var i = 0;i<Object.keys(people).length;i++)
	{
		if(Math.random()<0.001)
			people[i].targetX=100+Math.random()*(840-200);
		
		
		if(people[i].x>people[i].targetX){people[i].x--;people[i].side=-1;}
		if(people[i].x<people[i].targetX){people[i].x++;people[i].side=1}
		if(Math.floor(people[i].x-people[i].targetX)==0){people[i].side=0}
		
	}
	
	var a = 0.1
	if(key_right)
	{
		if(speed<2)speed+=a
		if(speed2<2)speed2+=a
	} if(key_left)
	{
		if(speed>-2)speed-=a
		if(speed2>-2)speed2-=a
	}
	if(!key_left&&!key_right)
	{
		if(speed>0)speed-=a;
		if(speed<0)speed+=a;
		if(speed<a)speed=0;
		
		if(speed2>0)speed2-=a;
		if(speed2<0)speed2+=a;
		if(speed2<a)speed2=0;
	}

	
	for(var i = 0; i<Object.keys(map.block).length;i++)
	{	
				var checkthe=true;
				for(var j = 0; j<Object.keys(map.rail).length;j++)
				{
						if(i>=map.rail[j].blocks.blockstart&&i<=map.rail[j].blocks.length-1)checkthe=false;
				}
				if(checkthe)
				{
						if((y>map.block[i].y&&y<map.block[i].y+40)||(y+40>map.block[i].y&&y+40<map.block[i].y+40))
						{
							if(speed>0)
							{
								if(x+40+speed>map.block[i].x&&x+40+speed<map.block[i].x+40)
								{
									
									x=map.block[i].x-40
									speed=0;
								}
							}
							if(speed<0)
							{
								if(x+speed>map.block[i].x&&x+speed<map.block[i].x+40)
								{
									
									x=map.block[i].x+40
									speed=0;
								}
							}
							
						}
					if((x+5>=map.block[i].x&&x+5<map.block[i].x+40)||(x+40-5>=map.block[i].x&&x+40-5<map.block[i].x+40))
					{
						
					if(gra>0)
					{
						if(y+gra+44>=map.block[i].y&&y+gra+44<=map.block[i].y+40)
						{
							gra=0;
							y=map.block[i].y-44;
							touchTheEarth=true;
						}
					}
					if(gra<0)
					{
						if(y+gra>=map.block[i].y&&y+gra<=map.block[i].y+40)
						{
							gra=0;
							y=map.block[i].y+44;
						}
					}
					}
			}
	}
	
	
	
	
	
	
	
	
	
	
	for(var i = 0; i<Object.keys(map.block).length;i++)
	{	

		if((y2>=map.block[i].y2&&y2<map.block[i].y+40)||(y2+40>map.block[i].y&&y2+40<=map.block[i].y+40))
		{
			if(speed2>0)
			{
				if(x2+40+speed2>map.block[i].x&&x2+40+speed2<map.block[i].x+40)
				{
					
					x2=map.block[i].x-40
					speed2=0;
				}
			}
			if(speed2<0)
			{
				if(x2+speed2>map.block[i].x&&x2+speed2<map.block[i].x+40)
				{
					
					x2=map.block[i].x+40
					speed2=0;
				}
			}
			
		}
	if((x2+5>=map.block[i].x&&x2+5<map.block[i].x+40)||(x2+40-5>=map.block[i].x&&x2+40-5<map.block[i].x+40))
	{
		
	if(gra2>0)
	{
		if(y2+gra2+44>=map.block[i].y&&y2+gra2+44<=map.block[i].y+40)
		{
			gra2=0;
			y2=map.block[i].y-44;
			touchTheEarth2=true;
		}
	}
	if(gra2<0)
	{
		if(y2+gra2>=map.block[i].y&&y2+gra2<=map.block[i].y+40)
		{
			gra2=0;
			y2=map.block[i].y+44;
		}
	}
	}
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	//gragragragragragragragragragragragragragragragragragragragragragragragragragragragragragragragragragragragragragragragragragragragragragragragragragragragragragragragragragragragragragragragragragragragragragragragragragragragragragragragragragragragragragragragragragragragragragragragragragragragragragragragragragragragragragragragragragra
	for(var i = 0; i<Object.keys(map.rail).length;i++)
	{//map.rail[i].x+40*j-map.rail[i].blocks.length*40/2+10,map.rail[i].y+map.rail[i].blocks.x

//savetheplace
		for(var j = 0; j<map.rail[i].blocks.length;j++)
		{
			if(map.rail[i].isVert)
			{
				if(map.rail[i].blocks.isVert)
				{
						map.block[map.rail[i].blocks.blockstart+j].x=map.rail[i].x-10
				map.block[map.rail[i].blocks.blockstart+j].y=map.rail[i].y+map.rail[i].blocks.x-map.rail[i].blocks.length*40/2+j*40;
				}else{
				map.block[map.rail[i].blocks.blockstart+j].x=map.rail[i].x+j*40-map.rail[i].blocks.length*40/2+10
				map.block[map.rail[i].blocks.blockstart+j].y=map.rail[i].y+map.rail[i].blocks.x;
				}
			}
			else
			{
				if(map.rail[i].blocks.isVert)
				{//map.rail[i].x+map.rail[i].blocks.x,map.rail[i].y-map.rail[i].blocks.length*40/2+5
					map.block[map.rail[i].blocks.blockstart+j].x=map.rail[i].x+map.rail[i].blocks.x
				map.block[map.rail[i].blocks.blockstart+j].y=map.rail[i].y-map.rail[i].blocks.length*40/2+5+j*40;
				}else{//map.rail[i].x-map.rail[i].blocks.length*40/2+10+map.rail[i].blocks.x,map.rail[i].y-10
					map.block[map.rail[i].blocks.blockstart+j].x=map.rail[i].x-map.rail[i].blocks.length*40/2+10+map.rail[i].blocks.x+j*40
				map.block[map.rail[i].blocks.blockstart+j].y=map.rail[i].y-10;
				}
			}
		}


		if(map.rail[i].isVert)
		{
			if(map.rail[i].blocks.isVert)
			{//map.rail[i].x-10
		//map.rail[i].y+map.rail[i].blocks.x-map.rail[i].blocks.length*40/2
				
				


				if((x+5>=map.rail[i].x-10
				&&x+5<map.rail[i].x-10+40)
				||(x+40-5>=map.rail[i].x-10&&
				x+40-5<map.rail[i].x-10+40))
				{
				
				if(gra>0)
				{
				if(y+gra+44>=map.rail[i].y+map.rail[i].blocks.x-map.rail[i].blocks.length*40/2&&y+gra+44<=map.rail[i].y+map.rail[i].blocks.x-map.rail[i].blocks.length*40/2+map.rail[i].blocks.length*40)
				{
					gra=0;
					y=map.rail[i].y+map.rail[i].blocks.x-map.rail[i].blocks.length*40/2-44;
					touchTheEarth=true;
				}
				}
			
			
					if(gra<0)
					{
						if(y+gra>=map.rail[i].y+map.rail[i].blocks.x-map.rail[i].blocks.length*40/2&&y+gra<=map.rail[i].y+map.rail[i].blocks.x-map.rail[i].blocks.length*40/2+map.rail[i].blocks.length*40)
						{
							gra=0;
							y=map.rail[i].y+map.rail[i].blocks.x-map.rail[i].blocks.length*40/2+map.rail[i].blocks.length*40;
						}
					}
				}
				
				
			}else
			{
				if((y>map.rail[i].y+map.rail[i].blocks.x&&
				y<map.rail[i].y+map.rail[i].blocks.x+40)
					||
				(y+40>map.rail[i].y+map.rail[i].blocks.x&&
				y+40<map.rail[i].y+map.rail[i].blocks.x+40))
				{
					if(speed>0)
					{
						if(x+40+speed>map.rail[i].x-map.rail[i].blocks.length*40/2+10&&x+40+speed<map.rail[i].x+-map.rail[i].blocks.length*40/2+10+map.rail[i].blocks.length*40)
						{
							
							x=map.rail[i].x-map.rail[i].blocks.length*40/2+10-40
							speed=0;
						}
					}
					if(speed<0)
					{
						if(x+speed>map.rail[i].x-map.rail[i].blocks.length*40/2+10&&x+speed<map.rail[i].x-map.rail[i].blocks.length*40/2+10+map.rail[i].blocks.length*40)
						{
							
							x=map.rail[i].x-map.rail[i].blocks.length*40/2+10+map.rail[i].blocks.length*40
							speed=0;
						}
					}
					
				}


				if((x+5>=map.rail[i].x-map.rail[i].blocks.length*40/2+10
				&&x+5<map.rail[i].x-map.rail[i].blocks.length*40/2+10+40*map.rail[i].blocks.length)
				||(x+40-5>=map.rail[i].x-map.rail[i].blocks.length*40/2+10&&
				x+40-5<map.rail[i].x-map.rail[i].blocks.length*40/2+10+40*map.rail[i].blocks.length))
				{
				
				if(gra>0)
				{
				if(y+gra+44>=map.rail[i].y+map.rail[i].blocks.x&&y+gra+44<=map.rail[i].y+map.rail[i].blocks.x+40)
				{
					gra=0;
					y=map.rail[i].y+map.rail[i].blocks.x-44;
					touchTheEarth=true;
				}
				}
			
			
					if(gra<0)
					{
						if(y+gra>=map.rail[i].y+map.rail[i].blocks.x&&y+gra<=map.rail[i].y+map.rail[i].blocks.x+40)
						{
							gra=0;
							y=map.rail[i].y+map.rail[i].blocks.x+44;
						}
					}
				}
			}
		}else
		{
			if(map.rail[i].blocks.isVert)
			{
				//map.rail[i].x+map.rail[i].blocks.x,map.rail[i].y-map.rail[i].blocks.length*40/2+5
				
				if((y>map.rail[i].y-map.rail[i].blocks.length*40/2+5&&
				y<map.rail[i].y-map.rail[i].blocks.length*40/2+5+map.rail[i].blocks.length*40)
					||
				(y+40>map.rail[i].y-map.rail[i].blocks.length*40/2+5&&
				y+40<map.rail[i].y-map.rail[i].blocks.length*40/2+5+map.rail[i].blocks.length*40))
				{
					if(speed>0)
					{
						if(x+40+speed>map.rail[i].x+map.rail[i].blocks.x&&x+40+speed<map.rail[i].x+map.rail[i].blocks.x+40)
						{
							
							x=map.rail[i].x+map.rail[i].blocks.x-40
							speed=0;
						}
					}
					if(speed<0)
					{
						if(x+speed>map.rail[i].x+map.rail[i].blocks.x&&x+speed<map.rail[i].x+map.rail[i].blocks.x+40)
						{
							
							x=map.rail[i].x+map.rail[i].blocks.x+40
							speed=0;
						}
					}
					
						//map.rail[0].
					
						if(map.rail[i].active&&map.rail[i].blocks.x<(map.rail[i].length-1)*40)
						{
							if(x<map.rail[i].x+map.rail[i].blocks.x+40)
								if(x+44>map.rail[i].x+map.rail[i].blocks.x)
									if(!key_right)
								x+=map.rail[i].x+map.rail[i].blocks.x+40-x
						}
						if(!map.rail[i].active&&map.rail[i].blocks.x>0)
						{
							if(x<map.rail[i].x+map.rail[i].blocks.x+40)
								if(x+44>map.rail[i].x+map.rail[i].blocks.x)
									if(!key_left)
								x+=map.rail[i].x+map.rail[i].blocks.x-x-40
						}
					
					
					
				}

				

				if((x+5>=map.rail[i].x+map.rail[i].blocks.x
				&&x+5<map.rail[i].x+map.rail[i].blocks.x+40)
				||(x+40-5>=map.rail[i].x+map.rail[i].blocks.x&&
				x+40-5<map.rail[i].x+map.rail[i].blocks.x+40))
				{
				
				if(gra>0)
				{
				if(y+gra+44>=map.rail[i].y-map.rail[i].blocks.length*40/2+5&&y+gra+44<=map.rail[i].y-map.rail[i].blocks.length*40/2+5+map.rail[i].blocks.length*40)
				{
					gra=0;
					y=map.rail[i].y-map.rail[i].blocks.length*40/2+5-44;
					touchTheEarth=true;
					if(map.rail[i].active)
					{
						if(map.rail[i].blocks.x<(map.rail[i].length-1)*40){x+=map.rail[i].speed;alert()}
					}
					else{
						if(map.rail[i].blocks.x>0)x-=map.rail[i].speed;
					}
					
				}
				}
			
			
					if(gra<0)
					{
						if(y+gra>=map.rail[i].y-map.rail[i].blocks.length*40/2+5&&y+gra<=map.rail[i].y-map.rail[i].blocks.length*40/2+5+map.rail[i].blocks.length*40)
						{
							gra=0;
							y=map.rail[i].y-map.rail[i].blocks.length*40/2+5+map.rail[i].blocks.length*40;
						}
					}
				}
				
			}
			else
			{//map.rail[i].x-map.rail[i].blocks.length*40/2+10+map.rail[i].blocks.x,map.rail[i].y-10
				if((y>map.rail[i].y-10&&
				y<map.rail[i].y-10+40)
					||
				(y+40>map.rail[i].y-10&&
				y+40<map.rail[i].y-10+40))
				{
					if(speed>0)
					{
						if(x+40+speed>map.rail[i].x-map.rail[i].blocks.length*40/2+10+map.rail[i].blocks.x&&x+40+speed<map.rail[i].x-map.rail[i].blocks.length*40/2+10+map.rail[i].blocks.x+map.rail[i].blocks.length*40)
						{
							
							x=map.rail[i].x-map.rail[i].blocks.length*40/2+10+map.rail[i].blocks.x-40
							speed=0;
						}
					}
					if(speed<0)
					{
						if(x+speed>map.rail[i].x-map.rail[i].blocks.length*40/2+10+map.rail[i].blocks.x&&x+speed<map.rail[i].x-map.rail[i].blocks.length*40/2+10+map.rail[i].blocks.x+map.rail[i].blocks.length*40)
						{
							
							x=map.rail[i].x-map.rail[i].blocks.length*40/2+10+map.rail[i].blocks.x+map.rail[i].blocks.length*40
							speed=0;
						}
					}
					
						//map.rail[0].
					
						if(map.rail[i].active&&map.rail[i].blocks.x<(map.rail[i].length-1)*40)
						{
							if(x<map.rail[i].x-map.rail[i].blocks.length*40/2+10+map.rail[i].blocks.x+map.rail[i].blocks.length*40)
								if(x+44>map.rail[i].x-map.rail[i].blocks.length*40/2+10+map.rail[i].blocks.x)
									if(!key_right)
								x+=map.rail[i].x-map.rail[i].blocks.length*40/2+10+map.rail[i].blocks.x+map.rail[i].blocks.length*40-x
						}
						if(!map.rail[i].active&&map.rail[i].blocks.x>0)
						{
							if(x<map.rail[i].x-map.rail[i].blocks.length*40/2+10+map.rail[i].blocks.x+map.rail[i].blocks.length*40)
								if(x+44>map.rail[i].x-map.rail[i].blocks.length*40/2+10+map.rail[i].blocks.x)
									if(!key_left)
								x+=map.rail[i].x-map.rail[i].blocks.length*40/2+10+map.rail[i].blocks.x-40	-x
						}
					
					
					
				}

				

				if((x+5>=map.rail[i].x-map.rail[i].blocks.length*40/2+10+map.rail[i].blocks.x
				&&x+5<map.rail[i].x-map.rail[i].blocks.length*40/2+10+map.rail[i].blocks.x+40*map.rail[i].blocks.length)
				||(x+40-5>=map.rail[i].x-map.rail[i].blocks.length*40/2+10+map.rail[i].blocks.x&&
				x+40-5<map.rail[i].x-map.rail[i].blocks.length*40/2+10+map.rail[i].blocks.x+40*map.rail[i].blocks.length))
				{
				
				if(gra>0)
				{
				if(y+gra+44>=map.rail[i].y-10&&y+gra+44<=map.rail[i].y-10+40)
				{
					gra=0;
					y=map.rail[i].y-10-44;
					touchTheEarth=true;
					
					
				}
				}
			
			
					if(gra<0)
					{
						if(y+gra>=map.rail[i].y-10&&y+gra<=map.rail[i].y-10+40)
						{
							gra=0;
							y=map.rail[i].y-10+44;
						}
					}
				}	
			}
			
		}
	}
	
	
	//gra2gra2gra2gra2gra2gra2gra2gra2gra2gra2gra2gra2gra2gra2gra2gra2gra2gra2gra2gra2gra2gra2gra2gra2gra2gra2gra2gra2gra2gra2gra2gra2gra2gra2gra2gra2gra2gra2gra2gra2gra2gra2gra2gra2gra2gra2gra2gra2gra2gra2gra2gra2gra2gra2gra2gra2gra2gra2gra2gra2gra2gra2gra2gra2gra2gra2gra2gra2gra2gra2gra2gra2gra2gra2gra2gra2gra2gra2gra2gra2gra2gra2gra2gra2gra2gra2gra2gra2gra2gra2
	for(var i = 0; i<Object.keys(map.rail).length;i++)
	{//map.rail[i].x-map.rail[i].blocks.length*40/2+10,map.rail[i].y+map.rail[i].blocks.x
		if(map.rail[i].isVert)
		{
			if(map.rail[i].blocks.isVert)
			{
				
				
				if(y+46>=map.rail[i].y+map.rail[i].blocks.x&&y+46<=map.rail[i].y+map.rail[i].blocks.x+map.rail[i].blocks.length*40)
				if((x>=map.rail[i].x-map.rail[i].blocks.length*40/2+10&&x<=map.rail[i].x-map.rail[i].blocks.length*40/2+10+40)||(x+40>=map.rail[i].x-map.rail[i].blocks.length*40/2+10&&x+40<=map.rail[i].x-map.rail[i].blocks.length*40/2+10+40))
				{
				if(!map.rail[i].active)
					if(map.rail[i].blocks.x>0)
					y-=map.rail[i].speed;
				}
				
				if(y2+46>=map.rail[i].y+map.rail[i].blocks.x&&y2+46<=map.rail[i].y+map.rail[i].blocks.x+map.rail[i].blocks.length*40)
				if((x2>=map.rail[i].x-map.rail[i].blocks.length*40/2+10&&x2<=map.rail[i].x-map.rail[i].blocks.length*40/2+10+40)||(x2+40>=map.rail[i].x-map.rail[i].blocks.length*40/2+10&&x2+40<=map.rail[i].x-map.rail[i].blocks.length*40/2+10+40))
				{
				if(!map.rail[i].active)
					if(map.rail[i].blocks.x>0)
					y2-=map.rail[i].speed;
				}
				
				
				


				if((x2+5>=map.rail[i].x-10
				&&x2+5<map.rail[i].x-10+40)
				||(x2+40-5>=map.rail[i].x-10&&
				x2+40-5<map.rail[i].x-10+40))
				{
				
				if(gra2>0)
				{
				if(y2+gra2+44>=map.rail[i].y+map.rail[i].blocks.x-map.rail[i].blocks.length*40/2&&y2+gra2+44<=map.rail[i].y+map.rail[i].blocks.x-map.rail[i].blocks.length*40/2+map.rail[i].blocks.length*40)
				{
					gra2=0;
					y2=map.rail[i].y+map.rail[i].blocks.x-map.rail[i].blocks.length*40/2-44;
					touchTheEarth2=true;
				}
				}
			
			
					if(gra2<0)
					{
						if(y2+gra2>=map.rail[i].y+map.rail[i].blocks.x-map.rail[i].blocks.length*40/2&&y2+gra2<=map.rail[i].y+map.rail[i].blocks.x-map.rail[i].blocks.length*40/2+map.rail[i].blocks.length*40)
						{
							gra2=0;
							y2=map.rail[i].y+map.rail[i].blocks.x-map.rail[i].blocks.length*40/2+map.rail[i].blocks.length*40;
						}
					}
				}
			}
			else
			{
				
				
				if(y+46>=map.rail[i].y+map.rail[i].blocks.x&&y+46<=map.rail[i].y+map.rail[i].blocks.x+40)
				if((x>=map.rail[i].x-map.rail[i].blocks.length*40/2+10&&x<=map.rail[i].x-map.rail[i].blocks.length*40/2+10+map.rail[i].blocks.length*40)||(x+40>=map.rail[i].x-map.rail[i].blocks.length*40/2+10&&x+40<=map.rail[i].x-map.rail[i].blocks.length*40/2+10+map.rail[i].blocks.length*40))
				{
				if(!map.rail[i].active)
					if(map.rail[i].blocks.x>0)
					y-=map.rail[i].speed;
				}
				
				if(y2+46>=map.rail[i].y+map.rail[i].blocks.x&&y2+46<=map.rail[i].y+map.rail[i].blocks.x+40)
				if((x2>=map.rail[i].x-map.rail[i].blocks.length*40/2+10&&x2<=map.rail[i].x-map.rail[i].blocks.length*40/2+10+map.rail[i].blocks.length*40)||(x2+40>=map.rail[i].x-map.rail[i].blocks.length*40/2+10&&x2+40<=map.rail[i].x-map.rail[i].blocks.length*40/2+10+map.rail[i].blocks.length*40))
				{
				if(!map.rail[i].active)
					if(map.rail[i].blocks.x>0)
					y2-=map.rail[i].speed;
				}
				
					if((y2>map.rail[i].y+map.rail[i].blocks.x&&
					y2<map.rail[i].y+map.rail[i].blocks.x+40)
						||
					(y2+40>map.rail[i].y+map.rail[i].blocks.x&&
					y2+40<map.rail[i].y+map.rail[i].blocks.x+40))
					{
						if(speed2>0)
						{
							if(x2+40+speed2>map.rail[i].x-map.rail[i].blocks.length*40/2+10&&x2+40+speed2<map.rail[i].x+-map.rail[i].blocks.length*40/2+10+map.rail[i].blocks.length*40)
							{
								
								x2=map.rail[i].x-map.rail[i].blocks.length*40/2+10-40
								speed2=0;
							}
						}
						if(speed2<0)
						{
							if(x2+speed2>map.rail[i].x-map.rail[i].blocks.length*40/2+10&&x2+speed2<map.rail[i].x-map.rail[i].blocks.length*40/2+10+map.rail[i].blocks.length*40)
							{
								
								x2=map.rail[i].x-map.rail[i].blocks.length*40/2+10+map.rail[i].blocks.length*40
								speed2=0;
							}
						}
						
					}
					
					
					
					if((x2+5>=map.rail[i].x-map.rail[i].blocks.length*40/2+10
					&&x2+5<map.rail[i].x-map.rail[i].blocks.length*40/2+10+40*map.rail[i].blocks.length)
					||(x2+40-5>=map.rail[i].x-map.rail[i].blocks.length*40/2+10&&
					x2+40-5<map.rail[i].x-map.rail[i].blocks.length*40/2+10+40*map.rail[i].blocks.length))
					if(gra2>0)
				{
					if(y2+gra2+44>=map.rail[i].y+map.rail[i].blocks.x&&y2+gra+44<=map.rail[i].y+map.rail[i].blocks.x+40)
					{
						gra2=0;
						y2=map.rail[i].y+map.rail[i].blocks.x-44;
						touchTheEarth2=true;
					}
				
				
				
							if(gra2<0)
						{
							if(y2+gra2>=map.rail[i].y+map.rail[i].blocks.x&&y2+gra2<=map.rail[i].y+map.rail[i].blocks.x+40)
							{
								gra2=0;
								y2=map.rail[i].y+map.rail[i].blocks.x+44;
							}
						}
				}
			}
		}else
		{
			
			
			
			if(map.rail[i].blocks.isVert)
			{
				//map.rail[i].x+map.rail[i].blocks.x,map.rail[i].y-map.rail[i].blocks.length*40/2+5
				
				
				if(y+46>=map.rail[i].y-map.rail[i].blocks.length*40/2+5&&y+46<=map.rail[i].y-map.rail[i].blocks.length*40/2+5+map.rail[i].blocks.length*40)
				if((x>=map.rail[i].x+map.rail[i].blocks.x&&x<=map.rail[i].x+map.rail[i].blocks.x+40)||(x+40>=map.rail[i].x+map.rail[i].blocks.x&&x+40<=map.rail[i].x+map.rail[i].blocks.x+40))
				{if(map.rail[i].active)
					if(map.rail[i].blocks.x<(map.rail[i].length-1)*40&&inNoBlocks(x+map.rail[i].speed,y))
					x+=map.rail[i].speed;
				if(!map.rail[i].active)
					if(map.rail[i].blocks.x>0&&inNoBlocks(x-map.rail[i].speed,y))
					x-=map.rail[i].speed;
				}
				
				if(y2+46>=map.rail[i].y-map.rail[i].blocks.length*40/2+5&&y2+46<=map.rail[i].y-map.rail[i].blocks.length*40/2+5+map.rail[i].blocks.length*40)
				if((x2>=map.rail[i].x+map.rail[i].blocks.x&&x2<=map.rail[i].x+map.rail[i].blocks.x+40)||(x2+40>=map.rail[i].x+map.rail[i].blocks.x&&x2+40<=map.rail[i].x+map.rail[i].blocks.x+40))
				{if(map.rail[i].active)
					if(map.rail[i].blocks.x<(map.rail[i].length-1)*40&&inNoBlocks(x2+map.rail[i].speed,y2))
					x2+=map.rail[i].speed;
				if(!map.rail[i].active)
					if(map.rail[i].blocks.x>0&&inNoBlocks(x2-map.rail[i].speed,y2))
					x2-=map.rail[i].speed;
				}
				
				
				if((y2>map.rail[i].y-map.rail[i].blocks.length*40/2+5&&
				y2<map.rail[i].y-map.rail[i].blocks.length*40/2+5+map.rail[i].blocks.length*40)
					||
				(y2+40>map.rail[i].y-map.rail[i].blocks.length*40/2+5&&
				y2+40<map.rail[i].y-map.rail[i].blocks.length*40/2+5+map.rail[i].blocks.length*40))
				{
					if(speed2>0)
					{
						if(x2+40+speed2>map.rail[i].x+map.rail[i].blocks.x&&x2+40+speed2<map.rail[i].x+map.rail[i].blocks.x+40)
						{
							
							x2=map.rail[i].x+map.rail[i].blocks.x-40
							speed2=0;
						}
					}
					if(speed2<0)
					{
						if(x2+speed2>map.rail[i].x+map.rail[i].blocks.x&&x+speed<map.rail[i].x+map.rail[i].blocks.x+40)
						{
							
							x2=map.rail[i].x+map.rail[i].blocks.x+40
							speed2=0;
						}
					}
					
						//map.rail[0].
					
						if(map.rail[i].active&&map.rail[i].blocks.x<(map.rail[i].length-1)*40)
						{
							if(x2<map.rail[i].x+map.rail[i].blocks.x+40)
								if(x2+44>map.rail[i].x+map.rail[i].blocks.x)
									if(!key_right)
								x2+=map.rail[i].x+map.rail[i].blocks.x+40-x2
						}
						if(!map.rail[i].active&&map.rail[i].blocks.x>0)
						{
							if(x2<map.rail[i].x+map.rail[i].blocks.x+40)
								if(x2+44>map.rail[i].x+map.rail[i].blocks.x)
									if(!key_left)
								x2+=map.rail[i].x+map.rail[i].blocks.x-x2-40
						}
					
					
					
				}

				

				if((x2+5>=map.rail[i].x+map.rail[i].blocks.x
				&&x2+5<map.rail[i].x+map.rail[i].blocks.x+40)
				||(x2+40-5>=map.rail[i].x+map.rail[i].blocks.x&&
				x2+40-5<map.rail[i].x+map.rail[i].blocks.x+40))
				{
				
				if(gra2>0)
				{
				if(y2+gra2+44>=map.rail[i].y-map.rail[i].blocks.length*40/2+5&&y2+gra2+44<=map.rail[i].y-map.rail[i].blocks.length*40/2+5+map.rail[i].blocks.length*40)
				{
					gra2=0;
					y2=map.rail[i].y-map.rail[i].blocks.length*40/2+5-44;
					touchTheEarth2=true;
					
					
				}
				}
			
			
					if(gra<0)
					{
						if(y2+gra2>=map.rail[i].y-map.rail[i].blocks.length*40/2+5&&y2+gra2<=map.rail[i].y-map.rail[i].blocks.length*40/2+5+map.rail[i].blocks.length*40)
						{
							gra2=0;
							y2=map.rail[i].y-map.rail[i].blocks.length*40/2+5+map.rail[i].blocks.length*40;
						}
					}
				}
				
			}
			else
			{//map.rail[i].x-map.rail[i].blocks.length*40/2+10+map.rail[i].blocks.x,map.rail[i].y-10
				
				
				
				if(y+46>=map.rail[i].y-10&&y+46<=map.rail[i].y-10+40)
				if((x>=map.rail[i].x-map.rail[i].blocks.length*40/2+10+map.rail[i].blocks.x&&x<=map.rail[i].x-map.rail[i].blocks.length*40/2+10+map.rail[i].blocks.x+map.rail[i].blocks.length*40)||(x+40>=map.rail[i].x-map.rail[i].blocks.length*40/2+10+map.rail[i].blocks.x&&x+40<=map.rail[i].x-map.rail[i].blocks.length*40/2+10+map.rail[i].blocks.x+map.rail[i].blocks.length*40))
				{if(map.rail[i].active)
					if(map.rail[i].blocks.x<(map.rail[i].length-1)*40&&inNoBlocks(x+map.rail[i].speed,y))
					x+=map.rail[i].speed;
				if(!map.rail[i].active)
					if(map.rail[i].blocks.x>0&&inNoBlocks(x-map.rail[i].speed,y))
					x-=map.rail[i].speed;
				}
				
				if(y2+46>=map.rail[i].y-10&&y2+46<=map.rail[i].y-10+40)
				if((x2>=map.rail[i].x-map.rail[i].blocks.length*40/2+10+map.rail[i].blocks.x&&x2<=map.rail[i].x-map.rail[i].blocks.length*40/2+10+map.rail[i].blocks.x+map.rail[i].blocks.length*40)||(x2+40>=map.rail[i].x-map.rail[i].blocks.length*40/2+10+map.rail[i].blocks.x&&x2+40<=map.rail[i].x-map.rail[i].blocks.length*40/2+10+map.rail[i].blocks.x+map.rail[i].blocks.length*40))
				{if(map.rail[i].active)
					if(map.rail[i].blocks.x<(map.rail[i].length-1)*40&&inNoBlocks(x2+map.rail[i].speed,y2))
					x2+=map.rail[i].speed;
				if(!map.rail[i].active)
					if(map.rail[i].blocks.x>0&&inNoBlocks(x2-map.rail[i].speed,y2))
					x2-=map.rail[i].speed;
				}
				
				
				if((y2>map.rail[i].y-10&&
				y2<map.rail[i].y-10+40)
					||
				(y2+40>map.rail[i].y-10&&
				y2+40<map.rail[i].y-10+40))
				{
					if(speed2>0)
					{
						if(x2+40+speed2>map.rail[i].x-map.rail[i].blocks.length*40/2+10+map.rail[i].blocks.x&&x2+40+speed2<map.rail[i].x-map.rail[i].blocks.length*40/2+10+map.rail[i].blocks.x+map.rail[i].blocks.length*40)
						{
							
							x2=map.rail[i].x-map.rail[i].blocks.length*40/2+10+map.rail[i].blocks.x-40
							speed2=0;
						}
					}
					if(speed2<0)
					{
						if(x2+speed2>map.rail[i].x-map.rail[i].blocks.length*40/2+10+map.rail[i].blocks.x&&x2+speed2<map.rail[i].x-map.rail[i].blocks.length*40/2+10+map.rail[i].blocks.x+map.rail[i].blocks.length*40)
						{
							
							x2=map.rail[i].x-map.rail[i].blocks.length*40/2+10+map.rail[i].blocks.x+map.rail[i].blocks.length*40
							speed2=0;
						}
					}
					
						//map.rail[0].
					
						if(map.rail[i].active&&map.rail[i].blocks.x<(map.rail[i].length-1)*40)
						{
							if(x2<map.rail[i].x-map.rail[i].blocks.length*40/2+10+map.rail[i].blocks.x+map.rail[i].blocks.length*40)
								if(x2+44>map.rail[i].x-map.rail[i].blocks.length*40/2+10+map.rail[i].blocks.x)
									if(!key_right)
								x2+=map.rail[i].x-map.rail[i].blocks.length*40/2+10+map.rail[i].blocks.x+map.rail[i].blocks.length*40-x2
						}
						if(!map.rail[i].active&&map.rail[i].blocks.x>0)
						{
							if(x2<map.rail[i].x-map.rail[i].blocks.length*40/2+10+map.rail[i].blocks.x+map.rail[i].blocks.length*40)
								if(x2+44>map.rail[i].x-map.rail[i].blocks.length*40/2+10+map.rail[i].blocks.x)
									if(!key_left)
								x2+=map.rail[i].x-map.rail[i].blocks.length*40/2+10+map.rail[i].blocks.x-40	-x2
						}
					
					
					
				}

				

				if((x2+5>=map.rail[i].x-map.rail[i].blocks.length*40/2+10+map.rail[i].blocks.x
				&&x2+5<map.rail[i].x-map.rail[i].blocks.length*40/2+10+map.rail[i].blocks.x+40*map.rail[i].blocks.length)
				||(x2+40-5>=map.rail[i].x-map.rail[i].blocks.length*40/2+10+map.rail[i].blocks.x&&
				x2+40-5<map.rail[i].x-map.rail[i].blocks.length*40/2+10+map.rail[i].blocks.x+40*map.rail[i].blocks.length))
				{
				
				if(gra2>0)
				{
				if(y2+gra2+44>=map.rail[i].y-10&&y2+gra2+44<=map.rail[i].y-10+40)
				{
					gra2=0;
					y2=map.rail[i].y-10-44;
					touchTheEarth2=true;
					
					
				}
				}
			
			
					if(gra2<0)
					{
						if(y2+gra2>=map.rail[i].y-10&&y2+gra2<=map.rail[i].y-10+40)
						{
							gra2=0;
							y2=map.rail[i].y-10+44;
						}
					}
				}	
			}
			
		}	
    }
	
	
	
	
	
	
	
	
	
	
	
	
	
	x2+=speed2;
	y2+=gra2;
	gra2+=a;
	
	x+=speed;
	y+=gra;
	gra+=a;
	
		if(dying)
	{dyingx+=10;speed=0;gra=0;speed2=0;gra2=0;touchTheEarth=false;touchTheEarth2=false; if(dyingx==840){changelvl(true);}}
}

function changelvl(fromleft){changelevel=fromleft?1:-1; changelevelx=0;}
var changelevel=1;
var changelevelx = 0;

var arrowX=0;
var arrowY=0;
var arrowD=false;
function drawLevel()
{

	
	
	
	setColor(100,100,100);
	for(var i = 0; i<Object.keys(map.invis).length;i++)
	{
		fillRect(map.invis[i].x,map.invis[i].y,map.invis[i].w,map.invis[i].h)
	}
	
	if(invisible&&noteleported)drawImage(clicksign,522-50-2+Math.random()*4,416-60-2+Math.random()*4,100,100)
	
	drawImage(arrowD?arrowDown:arrowRight,arrowX,arrowY,80,80)
	if(invisible)
	{
		
				drawImage(invmonke,invX,invY,40,44)
				drawImage(invmonke,invX+(-6+Math.random()*12),invY+(-6+Math.random()*12),40,44)
				drawImage(invmonke,invX+(-6+Math.random()*12),invY+(-6+Math.random()*12),40,44)
				
				drawImage(invmonke,invX1,invY,40,44)
				drawImage(invmonke,invX1+(-6+Math.random()*12),invY1+(-6+Math.random()*12),40,44)
				drawImage(invmonke,invX1+(-6+Math.random()*12),invY1+(-6+Math.random()*12),40,44)
		
	}
	
	
	
	for(var i = 0; i<Object.keys(map.rail).length;i++)
	{
		if(map.rail[i].isVert)
		{
			for(var j = 0; j<map.rail[i].length;j++)
			{
				if(j==0)
				drawImage(map.rail[i].active?railVertEndUpActive:railVertEndUp,map.rail[i].x,map.rail[i].y+j*40+10,20,30)
				else if(j==map.rail[i].length-1)
					drawImage(map.rail[i].active?railVertEndDownActive:railVertEndDown,map.rail[i].x,map.rail[i].y+j*40,20,30)
				else
					drawImage(map.rail[i].active?railVertActive:railVert,map.rail[i].x,map.rail[i].y+j*40,20,40)
			}
			
			drawImage(map.rail[i].active?activeButt:butt,map.rail[i].buttonX,map.rail[i].buttonY,20,30)
			for(var j = 0;j<map.rail[i].blocks.length;j++)
			{
				if(map.rail[i].blocks.isVert)
				{//-map.rail[i].blocks.length*40/2
					drawImage(movingBlock,map.rail[i].x-10,map.rail[i].y+map.rail[i].blocks.x+40*j-map.rail[i].blocks.length*40/2,40,40)
				}
				else
				{
					drawImage(movingBlock,map.rail[i].x+40*j-map.rail[i].blocks.length*40/2+10,map.rail[i].y+map.rail[i].blocks.x,40,40)
				}
			}//*/
			
		}else{
			for(var j = 0; j<map.rail[i].length;j++)
			{
				if(j==0)
				drawImage(map.rail[i].active?railHorEndLeftActive:railHorEndLeft,map.rail[i].x+j*40+10,map.rail[i].y,30,20)
				else if(j==map.rail[i].length-1)
					drawImage(map.rail[i].active?railHorEndRightActive:railHorEndRight,map.rail[i].x+j*40,map.rail[i].y,30,20)
				else
					drawImage(map.rail[i].active?railHorActive:railHor,map.rail[i].x+j*40,map.rail[i].y,40,20)
			}
			drawImage(map.rail[i].active?activeButt:butt,map.rail[i].buttonX,map.rail[i].buttonY,20,30)
			for(var j = 0;j<map.rail[i].blocks.length;j++)
			{
				if(map.rail[i].blocks.isVert)
				{//-map.rail[i].blocks.length*40/2
					drawImage(movingBlock,map.rail[i].x+map.rail[i].blocks.x,map.rail[i].y+40*j-map.rail[i].blocks.length*40/2+5,40,40)
				}
				else
				{
					drawImage(movingBlock,map.rail[i].x+40*j-map.rail[i].blocks.length*40/2+10+map.rail[i].blocks.x,map.rail[i].y-10,40,40)
				}
			}
		}
		
		
		if(dist(x+20,y+22,map.rail[i].buttonX+10,map.rail[i].buttonY+15)<40)
		{
			drawImage(map.rail[i].active?buticon0:buticon1,map.rail[i].buttonX-25+10,map.rail[i].buttonY-75,50,50)
		if(nobuttonpressed)
				drawImage(clicksign,map.rail[i].buttonX-25+10-2+Math.random()*4-50,map.rail[i].buttonY-75-2+Math.random()*4-40,100,100)
		
		}
		else
		if(dist(x2+20,y2+22,map.rail[i].buttonX+10,map.rail[i].buttonY+15)<40)
		{
			drawImage(map.rail[i].active?buticon0:buticon1,map.rail[i].buttonX-25+10,map.rail[i].buttonY-75,50,50)
		if(nobuttonpressed)
				drawImage(clicksign,map.rail[i].buttonX-25+10-2+Math.random()*4,map.rail[i].buttonY-75-2+Math.random()*4,100,100)
		
		}
		
		
	}
	
		for(var i = 0; i<Object.keys(map.block).length;i++)
	{
		if(!map.block[i].invisible)
	drawImage(block,map.block[i].x,map.block[i].y,40,40);	
	}
	//if(!sladkikhSnowPromyatykhSnow)
	
	
	for(var i = 0; i<Object.keys(map.spike).length;i++)
	{
		drawImage(spike[map.spike[i].side],map.spike[i].x,map.spike[i].y,40,40)
	}
	
	setColor(0,255,0)
		underthecam=false;
				underthecam2=false;
		for(var i = 0; i<Object.keys(map.camera).length;i++)
	{
		drawImage(camera[map.camera[i].side],map.camera[i].x,map.camera[i].y,20,20)
		if(dist(map.camera[i].x+10,map.camera[i].y+10,x,y)<map.camera[i].range)
		{
			cross=false
			cross2=false
			cross3=false
			cross4=false
			
			cross10=false
			cross12=false
			cross13=false
			cross14=false
			for(var j = 0; j<Object.keys(map.block).length;j++)
				if(blockIsNear(j,map.camera[i].x+10,map.camera[i].y+10,x,y))
				{
					if(thoughTheBlock(map.camera[i].x+10,map.camera[i].y+10,x,y,map.block[j].x,map.block[j].y,40,40))
						cross=true;
					if(thoughTheBlock(map.camera[i].x+10,map.camera[i].y+10,x+40,y,map.block[j].x,map.block[j].y,40,40))
						cross2=true;
					if(thoughTheBlock(map.camera[i].x+10,map.camera[i].y+10,x+40,y+44,map.block[j].x,map.block[j].y,40,40))
						cross3=true;
					if(thoughTheBlock(map.camera[i].x+10,map.camera[i].y+10,x,y+44,map.block[j].x,map.block[j].y,40,40))
						cross4=true;
					
						if(thoughTheBlock(map.camera[i].x+10,map.camera[i].y+10,x2,y2,map.block[j].x,map.block[j].y,40,40))
						cross10=true;
					if(thoughTheBlock(map.camera[i].x+10,map.camera[i].y+10,x2+40,y2,map.block[j].x,map.block[j].y,40,40))
						cross12=true;
					if(thoughTheBlock(map.camera[i].x+10,map.camera[i].y+10,x2+40,y2+44,map.block[j].x,map.block[j].y,40,40))
						cross13=true;
					if(thoughTheBlock(map.camera[i].x+10,map.camera[i].y+10,x2,y2+44,map.block[j].x,map.block[j].y,40,40))
						cross14=true;
				}
				
				
					setColor(0,255,0,100)
			
				if(x==x2&&y==y2)
				{
					if(!cross||!cross2||!cross3||!cross4)
					{fillRect(x,y,40,44); underthecam=true;	}
				}
				else
				{
					if(!cross||!cross2||!cross3||!cross4)
					{fillRect(x,y,40,44);underthecam=true;}
			
					if(!cross10||!cross12||!cross13||!cross14)
					{fillRect(x2,y2,40,44);underthecam2=true;}
				}
			//	console.log(i+": "+underthecam+";"+underthecam2);
				if(!cross)
					drawLine(map.camera[i].x+10,map.camera[i].y+10,x,y)
				if(!cross2)
					drawLine(map.camera[i].x+10,map.camera[i].y+10,x+40,y)
				if(!cross3)
					drawLine(map.camera[i].x+10,map.camera[i].y+10,x+40,y+44)
				if(!cross4)
					drawLine(map.camera[i].x+10,map.camera[i].y+10,x,y+44)
				
				if(!cross10)
					drawLine(map.camera[i].x+10,map.camera[i].y+10,x2,y2)
				if(!cross12)
					drawLine(map.camera[i].x+10,map.camera[i].y+10,x2+40,y2)
				if(!cross13)
					drawLine(map.camera[i].x+10,map.camera[i].y+10,x2+40,y2+44)
				if(!cross14)
					drawLine(map.camera[i].x+10,map.camera[i].y+10,x2,y2+44)
		}
	}
	
	
	setColor(0,0,0)
	fillRect(x+20-840,0,dyingx,580)
	fillRect(x+20+840,0,-dyingx,580)
	fillRect(0,y+22-840,840,dyingx);
	fillRect(0,y+22+840,840,-dyingx);
	
	
	drawImage(banana,map.endX,map.endY,50,50)
	
	
}
var underthecam=false;
var underthecam2=false;
function thoughTheBlock(x0,y0,x1,y1,xc,yc,w,h)
{
	return intersects(x0,y0,x1,y1,xc,yc,xc+w,yc)||intersects(x0,y0,x1,y1,xc,yc,xc,yc+h)||intersects(x0,y0,x1,y1,xc+w,yc+h,xc+w,yc)||intersects(x0,y0,x1,y1,xc+w,yc+h,xc,yc+h)
}
var sladkikhSnowPromyatykhSnow=true;
function blockIsNear(num,x,y,mx1,my1)
{
	minblockdist=Math.min(dist(map.block[num].x,map.block[num].y,x,y),dist(map.block[num].x+40,map.block[num].y,x,y))
	minblockdist=Math.min(minblockdist,dist(map.block[num].x,map.block[num].y+40,x,y))
	minblockdist=Math.min(minblockdist,dist(map.block[num].x+40,map.block[num].y+40,x,y))
	
	return minblockdist<dist(x,y,mx1,my1)
}

function intersects(a,b,c,d,p,q,r,s) {
  var det, gamma, lambda;
  det = (c - a) * (s - q) - (r - p) * (d - b);
  if (det === 0) {
    return false;
  } else {
    lambda = ((s - q) * (r - a) + (p - r) * (s - b)) / det;
    gamma = ((b - d) * (r - a) + (c - a) * (s - b)) / det;
    return (0 < lambda && lambda < 1) && (0 < gamma && gamma < 1);
  }
};

var firstpart = false;
function dist(x0,y0,x1,y1)
{
	return Math.sqrt(((x1-x0)**2)+(y1-y0)**2)
}

function setColor(r,g,b,a)
{
	if(typeof(r)=='string')
		this.g.fillStyle=r;
	else
	this.g.fillStyle= "#"+hex(r)+hex(g)+hex(b)+((a==undefined)?"":hex(a));
}
 
function hex(n)
{
	n=n.toString(16);
	return (n.length<=1)?("0"+n):n
}
 
function fillRect(x,y,w,h)
{
	g.fillRect(x,y,w,h)
}


function onElement(x,y,w,h,mouseX=mx,mouseY=my)
{
	
	return (x<=mouseX&&x+w>=mouseX)&&(y<=mouseY&&y+h>=mouseY)
}

function drawLine(x,y,x1,y1,w=1)
{
	g.strokeStyle=g.fillStyle;
	g.lineWidth = w;
	 g.beginPath();
    g.moveTo(x,y);
    g.lineTo(x1,y1);
    g.stroke();
}

function drawHuman(hum,x,y,w,h)
{
	switch(hum.hummode)
	{
	case 1:
		switch(hum.side)
		{
			case 0:
			drawImage(hum.isBlack?skinB:skinW,x,y,w,h)
			drawImage(suit[3],x,y,w,h)
			drawImage(hum.isDark?(hum.isFemale?hairFemDark:hairMalDark):(hum.isFemale?hairFemLight:hairMalLight),x,y,w,h)
			drawImage(hum.isBlack?suit[7]:suit[6],x,y,w,h)
			break;
			
			case 1:
			drawImage(hum.isBlack?skinBGo:skinWGo,x,y,w,h)
			drawImage(suit[3],x,y,w,h)
			drawImage(hum.isDark?(hum.isFemale?hairFemDarkGo:hairMalDark):(hum.isFemale?hairFemLightGo:hairMalLight),x,y,w,h)
			drawImage(hum.isBlack?suit[9]:suit[8],x,y,w,h)
			break;
			
			case -1:
			drawImage(hum.isBlack?skinBGoLeft:skinWGoLeft,x,y,w,h)
			drawImage(suit[3],x,y,w,h)
			drawImage(hum.isDark?(hum.isFemale?hairFemDarkGoLeft:hairMalDark):(hum.isFemale?hairFemLightGoLeft:hairMalLight),x,y,w,h)
			drawImage(hum.isBlack?suitleft[2]:suitleft[1],x,y,w,h)
			break;
		}
		break;
	case 2:
		switch(hum.side)
		{
			case 0:
				drawImage(hum.isBlack?skinB:skinW,x,y,w,h)
				drawImage(hum.isDark?(hum.isFemale?hairFemDark:hairMalDark):(hum.isFemale?hairFemLight:hairMalLight),x,y,w,h)
				drawImage(suit[4],x,y,w,h)
			break;
			
			case 1:
				drawImage(hum.isBlack?skinBGo:skinWGo,x,y,w,h)
				drawImage(suit[5],x,y,w,h)
				drawImage(hum.isDark?(hum.isFemale?hairFemDarkGo:hairMalDark):(hum.isFemale?hairFemLightGo:hairMalLight),x,y,w,h)
			break;
			
			case -1:
				drawImage(hum.isBlack?skinBGoLeft:skinWGoLeft,x,y,w,h)
				drawImage(suitleft[0],x,y,w,h)
				drawImage(hum.isDark?(hum.isFemale?hairFemDarkGoLeft:hairMalDark):(hum.isFemale?hairFemLightGoLeft:hairMalLight),x,y,w,h)
			break;
		}
		break;
	case 0:
		switch(hum.side)
		{
			case 0:
				drawImage(hum.isBlack?skinB:skinW,x,y,w,h)
				drawImage(suit[hum.color],x,y,w,h)
				drawImage(hum.isDark?(hum.isFemale?hairFemDark:hairMalDark):(hum.isFemale?hairFemLight:hairMalLight),x,y,w,h)
			
			break;
			
			case 1:
				drawImage(hum.isBlack?skinBGo:skinWGo,x,y,w,h)
				drawImage(suit[hum.color],x,y,w,h)
				drawImage(hum.isDark?(hum.isFemale?hairFemDarkGo:hairMalDark):(hum.isFemale?hairFemLightGo:hairMalLight),x,y,w,h)
				
			break;
			case -1:
				drawImage(hum.isBlack?skinBGoLeft:skinWGoLeft,x+w,y,-w,h)
				drawImage(suit[hum.color],x+w,y,-w,h)
				drawImage(hum.isDark?(hum.isFemale?hairFemDarkGoLeft:hairMalDark):(hum.isFemale?hairFemLightGoLeft:hairMalLight),x,y,w,h)
				
			break;
		}
		break;
		
	}
}

var movemoment=0;
var movebool=true;
function drawMonke(x,y,w,h,speed)
{
	
	if(speed==0)
	{	movemoment=0;movebool=false;
		drawImage(monke,x,y,w,h);
	}else if(speed>0)
	{
		movemoment++;
		if(movemoment>=20){movemoment=0;movebool=!movebool;}
		drawImage(movebool?monkeGo1:monkeGo0,x,y,w,h)
	}else if(speed<0)
	{
		movemoment++;
		if(movemoment>=20){movemoment=0;movebool=!movebool;}
		drawImage(movebool?monkeGo1Left:monkeGo0Left,x,y,w,h)
	}
	
	
	
}

function drawImage(src,x,y,w,h)
{
	g.drawImage(src,x,y,w,h)
}

function getImage(url)
{
	img = new Image;
	img.src=url;
	return img;
}

function buildMap()
{
	createPeople()
	map = new Object
	
	map.rail = new Object
	map.spike=new Object
	map.invis=new Object
	map.block=new Object
	map.camera=new Object
	switch (level)
	{
		case -1:
		
		
		addCamera(631+40,500-40*2,2,200);
		
		for(var i = 0; i<7;i++)
			addSpike(40+i*40,250,1)		
		
		addSpike(425,356,1)
		addSpike(430,206,1)
		
		addRail(160,0,1,true,7,600,220,false,3,false)
		
		addWall(8*40,400-250,150,250)
		
		for(var i = 0; i<21;i++)
			addBlock(i*40,540)
		
		for(var i = 0; i<5;i++)
			addBlock(8*40+i*40,400)
		
		addBlock(8*40+2*40,500)
		
		for(var i = 0; i<10;i++)
			addBlock(8*40+i*40,400-150)
		
		addBlock(0,250)
		addBlock(-40,250)
		addBlock(-80,250)
		for(var i = 0; i<10;i++)
			addBlock(-80,250-i*40)
		
		
		addWall(550,420,500,500)
		//addBlock(631,500)
		addBlock(631,500-44)
		addBlock(631,500-40*2)
		for(i=0;i<4;i++)
			addBlock(631+i*40,500-40*3)
		
		
		
		setStartEnd(0,500,-80,200)
		
		break;
		//savetheplace
		case 0:
		arrowX=700;arrowY=460;arrowD=false;
		for(var i = 0; i<21;i++)
			addBlock(i*40,540)
		
		
		for(var i = 0; i<14;i++)
			addBlock(0,-20+40*i)
		for(var i = 0; i<12;i++)
			addBlock(800,-20+40*i)
		
		
		setStartEnd(80,500,840,500)
		break;
		
		case 1:
		arrowX=700;arrowY=460;arrowD=false;
		for(var i = 0; i<21;i++)
			addBlock(i*40,540)
		for(var i = 0; i<12;i++)
			addBlock(0,-20+40*i)
		for(var i = 0; i<12;i++)
			addBlock(800,-20+40*i)
		for(var i = 0; i<2;i++)
			addBlock(-40,-20+40*(12+i))
		
		for(var i =0; i<5;i++)
			addSpike(300+i*40,500,1)
		addBlock(300-40,500)
		addBlock(300+5*40,500)
		setStartEnd(0,500,840,500)
		break;
		
		case 2:
		arrowX=700;arrowY=80;arrowD=false;
		for(var i = 0; i<21;i++)
			addBlock(i*40,540)
		
		for(var i = 0; i<21;i++)
			addBlock(i*40,-20)
		
		for(var i = 0; i<9;i++)
			addBlock(800,180+40*i)
		
		addBlock(800,20)
		addBlock(840,180+40*i)
		for(var i = 0; i<9;i++)
			addBlock(880,40*i)
		
		for(var i = 0; i<12;i++)
			addBlock(0,-20+40*i)
		for(var i = 0; i<2;i++)
			addBlock(-40,-20+40*(12+i))
		
		for(var i=0;i<15;i++)
			addSpike(760-40*i,500,1)
		addBlock(760-40*15,500)
		for(var i=0;i<4;i++)
		addBlock(760-40*14+40*i,460)
		
		for(var i=0;i<4;i++)
		addBlock(760-40*14+40*4+100+i*40,460-80)
		
		for(var i=0;i<2;i++)
		addBlock(760-40*14+40*4+100+4*40+i*40+100,460-80-80)
		
		//level=2
		setStartEnd(0,500,840,180-50)
		break;
		
		case 3:
		arrowX=700;arrowY=80;arrowD=false;
		for(var i = 0; i<21;i++)
			addBlock(i*40,540)
		
		for(var i = 0; i<21;i++)
			addBlock(i*40,-20)
		
		for(var i = 0; i<9;i++)
			addBlock(800,180+40*i)
		
		for(var i = 0; i<9;i++)
			addBlock(0,180+40*i)
		for(var i = 0; i<5;i++)
			addBlock(-40,-20+40*i)
		for(var i = 0; i<5;i++)
			addBlock(40+40*i,180)
		for(var i = 0; i<5;i++)
			addBlock(840-40*i,180)
			
			for(var i = 0; i<5;i++)
			addBlock(880,40*i)
			
			
			
		for(var i=0;i<19;i++)
			addSpike(40+i*40,500,1)
		
		
		
		addRail(77+40,136+44+40+10,1,false,9,183,150,false,4,false)
		//	addRail(160,200,1,false,7,183,150,false,3,false)
			setStartEnd(0,180-44,840,180-50)
		break;
		
		
		case 4:
		arrowX=700;arrowY=80;arrowD=false;
		setStartEnd(0,180-44,840,180-50)
		for(var i = 0; i<21;i++)
			addBlock(i*40,540)
		
		for(var i = 0; i<21;i++)
			addBlock(i*40,-20)
		
		for(var i = 0; i<9;i++)
			addBlock(800,180+40*i)
		
		for(var i = 0; i<9;i++)
			addBlock(0,180+40*i)
		for(var i = 0; i<5;i++)
			addBlock(-40,-20+40*i)
		for(var i = 0; i<3;i++)
			addBlock(40+40*i,180)
		for(var i = 0; i<5;i++)
			addBlock(840-40*i,180)
			
			for(var i = 0; i<5;i++)
					addBlock(880,40*i)
				
				
		addSpike(40,500,1)
		addSpike(760,500,1)
		for(var i = 0; i<17;i++)
			addBlock(80+40*i,500)
		
		for(var i = 0; i<17;i++)
			addBlock(80+40*i,460)
		
		for(var i = 0; i<17;i++)
			if(i==0||i==16||(i>=7&&i<=9))
			addBlock(80+40*i,420)
		for(var i = 0; i<17;i++)
			if(i==0||i==16||(i>=7&&i<=9))
			addBlock(80+40*i,380)
		
		for(var i = 0; i<17;i++)
			if(!((i>=1&&i<=2)||(i>=14&&i<16)))
			addBlock(80+40*i,340)
		
		for(var i = 0; i<17;i++)
			if(!((i>=1&&i<=2)||(i>=14&&i<16)))
			addBlock(80+40*i,300)
		
		for(var i = 0; i<17;i++)
			if(i==0||i==3||i==16||i==13)
			addBlock(80+40*i,260)
		
		for(var i = 0; i<9;i++)
			addSpike(80+40*4+40*i,260,1)
		addWall(80,260,17*40,5*40);
		
		addRail(680-10,260,2,true,6,680,416+15,true,2,false)
		break;
		
		case 5:
		arrowX=450;arrowY=420;arrowD=true;
		setStartEnd(0,180-44,40*9,590)
		for(var i = 0; i<21;i++)
			if(i!=9&&i!=10)
			addBlock(i*40,540+((i>=8&&i<=12)?40:0))
		
		for(var i = 0; i<21;i++)
			addBlock(i*40,-20)
		
		for(var i = 0; i<13;i++)
			addBlock(800,20+40*i)
		
		for(var i = 0; i<9;i++)
			addBlock(0,180+40*i)
		for(var i = 0; i<5;i++)
			addBlock(-40,-20+40*i)
		for(var i = 0; i<3;i++)
			addBlock(40+40*i,180)
		for(var i = 0; i<5;i++)
			addBlock(840-40*i,180)
		
		

		
		addRail(840/2-10,340,5,true,6,148,416+15,true,5,false,true)
		addRail(200,350,2,false,13,770,300+10,true,3,false,true)
		addBlock(760,340)
		for(var i = 0; i<3;i++)
				addBlock(14*40+i*40,580-40*3);
			addBlock(14*40,580-40*2);
			for(var i = 0; i<5;i++)
				addSpike(15*40+i*40,580-40*2,1);
			
			
			for(var i = 0; i<4;i++)
				addBlock(40+i*40,40*11+20);
			
			for(var i = 0; i<5;i++)
				addBlock(40+4*40,40*11+20-40*i);
			for(var i = 0; i<3;i++)
				addBlock(40+4*40-40*i,40*11+20-40*5+7);
			
			addCamera(4*40,y+44+40*3+7,2,40*5)
		addWall(40,4*40+20,5*40,8*40);
		addSpike(40,10*40+20,3)
		break;
		
		case 6:
		
		arrowX=690;arrowY=390;arrowD=false;
		
		setStartEnd(62,-44,840,410)
		for(var i = 0; i<21;i++)
			addBlock(i*40,540)
		for(var i = 0; i<19;i++)
			addSpike(40+i*40,500,1)
		for(var i = 0; i<21;i++)
			if(i!=1&&i!=2)
			addBlock(i*40,-20)
		
		for(var i = 0; i<13;i++)
			addBlock(800+((i==9||i==10||i==8)?80:0),20+40*i)
		
		for(var i = 0; i<13;i++)
			addBlock((i==9||i==10)?-40:0,20+40*i)
		
		for(var i = 0; i<9;i++)
			addBlock(120,20+40*i)
		
		addRail(110-20,580-110,0.4,false,17,10,430,false,3,false)
		
		for(var i = 0; i<16;i++)
			addBlock(4*40+i*40,20+40*8-((i>12)?	40*3:0))
		for(var i = 0; i<4;i++)
			addBlock(4*40+12*40,20+40*8-i*40)
		
		addCamera(740,20+6*40,2,400)
		addWall(40*3,20,17*40,20+12*40)
		
		for(var i = 0; i<10;i++)
			addBlock(4*40+i*40,20+40*8-40*3)
		
		for(var i = 0; i<13;i++)
			addBlock(4*40+i*40+3*40,20+40*8-40*6)
		addRail(810,400-120,0.5,true,4,100+16*40,70,true,3,true,true)
		
		addCamera(4*40,20+2*40-5,3,1000)
		addCamera(15*40+20,20+6*40-20,0,1000)
		addCamera(4*40,20+2*40-5,3,1000)
		
		addRail(600,60,1,true,2,100+16*40,70,true,1,false)
		addBlock(6*40,20+7*40+10)
		addCamera(40,20+8*40-25,3,6*40)
		break;
		
		case 7:
		
		arrowX=690;arrowY=50;arrowD=false;
		setStartEnd(0,416,840,100)
		for(var i = 0; i<21;i++)
			addBlock(i*40,540)
		
		for(var i = 0; i<21;i++)
			addBlock(i*40,-20)
		
		for(var i = 0; i<13;i++)
			addBlock(800+((i==0||i==1||i==2)?80:0),20+40*i)
		
		for(var i = 0; i<13;i++)
			addBlock((i==8||i==9||i==10)?-40:0,20+40*i)
		
		for(var i = 3; i<5+3;i++)
			addBlock(9*40,20+40*i)
		
		for(var i = 1; i<10;i++)
			addBlock(i*40,20+7*40)
		for(var i = 1; i<12;i++)
			if(i<4||i>7)
			addBlock(i*40,100)
		
		for(var i = 0; i<4;i++)
			addBlock(440+40*5+i*40,140)
		for(var i = 0; i<4;i++)
			addBlock(440+40*5+i*40,140+40*7)
		addBlock(440+40*5-40,220)
		addBlock(440+40*5-40,260)
		addBlock(440+40*5-80,260)
		addBlock(760,300)
		addBlock(80,20+5*40)
		addBlock(80,20+6*40)
		
		//addBlock(3*40,20+3*40)
		for(var i = 0; i<4;i++)
		addSpike(4*40+i*40,20+2*40,1)
		
		addSpike(40,20+12*40,1)
		addBlock(80,20+12*40)
		addSpike(60,20,2)
		
		addWall(40,20,40*9,80)
		addWall(440+40*5-80,260-40*2,6*40,3*40)
		
		addCamera(120,20+5*40,3,7*40)
		addCamera(40,20+30,3,9*40)
		
		
		addRail(770,80-40*3,1,true,4,130,56+14,true,3,true)
		addRail(770-40,80-40*3,1,true,4,360,496+14,true,3,true)
		addRail(90,60,0.1,true,4,770,496+14,true,2,true)
		addRail(770-40*2,80-40*3,1,true,4,770,256+14,true,3,true)
		addRail(770-40*3,80,10,true,8,640,376+14,false,3,true)
		
		addRail(370,496+14,5,false,10,770,376+14,true,3,false)
		
		break;
			
			
		case 8:
		
		arrowX=690;arrowY=50;arrowD=false;
		
		setStartEnd(0,100-44,120,-50)
		for(var i = 0; i<21;i++)
			addBlock(i*40,540)
		
		for(var i = 0; i<21;i++)
			if(i!=3)
			addBlock(i*40,-20)
		
		
		for(var i = -4; i<9;i++)
			addBlock(800+((i<-1)?40:0),180+40*i)
		
		for(var i = 0; i<7;i++)
			addBlock(680,180+40*i)
		
		for(var i = 0; i<7;i++)
			addSpike(640,140+40*i,0)
		
		addBlock(780,180+40*4)
		
		for(var i = 0; i<4;i++)
		addBlock(640-40*i,180+40*5+40)
	
	
		for(var i = -4; i<9;i++)
			addBlock(-((i<-2)?40:0),180+40*i)
		
		for(var i = 0; i<9;i++)
			addSpike(40,180+40*i,3)
		
		for(var i = 0; i<3;i++)
			addBlock(760-40*i,140)
		
		for(var i = 0; i<2;i++)
			addSpike(760-40*i,180,2)
		
		for(var i = 1; i<4;i++)
		addBlock(40*i,100)
	
		for(var i = 1; i<4;i++)
		addBlock(40*i,140)
	
		addWall(160,60,16*40,12*40)
		addCamera(399,20,2,21*40)
		//addCamera(17*40,20,2,21*40)
		addCamera(750,180,2,9*40)
		
		addRail(0,40*9-5,10,false,16,15*40,10*40-10,false,9,true)
		addRail(820,80,4,true,5,780,180+40*4-30,true,3,true)
		addRail(747,60+4*40,1,true,13-4,747,496+14,true,2,false)
		
		addRail(-100,-100,20,true,2,575,496+14,true,1,true)
		addRail(-100,-100,20,true,2,390,496+14,false,1,true)
		addRail(-100,-100,20,true,2,278,496+14,true,1,true)
		addRail(7*40,30,1,false,4,-100,-100,false,3,false)
		break;
		
		case 9:
		loaded=true;
		arrowX=-100;arrowY=-100;arrowD=false;
		
		setStartEnd(120,540-44,700,580)
		for(var i = 0; i<21;i++)
			if(i!=2&&i!=5&&i!=6&&i!=14&&i!=15&&i!=17&&i!=18)
			addBlock(i*40,540)
		
		for(var i = 0; i<21;i++)
			if(i==0||i==4||i==7||i==13||i==16||i>18)
			addBlock(i*40,540-40*1)
		
		for(var i = 0; i<21;i++)
			if(i==0||i==4||i==7||i==13||i==16||i>18)
			addBlock(i*40,540-40*2)
		
		
		for(var i = 0; i<21;i++)
			if(i==0||i==4||i==7||i==13||i==16||i>18||i==10)
			addBlock(i*40,540-40*3)
		for(var j = 3;j<15-5;j++)
		for(var i = 0; i<21;i++)
			if(i<2||i==4||i==7||i==13||i==16||i>18||i==10)
			addBlock(i*40,500-40*j)
		
		for(var i = 0; i<21;i++)
			if(i<2||(i>=4&&i<=7)||i>=19||(i>=13&&i<=16)||i==10)
			addBlock(i*40,500-40*10)
		
		for(var j = 11;j<13;j++)
		for(var i = 0; i<21;i++)
			if(i<2||i>18||i==10)
			addBlock(i*40,500-40*j)
		
		for(var i = 0; i<21;i++)
			addBlock(i*40,500-40*13)
		
		addWall(40,20,160,14*40)
		addWall(40*8,20,80,40*5)
		addWall(40*8,20+8*40,80,40*5)
		
		addWall(40*11,20,120,40*14)
		addWall(40*16,20,3*40,40*5)
		addWall(40*16,20+40*9,3*40,40*5)//*/
		
		
		
		for(var i = 0; i<5;i++)
			addWall(40*8,20+40*5+25*i-5,80,15);
		
		
		for(var i = 0; i<7;i++)
			addWall(40*17,20+40*5+25*i-5,80,15);
		
		for(var i = 0; i<5;i++)
			addWall(40+160+25*i-5,20,15,80)
		
		for(var i = 0; i<4;i++)
			addWall(40*11+120+25*i-5,20,15,80)
		
			
			addWall(40*8+80+13,20+11*40,15,80)
		break;
		
		
		case 10:
		arrowX=-100;arrowY=-100;arrowD=false;
		setStartEnd(4*40-20,-44,840,13*40)
		
		for(var i = 0; i<21;i++)
			addBlock(i*40,540)
		for(var i = 0; i<21;i++)
			if(i!=3&&i!=4)
			addBlock(i*40,-20)
		
		for(var i = 0; i<10;i++)
			addBlock(0,-20+40*i)
		for(var i = 0; i<14;i++)
			addBlock(880,-20+40*i)
		
		for(var i = 0; i<14;i++)
			addBlock(840-120,-20+40*i)
		
		for(var i = 0; i<5;i++)
			addBlock(40*9,-20+40*i)
		
		addCamera(40,6*40+20,3,21*40)
		addCamera(20*40,20,2)
		
		addWall(0,0,840,580)
		
		addRail(21*40-10,20+4*40-30,1,false,4,-100,-100,false,4,false)
		addRail(10,8*40-20,0.2,true,5,-100,500,true,4,true)
		addRail(9*40+10,0,0.1,true,10,290,496+14,false,9,true)
		break;
		
		case 11:
		arrowX=-100;arrowY=-100;arrowD=false;
		setStartEnd(121,496,840,500)
		
		for(var i = 0; i<21;i++)
			addBlock(i*40,540)
		for(var i = 0; i<21;i++)
			addBlock(i*40,-20)
		
		for(var i = 0; i<14;i++)
			addBlock(0,-20+40*i)
		for(var i = 0; i<11;i++)
			addBlock(800,-20+40*i)
		for(var i = 10; i<14;i++)
			addBlock(880,-20+40*i)
		
		for(var i = 5; i<21;i++)
			addBlock(i*40,140)
		
		for(var i = 0; i<4;i++)
			addBlock(5*40,-20+40*i)
		
		addRail(810,9*40,1,true,4,303,96+14,true,3,true)
		addRail(110,40*4-10,1,false,5,-200,-100,true,4,false,false)
		addWall(0,0,840,580)
		addCamera(80,20,2,21*40)
		
		
		
		break;
		
		
		case 12:
		arrowX=-100;arrowY=-100;arrowD=false;
		setStartEnd(0,496,-100,-100)
		
		for(var i = 0; i<17;i++)
			addBlock(i*40,540)
		
		for(var i = 0; i<11;i++)
			addBlock(i*40,540-40*4)
		
		
		for(var i = 11; i<14;i++)
			addBlock(-40,-20+40*i)
		for(var i = 0; i<14;i++)
			addBlock(800-40*4,-20+40*i)
		
		for(var i = 0; i<11	;i++)
			addBlock(800-40*10,-20+40*i)
		
		
		addCamera(5*40,540-40*3,2,400)
		
		
		addCamera(11*40,46,3,0)
		
		addWall(0,540-40*3,11*40,3*40)
		addRail(14*40-30,-60,1,true,16,14*40-30,496+14,true,5,false) 
		break;
		
		case 13:
		arrowX=-100;arrowY=-100;arrowD=false;
		for(var i = 0; i<21;i++)
			addBlock(i*40,540-40*4)
		
		addBlock(390-40,540-40*5,1)
		addBlock(390-40,540-40*6,1)
		addBlock(390-40,540-40*7,1)
		addBlock(390-40,540-40*8,1)
		addBlock(400,540-40*8,1)
		
		setStartEnd(390,336,-100,-100)
		break;
		
		
	}
}
var level = 0;
buildMap()
buildMap()
function setStartEnd(sx,sy,ex,ey)
{
		x=sx;y=sy
		x2=x;y2=y;	
		
		map.endX=ex; map.endY=ey;
		
}
function coords(){console.log(x+";"+y)}
function addSpike(xx,yy,sside)
{
	map.spike[Object.keys(map.spike).length]={
				x:xx,
				y:yy,
				side:sside
			}	
}

function addCamera(xx,yy,s,rg)
{
	map.camera[Object.keys(map.camera).length]={
	x:xx,
	y:yy,
	side:s,
	range:rg
	}
}
	
function invisibleForCameras(ax,ay)
{	

	var plunder = false;
	if(Object.keys(map.camera).length==0)return true
		for(var i = 0; i<Object.keys(map.camera).length;i++)
	{
		
		if(dist(map.camera[i].x+10,map.camera[i].y+10,ax,ay)<map.camera[i].range)
		{
			cross=false
			cross2=false
			cross3=false
			cross4=false
			
			for(var j = 0; j<Object.keys(map.block).length;j++)
				if(blockIsNear(j,map.camera[i].x+10,map.camera[i].y+10,ax-20,ay-22))
				{
					if(thoughTheBlock(map.camera[i].x+10,map.camera[i].y+10,ax,ay,map.block[j].x,map.block[j].y,40,40))
						cross=true;
					if(thoughTheBlock(map.camera[i].x+10,map.camera[i].y+10,ax+40,ay,map.block[j].x,map.block[j].y,40,40))
						cross2=true;
					if(thoughTheBlock(map.camera[i].x+10,map.camera[i].y+10,ax+40,ay+44,map.block[j].x,map.block[j].y,40,40))
						cross3=true;
					if(thoughTheBlock(map.camera[i].x+10,map.camera[i].y+10,ax,ay+44,map.block[j].x,map.block[j].y,40,40))
						cross4=true;
					
				}
				
				
					setColor(0,255,0,100)
				
				
					if(!cross||!cross2||!cross3||!cross4)
					{plunder=true;	}
				
				
		}
	}
	return !plunder;
}	
	
function addRail(xx,yy,sspeed,vert,len,buttX,buttY,act,blockLen,blockVer,startedWith=true)
{
	var endX=0;
	if(act)
		if(startedWith)
			endX=(len-1)*40
		else
			endX=0
	else
		if(startedWith)
			endX=0;
		else
			endX=(len-1)*40
	map.rail[Object.keys(map.rail).length] = 
		{
			speed:sspeed,
			x:xx,
			y:yy,
			isVert: vert,
			length: len,
			buttonX:buttX,
			buttonY:buttY,
			active:act,
			blocks:{
				x: endX,
				length: blockLen,
				isVert: blockVer,
				blockstart:Object.keys(map.block).length	
			}
		}
		
		for(var i = 0; i<map.rail[Object.keys(map.rail).length-1].length;i++)
			addBlock(-100,-100,true)
		
}

function addBlock(xx,yy,invis=false)
{
	map.block[Object.keys(map.block).length]=
			{
				x: xx,
				y:yy,
				invisible: invis
			}
}

function addWall(xx,yy,ww,hh)
{
	map.invis[Object.keys(map.invis).length]=
		{
			x:xx,
			y: yy,
			w:ww,
			h:hh
			
		}
}

function fillPolygon(x,y)
{
	g.beginPath()
		g.moveTo(x[0],y[0])
	for(i=1;i<x.length;i++)
	{
		g.lineTo(x[i],y[i])
	}
	g.closePath();
	g.fill();
}
function inNoBlocks(x,y)
{
	var innb=true;
	for(var i = 0; i<Object.keys(map.block).length;i++)
	{
		if(x>map.block[i].x&&x<map.block[i].x+40)
			if(y>=map.block[i].y&&y<=map.block[i].y+40)
				innb=false
	}
	return innb;
}
function activate(i=0)
{
	map.rail[i].active=!map.rail[i].active
}