calculateBills = () => {
    let requestedValue = document.getElementById("display").value;
    if (requestedValue % 10 > 0) {
        document.getElementById("withdrawal").style.color = "red";
        document.getElementById("withdrawal").style.fontWeight = "bolder";
        document.getElementById("withdrawal").innerHTML = "Não há notas disponíveis para esse pedido de saque.";
    } else if (requestedValue === '') {
        document.getElementById("withdrawal").style.color = "red";
        document.getElementById("withdrawal").style.fontWeight = "bolder";
        document.getElementById("withdrawal").innerHTML = "Nenhum valor de saque foi especificado.";
    }
}