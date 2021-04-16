console.log("marie-pierre");
let counter = 0;
let anti_counter = 10;
const timeout = 10;
let fillable = false;
let PLUS_DE_COMPTEURS = 0;
let initial = Date.now();

let timer = () => {
    setTimeout(() => {
        if (anti_counter > 0) {
            anti_counter--;
            document.getElementById("add").innerText = "add" + " (" + anti_counter + ")";
            timer()
        } else {
            document.getElementById("add").innerText = "add";
            anti_counter = timeout;
            fillable = true;
        }
    }, 1000);
}

let anotherTimer = () => {
    setTimeout(() => {
        document.getElementById("formbutton").style.display = "block";
    },5000);
}

function handle_add() {
    let out = true;
        if (fillable){
        var inputs = {
            "fname": document.getElementById("fname").value,
            "lname": document.getElementById("lname").value,
            "mail": document.getElementById("mail").value,
            "role": document.getElementById("role").value,
        }
        for (let i in inputs) {
            if (!inputs[i]) {
                out = false;
            }
        }
        if (out) {
            let new_row = document.createElement("tr");
            for (let i in inputs) {
                let td = document.createElement("td");
                td.textContent = inputs[i];
                document.getElementById(i).value = "";
                new_row.appendChild(td);
            }
            let table = document.getElementById("listOfNameWhatALongIdForUHugo");
            table.appendChild(new_row);
            counter++;
            // alert("PANDA");
            fillable = false;
            console.log(anti_counter);
            timer();
        }
    }
    else
    {
        console.log(anti_counter);
        if(out)
        {
            //alert("panda");
            if(PLUS_DE_COMPTEURS === 0)
            {
                initial = Date.now();
            }
            PLUS_DE_COMPTEURS ++;
            if(Date.now() - initial > 2000)
            {
                if(PLUS_DE_COMPTEURS > 4){
                    document.getElementById("formbutton").style.display = "none";
                    anotherTimer();
                }
                PLUS_DE_COMPTEURS = 0;
            }
        }
    }
}

let handle_remove = () => {
    let table = document.getElementById("listOfNameWhatALongIdForUHugo");
    // console.log(counter);
    for (let i = 0; i < counter; i++)
    {
        table.deleteRow(1);
    }
}

timer();
document.getElementById("add").onclick = handle_add;
document.getElementById("reset").onclick = handle_remove;


