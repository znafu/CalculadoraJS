document.addEventListener("DOMContentLoaded", function(event) {

    var output = document.getElementById("result");
    var controlpad = document.getElementById("controlpad");
});

calculator = {
    op1: null,
    op2: null,
    operator: null,
    check_input: function() {
        var input = document.getElementById('input');
        var input_text = input.textContent;
        var errors = document.querySelector("#error");
        var input_number = Number(input_text);
        if (input_number !== NaN) {
            if (this.op1 === null)
                this.op1 = input_number;
        } else {
            this.op1 = input_number;
        }
    }
};

var button_operators = calculator.querySelector("#operators button");
for (var button in button_operators) {
    button.addEventListener("click", calculator.check_input);
}
