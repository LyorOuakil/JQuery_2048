$(document).ready(function () {
    let grid = [[0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
    ];
    addRandomNumber(grid);
    addRandomNumber(grid);
    addScore(grid);
    setColor(grid);

    document.onkeydown = function (event) {
      if(GameOver(grid) === true){
        alert("You loose, please reset to play again");
        return false;
      };
      if (event.keyCode === 38) {
          const prevGrid = duplicate(grid);
            moveUp(grid);
            if(!compareArray(prevGrid, grid))
              addRandomNumber(grid);
            print(grid);
        }
        else if (event.keyCode === 40) {
          const prevGrid = duplicate(grid);
            moveDown(grid);
            if(!compareArray(prevGrid, grid))
              addRandomNumber(grid);
            print(grid);
        }
        else if(event.keyCode === 37) {
          const prevGrid = duplicate(grid);
            moveLeft(grid);
            if(!compareArray(prevGrid, grid))
              addRandomNumber(grid);
            print(grid);
        }
        else if(event.keyCode === 39) {
          const prevGrid = duplicate(grid);

          console.log(GameOver(grid));
            moveRight(grid);
            if(!compareArray(prevGrid, grid))
              addRandomNumber(grid);
            print(grid);
        }
        addScore(grid);
        setColor(grid);
    }

    // Si clique sur Restart on vide toute les cases
  $(".reset").click(function() {
    grid = [[0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
    ]; 
    print(grid);
    addRandomNumber(grid);
    addRandomNumber(grid);
    addScore(grid);
    setColor(grid);
  });
});


function GameOver(grid){

  let GameOver = true;
    for(var x = 0; x < 4; x++){
      for(var y = 0; y < 3; y++){
        if(grid[x][y] === grid[x][y + 1]) {
          GameOver = false;
        }
          else if(grid[y][x] === grid[y + 1][x]){
          GameOver = false;;
        }
      }
      if(checkGrid(grid) > 0){
        GameOver = false;
      }
    }
    return GameOver;
}
function duplicate(grid){
let newGrid = [[0, 0, 0, 0],
[0, 0, 0, 0],
[0, 0, 0, 0],
[0, 0, 0, 0]
];
for(var x = 0; x < 4; x++){
  for(var y = 0; y < 4; y++){
    newGrid[x][y] = grid[x][y]
  }
}
  return newGrid;
}

function compareArray(grid1, grid2){
  for(var x = 0; x < 4; x++){
    for(var y = 0; y < 4; y++){
      if(grid1[x][y] != grid2[x][y]){
        return false;
      }
    }
  }
  return true;
}

function CreateRandomNumber() {
    var number = Math.floor(Math.random() * 10) + 1;

    if (number < 9) {//90% de 2
        number = 2;
    } else {
        number = 4;//10% de 4
    }
    return number;
}

function print(grid) {
    var compteur = 0;
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            $('#' + i + j).text(grid[i][j]);
        }
    }
}

function moveUp(grid, x, y)
{
  for (var y = 0; y < 4; y++)
  {
    moveAllUp(grid, y);
    for (var x = 0; x < 4; x++)
    {
      if (x > 0)
      {
        if (grid[x - 1][y] === 0)
        {
          grid[x - 1][y] = grid[x][y];
          grid[x][y] = 0;
        }
        else if (grid[x][y] != 0 && grid[x - 1][y] != 0
          && grid[x - 1][y] === grid[x][y])
        {
          grid[x - 1][y] *= 2;
          grid[x][y] = 0;
          moveAllUp(grid, y);
        }
      }
    }
  }
}



function moveAllUp(grid, y) {

  for (var i = 0; i < 3; i++)
  {
    for (var x = 0; x < 4; x++)
    {
      if (x < 3)
      {
        if (grid[x][y] === 0)
        {
         grid[x][y] = grid[x+1][y];
         grid[x+1][y] = 0;
        }
      }
    }
  }
}

// --- **** Ajout des moveDown et moveAllDown **** ---//

function moveDown(grid, x, y)
{
  for (var y = 0; y < 4; y++)
  {
    moveAllDown(grid, y);
    for (var x = 3; x >= 0; x--)
    {
      if (x < 3)
      {
        //console.table(grid);
        if (grid[x + 1][y] === 0)
        {
          grid[x + 1][y] = grid[x][y];
          grid[x][y] = 0;

        }
        else if (grid[x][y] != 0 && grid[x + 1][y] != 0
          && grid[x + 1][y] === grid[x][y])
        {
          grid[x + 1][y] *= 2;
          grid[x][y] = 0;
          moveAllDown(grid, y);
        }
      }
    }
  }
}

function moveAllDown(grid, y) {

  for (var i = 0; i < 3; i++)
  {
    for (var x = 3; x >= 0; x--)
    {
      if (x > 0)
      {
        if (grid[x][y] === 0)
        {
         grid[x][y] = grid[x-1][y];
         grid[x-1][y] = 0;
        }
      }
    }
  }
}


