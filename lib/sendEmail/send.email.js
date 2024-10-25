function sendEmail() {
    var email = document.getElementById("userEmail").value; // Obtener el valor del input
    var mailtoLink = "mailto:pato10flores@gmail.com?subject=Consulta&body=Hola, me gustaría contactar contigo desde: " + email;
    
    // Abrir el enlace mailto en una nueva pestaña
    window.location.href = mailtoLink;
}
