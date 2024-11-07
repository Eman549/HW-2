var costPerDay = 0;
var calculation = 0;
var discountAmount = 0;
var insuranceCost = 0;
var additionaldrivercost = 0;
var totalCost = 0;
var numDays = 0;

$(document).ready(function () {
    $("#model").change(model);
    $("input[name='discount']").on("change", discount);
    $("input[name='insurance']").on("change", insurance);
});

function calculate() {
costPerDay = calculation - (discountAmount*calculation) + insuranceCost + additionaldrivercost;
$("#costPerDay").text(costPerDay);
totalCost = costPerDay * numDays;
$("#totalCost").text(totalCost);
}


function model() {
    "use strict";
    if ($("#model").val() == "1") {
        calculation = 50;
        $("#answerDisplay").text(calculation);
    }
    else if ($("#model").val() == "2") {
        calculation = 60;
        $("#answerDisplay").text(calculation);
    }
    else if ($("#model").val() == "3") {
        calculation = 25;
        $("#answerDisplay").text(calculation);
    }
    else if ($("#model").val() == "4") {
        calculation = 35;
        $("#answerDisplay").text(calculation);
    }
    else if ($("#model").val() == "5") {
        calculation = 60;
        $("#answerDisplay").text(calculation);
    }
    calculate();
}

function discount() {
    "use strict";
    const discount = $("input[name='discount']:checked").val();
    if (discount === "senior") {
        discountAmount = 0.25;
        $("#answerShow").text(discountAmount * calculation);
    }

    else if (discount === "government") {
        discountAmount = 0.15;
        $("#answerShow").text(discountAmount * calculation);
    }
    else if (discount === "corporate") {
        discountAmount = 0.10;
        $("#answerShow").text(discountAmount * calculation);
    }
    else if (discount === "aaa") {
        discountAmount = 0.20;
        $("#answerShow").text(discountAmount * calculation)
    }
    calculate();
}

function insurance() {
    "use strict";
    const isChecked= $("#insurance").is(":checked");
    if (isChecked) {
        insuranceCost = 10;
        $("#insuranceAnswer").text(insuranceCost);
    }
    else {
        insuranceCost = 0;
        $("#insuranceAnswer").text(insuranceCost);
    }
    calculate();
}

function drivers() {
    "use strict";
    if ($("#drivers").val() > 1) {
        additionaldrivercost = 15;
        $("#driverCost").text(additionaldrivercost);
    }
    else if ($("#drivers").val() == 1) {
        additionaldrivercost = 0;
        $("#driverCost").text(additionaldrivercost);
    }
    calculate();
}

function days() {
    "use strict";
    if ($("#numberofdays")) {

    }
    calculate();
}
