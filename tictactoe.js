var flag = 0;
var user1 = 0;
var user2 = 0;
var tie = 0;
function check(e){
    let eventval = document.getElementById(e.target.id)
    

    if(flag==0 && e.target.value=="" ){
        e.target.value = "X";
        flag = 1;
        eventval.innerHTML = "X";
        e.target.disabled = true;
        checkWinner();
    }
    if(flag==1 && eventval.value==""){
        eventval.value = "O";
        flag = 0;
        eventval.innerHTML = "O";
        e.target.disabled = true;
        checkWinner();
    }
}
function newgame(){
    let elements = document.getElementsByClassName("cell");
    for(let i=0; i<elements.length; i++){
        elements[i].value = "";
        elements[i].innerHTML = "";
        elements[i].disabled = false;
    }
    document.getElementById("winner").innerHTML = "";
    flag = 0;
    
    user1 = 0;
    user2 = 0;
    tie = 0;
    
    document.getElementById("user1").innerHTML = user1;
    document.getElementById("user2").innerHTML = user2;
    document.getElementById("tie").innerHTML = tie;
}
function reset(){
    
    let elements = document.getElementsByClassName("cell");
    for(let i=0; i<elements.length; i++){
        elements[i].value = "";
        elements[i].innerHTML = "";
        elements[i].disabled = false;
    }
    document.getElementById("winner").innerHTML = "";
    flag = 0;
}

function checkWinner() {
    let elements = document.getElementsByClassName("cell");
    let winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], 
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6] 
    ];
            let conclusion = document.createElement("p");
        let appendi = document.getElementsByClassName("display")[0];
    for (let pattern of winPatterns) {

        let [a, b, c] = pattern;
        if (elements[a].value && elements[a].value === elements[b].value && elements[a].value === elements[c].value) {
            
            document.getElementById("winner").innerHTML = elements[a].value;
            appendi.appendChild(conclusion);
            setTimeout(reset, 1500); 
            if(elements[a].value === "X"){
                user1++;
                document.getElementById("user1").innerHTML = user1;
            } else if(elements[a].value === "O"){
                user2++;
                document.getElementById("user2").innerHTML = user2;
            }
           
            return;
        } 

    }
    let filled = true;
    for(let i=0; i<elements.length; i++){
        if(elements[i].innerHTML===""){
            filled = false;
            break;
        }
    }

    if(filled){
         document.getElementById("winner").innerHTML  = "No one";
        tie++;
        document.getElementById("tie").innerHTML = tie;
        appendi.appendChild(conclusion);
        setTimeout(reset, 3000); 
    }

}


// let boxes = document.querySelectorAll(".cell")
// let turn = true;

// let winPatterns = [
//         [0, 1, 2], [3, 4, 5], [6, 7, 8], 
//        [0, 3, 6], [1, 4, 7], [2, 5, 8],
//          [0, 4, 8], [2, 4, 6] 
// ];

// boxes.forEach(
//     (cell)=>{
//         cell.addEventListener("click",()=>{
//             if(cell.textContent != "")return;
//             cell.textContent = trun ? "X" : "O";
//     })}
// )
