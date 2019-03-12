<template>
  <div class="login">
    <form @submit="onLogin($event)">
      <h3>Sign In</h3>
      <input type="text" v-model="emailLogin" placeholder="Email">
      <br>
      <input type="password" v-model="passwordLogin" placeholder="Password">
      <br>
      <button @click="onLogin($event)">LOGIN</button>
    </form>
    <form @submit="signUp($event)">
      <h3>Sign UP</h3>
      <input type="text" v-model="emailSign" placeholder="Email">
      <br>
      <input type="password" v-model="passwordSign" placeholder="Password">
      <br>
      <button @click="signUp($event)">Sign Up</button>
    </form>
  </div>
</template>

<script>
export default {
    methods: {
        onLogin: function(e) {
            e.preventDefault();
            window.firebase
                .auth()
                .signInWithEmailAndPassword(this.emailLogin, this.passwordLogin)
                .then(
                    user => {
                        this.$router.replace("home");
                    },
                    err => {
                        alert("Oops. " + err.message);
                    }
                );
            return false;
        },
        signUp: function(e) {
            e.preventDefault();
            window.firebase
                .auth()
                .createUserWithEmailAndPassword(this.emailSign, this.passwordSign)
                .then(
                    user => {
                        this.$router.replace("home");
                    },
                    err => {
                        alert("Oops. " + err.message);
                    }
                );
            return false;
        }
    },
    data: () => {
        return {
            emailSign: "",
            passwordSign: "",
            emailLogin: "",
            passwordLogin: ""
        };
    }
};
</script>
<style lang="less">
.login {
    display: flex;
    form {
        padding: 15px;
        flex: 1;
    }
}
</style>