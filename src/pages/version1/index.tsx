import { useEffect } from 'react';
import html2canvas from "html2canvas"
import yayJpg from '../../assets/yay.jpg';

import './index.less'


export default function Version1Page() {


  /*const onStart = () => {

    /!** @type {HTMLCanvasElement} *!/
        // canvasDom
        // width: 2480px;
        // height: 3508px;
    const canvas: any = document.getElementById("canvasDom")
    const ctx = canvas.getContext("2d");
    const { offsetWidth, offsetHeight } = canvas;

    canvas.width = offsetWidth * window.devicePixelRatio;
    canvas.height = offsetHeight * window.devicePixelRatio;

    ctx.strokeStyle = '#026302';
    ctx.lineWidth = 2;
    ctx.strokeRect(31,81,canvas.width - 62,canvas.height - 112);

    ctx.strokeStyle = 'green';
    ctx.lineWidth = 1;
    ctx.strokeRect(34.5,84.5,canvas.width - 69,canvas.height - 119);



    const num = (canvas.width - 69 - 34.5)/10
    for (var i= 0; i < 11; i++){
      console.log('i',i)
      ctx.beginPath();
      ctx.strokeStyle = 'red'
      ctx.moveTo(i * num + 34.5, 84.5);
      ctx.lineWidth = 1;

      ctx.lineTo(i * num + 34.5, canvas.height - 34.5);
      ctx.stroke();
    }

    // ctx.beginPath();
    // ctx.moveTo(0,0);
    // ctx.lineWidth = 1;
    //
    // ctx.lineTo(300, 150);
    // ctx.stroke();

  }*/

  const onStart = () => {

    /** @type {HTMLCanvasElement} */
    // canvas
    // width: 2480px;
    // height: 3508px;
    const canvas: any = document.getElementById("canvas")
    const ctx = canvas.getContext("2d");
    const { offsetWidth, offsetHeight } = canvas;
    //
    canvas.width = offsetWidth * window.devicePixelRatio;
    canvas.height = offsetHeight * window.devicePixelRatio;



    ctx.beginPath();
    ctx.strokeStyle = 'red'
    ctx.lineWidth = 2;
    ctx.moveTo(0, canvas.height/2);

    ctx.lineTo(canvas.width , canvas.height/2);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = 'red'
    ctx.lineWidth = 2;
    ctx.moveTo(canvas.width/2, 0);

    ctx.lineTo(canvas.width/2 , canvas.height);
    ctx.stroke();

    // *******************************************


    for (let i= 0; i < 4; i++){
      ctx.strokeStyle = '#026302';
      ctx.lineWidth = 2;
      ctx.strokeRect(100,100,100,100);
    }



    ctx.font = "20px 微软雅黑";

    const text = '微软雅黑'
    var metrics = ctx.measureText("111")
    console.log('metrics=', metrics)
    console.log('metrics width', metrics.width)
    console.log('metrics width', metrics.height)


    //设置文字及其位置
    ctx.textBaseline = 'middle'
    ctx.textAlign="center";
    ctx.fillText(text, canvas.width/2, canvas.height/2);


    // Math.floor(canvas.width/10)

    // const num = (canvas.width - 4)/10
    // console.log('num', num)
   /* for (var i= 1; i < 10; i++){
      console.log('i',i)
      ctx.beginPath();
      ctx.strokeStyle = 'red'
      ctx.lineWidth = 1;
      ctx.moveTo(i * num, 2);

      ctx.lineTo(i * num , canvas.height - 2);
      ctx.stroke();
    }*/


    // ctx.beginPath();
    // ctx.moveTo(0,0);
    // ctx.lineWidth = 1;
    //
    // ctx.lineTo(300, 150);
    // ctx.stroke();

  }

  useEffect(() => {
    onStart();
  }, [])

  return (
    <div className='version1'>
      <canvas id='canvas'></canvas>
    </div>
  );
}
