/*The value of every variable is "Number"
        because if you don't type "Number" the browser
         will think it's a string*/
        function add() {
            // add function
            a = Number(document.getElementById('first-num').value);
            b = Number(document.getElementById('second-num').value);
            c = a + b;
            document.getElementById('result'). value = c;
        }

        function min() {
            //minus function
            a = Number(document.getElementById('first-num').value);
            b = Number(document.getElementById('second-num').value);
            c = a - b;
            document.getElementById('result'). value = c;
        }

        function multi() {
            //multiply function
            a = Number(document.getElementById('first-num').value);
            b = Number(document.getElementById('second-num').value);
            c = a * b;
            document.getElementById('result'). value = c;
        }

        function div() {
            //division function
            a = Number(document.getElementById('first-num').value);
            b = Number(document.getElementById('second-num').value);
            c = a / b;
            document.getElementById('result'). value = c;
        }
