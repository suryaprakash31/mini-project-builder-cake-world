/*Fill your code */
/*Fill your code */
var layer1 = document.getElementById("layer1")
var layer2 = document.getElementById("layer2")
var layer3 = document.getElementById("layer3")
var layer4 = document.getElementById("layer4")
var layer5 = document.getElementById("layer5")

var candle = document.getElementById("candle")
var chocCost = document.getElementById('chocolate')
var strawCost = document.getElementById('strawberry')
var butterCost = document.getElementById('butterscotch')
var vanCost = document.getElementById('vannila')
var redCost = document.getElementById('redvelvet')


var layer = 0;

var bill = 0
var chocBill = 0
var strawBill = 0
var butterBill = 0
var vanBill = 0
var redBill = 0

function addChocolate() {
    // document.getElementById('chocBtn').disabled=true
    
    chocBill += 300
    bill += 300
    chocCost.innerHTML = "Chocolate ................. " + chocBill
    console.log(chocBill)

    layer++;

    switch (layer) {
        case 1:
            layer1.style.visibility = 'visible';
            layer1.style.background = 'chocolate';
            break;
        case 2:
            layer2.style.visibility = 'visible';
            layer2.style.background = 'chocolate';
            break;
        case 3:
            layer3.style.visibility = 'visible';
            layer3.style.background = 'chocolate';

            break;
        case 4:
            layer4.style.visibility = 'visible';
            layer4.style.background = 'chocolate';
            break;
        case 5:
            layer5.style.visibility = 'visible';
            layer5.style.background = 'chocolate';
            candle.style.visibility = 'visible';
            break;

        default:
            alert("Sorry....Maximum only 5 layers can be added!")
    }
    console.log(bill);

}

function addStrawberry() {
    bill += 100
    strawBill += 100
    layer++;
    strawCost.innerHTML = "Strawberry ................. " + strawBill

    switch (layer) {
        case 1:
            layer1.style.visibility = 'visible';
            layer1.style.background = '#fc5a8d';
            break;
        case 2:
            layer2.style.visibility = 'visible';
            layer2.style.background = '#fc5a8d';

            break;
        case 3:
            layer3.style.visibility = 'visible';
            layer3.style.background = '#fc5a8d';

            break;
        case 4:
            layer4.style.visibility = 'visible';
            layer4.style.background = '#fc5a8d';

            break;
        case 5:
            layer5.style.visibility = 'visible';
            layer5.style.background = '#fc5a8d';
            candle.style.visibility = 'visible';
            break;
        default:
            alert("Sorry....Maximum only 5 layers can be added!")
    }

    console.log(bill);
}

function addButterscotch() {
    bill += 200
    butterBill += 200
    layer++;
    butterCost.innerHTML = "ButterScotch ................. " + butterBill
    switch (layer) {
        case 1:
            layer1.style.visibility = 'visible';
            layer1.style.background = '#D48827';

            break;
        case 2:
            layer2.style.visibility = 'visible';
            layer2.style.background = '#D48827';

            break;
        case 3:
            layer3.style.visibility = 'visible';
            layer3.style.background = '#D48827';

            break;
        case 4:
            layer4.style.visibility = 'visible';
            layer4.style.background = '#D48827';

            break;
        case 5:
            layer5.style.visibility = 'visible';
            layer5.style.background = '#D48827';
            candle.style.visibility = 'visible';
            break;
        default:
            alert("Sorry....Maximum only 5 layers can be added!")
    }

    console.log(bill);
}

function addVannila() {
    bill += 250;
    vanBill += 250;
    layer++;
    vanCost.innerHTML = "Vannila ................. " + vanBill
    switch (layer) {
        case 1:
            layer1.style.visibility = 'visible';
            layer1.style.background = '#F3E5AB';        
            break;
        case 2:
            layer2.style.visibility = 'visible';
            layer2.style.background = '#F3E5AB';
            break;
        case 3:
            layer3.style.visibility = 'visible';
            layer3.style.background =  '#F3E5AB';            
            break;
        case 4:
            layer4.style.visibility = 'visible';
            layer4.style.background =  '#F3E5AB';            
            break;
        case 5:
            layer5.style.visibility = 'visible';
            layer5.style.background =  '#F3E5AB';           
            candle.style.visibility = 'visible';
            break;
        default:
            alert("Sorry....Maximum only 5 layers can be added!")
    }
    console.log(bill);

}

function addRedvelvet() {
    bill += 350;
    redBill += 350
    layer++;
    redCost.innerHTML = "RedVelvet ................. " + redBill
    switch (layer) {
        case 1:
            layer1.style.visibility = 'visible';
            layer1.style.background = 'red';
            break;
        case 2:
            layer2.style.visibility = 'visible';
            layer2.style.background = 'red';
            break;
        case 3:
            layer3.style.visibility = 'visible';
            layer3.style.background = 'red';
            break;
        case 4:
            layer4.style.visibility = 'visible';
            layer4.style.background = 'red';
            break;
        case 5:
            layer5.style.visibility = 'visible';
            layer5.style.background = 'red';
            candle.style.visibility = 'visible';
            break;
        default:
            alert("Sorry....Maximum only 5 layers can be added!")
    }
    console.log(bill);
}

function buy() {
    document.getElementById('chocobtn').disabled = true;
    document.getElementById('strawbtn').disabled = true;
    document.getElementById('butterbtn').disabled = true;
    document.getElementById('vanbtn').disabled = true;
    document.getElementById('redbtn').disabled = true;

    candle.style.visibility = 'visible'
    if (layer == 1) {
        candle.style.top = '58.75%'
    }
    else if (layer == 2) {
        candle.style.top = '49.75%'
    }
    else if (layer == 3) {
        candle.style.top = '40.75%'
    }
    else if (layer == 4) {
        candle.style.top = '31.75%'
    }

    var total = document.getElementById('total')
    total.innerHTML = "TOTAL ...................... " + bill
}