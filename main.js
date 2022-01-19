canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="red";
mouseevent="empty";
width=1;
radius=20;

canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    mouseevent="mousedown";
    color=document.getElementById("color").value;
    radius=document.getElementById("Radius").value;
    }
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    mouseevent="mouseup";
    }
    canvas.addEventListener("mouseleave",my_mouseleave);
    function my_mouseleave(e){
        mouseevent="mouseleave";
        }
        canvas.addEventListener("mousemove",mousemove);
        function mousemove(e){
            color=document.getElementById("color").value;
            radius=document.getElementById("Radius").value;
            x=e.clientX-canvas.offsetLeft;
            y=e.clientY-canvas.offsetTop;
            if(mouseevent=="mousedown"){
                ctx.beginPath();
                ctx.strokeStyle = color;
                ctx.lineWidth = width;
                console.log("current position of x="+x+",current position of y="+y);
                ctx.arc(x,y,radius ,0,2 * Math.PI);
                ctx.stroke();
            }
            }
            function clear(){
                ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
            }