//GETTING THE CHOICE OF USER EITHER X/O:

var input=prompt("ENTER YOUR CHOICE X or O?");

//CREATING A DIV TAG FOR STORING BUTTONS AND OTHER VARIABLES....

var mydiv1=document.createElement("div");
document.body.appendChild(mydiv1);

//CREATING 9 BUTTONS INSIDE A TABLE LIKE A 3*3 MATRIX....

var mytable1=document.createElement("table");
mydiv1.appendChild(mytable1);
document.body.appendChild(mydiv1);

var mytabrow1=document.createElement("tr");
mytabrow1.setAttribute("class", "design");
mytable1.appendChild(mytabrow1);
mydiv1.appendChild(mytable1);
document.body.appendChild(mydiv1);

    var btn1=document.createElement("button");
    btn1.setAttribute("class", "large");
    btn1.setAttribute("id", "1");
    btn1.setAttribute("onclick", "btn_pressed(1)");
    mytabrow1.appendChild(btn1);
    mytable1.appendChild(mytabrow1);
    mydiv1.appendChild(mytable1);
    document.body.appendChild(mydiv1);

    var btn2=document.createElement("button");
    btn2.setAttribute("class", "large");
    btn2.setAttribute("id", "2");
    btn2.setAttribute("onclick", "btn_pressed(2)");
    mytabrow1.appendChild(btn2);
    mytable1.appendChild(mytabrow1);
    mydiv1.appendChild(mytable1);
    document.body.appendChild(mydiv1);

    var btn3=document.createElement("button");
    btn3.setAttribute("class", "large");
    btn3.setAttribute("id", "3");
    btn3.setAttribute("onclick", "btn_pressed(3)");
    mytabrow1.appendChild(btn3);
    mytable1.appendChild(mytabrow1);
    mydiv1.appendChild(mytable1);
    document.body.appendChild(mydiv1);

 var mytabrow2=document.createElement("tr");
 mytabrow2.setAttribute("class", "design");
 mytable1.appendChild(mytabrow2);
 mydiv1.appendChild(mytable1);
 document.body.appendChild(mydiv1);

    var btn4=document.createElement("button");
    btn4.setAttribute("class", "large");
    btn4.setAttribute("id", "4");
    btn4.setAttribute("onclick", "btn_pressed(4)");
    mytabrow2.appendChild(btn4);
    mytable1.appendChild(mytabrow2);
    mydiv1.appendChild(mytable1);
    document.body.appendChild(mydiv1);

    var btn5=document.createElement("button");
    btn5.setAttribute("class", "large");
    btn5.setAttribute("id", "5");
    btn5.setAttribute("onclick", "btn_pressed(5)");
    mytabrow2.appendChild(btn5);
    mytable1.appendChild(mytabrow2);
    mydiv1.appendChild(mytable1);
    document.body.appendChild(mydiv1);

    var btn6=document.createElement("button");
    btn6.setAttribute("class", "large");
    btn6.setAttribute("id", "6");
    btn6.setAttribute("onclick", "btn_pressed(6)");
    mytabrow2.appendChild(btn6);
    mytable1.appendChild(mytabrow2);
    mydiv1.appendChild(mytable1);
    document.body.appendChild(mydiv1);
    
 var mytabrow3=document.createElement("tr");
 mytabrow3.setAttribute("class", "design");
 mytable1.appendChild(mytabrow3);
 mydiv1.appendChild(mytable1);
 document.body.appendChild(mydiv1);

    var btn7=document.createElement("button");
    btn7.setAttribute("class", "large");
    btn7.setAttribute("id", "7");
    btn7.setAttribute("onclick", "btn_pressed(7)");
    mytabrow3.appendChild(btn7);
    mytable1.appendChild(mytabrow3);
    mydiv1.appendChild(mytable1);
    document.body.appendChild(mydiv1);

    var btn8=document.createElement("button");
    btn8.setAttribute("class", "large");
    btn8.setAttribute("id", "8");
    btn8.setAttribute("onclick", "btn_pressed(8)");
    mytabrow3.appendChild(btn8);
    mytable1.appendChild(mytabrow3);
    mydiv1.appendChild(mytable1);
    document.body.appendChild(mydiv1);

    var btn9=document.createElement("button");
    btn9.setAttribute("class", "large");
    btn9.setAttribute("id", "9");
    btn9.setAttribute("onclick", "btn_pressed(9)");
    mytabrow3.appendChild(btn9);
    mytable1.appendChild(mytabrow3);
    mydiv1.appendChild(mytable1);
    document.body.appendChild(mydiv1);

