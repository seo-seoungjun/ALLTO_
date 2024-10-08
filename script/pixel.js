$(function () {
  'use strict';

  /**
   * 3D Software ocean effect with Canvas2D
   * You can change properties under comment "Effect properties"
   */
  // Init Context
  var c = document.createElement('canvas').getContext('2d');
  var postctx = document.body
    .appendChild(document.createElement('canvas'))
    .getContext('2d');
  var canvas = c.canvas;
  var vertices = [];

  // Effect Properties
  var vertexCount = 7000;
  var vertexSize = 3;
  var oceanWidth = 204;
  var oceanHeight = -80;
  var gridSize = 32;
  var waveSize = 16;
  var perspective = 100;

  // Common variables
  var depth = (vertexCount / oceanWidth) * gridSize;
  var frame = 0;
  var sin = Math.sin,
    cos = Math.cos,
    tan = Math.tan,
    PI = Math.PI;

  // Render loop
  var loop = function loop() {
    var rad = (sin(frame / 100) * PI) / 20;
    var rad2 = (sin(frame / 50) * PI) / 10;
    frame++; //改变帧 frame 变量，计算下一帧每个点的位置和大小等等

    if (
      postctx.canvas.width !== postctx.canvas.offsetWidth ||
      postctx.canvas.height !== postctx.canvas.offsetHeight
    ) {
      postctx.canvas.width = canvas.width = postctx.canvas.offsetWidth;
      postctx.canvas.height = canvas.height = postctx.canvas.offsetHeight;
    }

    c.fillStyle = 'black';
    c.fillRect(0, 0, canvas.width, canvas.height);
    c.save();
    c.translate(canvas.width / 2, canvas.height / 2);
    c.beginPath();
    vertices.forEach(function (vertex, i) {
      var ni = i + oceanWidth;
      var x = vertex[0] - (frame % (gridSize * 2));
      var z =
        vertex[2] - ((frame * 2) % gridSize) + (i % 2 === 0 ? gridSize / 2 : 0);
      var wave =
        cos(frame / 45 + x / 50) -
        sin(frame / 20 + z / 50) +
        sin(frame / 30 + (z * x) / 10000);
      var y = vertex[1] + wave * waveSize;
      var a = Math.max(
        0,
        1 - Math.sqrt(Math.pow(x, 2) + Math.pow(z, 2)) / depth
      );
      var tx, ty, tz;
      y -= oceanHeight;

      // Transformation variables
      tx = x;
      ty = y;
      tz = z;

      // Rotation Y
      tx = x * cos(rad) + z * sin(rad);
      tz = -x * sin(rad) + z * cos(rad);
      x = tx;
      y = ty;
      z = tz;

      // Rotation Z
      tx = x * cos(rad) - y * sin(rad);
      ty = x * sin(rad) + y * cos(rad);
      x = tx;
      y = ty;
      z = tz;

      // Rotation X
      ty = y * cos(rad2) - z * sin(rad2);
      tz = y * sin(rad2) + z * cos(rad2);
      x = tx;
      y = ty;
      z = tz;
      x /= z / perspective;
      y /= z / perspective;
      if (a < 0.01) return;
      if (z < 0) return;
      c.globalAlpha = a;
      //c.fillStyle = "hsl(".concat(180 + wave * 20, "deg, 100%, 50%)");
      c.fillStyle = '#ffffff';
      c.fillRect(
        x - (a * vertexSize) / 2,
        y - (a * vertexSize) / 2,
        a * vertexSize,
        a * vertexSize
      );
      c.globalAlpha = 1;
    });
    c.restore();

    // Post-processing
    postctx.drawImage(canvas, 0, 0);
    postctx.globalCompositeOperation = 'screen';
    postctx.filter = 'blur(16px)';
    postctx.drawImage(canvas, 0, 0);
    postctx.filter = 'blur(0)';
    postctx.globalCompositeOperation = 'source-over';
    requestAnimationFrame(loop);
  };

  // Generating dots
  for (var i = 0; i < vertexCount; i++) {
    var x = i % oceanWidth;
    var y = 0;
    var z = (i / oceanWidth) >> 0;
    var offset = oceanWidth / 2;
    vertices.push([(-offset + x) * gridSize, y * gridSize, z * gridSize]);
  }

  loop();
});
