                function errgeg1 () {
                    document.getElementById("geg1").classList.add("err");
                }
                function errgeg2 () {
                    document.getElementById("geg2").classList.add("err");
                }
                function errger2 () {
                    document.getElementById("ger2").classList.add("err");
                }
                function errger1 () {
                    document.getElementById("ger1").classList.add("err");
                }
                
                function calcone() {
                    if (document.getElementById("geg1").value == "") {errgeg1(); return;}
                    if (document.getElementById("geg2").value == "") {errgeg2(); return;}
                    if (document.getElementById("ger2").value == "") {errger2(); return;}
                    if (document.getElementById("direkt").checked == true) {
                    var geg1 = document.getElementById("geg1").value;
                    var geg2 = document.getElementById("geg2").value;
                    var ger2 = document.getElementById("ger2").value;

                    var difference = geg2 / geg1
                    var size1 = ger2 / difference
                    document.getElementById("ger1").value = size1;
                    document.getElementById("geg1").classList.remove("err");
                    document.getElementById("geg2").classList.remove("err");
                    document.getElementById("ger2").classList.remove("err");
                   
                    }
                    else {
                        var geg1 = document.getElementById("geg1").value;
                    var geg2 = document.getElementById("geg2").value;
                    var ger2 = document.getElementById("ger2").value;

                    var difference = geg2 / ger2
                    var size1 = geg1 * difference
                    document.getElementById("ger1").value = size1;
                    
                    document.getElementById("geg1").classList.remove("err");
                    document.getElementById("geg2").classList.remove("err");
                    document.getElementById("ger1").classList.remove("err");
                    
                    }
                }
                function calctwo() {
                    if (document.getElementById("geg1").value == "") {errgeg1(); return;}
                    if (document.getElementById("geg2").value == "") {errgeg2(); return;}
                    if (document.getElementById("ger1").value == "") {errger1(); return;}
                    if (document.getElementById("direkt").checked == true) {
                    var geg1 = document.getElementById("geg1").value;
                    var geg2 = document.getElementById("geg2").value;
                    var ger1 = document.getElementById("ger1").value;

                    var difference = geg1 / geg2
                    var size2 = ger1 / difference
                    document.getElementById("ger2").value = size2;
                    }
                    else {
                        var geg1 = document.getElementById("geg1").value;
                        var geg2 = document.getElementById("geg2").value;
                        var ger1 = document.getElementById("ger1").value;

                        var difference = geg1 / ger1
                        var size2 = geg2 * difference
                        document.getElementById("ger2").value = size2;
                    }
                }