// A RESET/REFRESH BUTTON IS CREATED TO PLAY NEW GAME...

var my_button=document.createElement("button");
my_button.setAttribute("id", "reset");
my_button.setAttribute("onclick", "reset()");
my_button.innerHTML="RESET";
mydiv1.appendChild(my_button);
document.body.appendChild(mydiv1);



//A FUNCTION IS CREATED BTN_PRESSED TO CONSIDER TO WHICH BUTTON THE USER INPUT HAS TO BE INSERTED...

function btn_pressed(num){
    if(input == "X"){
        input="O";
        setvalues(num, input);
    }
    else{
        input="X";
        setvalues(num,input);
    }
}

//A FUNCTION IS CREATED SETVALUES SO THAT THE INPUT CAN BE ASSIGNED TO THAT PARTICULAR INPUT AND THEN THE BUTTON IS DISABLED...

function setvalues(values, char){
    switch(values){
        case 1:
            var value=document.getElementById("1");
            value.setAttribute("value", char);
            value.setAttribute("disabled", true);
            value.innerHTML=char;
           /* mytabrow1.appendChild(value);
            mytable1.appendChild(mytabrow1);
            mydiv1.appendChild(mytable1);
            document.body.appendChild(mydiv1);*/
            break;
        case 2:
            var value=document.getElementById("2");
            value.setAttribute("value", char);
            value.setAttribute("disabled", true);
            value.innerHTML=char;
            /*mytabrow1.appendChild(value);
            mytable1.appendChild(mytabrow1);
            mydiv1.appendChild(mytable1);
            document.body.appendChild(mydiv1);*/
            break;
        case 3:
            var value=document.getElementById("3");
            value.setAttribute("value", char);
            value.setAttribute("disabled", true);
            value.innerHTML=char;
            /*mytabrow1.appendChild(value);
            mytable1.appendChild(mytabrow1);
            mydiv1.appendChild(mytable1);
            document.body.appendChild(mydiv1);*/
            break;
        case 4:
            var value=document.getElementById("4");
            value.setAttribute("value", char);
            value.setAttribute("disabled", true);
            value.innerHTML=char;
            /*mytabrow1.appendChild(value);
            mytable1.appendChild(mytabrow2);
            mydiv1.appendChild(mytable1);
            document.body.appendChild(mydiv1);*/
            break;
        case 5:
            var value=document.getElementById("5");
            value.setAttribute("value", char);
            value.setAttribute("disabled", true);
            value.innerHTML=char;
            /*mytabrow1.appendChild(value);
            mytable1.appendChild(mytabrow2);
            mydiv1.appendChild(mytable1);
            document.body.appendChild(mydiv1);*/
            break;
        case 6:
            var value=document.getElementById("6");
            value.setAttribute("value", char);
            value.setAttribute("disabled", true);
            value.innerHTML=char;
            /*mytabrow1.appendChild(value);
            mytable1.appendChild(mytabrow2);
            mydiv1.appendChild(mytable1);
            document.body.appendChild(mydiv1);*/
            break;
        case 7:
            var value=document.getElementById("7");
            value.setAttribute("value", char);
            value.setAttribute("disabled", true);
            value.innerHTML=char;
            /*mytabrow1.appendChild(value);
            mytable1.appendChild(mytabrow3);
            mydiv1.appendChild(mytable1);
            document.body.appendChild(mydiv1);*/
            break;
        case 8:
            var value=document.getElementById("8");
            value.setAttribute("value", char);
            value.setAttribute("disabled", true);
            value.innerHTML=char;
            /*mytabrow1.appendChild(value);
            mytable1.appendChild(mytabrow3);
            mydiv1.appendChild(mytable1);
            document.body.appendChild(mydiv1);*/
            break;
        case 9:
            var value=document.getElementById("9");
            value.setAttribute("value", char);
            value.setAttribute("disabled", true);
            value.innerHTML=char;
            /*mytabrow1.appendChild(value);
            mytable1.appendChild(mytabrow3);
            mydiv1.appendChild(mytable1);
            document.body.appendChild(mydiv1);*/
    }
    compare();
}

//A FUNCTION IS CREATED TO CHECK HORIZONTALLY, VERTICALLY AND DIAGONALLY WHETHER THERE IS COMMON CHARACER...

