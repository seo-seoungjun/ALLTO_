$('.not-stay').hover(
  function () {
    $('.stay').css({ color: '#ffffff' });
  },
  function () {
    $('.stay').css({ color: '#63f4f3' });
  }
);

$(document).ready(function () {
  $('a[href^="#"]').on('click', function (e) {
    e.preventDefault();

    var target = this.hash;
    var $target = $(target);

    $('html, body').stop().animate(
      {
        scrollTop: $target.offset().top,
      },
      900,
      'swing'
    );
  });
});

$(function () {
  var mq3 = window.matchMedia('(min-width:1440px)');

  var mql = window.matchMedia('(max-width:780px)');

  var mq2 = window.matchMedia('(max-width:450px)');

  mq3.addEventListener('change', render3);

  mql.addEventListener('change', render);

  mq2.addEventListener('change', render2);

  scl0 = 2100;
  scl = 2200;
  scl2 = 3100;
  scl3 = 3630;
  scl4 = 4960;

  function render3(mq3) {
    if (mq3.matches) {
      scl3 = 4000;
    }
  }

  function render(mq1) {
    if (mq1.matches) {
      scl0 = 2100;
      scl = 2200;
      scl2 = 2400;
      scl3 = 2800;
      scl4 = 3200;
    }
  }

  function render2(mq2) {
    if (mq2.matches) {
      scl0 = 500;
      scl = 600;
      scl2 = 700;
      scl3 = 1200;
      scl4 = 1500;
    }
  }

  $(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= scl0) {
      $('body').css({ backgroundColor: 'black' });
      $('header').css({ backgroundColor: 'black' });
      $('#header').css({ opacity: 0 });
    }
    if (scroll <= scl) {
      $('#header').css({ opacity: 1 });
    }
    if (scroll <= scl0) {
      $('body').css({ backgroundColor: '#11111b' });
      $('header').css({ backgroundColor: '#11111b' });
    }
  });

  $(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= scl2) {
      $('.h2').css({ opacity: 0.73 });
    }

    if (scroll <= scl2) {
      $('.h2').css({ opacity: 0 });
    }

    if (scroll >= scl3) {
      $('canvas').css({ opacity: 1 });
      $('canvas').css({ visibility: 'visible' });
      $('#flip').css({ opacity: 1 });
    } else {
      $('canvas').css({ opacity: 0 });
      $('canvas').css({ visibility: 'hidden' });
      $('#flip').css({ opacity: 0 });
    }
  });

  $(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= scl4) {
      $('.cloud-article').addClass('show');
    } else {
      $('.cloud-article').removeClass('show');
    }
  });

  render3(mq3);
  render(mql);
  render2(mq2);
});

$(function () {
  var didScroll;
  var lastScrollTop = 0;
  var delta = 5;
  var navbarHeight = $('header').outerHeight();

  $(window).scroll(function (event) {
    didScroll = true;
  });

  setInterval(function () {
    if (didScroll) {
      hasScrolled();
      didScroll = false;
    }
  }, 250);

  function hasScrolled() {
    var st = $(this).scrollTop();

    if (Math.abs(lastScrollTop - st) <= delta) return;

    if (st > lastScrollTop && st > navbarHeight) {
      $('header').removeClass('header-down').addClass('header-up');
    } else {
      if (st + $(window).height() < $(document).height()) {
        $('header').removeClass('header-up').addClass('header-down');
      }
    }

    lastScrollTop = st;
  }
});

