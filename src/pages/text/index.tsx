import React, { useEffect, useState } from 'react';
import html2canvas from "html2canvas"
import yayJpg from '../../assets/yay.jpg';

import './index.less'


export default function TextPage() {

  const  [html, setHtml] = useState<any>(<></>)

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



  const downloadLocMethod = (src: string,name: string) => {//下载图片地址和名称
    // // document.body.appendChild(oImg);  // 将生成的图片添加到body
    var eleLink = document.createElement("a");
    eleLink.href = src; // 转换后的图片地址
    eleLink.download = name;
    document.body.appendChild(eleLink);
    // 触发点击
    eleLink.click();
    // 然后移除
    document.body.removeChild(eleLink);
  }

  const downloadImg = () => {
    // @ts-ignore
    new html2canvas(document.getElementById('text'),{
        useCORS: true,
        allowTaint: true // 这两个属性都是图片跨域相关属性
      }
    ).then((canvas: any) => {
      // canvas为转换后的Canvas对象
      let tempImg = new Image();
      tempImg.src = canvas.toDataURL();  // 导出图片
      // 本地
      // this.downloadLocMethod(tempImg.src, '海报')
      // 牵扯跨域
      downloadLocMethod(tempImg.src, '海报')
    });
  }


  const onStart = () => {
    const txt: string = "先帝创业未半而中道崩殂，今天下三分，益州疲弊，此诚危急存亡之秋也。然侍卫之臣不懈于内，忠志之士忘身于外者，盖追先帝之殊遇，欲报之于陛下也。诚宜开张圣听，以光先帝遗德，恢弘志士之气，不宜妄自菲薄，引喻失义，以塞忠谏之路也。"

    setHtml(txt.split('').slice(0,80).map((item, index) => <div key={index}><span>{item}</span></div>))

  }

  useEffect(() => {
    onStart();
  }, [])

  return (
    <>
      <div className='text' id="text">
        <div className='text-header'>出师表</div>


        <div className='text-content'>

          <div className='text-main'>

            {html}


          </div>

        </div>


        <div className='text-footer'></div>
      </div>
      <button onClick={downloadImg}>下载</button>
    </>
  );
}
