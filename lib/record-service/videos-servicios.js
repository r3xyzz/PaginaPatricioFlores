
    $(document).ready(function() {
        var $videoSrc;
        $('.btn-servicio').click(function() {
            $videoSrc = $(this).data("src");
        });

        // Cuando el modal se abre
        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&modestbranding=1&showinfo=0");
        });

        // Cuando el modal se cierra
        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', "");
        });
    });
