# Final Project Steps to follow

## Step 1

Run the following command in terminal

```bash
yarn
```

## Step 2

Add the following to your index.html

```html
<script src="https://www.gstatic.com/firebasejs/5.9.0/firebase-app.js"></script>
<script src="https://www.gstatic.com/firebasejs/5.9.0/firebase-firestore.js"></script>

<script>
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAIZxwBzGzGFqsu4IVEcXcV3fLvXmZ7W2o",
    authDomain: "vueexample-f5cde.firebaseapp.com",
    databaseURL: "https://vueexample-f5cde.firebaseio.com",
    projectId: "vueexample-f5cde",
    storageBucket: "vueexample-f5cde.appspot.com",
    messagingSenderId: "34906561646"
  };
  firebase.initializeApp(config);
  window.db = firebase.firestore();
</script>
```

## Step 3

Add the following html code inside the App.vue

```vue
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
```

## Step 4

Replace the methods object with the following object 

```javascript
{
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
}
```

## Step 5

Replace the returned object in the data function with this object

```javascript
{
    name: "",
    tweetMessage: "",
    chars: 0,
    list: []
}       
```

## Step 6

Import the Name component using the import statement like this

```javascript
import Name from "./Name.vue";
```

## Step 7

Tell vue you want to use the Name component with this code

```javascript
components: { Name }
```

## Step 8

Run the following command in terminal to run/test your project

```bash
yarn start
```

If all looks well you can use shortcut `Control + C` to stop running and run next command. Make sure you have selected terminal for shortcut to work!

## Step 9

Run this command to submit your assignment to the internet, and add link to your quiz!

```bash
yarn submit
```
