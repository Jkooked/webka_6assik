$(document).ready(function () {
    console.log("jQuery is ready!");

    $("#change-greeting").on("click", function () {
        $("#headline").text("Hello! I'm glad to have you here.");
    });

    $("#dark-theme").on("click", function () {
        $("body").css({
        backgroundColor: "#1e1e2f",
        color: "#ffffff"
        });
    });

    $("#light-theme").on("click", function () {
        $("body").css({
        backgroundColor: "#ffffff",
        color: "#222222"
        });
    });

    $("#hide-status").on("click", function () {
    $(".about-info:visible").last().hide();
    });
    $("#show-status").on("click", function () {
    $(".about-info:hidden").first().show();
    });

    $("#toggle-status").on("click", function () {
    const $info = $(".about-info");
    const onlyFirstVisible = $info.slice(1).filter(":visible").length === 0;

    if (onlyFirstVisible) {
        $info.show();
    } else {
        $info.hide();
        $info.first().show();
    }
    });

    $("#fade-in").on("click", function () {
    $(".gallery-image").fadeIn(500);
    });

    $("#fade-out").on("click", function () {
    $(".gallery-image").fadeOut(500);
    });

    $("#fade-toggle").on("click", function () {
    $(".gallery-image").fadeToggle(500);
    });
        
    $(document).ready(function () {
        $(".panel-title").on("click", function () {
            const $panel = $(this).next(".panel-content");

            if ($(this).hasClass("toggle-panel")) {
            $panel.slideToggle();
            return;
            }

            if ($panel.is(":visible")) {
            $panel.slideUp();
            } else {
            $(".panel-content").slideUp();
            $panel.slideDown();
            }
        });
    });

    function getNewSkill() {
        return $("#new-skill").val().trim();
    }

    $("#add-skill").on("click", function () {
    const skill = getNewSkill();

    if (skill !== "") {
        $("#skills-list").append($("<li>").text(skill));
        $("#new-skill").val("");
    }
    });

    $("#prepend-skill").on("click", function () {
    const skill = getNewSkill();

    if (skill !== "") {
        $("#skills-list").prepend($("<li>").text(skill));
        $("#new-skill").val("");
    }
    });

    $("#remove-skill").on("click", function () {
        $("#skills-list li:last").remove();
    });

    $("#change-link").on("click", function () {
        $("#social-link")
            .attr("href", "https://github.com/Jkooked")
            .text("Open my GitHub");
    });

    $("#name-input").on("input", function () {
     $("#name-preview").text($(this).val());
    });

    $("#email-input").on("input", function () {
     $("#email-preview").text($(this).val());
    });

    let skillsVisible = false;

    $("#animate-skills").on("click", function () {
     skillsVisible = !skillsVisible;

     $(".bar-fill").each(function () {
        const targetWidth = skillsVisible ? $(this).data("width") : "0%";
        $(this).stop().animate({ width: targetWidth }, 800);
     });
    });
});