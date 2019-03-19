<template>
    <div>
        <div class="agn-about-us">
            <img src="../assets/theme1/images/shape/shape-61.svg" alt="" class="shape-one">
            <img src="../assets/theme1/images/shape/shape-64.svg" alt="" class="shape-two" data-aos="fade-left">
            <img src="../assets/theme1/images/shape/shape-65.svg" alt="" class="shape-three" data-aos="fade-right">
            <img src="../assets/theme1/images/shape/shape-60.svg" alt="" class="shape-four">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 order-lg-last">
                        <div class="text-wrapper">
                            <div class="theme-title-one">
                                <div class="upper-title">About us</div>
                                <h2 class="main-title">Leading Digital Agency for Business Solution.</h2>
                            </div> <!-- /.theme-title-one -->
                            <p>Lorem ipsum dolor sit amet, hendrerit omittantur mel, es vidit animal iracundia. Ius te altera essent incorrupte. Id alien accu consetetur eam, nibh aliquam iracundia.</p>
                            <p class="quote">Lorem ipsum dolor sit amet, hendrerit omittantur mel et, est ut vidit animal iracundia luis.</p>
                            <div class="author"><span class="name">Rashed Kabir, </span>CEO CreativeGigs</div>
                            <img src="https://cdnme.s3.amazonaws.com/cdn/1851-5c2d-52968593_597475823998040_213218089234046702_n.jpg" height="160" alt="">
                        </div>
                    </div>
                    <div class="col-lg-6 order-lg-first">
                        <div class="img-box">
                            <img src="https://cdnme.s3.amazonaws.com/cdn/9901-c18d-53267152_395598904568296_5813211284339856648_n.jpg" alt="" class="main-img">
                        </div>
                    </div>
                </div>
            </div> <!-- /.container -->
            <a href="#" class="learn-more theme-button-two" data-aos="fade-left">Learn More <i class="fa fa-angle-right icon-right" aria-hidden="true"></i></a>
        </div>
    </div>
</template>

<script>
import "../assets/theme1/style.css";
import "../assets/theme1/responsive.css";

export default {
    methods: {
        someClick() {
            this.someVariable = "" + new Date().toDateString() + " - " + Date.now();
        }
    },
    data: () => {
        return {
            someVariable: "I am a variable with the time"
        };
    },
    components: {
    }
};
</script>
<style lang="less"></style>
