<template>
  <div class="bg-white">
    <div class="top-tittle p-4">
      INTEGRATION SETTINGS <i>(Comming soon...)</i>
    </div>
    <div class="p-5">
      <b-tabs vertical nav-wrapper-class="w-30">
      <b-tab active>
        <template #title>
          <div class="p-3">STRIPE INTEGRATION</div>
      </template>
      <b-row class="p-3">
        <b-col sm="12" md="6" lg="6" xl="6">
          <div class="section-title">
            Connect with your <strong class="strong-color">STRIPE</strong> account
          </div>
          <div v-if="isConnected" class="acc-info">
            <p> <strong>Connected Email: </strong> {{accountInfoData.stripeacemail}} </p>
          </div>
            <div v-if="!isConnected" @click="getConnectwithStripe()" class="connect-with-stripe">
                <img width="200px" src="~assets/images/connect-purple.png" class='stripe-connect' alt='Connect With Stripe' />
                <span v-if="conncetLoader" class="connect-loader"><b-spinner small></b-spinner> Redirecting...</span>
            </div>
            <div v-else @click="revokedAccount()"  class="connect-with-stripe">
                <img width="200px" src="~assets/images/stripe-revoked.png" class='stripe-connect' alt='Connect With Stripe' />
                <span v-if="revokedLoder" class="reboked-loader"><b-spinner small></b-spinner> Redirecting...</span>
            </div>
        </b-col>
      </b-row>
      </b-tab>
      <b-tab disabled>
        <template #title>
          <div class="p-3">PAYONEER<i>(Comming Soon...)</i></div>
      </template>
      </b-tab>
    </b-tabs>     
    </div>
  </div>
</template>

<script>
export default {
    layout: 'dashboard',
    data (){
      return {
        stripePublicKey: null,
        stripePrivateKey: null,
        conncetLoader: false,
        revokedLoder: false,
        accountInfoData: null,
        isConnected: false
      }
    },
    mounted (){
      this.getAccountinfo();
    },
    methods: {
      async getConnectwithStripe(){
        this.conncetLoader = true;
        let self = this;
        await this.$axios.$get('/connectwithstripe').then((response)=>{
          window.location.href = response;
          self.conncetLoader = false;
        });
      },

      async getAccountinfo(){
        this.isConnected = false;
        let self = this;
        await this.$axios.$get('/getconnectedacinfo').then((response) => {
          if (response.length !== 0) {
            this.isConnected = response.isPaymentConnected;
            self.accountInfoData = response;
          }
        });
      },

      async revokedAccount(){
        this.revokedLoder = true;
        let self = this;
        await this.$axios.$get('/revokedstripe').then((response)=>{
          self.revokedLoder = false;
          this.isConnected = false;
        });        
      }
    }

}
</script>

<style scoped>
.top-tittle {
    font-weight: 500;
    font-size: 24px;
  }

.save-setting-button {
  padding: 12px 33px;
  font-size: 13px;
  margin-right: 10px;
  font-weight: 700;
  border-color: #0075ff;
  background-color: #0075ff;
}

.custom-control-input:checked ~ .custom-control-label::before {
    color: #fff;
    border-color: green;
    background-color: green;
 }

.section-title{
  font-size: 24px;
  padding-bottom: 30px;
}
 .strong-color {
  color: #0075ff;
 }
 .connect-loader{
  color: #0075ff;
 }
 .reboked-loader{
  color: #ff0000;
 }
 .connect-with-stripe{
  cursor: pointer;
 }
</style>