function print() {
    for(i =0; i<arguments.length; i++){

    }
    
}
window.onload = function(){


    var count = 3;

    var randomBtn = document.getElementById("random-number-generate");
    randomBtn.addEventListener("click", function(){
        var randomNumber = Math.floor(Math.random() * (9999 - 1000 +1) ) + 1000;
        document.getElementById("input-random-number").value = randomNumber;
        document.getElementById("submit-random-number").value = "";
        hideNotify();
    })

        var btnClass = document.getElementsByClassName("button");
        for(var i=0; i<btnClass.length; i++){
        btnClass[i].addEventListener("click", function(){
        var text = this.innerText;

        if(text>="0" && text<="9"){
            document.getElementById("submit-random-number").value +=text;
        }
        else if (text == "<"){
           var newNumber = document.getElementById("submit-random-number").value.slice(0, -1);
           document.getElementById("submit-random-number").value = newNumber;
        }
        else if(text == "C"){
            document.getElementById("submit-random-number").value = "";

        }
        else{

        }
        print(document.getElementById("submit-random-number").value);
        hideNotify();

        })
    }


        var submitBtn = document.getElementById("submit-id");
        submitBtn.addEventListener("click", function(){
            hideNotify()
            count--;
            var originalValue = document.getElementById("input-random-number").value;
            var submitValue = document.getElementById("submit-random-number").value; 

            if (originalValue =="" || submitValue ==""){
                notify("empty");
            }
            else if  (submitValue == originalValue){
                notify("correct");
                count = 3;
            }

            else{
                notify("incorrect");
            }

            if (count >=0){
                document.getElementById("left-id").innerText = count+ " try left";
            }

        })
        // display notify
        function notify(id){
            var id = document.getElementById(id);
            id.style.display = "block";
        }
            // hide notify
        function hideNotify(){
            var notify = document.querySelectorAll(".notify-section .notify");
            notify.forEach((item)=> {item.style.display = "none";})
        }

}