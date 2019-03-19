<template>
    <div>
        <div class="agn-our-pricing pt-150 pb-200">
            <img src="../assets/theme1/images/shape/shape-55.svg" alt="" class="shape-one">
            <img src="../assets/theme1/images/shape/shape-62.svg" alt="" class="shape-two">
            <img src="../assets/theme1/images/shape/shape-1.svg" alt="" class="shape-three">
            <img src="../assets/theme1/images/shape/shape-60.svg" alt="" class="shape-four">
            <img src="../assets/theme1/images/shape/shape-57.svg" alt="" class="shape-five">
            <div class="container">
                <div class="theme-title-one text-center">
                    <div class="upper-title">Pricing Plan</div>
                    <h2 class="main-title">No Hidden Charges! Choose <br>your Plan.</h2>
                </div> <!-- /.theme-title-one -->
            </div> <!-- /.container -->
            <div class="table-wrapper">
                <div class="inner-table clearfix">
                    <ul class="pr-list-text">
                        <li>Full Access Library</li>
                        <li>Multiple User</li>
                        <li>Refund</li>
                        <li>24/7 Support</li>
                    </ul> <!-- /.pr-list-text -->
                    <div class="pr-column">
                        <div class="pr-header">
                            <div class="price">$2300<span>/MO</span></div>
                            <h4 class="title">Sandwich</h4>
                            <div class="package">Reguler</div>
                        </div> <!-- /.pr-header -->
                        <ul class="pr-body">
                            <li>
                                <div class="pr-text">Full Access Library</div>
                                <i class="icon flaticon-cancel none"></i>
                            </li>
                            <li>
                                <div class="pr-text">Multiple User</div>
                                <i class="icon flaticon-cancel none"></i>
                            </li>
                            <li>
                                <div class="pr-text">Refund</div>
                                <i class="icon flaticon-cancel none"></i>
                            </li>
                            <li>
                                <div class="pr-text">24/7 Support</div>
                                <i class="icon flaticon-tick available"></i>
                            </li>
                        </ul>
                        <div class="pr-footer">
                            <a href="#" class="choose-button line-button-two">Choose Plan</a>
                            <p>Get your 30 day free trial</p>
                        </div>
                    </div> <!-- /.pr-column -->
                    <div class="pr-column">
                        <div class="pr-header">
                            <div class="price">$6000<span>/MO</span></div>
                            <h4 class="title">Subway</h4>
                            <div class="package">Premium</div>
                        </div> <!-- /.pr-header -->
                        <ul class="pr-body">
                            <li>
                                <div class="pr-text">Full Access Library</div>
                                <i class="icon flaticon-cancel none"></i>
                            </li>
                            <li>
                                <div class="pr-text">Multiple User</div>
                                <i class="icon flaticon-cancel none"></i>
                            </li>
                            <li>
                                <div class="pr-text">Refund</div>
                                <i class="icon flaticon-tick available"></i>
                            </li>
                            <li>
                                <div class="pr-text">24/7 Support</div>
                                <i class="icon flaticon-tick available"></i>
                            </li>
                        </ul>
                        <div class="pr-footer">
                            <a href="#" class="choose-button line-button-two">Choose Plan</a>
                            <p>Get your 30 day free trial</p>
                        </div>
                    </div> <!-- /.pr-column -->
                    <div class="pr-column">
                        <div class="pr-header">
                            <div class="price">$9500<span>/MO</span></div>
                            <h4 class="title">Burger</h4>
                            <div class="package">Corporate</div>
                        </div> <!-- /.pr-header -->
                        <ul class="pr-body">
                            <li>
                                <div class="pr-text">Full Access Library</div>
                                <i class="icon flaticon-tick available"></i>
                            </li>
                            <li>
                                <div class="pr-text">Multiple User</div>
                                <i class="icon flaticon-tick available"></i>
                            </li>
                            <li>
                                <div class="pr-text">Refund</div>
                                <i class="icon flaticon-tick available"></i>
                            </li>
                            <li>
                                <div class="pr-text">24/7 Support</div>
                                <i class="icon flaticon-tick available"></i>
                            </li>
                        </ul>
                        <div class="pr-footer">
                            <a href="#" class="choose-button line-button-two">Choose Plan</a>
                            <p>Get your 30 day free trial</p>
                        </div>
                    </div> <!-- /.pr-column -->
                </div> <!-- /.inner-table -->
            </div> <!-- /.table-wrapper -->
        </div>
    </div>
</template>

<script>
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
    }
};
</script>
