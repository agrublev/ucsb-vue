<template>
    <div id="app">
        <div class="tweeter">
            <h2>UCSB Web Dev Twitter Clone</h2>
            <form @submit="addTweet($event)" class="tweet">
                <Name @handleName="handleName"></Name>
                <textarea
                    type="text"
                    @keydown="updateChars($event)"
                    class="message"
                    v-model="tweetMessage"
                ></textarea>
                <button type="submit">Add Tweet</button>
                <div>
                    CHARS: <b>{{ chars }}/200</b>
                </div>
            </form>
            <ul class="tweet-list">
                <li v-for="item in list">
                    <h3>
                        <img v-bind:src=`https://ui-avatars.com/api/?name=${item.name}` />
                        <span>{{ item.name }}</span>
                        <i>{{ formatDate(item.date) }}</i>
                    </h3>
                    <p>{{ item.message }}</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import Name from "./Name.vue";

export default {
    methods: {
        handleName(name) {
            this.name = name;
        },
        updateChars(e) {
            this.chars = this.tweetMessage.length;
            if (this.chars > 199) {
                alert("Can't add more!");
                this.tweetMessage = this.tweetMessage.slice(0, 199);
                e.preventDefault();
            }
            return false;
        },
        formatDate(date) {
            return new Date(date).toTimeString().slice(0, 8);
        },
        addTweet(e) {
        	e.preventDefault();
            if (this.name.length && this.tweetMessage.length && this.tweetMessage.length < 200) {
                db.collection("tweets")
                    .add({
                        name: this.name,
                        message: this.tweetMessage,
                        date: Date.now()
                    })
                    .then(e => {
                        this.tweetMessage = "";
                    });
            }
            return false;
        }
    },
    data: () => {
        return {
            name: "",
            tweetMessage: "",
            chars: 0,
            list: []
        };
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
    components: { Name }
};
</script>
<style lang="less">
@import "style.less";
</style>
