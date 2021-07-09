<template>
  <b-container fluid="sm">
    <b-row>
      <b-col sm="2"></b-col>
      <b-col sm="8">
        <Auth
        v-if="!validation"
        @input="OnUserPassSelection"
        ></Auth>
        <p v-else>userpass selected</p>
      </b-col>
      <b-col sm="2"></b-col>

    </b-row>
  </b-container>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Auth from './components/Auth.vue';
import socket from './socket';
export default {
  name: 'App',
  components: {
    Auth
  },
  data(){
    return {
      validation : false,
    };
  },
  methods :{
    OnUserPassSelection(username , password){
      //alert("username: "+username+" and password: "+password);
      socket.auth = 
                    {username ,
                    password};
      socket.connect();
      // this.validation = true;
    }
  },
  created(){
    socket.on("connect_error" , (err)=>{
      if (err === "valid UserPass"){
        alert("valid UserPass");
      }
    });
  }
};
</script>

<style>

</style>
