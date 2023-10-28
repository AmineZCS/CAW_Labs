// Note: We solved all the 9 exercises in this file.

document.addEventListener("DOMContentLoaded", function () {
  var walls = document.querySelectorAll(".boundary");
  var end = document.getElementById("end");
  var start = document.getElementById("start");
  var restartButton = document.querySelector(".example");
  var statusMessage = document.getElementById("status");
  var gameWon = false;
  var gameStarted = false;
  var outsideMaze = false;
  var maze = document.getElementById("maze");
 

  function resetMaze() {
    gameWon = false;
    gameStarted = false;
    outsideMaze = false;

    walls.forEach(function (wall) {
      wall.style.backgroundColor = "#eeeeee";
    });
    statusMessage.textContent = "Move your mouse over the 'S' to begin.";
  }

  document.addEventListener("mousemove", checkOutsideMaze);

  function checkWin() {
    if (!gameWon) {
      gameWon = true;


      if (start.classList.contains("touch") && end.classList.contains("touch")) {
        statusMessage.textContent = "You win!";
      }
    }
  }


  function turnWallsRed() {
    if (gameStarted && !gameWon) {
      gameWon = false;

      walls.forEach(function (wall) {
        if (!wall.classList.contains("example")) {
          wall.style.backgroundColor = "red";
        }
      });
      start.classList.remove("touch");
      end.classList.remove("touch");
      statusMessage.textContent = "You lose!";
    }
  }



  function checkOutsideMaze(event) {
    if (gameStarted && !gameWon && !outsideMaze) {
      var mazeRect = maze.getBoundingClientRect();
      var mouseX = event.clientX;
      var mouseY = event.clientY;

      if (mouseX < mazeRect.left || mouseX > mazeRect.right || mouseY < mazeRect.top || mouseY > mazeRect.bottom) {
        outsideMaze = true;
        turnWallsRed();
      }
    }
  }

  restartButton.addEventListener("click", resetMaze);

  start.addEventListener("click", function () {
    if (!gameStarted) {
      gameStarted = true;
      statusMessage.textContent = "Game started!"
      start.classList.add("touch");
      
    }
  });


  end.addEventListener("mouseover", function () {
    if (gameStarted) {
      end.classList.add("touch");
      checkWin();
    }
  });


  walls.forEach(function (wall) {
    wall.addEventListener("mouseover", turnWallsRed);
  });
});
