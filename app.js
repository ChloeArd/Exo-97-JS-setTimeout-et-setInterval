document.getElementById("timeout").addEventListener("click", function (){
    setTimeout(function () {
        let div1 = document.createElement("div");
        div1.style.backgroundColor = "red";
        div1.style.color = "white";
        div1.innerHTML = "Mon timout vient de créer ce div 2 secondes après le click sur le bouton !"
        document.getElementById("timeout-div").appendChild(div1);
    }, 2000);
});

let intervalID;

let decompte = 0;
document.getElementById("interval-start").addEventListener("click", function (){
    intervalID = setInterval(function () {
        if (decompte <= 60){
            let div2 = document.createElement("div");
            div2.innerHTML = "60 secondes passé !";
            document.getElementById("interval-div").appendChild(div2);
            decompte ++;
        }
    }, 60000);
});

document.getElementById("interval-stop").addEventListener("click", function (){
    clearInterval(intervalID)
})
