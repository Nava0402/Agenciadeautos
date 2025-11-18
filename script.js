function calcular() {
    var marcaVehiculo = document.getElementById("marcaVehiculo").value;

    var total = 0;

    if (marcaVehiculo == "HONDA") {
        total = total + 140000;
    } else if (marcaVehiculo == "NISSAN") {
        total = total + 180000;
    } else if (marcaVehiculo == "TOYOTA") {
        total = total + 155000;
    }

    document.getElementById("total").innerText = "Total: $" + total + " MXN";
}