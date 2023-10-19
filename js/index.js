// <---- hover jquery for buttons on the project cards on the homepage ---->
$(document).ready(function() {
    // PBS Sim
    $(".btnPrimary1").hover(function() {
        // Hover on
        $(".btnPrimary1").addClass("btnPrimaryHover");
    }, function() {
        // Hover off
        $(".btnPrimary1").removeClass("btnPrimaryHover");
    });
});
$(document).ready(function() {
    // DBS Tampa
    $(".btnPrimary2").hover(function() {
        // Hover on
        $(".btnPrimary2").addClass("btnPrimaryHover");
    }, function() {
        // Hover off
        $(".btnPrimary2").removeClass("btnPrimaryHover");
    });
});
$(document).ready(function() {
    // Giftspo
    $(".btnPrimary3").hover(function() {
        // Hover on
        $(".btnPrimary3").addClass("btnPrimaryHover");
    }, function() {
        // Hover off
        $(".btnPrimary3").removeClass("btnPrimaryHover");
    });
});
$(document).ready(function() {
    // Breezy
    $(".btnPrimary4").hover(function() {
        // Hover on
        $(".btnPrimary4").addClass("btnPrimaryHover");
    }, function() {
        // Hover off
        $(".btnPrimary4").removeClass("btnPrimaryHover");
    });
});
// <---- hover jquery for buttons on the work cards on the works page ---->
$(document).ready(function() {
    // PBS Sim
    $(".wrkbtn1").hover(function() {
        // Hover on
        $(".wrkbtn1").addClass("wrkbtnHover");
    }, function() {
        // Hover off
        $(".wrkbtn1").removeClass("wrkbtnHover");
    });
});
$(document).ready(function() {
    // DBS Tampa
    $(".wrkbtn2").hover(function() {
        // Hover on
        $(".wrkbtn2").addClass("wrkbtnHover");
    }, function() {
        // Hover off
        $(".wrkbtn2").removeClass("wrkbtnHover");
    });
});
$(document).ready(function() {
    //  Giftspo
    $(".wrkbtn3").hover(function() {
        // Hover on
        $(".wrkbtn3").addClass("wrkbtnHover");
    }, function() {
        // Hover off
        $(".wrkbtn3").removeClass("wrkbtnHover");
    });
});
$(document).ready(function() {
    // Breezy
    $(".wrkbtn4").hover(function() {
        // Hover on
        $(".wrkbtn4").addClass("wrkbtnHover");
    }, function() {
        // Hover off
        $(".wrkbtn4").removeClass("wrkbtnHover");
    });
});
//<---- hover jquery for skills buttons on works page ---->
$(document).ready(function() {
    $(".skillsImage1").hover(
        function() {
            // hover on enlarge
            $(this).css("transform", "scale(1.3)");
        },
        function() {
            // hover off normal
            $(this).css("transform", "scale(1)");
        }
    );
});
$(document).ready(function() {
    $(".skillsImage2").hover(
        function() {
            // hover on enlarge
            $(this).css("transform", "scale(1.3)");
        },
        function() {
            // hover off normal
            $(this).css("transform", "scale(1)");
        }
    );
});
$(document).ready(function() {
    $(".skillsImage3").hover(
        function() {
            // hover on enlarge
            $(this).css("transform", "scale(1.3)");
        },
        function() {
            // hover off normal
            $(this).css("transform", "scale(1)");
        }
    );
});
// <---- accordian jquery for skills buttons on the works page ---->
$(document).ready(function() {
    $(".skillsImage1").click(function() {
        var $accordion = $(this).next(".skillAccordian1");

        if ($accordion.is(":hidden")) {
            // accordion is hidden so it will slide it down
            $accordion.slideDown();
        } else {
            // accordion is visible so it will hide
            $accordion.slideUp();
        }
    });
});
$(document).ready(function() {
    $(".skillsImage2").click(function() {
        var $accordion = $(this).next(".skillAccordian2");

        if ($accordion.is(":hidden")) {
            // accordion is hidden so it will slide it down
            $accordion.slideDown();
        } else {
            // accordion is visible so it will hide
            $accordion.slideUp();
        }
    });
});
$(document).ready(function() {
    $(".skillsImage3").click(function() {
        var $accordion = $(this).next(".skillAccordian3");

        if ($accordion.is(":hidden")) {
            // accordion is hidden so it will slide it down
            $accordion.slideDown();
        } else {
            // accordion is visible so it will hide
            $accordion.slideUp();
        }
    });
});