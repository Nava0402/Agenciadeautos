function calcular() {
    var marcaVehiculo = document.getElementById("marcaVehiculo").value;

    var total = 0;

    if (marcaVehiculo == "HONDA") {
        total += 140000;
    } else if (marcaVehiculo == "NISSAN") {
        total += 180000;
    } else if (marcaVehiculo == "TOYOTA") {
        total += 155000;
    } else if (marcaVehiculo == "MAZDA") {
        total += 110000;
    } else if (marcaVehiculo == "HYUNDAI") {
        total += 130000;
    } else if (marcaVehiculo == "KIA") {
        total += 190000;
    } else if (marcaVehiculo == "MITSUBISHI") {
        total += 160000;
    } else if (marcaVehiculo == "SUZUKI") {
        total += 175000;
    }

    document.getElementById("total").innerText = "Total: $" + total + " MXN";
}