var state = "o";
var x = {
    a: "", b: "", c: "",
    d: "", e: "", f: "",
    g: "", h: "", i: "",
};
var win = null;
var count = 0;

function clickBtn(ele, p) {
    if (x[p] == "") {
        ele.setAttribute("disabled", "true");
        count++;
        if (state == "x") {
            state = "o";
        } else {
            state = "x";
        }
        x[p] = state;
        ele.innerText = state;
        if (x.a == "x" && x.b == "x" && x.c == "x") {
            win = "x";
            document.getElementById("a").style.background = "yellow";
            document.getElementById("b").style.background = "yellow";
            document.getElementById("c").style.background = "yellow";
        } else if (x.d == "x" && x.e == "x" && x.f == "x") {
            win = "x";
            document.getElementById("d").style.background = "yellow";
            document.getElementById("e").style.background = "yellow";
            document.getElementById("f").style.background = "yellow";
        } else if (x.g == "x" && x.h == "x" && x.i == "x") {
            win = "x";
            document.getElementById("g").style.background = "yellow";
            document.getElementById("h").style.background = "yellow";
            document.getElementById("i").style.background = "yellow";
        } else if (x.a == "x" && x.e == "x" && x.i == "x") {
            win = "x";
            document.getElementById("a").style.background = "yellow";
            document.getElementById("e").style.background = "yellow";
            document.getElementById("i").style.background = "yellow";
        } else if (x.c == "x" && x.e == "x" && x.g == "x") {
            win = "x";
            document.getElementById("c").style.background = "yellow";
            document.getElementById("e").style.background = "yellow";
            document.getElementById("g").style.background = "yellow";
        } else if (x.a == "x" && x.d == "x" && x.g == "x") {
            win = "x";
            document.getElementById("a").style.background = "yellow";
            document.getElementById("d").style.background = "yellow";
            document.getElementById("g").style.background = "yellow";
        } else if (x.b == "x" && x.e == "x" && x.h == "x") {
            win = "x";
            document.getElementById("b").style.background = "yellow";
            document.getElementById("e").style.background = "yellow";
            document.getElementById("h").style.background = "yellow";
        } else if (x.c == "x" && x.f == "x" && x.i == "x") {
            win = "x";
            document.getElementById("c").style.background = "yellow";
            document.getElementById("f").style.background = "yellow";
            document.getElementById("i").style.background = "yellow";
        }

        if (x.a == "o" && x.b == "o" && x.c == "o") {
            win = "o";
            document.getElementById("a").style.background = "yellow";
            document.getElementById("b").style.background = "yellow";
            document.getElementById("c").style.background = "yellow";
        } else if (x.d == "o" && x.e == "o" && x.f == "o") {
            win = "o";
            document.getElementById("d").style.background = "yellow";
            document.getElementById("e").style.background = "yellow";
            document.getElementById("f").style.background = "yellow";
        } else if (x.g == "o" && x.h == "o" && x.i == "o") {
            win = "o";
            document.getElementById("g").style.background = "yellow";
            document.getElementById("h").style.background = "yellow";
            document.getElementById("i").style.background = "yellow";
        } else if (x.a == "o" && x.e == "o" && x.i == "o") {
            win = "o";
            document.getElementById("a").style.background = "yellow";
            document.getElementById("e").style.background = "yellow";
            document.getElementById("i").style.background = "yellow";
        } else if (x.c == "o" && x.e == "o" && x.g == "o") {
            win = "o";
            document.getElementById("c").style.background = "yellow";
            document.getElementById("e").style.background = "yellow";
            document.getElementById("g").style.background = "yellow";
        } else if (x.a == "o" && x.d == "o" && x.g == "o") {
            win = "o";
            document.getElementById("a").style.background = "yellow";
            document.getElementById("d").style.background = "yellow";
            document.getElementById("g").style.background = "yellow";
        } else if (x.b == "o" && x.e == "o" && x.h == "o") {
            win = "o";
            document.getElementById("b").style.background = "yellow";
            document.getElementById("e").style.background = "yellow";
            document.getElementById("h").style.background = "yellow";
        } else if (x.c == "o" && x.f == "o" && x.i == "o") {
            win = "o";
            document.getElementById("c").style.background = "yellow";
            document.getElementById("f").style.background = "yellow";
            document.getElementById("i").style.background = "yellow";
        }

        if (win != null || count == 9) {
            alert("winner is: " + win);
            document.getElementById("reset").style.display = "block";
        }

    }


    console.log(x);
}

function resetEle() {
    document.getElementById("reset").style.display = "none";
    count = 0;
    state = "o";
    x = {
        a: "", b: "", c: "",
        d: "", e: "", f: "",
        g: "", h: "", i: "",
    };
    win = null;
    var eleBtn = document.getElementsByClassName("tttbtn");
    for (var i = 0; i < eleBtn.length; i++) {
        eleBtn[i].innerText = "";
        eleBtn[i].style.background = "";
        eleBtn[i].removeAttribute("disabled","false");
    }
}

function openTtt() {
    $("#tttbtn").fadeOut(200,function () {
        $("#ttttable").fadeIn("slow");
    });
}

function closeTtt() {
    $("#ttttable").fadeOut("slow",function () {
        $("#tttbtn").fadeIn("slow");
    });
}