// --- **** Ajout des moveLeft et moveAllLeft **** ---//
function moveLeft(grid, x, y) {
    for (var x = 0; x < 4; x++) {
      moveAllLeft(grid, x);
        for (var y = 0; y < 4; y++) {
            if (y > 0) {
                if (grid[x][y - 1] === 0) {
                    grid[x][y - 1] = grid[x][y];
                    grid[x][y] = 0;
                } 
                else if ((grid[x][y] != 0) && (grid[x][y - 1] != 0) && (grid[x][y - 1] === grid[x][y])) {
                        grid[x][y - 1] *= 2;
                        grid[x][y] = 0;
                        moveAllLeft(grid, x);
                    }
                }
            }
        }
    }

function moveAllLeft(grid, x) {

    for (var i = 0; i < 3; i++) {
        for (var y = 0; y < 4; y++) {
          if(y < 3){
            if (grid[x][y] === 0) {
              grid[x][y] = grid[x][y + 1];
              grid[x][y + 1] = 0;
            }
          }
        }
    }
}

// --- **** Ajout des moveRight et moveAllRight **** ---//
function moveRight(grid, x, y) {
    for (var x = 0; x < 4; x++) {
    moveAllRight(grid, x);
        for (var y = 3; y >= 0; y--) {
            if (y < 3) {
                if (grid[x][y + 1] === 0) {
                    grid[x][y + 1] = grid[x][y];
                    grid[x][y] = 0;
                }
                else if ((grid[x][y] != 0) && (grid[x][y + 1] != 0) && (grid[x][y + 1 ] === grid[x][y])) {
                        grid[x][y + 1] *= 2;
                        grid[x][y] = 0;
                        moveAllRight(grid, x);
                    }
                }
            }
        }
    }

function moveAllRight(grid, x) {

    for (var i = 0; i < 3 ; i++) {
        for (var y = 3; y >= 0; y--) {
          if(y > 0)
          {
            if (grid[x][y] === 0) {
              grid[x][y] = grid[x][y - 1];
              grid[x][y - 1] = 0;
            }
          }
        }
    }
}
// -- **** Fin des ajouts **** ---//


function checkGrid(grid) {
    var empty = [];
    var compteur = 0;

    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            if (grid[i][j] === 0) {
                compteur++;
            }
        }
    }
    return compteur;
}


function addRandomNumber(grid) {
    var compt = 0;
    var random = CreateRandomNumber();
    var number = Math.floor(Math.random() * 16);
    var x = Math.floor(Math.random() * 4);
    var y = Math.floor(Math.random() * 4);

      // if (checkGrid(grid) === 0) {
      //     alert("Game Over");
      //     return false;
      // }
    for (var i = 0; i < 4; i++) {
        for (var j = 0; j < 4; j++) {
            if (compt === number) {
                if (grid[x][y] === 0) {
                    $('#' + x + y).text(random);
                    //---*** changement de classe empty en full ***---//
                    $( "#" + x + y).removeClass("empty").addClass('full');
                    grid[x][y] = random;
                } else {
                    return addRandomNumber(grid);
                }
            }
            compt++;
        };
    };
  }

  function addScore(grid){
    var total = 0;

    for(var i = 0 ; i < 4 ; i++){
      for(var j = 0 ; j < 4 ; j++){
        var res = parseInt($('#'+ i + j).html());
        total = total + res;
      }
    }
    $('.score').html(total);
  }

  function setColor(grid){
    for(var i = 0 ; i < 4 ; i++){

      for(var j = 0 ; j < 4 ; j++){

        switch(parseInt($('#'+ i + j).html())){

          case 0:
            $('#' + i + j).css('background', 'beige');
            break;

          case 2://grey
            $('#' + i + j).css('background', '#bec1c6');
            break;

          case 4://blue
            $('#' + i + j).css('background', '#7396ce');
            break;

          case 8://green
            $('#' + i + j).css('background', '#7bd8b6');
            break;

          case 16://red
            $('#' + i + j).css('background', '#d8817b');
            break;

          case 32://yellow
            $('#' + i + j).css('background', '#d6cd82');
            break;

          case 64://pink
            $('#' + i + j).css('background', '#d9a7e8');
            break;

          case 128://brown
            $('#' + i + j).css('background', '#af8b8b');
            break;

          case 256://purple
            $('#' + i + j).css('background', '#8070d1');
            break;

          case 512://bronze
            $('#' + i + j).css('background', '#d8852d');
            break;

          case 1028://silver
            $('#' + i + j).css('background', '#d3d3c4');
            break;

          case 2048://gold
            $('#' + i + j).css('background', '#e5e23d');
            break;


        }
      }
    }
  }
