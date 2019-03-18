<template>
    <div id="app">
        <div class="tweeter">
            <h2>UCSB Web Dev Twitter Clone</h2>
            <!-- STEP 3 -->
        </div>
    </div>
</template>

<script>
// Step 6

export default {
    methods: {/**Step 4*/},
    data: () => {
        return {/**Step 5*/};
    },
    created() {
        db.collection("tweets")
            .orderBy("date", "desc")
            .onSnapshot(doc => {
                doc.docChanges().forEach(d => {
                    if (d.type === "added") {
                        this.list.unshift(d.doc.data());
                    }
                });
            });
    },
    // Step 7
};
</script>
<style lang="less">
@import "style.less";
</style>
