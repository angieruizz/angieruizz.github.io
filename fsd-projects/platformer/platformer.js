$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    //toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(250, 620, 90, 20, "pink");
    createPlatform(500, 490, 50, 20, "pink");
    createPlatform(780, 390, 34, 20,"pink");
    createPlatform(580, 260, 25, 20,"pink");
    createPlatform(200, 130, 225, 20,"black");
    // TODO 3 - Create Collectables
    createCollectable("kennedi", 400, 500,  0.5, 1);
    createCollectable("max", 300, 500, 0.5, 1);
    createCollectable("steve", 350, 500, 0.5, 1);
    createCollectable("grace", 800, 360, 0.5, 1);
    createCollectable("database", 590, 200, 0.5, 1);
    // TODO 4 - Create Cannons
    createCannon("right", 300, 1400);
    createCannon("left", 300, 1800);
    createCannon("right",770, 1290);
    createCannon("top", 200, 1000);
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
