calculateBills = () => {
    let currentValue = document.getElementById("display").value;

    if (currentValue % 10 > 0) {
        // error message for impossible withdrawals
        document.getElementById("withdrawal").style.color = "red";
        document.getElementById("withdrawal").style.fontWeight = "bolder";
        document.getElementById("withdrawal").innerHTML = "Não há notas disponíveis para esse pedido de saque.";
    } else if (currentValue === '') {
        // error message for no value input
        document.getElementById("withdrawal").style.color = "red";
        document.getElementById("withdrawal").style.fontWeight = "bolder";
        document.getElementById("withdrawal").innerHTML = "Nenhum valor de saque foi especificado.";
    } else {
        // sets up an empty bill array
        let bills = []

        // rounds bill quantity down to an integer
        roundDownQuantity = (billValue) => {
            return Math.floor(currentValue / billValue)
        }
        
        // pushes the proper quantity of properly labeled bills into the bill array
        pushBills = (billQuantity, billName) => {
            for (let i = 0; i < billQuantity; i++) {
                bills.push(billName);
            }
        }

        // auxiliary function to update value after bills have been delivered
        subtractCurrentValue = (billQuantity, billValue) => {
            currentValue = currentValue - billQuantity * billValue;
        }

        // bill count using previously described functions
        let hundreds = roundDownQuantity(100);
        pushBills(hundreds, " R$ 100");
        subtractCurrentValue(hundreds, 100);
                
        let fifties = roundDownQuantity(50);
        pushBills(fifties, " R$ 50");
        subtractCurrentValue(fifties, 50);

        let twenties = roundDownQuantity(20);
        pushBills(twenties, " R$ 20");
        subtractCurrentValue(twenties, 20);

        let tens = roundDownQuantity(10);
        pushBills(tens, " R$ 10");

        // display bills
        document.getElementById("withdrawal").style.color = "initial";
        document.getElementById("withdrawal").style.fontWeight = "initial";
        document.getElementById("withdrawal").innerHTML = bills.toString().trim();
    }
}