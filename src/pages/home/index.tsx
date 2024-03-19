import { useEffect } from 'react';
import yayJpg from '../../assets/yay.jpg';

import './index.less'


export default function HomePage() {


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
    ctx.strokeRect(1,1,canvas.width - 2,canvas.height - 2);

    Math.floor(canvas.width/10)

    const num = (canvas.width - 4)/10
    console.log('num', num)
    for (var i= 1; i < 10; i++){
      console.log('i',i)
      ctx.beginPath();
      ctx.strokeStyle = 'red'
      ctx.lineWidth = 1;
      ctx.moveTo(i * num, 2);

      ctx.lineTo(i * num , canvas.height - 2);
      ctx.stroke();
    }


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
    <div className='home'>

      <canvas id='canvasDom'></canvas>
      
    </div>
  );
}
