<template>
    <div>
        <div id="preloader">
            <div id="ctn-preloader" class="ctn-preloader">
                <div class="animation-preloader">
                    <div class="spinner"></div>
                    <div class="txt-loading">
                        <span data-text-preloader="U" class="letters-loading">
                            U
                        </span>
                        <span data-text-preloader="C" class="letters-loading">
                            C
                        </span>
                        <span data-text-preloader="S" class="letters-loading">
                            S
                        </span>
                        <span data-text-preloader="B" class="letters-loading">
                            B
                        </span>
                        <span data-text-preloader="-" class="letters-loading">
                            -
                        </span>
                        <span data-text-preloader="R" class="letters-loading">
                            R
                        </span>
                        <span data-text-preloader="O" class="letters-loading">
                            O
                        </span>
                        <span data-text-preloader="C" class="letters-loading">
                            C
                        </span>
                        <span data-text-preloader="K" class="letters-loading">
                            K
                        </span>
                        <span data-text-preloader="S" class="letters-loading">
                            S
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
const $ = require("jquery");
$(function() {
    if (!$("body").hasClass("loaded")) {
        $("#ctn-preloader")
            .delay(1000)
            .fadeOut(2000); // will first fade out the loading animation
        $("#preloader")
            .delay(3000)
            .fadeOut("slow"); // will fade out the white DIV that covers the website.
        $("body")
            .delay(3250)
            .css({ overflow: "visible" });
        setTimeout(() => {
            $("body").addClass("loaded");
        }, 3260);
    } else {
        $("#preloader").hide();
    }
});
</script>