$(function () {
  // const gui = new dat.GUI({ closed: false, width: 340 });
  // const bigWavesFolder = gui.addFolder("Large Waves");
  // const smallWavesFolder = gui.addFolder("Small Waves");
  // const colorFolder = gui.addFolder("Colors");
  const debugObject = {
    waveDepthColor: '#1e4d40',
    waveSurfaceColor: '#63f4f3',
    fogNear: 1,
    fogFar: 3,
    fogColor: '#ffffff',
  };

  /**
   * Base
   */
  // Canvas
  const canvas = document.querySelector('.webgl');

  // Scene
  const scene = new THREE.Scene();
  scene.fog = new THREE.Fog(
    debugObject.fogColor,
    debugObject.fogNear,
    debugObject.fogFar
  );
  scene.background = new THREE.Color(debugObject.fogColor);

  /**
   * Object
   */
  const waterGeometry = new THREE.PlaneGeometry(12, 12, 512, 512);

  // Material
  const waterMaterial = new THREE.ShaderMaterial({
    vertexShader: document.getElementById('vertexShader').textContent,
    fragmentShader: document.getElementById('fragmentShader').textContent,
    transparent: true,
    fog: true,
    uniforms: {
      uTime: { value: 0 },
      uMouse: { value: new THREE.Vector2() },
      uBigWavesElevation: { value: 0.2 },
      uBigWavesFrequency: { value: new THREE.Vector2(4, 2) },
      uBigWaveSpeed: { value: 0.75 },
      // Small Waves
      uSmallWavesElevation: { value: 0.15 },
      uSmallWavesFrequency: { value: 3 },
      uSmallWavesSpeed: { value: 0.2 },
      uSmallWavesIterations: { value: 4 },
      // Color
      uDepthColor: { value: new THREE.Color(debugObject.waveDepthColor) },
      uSurfaceColor: { value: new THREE.Color(debugObject.waveSurfaceColor) },
      uColorOffset: { value: 0.08 },
      uColorMultiplier: { value: 5 },

      // Fog, contains fogColor, fogDensity, fogFar and fogNear
      ...THREE.UniformsLib['fog'],
    },
  });

  const water = new THREE.Mesh(waterGeometry, waterMaterial);
  water.rotation.x = -Math.PI * 0.5;
  scene.add(water);

  /**
   * Sizes
   */
  const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

  window.addEventListener('resize', () => {
    // Update sizes
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;

    // Update camera
    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();

    // Update renderer
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  });

  /**
   * Camera
   */

  // Base camera
  const camera = new THREE.PerspectiveCamera(
    75,
    sizes.width / sizes.height,
    0.1,
    100
  );
  camera.position.set(1, 1, 1);
  scene.add(camera);

  // Controls
  const controls = new THREE.OrbitControls(camera, canvas);
  controls.enableDamping = true;

  /**
   * Renderer
   */
  const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
  });
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  /**
   * Add GUI
   */
  // Big Waves
  // bigWavesFolder
  //   .add(waterMaterial.uniforms.uBigWavesElevation, "value")
  //   .min(0)
  //   .max(1)
  //   .step(0.001)
  //   .name("Elevation");
  // bigWavesFolder
  //   .add(waterMaterial.uniforms.uBigWavesFrequency.value, "x")
  //   .min(0)
  //   .max(10)
  //   .step(0.001)
  //   .name("Frequency X");
  // bigWavesFolder
  //   .add(waterMaterial.uniforms.uBigWavesFrequency.value, "y")
  //   .min(0)
  //   .max(10)
  //   .step(0.001)
  //   .name("Frequency Y");
  // bigWavesFolder
  //   .add(waterMaterial.uniforms.uBigWaveSpeed, "value")
  //   .min(0.25)
  //   .max(5)
  //   .step(0.001)
  //   .name("Speed");

  // // Small Waves
  // smallWavesFolder
  //   .add(waterMaterial.uniforms.uSmallWavesElevation, "value")
  //   .min(0.0)
  //   .max(0.3)
  //   .step(0.001)
  //   .name("Elevation");
  // smallWavesFolder
  //   .add(waterMaterial.uniforms.uSmallWavesFrequency, "value")
  //   .min(0)
  //   .max(30)
  //   .step(0.001)
  //   .name("Frequency");
  // smallWavesFolder
  //   .add(waterMaterial.uniforms.uSmallWavesSpeed, "value")
  //   .min(0.0)
  //   .max(1)
  //   .step(0.001)
  //   .name("Speed");
  // smallWavesFolder
  //   .add(waterMaterial.uniforms.uSmallWavesIterations, "value")
  //   .min(0)
  //   .max(10)
  //   .step(1)
  //   .name("Iterations");

  // // Colors
  // colorFolder
  //   .add(waterMaterial.uniforms.uColorOffset, "value")
  //   .min(0)
  //   .max(0.15)
  //   .step(0.0001)
  //   .name("Color Offset");
  // colorFolder
  //   .add(waterMaterial.uniforms.uColorMultiplier, "value")
  //   .min(0.0)
  //   .max(10.0)
  //   .step(0.001)
  //   .name("Color multiplier");
  // colorFolder
  //   .addColor(debugObject, "waveDepthColor")
  //   .name("Wave depth color")
  //   .onChange(() => {
  //     waterMaterial.uniforms.uDepthColor.value.set(debugObject.waveDepthColor);
  //   });
  // colorFolder
  //   .addColor(debugObject, "waveSurfaceColor")
  //   .name("Wave surface color")
  //   .onChange(() => {
  //     waterMaterial.uniforms.uSurfaceColor.value.set(
  //       debugObject.waveSurfaceColor
  //     );
  //   });
  // colorFolder
  //   .addColor(debugObject, "fogColor")
  //   .name("Fog Color")
  //   .onChange(() => {
  //     waterMaterial.uniforms.fogColor.value.set(debugObject.fogColor);
  //     scene.background.set(debugObject.fogColor);
  //     scene.fog = new THREE.Fog(
  //       debugObject.fogColor,
  //       debugObject.fogNear,
  //       debugObject.fogFar
  //     );
  //   });

  /**
   * Animate
   */
  const clock = new THREE.Clock();

  const tick = () => {
    const elapsedTime = clock.getElapsedTime();

    // Update controls
    controls.update();

    // Update time
    waterMaterial.uniforms.uTime.value = elapsedTime;

    // Render
    renderer.render(scene, camera);

    // Call tick again on the next frame
    window.requestAnimationFrame(tick);
  };

  tick();
});
