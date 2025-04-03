const canvas = document.getElementById("lineChart");
const ctx = canvas.getContext("2d");

const labels =  ["ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic"];
const sanSalvador= [30,32,34,35,36,37,36,35,34,32,31,30];
const santaTecla = [25,26,28,29,31,32,32,31,30,28,27,26];

const marginLeft = 50;
const marginRight = 50;

function drawLineWithLabel(data,color){
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = color

    for(let i=0; i<data.length; i++){
        const x = (i/(data.length-1)) * (canvas.width - marginLeft - marginRight) + marginLeft;
        const y = canvas.height - (data[i]-15) * 10;
        
        
        if(i === 0){
            ctx.moveTo(x,y);
        }else{
            ctx.lineTo(x,y);
        }
        ctx.fillStyle = color;
        ctx.font = "12px Arial";
        ctx.fillText(data[i]+"°C", x+5, y-5);
    }
    ctx.stroke();
}

function drawAxes(){
    ctx.beginPath();
    ctx.strokeStyle = "#000";
    ctx.lineWidth = 1;

    ctx.moveTo(50,canvas.height-50);
    ctx.lineTo(canvas.width-50,canvas.height-50)

    ctx.moveTo(50,canvas.height-50);
    ctx.lineTo(50,50);
    ctx.stroke();

    for (let i=0; i< labels.length; i++){
        const x = (i/(labels.length -1))*(canvas.width - 100) + 50;
        ctx.fillText(labels[i],x,canvas.height - 30);
    }
    for(let i=20; i<=40; i+=5){
        const y = canvas.height -50 -(i-20) * 10;
        ctx.fillText(i+"°C",20, y+5);

    }
}
drawAxes();
drawLineWithLabel(sanSalvador,'red');
drawLineWithLabel(santaTecla,'blue');

ctx.fillStyle = 'red';
ctx.fillRect(70,20,10,10);
ctx.fillStyle = 'black';
ctx.fillText("San Salvador",85,30);

ctx.fillStyle = 'blue';
ctx.fillRect(170,20,10,10);

ctx.fillText("San Tecla",185,30);

