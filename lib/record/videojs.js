$(document).ready(function () {
    var $videoSrc;
    $('.btn-play').click(function () {
        // Obtener el data-src con la URL correcta del iframe de YouTube
        $videoSrc = $(this).data("src");
        
        // Al abrir el modal, asignar el src al iframe
        $("#videoModal").on('shown.bs.modal', function () {
            $("#video").attr('src', $videoSrc + "&autoplay=1");
        });
    });

    // Al cerrar el modal, eliminar el src del iframe para detener la reproducción
    $("#videoModal").on('hide.bs.modal', function () {
        $("#video").attr('src', '');
    });
});
