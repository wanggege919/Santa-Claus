!function () {
  var duration = 50
  function writeCode(prefix, code, fn) {
    let container = document.querySelector('#code')
    let styleTag = document.querySelector('#styleTag')
    let n = 0
    setTimeout(function run() {
      n += 1
      container.innerHTML = prefix + code.substring(0, n)
      styleTag.innerHTML = prefix + code.substring(0, n)
      container.scrollTop = container.scrollHeight
      if (n < code.length) {
        setTimeout(run, duration)
      } else {
        fn.call()
      }
    }, duration)
  }
  let code = `
    /* 先来一个背景色*/
    .preview{
      background-color: rgba(211, 47, 47, 0.65);
      color: #fff;
      height: 100%;
    }
    .santaclaus {
      display: block;
      margin: 0 auto;
      max-width: 334px;
  }
  .santaclaus > div {
    margin: 0 auto;
    max-width: 267px;
  }
  /* 首先 是圣诞老人的帽子 */
  .santaclaus .chapeu {
      display: block;
      position: relative;
      width: 207px;
      z-index: 99;
  }
  .santaclaus .chapeu .cone-1 {
      border-left: 34px solid transparent;
      border-right: 13px solid transparent;
      border-bottom: 47px solid #D32F2F;
  }
  .santaclaus .chapeu .cone-2 {
      background-color:  #D32F2F;
      border-top: 0px solid transparent;
      border-right: 227px solid #D32F2F;
      border-bottom: 67px solid transparent;
      border-color: transparent;
      box-shadow: -17px 10px 20px -3px rgba(1,1,1,0.3);
      position: relative;
      left: -37px;
      top: 33px;
      transform: rotate(-15deg);
      border-radius: 30% 100% 0 100%;
  }
  .santaclaus .chapeu::after,
  .santaclaus .chapeu::before {
    background-color: #fff;
    content: " ";
    display: block;
  }
  .santaclaus .chapeu::after {
    box-shadow: 0px -10px 27px -3px rgba(1,1,1,0.4);
      height: 53px;
      margin-left: -10px;
      position: relative;
      width: 227px;
      border-radius: 0.5em;
  }
  .santaclaus .chapeu::before {
    box-shadow: 13px 13px 27px -3px rgba(1,1,1,0.3);
      height: 53px;
      left: -80px;
      position: absolute;
      top: 53px;
      width: 53px;
      z-index: 111;
      border-radius: 50%;
  }
  /* 这是脸 */
  .santaclaus .face {
      background-color: #ffccbc;
      box-shadow: 0px 0px 20px 3px rgba(1,1,1,0.3);
      content: " ";
      display: block;
      height: 87px;
      position: relative;
      top: -7px;
      width: 200px;
  }
  /* 这是耳朵 */
  .santaclaus > .orelhas {
      background-color: #eea2ad;
      box-shadow: 0px 0px 20px 3px rgba(1,1,1,0.3);
      display: block;
      height: 40px;
      margin: 0 auto;
      position: relative;
      top: -83px;
      width: 220px;
      z-index: -1;
      border-radius: 1em 1em 2em 2em;//
  }
  /* 这是眼睛 */
  .santaclaus .face > .eyes {
    display: flex;
    margin: 0 auto;
    padding-top: 14px;
    max-width: 106px;
    width: 100%;
    justify-content: space-between;
  }
  
  .santaclaus .face > .eyes::before,
  .santaclaus .face > .eyes::after {
    background-color: #111;
    content: " ";
    display: inline-block;
    height: 13px;
    width: 13px;
    border-radius: 50%;
  }
  /* 这是鼻子 */
  .santaclaus .face > .nariz {
    background-color: #EEA2AD;
    height: 33px;
    margin: 0 auto;
    position: relative;
    width: 47px;
    z-index: 111; 
    border-radius: 50%;
  }
  /* 引入一些动画效果哦  */
  @import url(./css/animation.css);
  /* 首先是圣诞老人摇摆的大胡子 */
  .santaclaus .face > .barba {
      background-color: #ecf0f1;
      box-shadow: -7px 7px 7px -3px rgba(1,1,1,0.3);
      height: 160px;
      margin: 0 auto;
      position: relative;
      top: -20px;
      width: 227px;
      left: -13px;
      transform: rotate(-20deg);
      border-radius: 0% 100% 70% 100%;
      animation: animaBarba 1.6s ease-in-out infinite alternate;
  }
  /* 圣诞老人的嘴巴 */
  .santaclaus .face > .barba > .boca {
      height: 33px;
      left: 20px;
      margin: 0 auto;
      position: relative;
      top: 13px;
      width: 40px;
      border-radius: 50%;
      animation: hoho 1.6s ease-in-out infinite alternate;
  }
  
  
  /* 好啦,这个圣诞老人就送给你们啦! 圣诞快乐哈!
   *一个小玩意做了几个小时啊
   *快谢谢旺哥
   *哈哈哈~~~~
   */
    `
  writeCode('', code)

  $('.action').on('click', 'button', function (e) {
    let $button = $(e.currentTarget)
    let speed = $button.attr('data-speed')
    console.log(speed)
    $button.addClass('active').siblings('.active').removeClass('active')
    switch (speed) {
      case 'slow':
        duration = 50
        break
      case 'normal':
        duration = 20
        break
      case 'fast':
        duration = 0
        break
    }
  })

}.call()