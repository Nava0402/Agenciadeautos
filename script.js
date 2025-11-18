function calcular() {
    var marcaVehiculo = document.getElementById("marcaVehiculo").value;

    var total = 0;
    
    if (document.getElementById("contado").checked) {
        total += 0;
    } else if (document.getElementById("credito").checked) {
        total += 0;
    }
    else {
        alert("Seleccione un método de pago");
        return;
    }

    if (marcaVehiculo == "NINGUNA") {
        alert("Seleccione una marca de vehículo");
        return;
    } else if(marcaVehiculo == "HONDA") {
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

    if (document.getElementById("aireAcondicionado").checked) {
        total += 3500;
    }

    if (document.getElementById("gps").checked) {
        total += 3500;
    }

    if (document.getElementById("seguro").checked) {
        total += 3500;
    }

    if (document.getElementById("quemacocos").checked) {
        total += 3500;
    }

    if (document.getElementById("camaraTrasera").checked) {
        total += 3500;
    }

    if (document.getElementById("camaraFrontal").checked) {
        total += 3500;
    }

    document.getElementById("total").innerText = "Total: $" + total + " MXN";
}