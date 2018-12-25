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
      max-width: 500px;
  }
  
  .santaclaus > div {
    margin: 0 auto;
    max-width: 400px;
  }
  /* 首先 是圣诞老人的帽子 */
  .santaclaus .chapeu {
      display: block;
      position: relative;
      width: 310px;
      z-index: 99;
  }
  .santaclaus .chapeu .cone-1 {
      border-left: 50px solid transparent;
      border-right: 20px solid transparent;
      border-bottom: 70px solid #D32F2F;
  }
  .santaclaus .chapeu .cone-2 {
      background-color:  #D32F2F;
      border-top: 0px solid transparent;
      border-right: 340px solid #D32F2F;
      border-bottom: 100px solid transparent;
      border-color: transparent;
      box-shadow: -25px 15px 30px -5px rgba(1,1,1,0.3);
      position: relative;
      left: -56px;
      top: 49px;
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
    box-shadow: 0px -15px 40px -5px rgba(1,1,1,0.4);
      height: 80px;
      margin-left: -15px;
      position: relative;
      width: 340px;
      border-radius: 0.8em;
  }
  .santaclaus .chapeu::before {
    box-shadow: 20px 20px 40px -5px rgba(1,1,1,0.3);
      height: 80px;
      left: -120px;
      position: absolute;
      top: 80px;
      width: 80px;
      z-index: 111;
      border-radius: 50%;
  }
  /* 这是脸 */
  .santaclaus .face {
      background-color: #ffccbc;
      box-shadow: 0px 0px 30px 5px rgba(1,1,1,0.3);
      content: " ";
      display: block;
      height: 130px;
      position: relative;
      top: -10px;
      width: 300px;
  }
  /* 这是耳朵 */
  .santaclaus > .orelhas {
      background-color: #eea2ad;
      box-shadow: 0px 0px 30px 5px rgba(1,1,1,0.3);
      display: block;
      height: 60px;
      margin: 0 auto;
      position: relative;
      top: -125px;
      width: 330px;
      z-index: -1;
      border-radius: 1em 1em 2em 2em;
  }
  /* 这是眼睛 */
  .santaclaus .face > .eyes {
    display: flex;
    margin: 0 auto;
    padding-top: 20px;
    max-width: 160px;
    width: 100%;
    justify-content: space-between;
  }
  
  .santaclaus .face > .eyes::before,
  .santaclaus .face > .eyes::after {
    background-color: #111;
    content: " ";
    display: inline-block;
    height: 20px;
    width: 20px;
    border-radius: 50%;
  }
  /* 这是鼻子 */
  .santaclaus .face > .nariz {
    background-color: #EEA2AD;
    height: 50px;
    margin: 0 auto;
    position: relative;
    width: 70px;
    z-index: 111; 
    border-radius: 50%;
  }
  /* 引入一些动画效果哦  */
  @import url(./css/animation.css);
  /* 首先是圣诞老人摇摆的大胡子 */
  .santaclaus .face > .barba {
      background-color: #ecf0f1;
      box-shadow: -10px 10px 10px -5px rgba(1,1,1,0.3);
      height: 240px;
      margin: 0 auto;
      position: relative;
      top: -30px;
      width: 340px;
      left: -20px;
      transform: rotate(-20deg);
      border-radius: 0% 100% 70% 100%;
      animation: animaBarba 1.6s ease-in-out infinite alternate;
  }
  /* 圣诞老人的嘴巴 */
  .santaclaus .face > .barba > .boca {
      height: 50px;
      left: 30px;
      margin: 0 auto;
      position: relative;
      top: 20px;
      width: 60px;
      border-radius: 50%;
      animation: hoho 1.6s ease-in-out infinite alternate;
  }
  /* 动态的 HO HO HO*/
  .hohoho {
      height: 0;
      padding-top: 200px;
      width: 150px;
      animation: txtHohoho 1.6s ease-in-out infinite alternate;
  }
  .hohoho h2::before {
    text-shadow: 0px 10px 20px rgba(1,1,1,0.4);
    color: #fff;
    content: "HO";
      font-size: 62px;
      line-height: 1.4em;
  }
  
  .hohoho:last-of-type h2 {
      margin: 0 10px 30px;
      text-align: right;
  }
  .hohoho:last-of-type h2:nth-child(2) {margin-right: -50px;}
  .hohoho:last-of-type h2:first-child,
  .hohoho:last-of-type h2:last-child {
    animation: txtHohohoRight 1.6s ease-in-out infinite alternate;
  }
  .hohoho:first-of-type h2 {
      margin: 0 50px 30px 0;
      text-align: left;
  }
  .hohoho:first-of-type h2:nth-child(2) {margin-left: -60px;}
  .hohoho:first-of-type h2:first-child,
  .hohoho:first-of-type h2:last-child {
    animation: txtHohohoLeft 1.6s ease-in-out infinite alternate;
  }
  .hohoho h2:nth-child(2) {
    animation: txtHohohoMiddle 1.6s ease-in-out infinite alternate;
  }
  
  /* 好啦,这个圣诞老人就送给你们啦! 
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