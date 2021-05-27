function drow() {
  var ctx = document.getElementById('canvas').getContext('2d');
  ctx.font = '20pt Arial';

  ctx.clearRect(0, 0, 300, 100); //開始前reset畫布
  var STR = $(inputTXT).val(); //取得input值

  var strWidth = ctx.measureText(STR).width;
  strWidth = Math.ceil(strWidth); //無條件進位

  var canvas = document.getElementById('canvas');

  var realWidth = strWidth;
  if (strWidth < 100) {
    strWidth = 100;
  }

  canvas.width = strWidth; //依文字設定canvas寬度(動態寬度)
  canvas.height = 100;

  ctx.clearRect(0, 0, strWidth, 300); //畫布重設
  ctx.fillStyle = 'white'; //底層白色設定
  ctx.fillRect(0, 0, strWidth, 300); //底層白色設定
  ctx.fillStyle = 'black'; //文字黑色設定
  ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
  ctx.fillText(STR, 10, 20); //填入文字
  ctx.fillText('width:' + realWidth, 10, 40); //顯示文字寬度
}
