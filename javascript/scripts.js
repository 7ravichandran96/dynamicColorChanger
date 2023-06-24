// function declared to executed the color name to change background 
function some() {
    //  declaration of variables and dom access

    var inputValue = document.getElementById("values").value; // input value declar
    var outcolor = document.getElementById("outColor");//out come of color process
    var clrFocus = document.getElementById("search");//clear and focus the values in input
    var changed;//outputs the final result to store here
    // condition chec if there is any empty inputs
    if (inputValue === "") {
        changed = alert("Enter valid color");
    }
    // found any valid color will execute if no color matched will show previous color or same color
    else {
        outcolor.value = inputValue + " COLOR";
        document.body.style.backgroundColor = inputValue;
        inputValue = inputValue.toUpperCase();
        changed = document.getElementById("outColor").innerHTML = outcolor.value
        // condition to check if white color / yellow / lightblue to change its text color to black
        if ( inputValue === "WHITE" || inputValue === "YELLOW" ||  inputValue === "LIGHTBLUE" ||  inputValue === "TRANSPARENT" || inputValue === "PINK") {
            
            document.body.style.color = "black";
            
        }
        //here default text color will be white
        else {
            

            document.body.style.color = "white";

        }


        //clear the input value after every change
        clrFocus.addEventListener("click", function (e) {
            e.preventDefault(clrFocus);
            var inputValue = document.getElementById("values");
            inputValue.value = "";
            inputValue.focus();
        });

       
    }
}
