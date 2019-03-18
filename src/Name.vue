<template>
    <div>
        <input type="text" v-model="name" @focus="$event.target.select()" />
    </div>
</template>

<script>
import { uniqueNamesGenerator } from "unique-names-generator";

let devName = localStorage.getItem("username");
devName = devName ? devName : uniqueNamesGenerator(" ", true);
localStorage.setItem("username", devName);
export default {
    methods: {},
    watch: {
        name: function(name) {
            this.$emit("handleName", this.name);
            localStorage.setItem("username", name);
        }
    },
    created(){
	    this.$emit("handleName", this.name);
    },
    data: () => {
        return {
            name: devName
        };
    }
};
</script>
