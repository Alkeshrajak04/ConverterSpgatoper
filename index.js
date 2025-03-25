function convertToPercentage() {
    let spga = document.getElementById("spga").value;
    document.getElementById("percentage").value = spga ? (parseFloat(spga) * 9.5).toFixed(2) : "";
}

function convertToSPGA() {
    let percentage = document.getElementById("percentage").value;
    document.getElementById("spga").value = percentage ? (parseFloat(percentage) / 9.5).toFixed(2) : "";
}
