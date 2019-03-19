<template>
    <div style="margin:30px; width: 600px;">
        <b-card class="mb-4" title="Title of My card" style="width: 600px;">
            <h6 class="card-subtitle mb-3">Subtitle</h6>
            <p class="mb-3">Content?</p>
            <b-button variant="outline-primary" class="mb-3">HELLO </b-button>
        </b-card>
        <b-form @submit.prevent="onBasicSubmit">
            <b-form-group label="Email">
                <b-form-input type="email" v-model="basicForm.email" placeholder="Email" />
            </b-form-group>
            <b-form-group label="Pass">
                <b-form-input type="password" v-model="basicForm.password" placeholder="Password" />
            </b-form-group>
            <b-form-group>
                <b-form-checkbox v-model="basicForm.checked"></b-form-checkbox>
            </b-form-group>
            <b-button type="submit" variant="primary" class="mt-4">Submit</b-button>
        </b-form>
    </div>
</template>

<script>
export default {
    data: function() {
        return { basicForm: {} };
    },
    methods: {
        onBasicSubmit() {
            console.warn(this.basicForm);
        }
    }
};
</script>
