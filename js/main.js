let title = document.querySelector(".title");
let turn = "x";
let square = [];


function game(id){
  let element = document.getElementById(id)
  if(turn == "x" && element.innerHTML == ""){
    element.innerHTML = 'x';
    turn = 'o';
    title.innerHTML = 'O turn'
  } else if(turn == 'o' && element.innerHTML == ''){
    element.innerHTML = 'o';
    turn = 'x';
    title.innerHTML = 'X turn'
  }
  winner()
}


// function to Check Winner
function end(num1, num2, num3){
  // set winner name in title
  title.innerHTML = `${square[num1]} winner`
  // Change background color
  document.getElementById("item"+num1).style.backgroundColor = "#000";
  document.getElementById("item"+num2).style.backgroundColor = "#000";
  document.getElementById("item"+num3).style.backgroundColor = "#000";
  // Add three point after title
  setInterval(function(){
    title.innerHTML += '.'
  }, 1000)
  // reload page after 3.5 seconds
  setTimeout(function(){location.reload()}, 3500)
}

// Check if there 3 elements are equal to each other
function winner(){
  // get element.innerHTML
  for(let i = 1; i < 10; i++){
  square[i] = document.querySelector('#item' + i).innerHTML
}
  // Compare elements with each other
  if(square[1] == square[2] && square[2] == square[3] && square[1] != ''){
    end(1,2,3)
  } else if(square[4] == square[5] && square[5] == square[6] && square[4] != ''){
    end(4,5,6)
  } else if (square[7] == square[8] && square[8] == square[9] && square[7] != ''){
    end(7,8,9)
  } else if (square[1] == square[4] && square[4] == square[7] && square[1] != ''){
    end(1,4,7)
  } else if (square[2] == square[5] && square[5] == square[8] && square[2] != ''){
    end(2,5,8)
  }  else if (square[3] == square[6] && square[6] == square[9] && square[3] != ''){
    end(3,6,9)
  } else if (square[1] == square[5] && square[5] == square[9] && square[1] != ''){
    end(1,5,9)
  } else if (square[3] == square[5] && square[5] == square[7] && square[3] != ''){
    end(3,5,7)
  } 
}

