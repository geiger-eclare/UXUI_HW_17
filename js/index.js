$(document).ready(function() {
    // Select all buttons with class "btnPrimary1"
    $(".btnPrimary1").hover(function() {
        // When hovered over, apply CSS transformation to grow card images
        $(".cardImage1").css("transform", "scale(1.2)");
    }, function() {
        // When the hover event ends, remove the transformation
        $(".cardImage1").css("transform", "scale(1)");
    });
});