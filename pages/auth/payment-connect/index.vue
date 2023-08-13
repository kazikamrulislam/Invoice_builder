<template>
  <b-container class="thank-you-container">
      <b-row class="text-center w-100">
          <b-col sm="12" md="12" lg="12" xl="12">
              <div class="thank-you-icon">
          <span class="material-icons-outlined">electrical_services</span>
      </div>
      <div class="thank-you-header">
          Successfully Plugged in
      </div>
      <p>You have successfully connect with your payment wallet</p>
      <div class="pb-2">
          Connection Code
      </div>
      <div class="d-flex justify-content-center pb-5">
        <div class="ac-code">
        {{$route.query.code}}
      </div>
      </div>
      
          <b-button @click="buttonLoader ? 'javascript:void(0)' : buttonClick()" :disabled="btndisable" class="thank-you-button"> 
            <b-spinner v-if="buttonLoader" small ></b-spinner>
            <span v-else>Continue</span>
           </b-button>
          
      <div v-if="msgColorCode !== null"  class="d-flex justify-content-center pt-5">
        <div class="msg-box" :style="`background-color: ${msgColorCode};`">
            {{msg}}
        </div>
      </div>
      </b-col>
      </b-row>
  </b-container>
</template>

<script>
export default {
    data () {
        return {
            buttonLoader: true,
            btndisable: false,
            msg: null,
            msgColorCode: null
        }
    },
    mounted(){
        this.connectRedirect();
    },
    methods: {
        async connectRedirect(){
            this.buttonLoader = true;
            let self = this;
            try {
                await this.$axios.$post('/connectredirect', {code: this.$route.query.code}).then((response)=>{
                    self.buttonLoader = false;
                    self.msgColorCode = '#c1ffd8';
                    self.msg = response.message;
            });
            } catch (error) {
                self.btndisable = true;
                self.buttonLoader = false;
                self.msg = error.response.data;
                self.msgColorCode = '#ffbebe'

            }
        },
        buttonClick(){
            this.$router.push("/dashboard/payments/settings");
        }
    }
}
</script>

<style>
.thank-you-icon span{
    font-size: 100px;
    color: #0075ff;

}
.thank-you-button{
    padding: 12px 40px 12px 40px;
    background-color: #0075ff;
    border: none;
}
.thank-you-header {
    font-size: 38px;
    font-weight: bold;
    color: #0075ff;
}
.thank-you-container{
    height: calc(100vh - 250px);
    display: flex;
    align-items: center;
}
.ac-code{
    padding: 10px 15px ;
    background-color: #d6e9ff;
    color: #0075ff;
    border-radius: 7px;
}
.msg-box{
    min-width: 350px;
    padding: 10px 15px ;
    border-radius: 7px;
}
</style>