<template>
    <b-form @submit.prevent="onSubmit">
        <!-- username group -->
        <b-form-group
        id="input-group-username"
        label="Username:"
        label-for="input-username"
        description="We'll never share your information with anyone else."
      >
        <b-form-input
          id="input-username"
          v-model="username"
          type="text"
          placeholder="Enter Username:"
          required
        ></b-form-input>
      </b-form-group>

        <!-- password group -->
        <b-form-group
        id="input-group-password"
        label="password:"
        label-for="input-password"
        description="don't share your password with others."
      >
        <b-form-input
          id="input-password"
          v-model="password"
          type="password"
          placeholder="Enter password:"
          required
        ></b-form-input>
      </b-form-group>
      <b-button type="submit" variant="primary">Submit</b-button>

    </b-form>
</template>

<script>
export default {
    name : "AuthPage",
    data(){
        return {
            username: "",
            password:""
        };
    },
    methods :{
        onSubmit(){
            this.$emit("input",this.username,this.password);
            //alert("it works");
        }
    }

};

</script>