function compare(){
    var btn1=document.getElementById("1").value;
    var btn2=document.getElementById("2").value;
    var btn3=document.getElementById("3").value;
    var btn4=document.getElementById("4").value;
    var btn5=document.getElementById("5").value;
    var btn6=document.getElementById("6").value;
    var btn7=document.getElementById("7").value;
    var btn8=document.getElementById("8").value;
    var btn9=document.getElementById("9").value;

    if(((btn1 == "X") || (btn1== "O")) && ((btn1==btn4) && (btn4==btn7))){
        winner_input(btn1);
    }
    else if(((btn1 == "X") || (btn1== "O")) && ((btn1==btn2) && (btn2==btn3))){
        winner_input(btn1);
    }
    else if(((btn9 == "X") || (btn9== "O")) && ((btn9==btn8) && (btn8==btn7))){
        winner_input(btn9);
    }
    else if(((btn9 == "X") || (btn9== "O")) && ((btn9==btn6) && (btn6==btn3))){
        winner_input(btn9);
    }
    else if(((btn2 == "X") || (btn2== "O")) && ((btn2==btn5) && (btn5==btn8))){
        winner_input(btn2);
    }
    else if(((btn4 == "X") || (btn4== "O")) && ((btn4==btn5) && (btn5==btn6))){
        winner_input(btn4);
    }
    else if(((btn7 == "X") || (btn7== "O")) && ((btn7==btn5) && (btn5==btn3))){
        winner_input(btn7);
    }
    else if(((btn1 == "X") || (btn1== "O")) && ((btn1==btn5) && (btn5==btn9))){
        winner_input(btn1);
    }
}

//A FUNCTION IS CREATED TO SHOW WHICH ELEMENT IS THE WINNER...

function winner_input(element){
    clear();
    alert(element+"- wins");
}

//A FUNCTION IS CREATED WHICH RESETS ALL THE INPUT VALUE OF THE BUTTON...

function clear(){
    var btn1=document.getElementById("1");
    btn1.setAttribute("value","");
    btn1.setAttribute("disabled", true);


    var btn2=document.getElementById("2");
    btn2.setAttribute("value","");
    btn2.setAttribute("disabled", true);


    var btn3=document.getElementById("3");
    btn3.setAttribute("value","");
    btn3.setAttribute("disabled", true);


    var btn4=document.getElementById("4");
    btn4.setAttribute("value","");
    btn4.setAttribute("disabled", true);


    var btn5=document.getElementById("5");
    btn5.setAttribute("value","");
    btn5.setAttribute("disabled", true);


    var btn6=document.getElementById("6");
    btn6.setAttribute("value","");
    btn6.setAttribute("disabled", true);


    var btn7=document.getElementById("7");
    btn7.setAttribute("value","");
    btn7.setAttribute("disabled", true);


    var btn8=document.getElementById("8");
    btn8.setAttribute("value","");
    btn8.setAttribute("disabled", true);


    var btn9=document.getElementById("9");
    btn9.setAttribute("value","");
    btn9.setAttribute("disabled", true);

}

//A FUNCTION IS CREATED FOR RESETTING ALL THE VALUES AND SO THAT WE CAN PLAY AGAIN...

function reset(){
    var btn1=document.getElementById("1");
    btn1.setAttribute("value","");
    btn1.innerHTML="";
    btn1.setAttribute("disabled", false);


    var btn2=document.getElementById("2");
    btn2.setAttribute("value","");
    btn2.innerHTML="";
    btn2.setAttribute("disabled", false);


    var btn3=document.getElementById("3");
    btn3.setAttribute("value","");
    btn3.innerHTML="";
    btn3.setAttribute("disabled", false);


    var btn4=document.getElementById("4");
    btn4.setAttribute("value","");
    btn4.innerHTML="";
    btn4.setAttribute("disabled", false);


    var btn5=document.getElementById("5");
    btn5.setAttribute("value","");
    btn5.innerHTML="";
    btn5.setAttribute("disabled", false);


    var btn6=document.getElementById("6");
    btn6.setAttribute("value","");
    btn6.innerHTML="";
    btn6.setAttribute("disabled", false);


    var btn7=document.getElementById("7");
    btn7.setAttribute("value","");
    btn7.innerHTML="";
    btn7.setAttribute("disabled", false);


    var btn8=document.getElementById("8");
    btn8.setAttribute("value","");
    btn8.innerHTML="";
    btn8.setAttribute("disabled", false);


    var btn9=document.getElementById("9");
    btn9.setAttribute("value","");
    btn9.innerHTML="";
    btn9.setAttribute("disabled", false);

}