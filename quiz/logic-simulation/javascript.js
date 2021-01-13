function and() {
    var a = document.getElementById("inaa").value;
    var b = document.getElementById("inab").value;

    document.getElementById("anda").innerHTML = "Input a: " + a;
    document.getElementById("andb").innerHTML = "Input b: " + b;

    if (a == b) {
        document.getElementById("andout").innerHTML = "AND output: " + a;

    } else {
        document.getElementById("andout").innerHTML = "AND output: 0";
    }
    if (a == "0" && b == "0") {
        light(0);
    }
    else if (a == "0" && b == "1") {
        light(0);
    }
    else if (a == "1" && b == "0") {
        light(0);
    }
    else {
        light(1);
    }

}

function nand() {
    var c = document.getElementById("innaa").value;
    var d = document.getElementById("innab").value;

    document.getElementById("nanda").innerHTML = "Input a: " + c;
    document.getElementById("nandb").innerHTML = "Input b: " + d;

    if (c === "0" && d === "0") {
        document.getElementById("nandout").innerHTML = "NAND output: 1";
    } else if (c === "1" && d === "1") {
        document.getElementById("nandout").innerHTML = "NAND output: 0";
    } else {
        document.getElementById("nandout").innerHTML = "NAND output: 1";
    }
    if (c == "0" && d == "0") {
        light(1);
    }
    else if (c == "0" && d == "1") {
        light(1);
    }
    else if (c == "1" && d == "0") {
        light(1);
    }
    else {
        light(0);
    }

}

function or() {
    var e = document.getElementById("inora").value;
    var f = document.getElementById("inorb").value;

    document.getElementById("ora").innerHTML = "Input a: " + e;
    document.getElementById("orb").innerHTML = "Input a: " + f;

    if (e === "1" || f === "1") {
        document.getElementById("orout").innerHTML = "OR output: 1";
    } else {
        document.getElementById("orout").innerHTML = "OR output: 0";
    }
    if (e == "0" && f == "0") {
        light(0);
    }
    else if (e == "0" && f == "1") {
        light(1);
    }
    else if (e == "1" && f == "0") {
        light(1);
    }
    else {
        light(1)
    }
}

function nor() {
    var g = document.getElementById("innoa").value;
    var h = document.getElementById("innob").value;

    document.getElementById("nora").innerHTML = "Input a: " + g;
    document.getElementById("norb").innerHTML = "Input b: " + h;

    if (g === "0" && h === "0") {
        document.getElementById("norout").innerHTML = "NOR output: 1";
    } else {
        document.getElementById("norout").innerHTML = "NOR output: 0";
    }
    if (g == "0" && h == "0") {
        light(1);
    }
    else if (g == "0" && h == "1") {
        light(0);
    }
    else if (g == "1" && h == "0") {
        light(0);
    }
    else {
        light(0)
    }
}

function exor() {
    var i = document.getElementById("inexoa").value;
    var j = document.getElementById("inexob").value;

    document.getElementById("exora").innerHTML = "Input a: " + i;
    document.getElementById("exorb").innerHTML = "Input b: " + j;

    if (i === j) {
        document.getElementById("exorout").innerHTML = "EXOR output: 0";
    } else {
        document.getElementById("exorout").innerHTML = "EXOR output: 1";
    }
    if (i == "0" && j == "0") {
        light(0);
    }
    else if (i == "0" && j == "1") {
        light(1);
    }
    else if (i == "1" && j == "0") {
        light(1);
    }
    else {
        light(0)
    }
}

function exnor() {
    var k = document.getElementById("inexnoa").value;
    var l = document.getElementById("inexnob").value;

    document.getElementById("exnora").innerHTML = "Input a: " + k;
    document.getElementById("exnorb").innerHTML = "Input b: " + l;

    if (k === l) {
        document.getElementById("exnorout").innerHTML = "EX-NOR output: 1";
    } else {
        document.getElementById("exnorout").innerHTML = "EX-NOR 0utput: 0";
    }
    if (k == "0") {
        light(0);
    }

    else {
        light(1)
    }
}

function inverter() {
    var m = document.getElementById("ininva").value;

    document.getElementById("inva").innerHTML = "Input a: " + m;

    if (m === "0") {
        document.getElementById("invertout").innerHTML = "INVERTER output: 1";
    } else {
        document.getElementById("invertout").innerHTML = "INVERTER output: 0";
    }
    if(m=="0")
    {
        light(1)
    }
    else {
        light(0)
    }
}
function light(value) {
    var pic;
    if (value == 0) {
        pic = "off.jpg";
    }
    if (value == 1) {
        pic = "on.jpg";
    }
    document.getElementById('bulb').src = pic;

}

