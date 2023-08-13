<template>
  <b-container class="thank-you-container">
      <b-row class="text-center w-100">
          <b-col sm="12" md="12" lg="12" xl="12">
              <div class="thank-you-icon">
          <span class="material-icons-outlined">check_circle</span>
      </div>
      <div class="thank-you-header">
          Congratulations!
      </div>
      <p>You have successfully verified your account.</p>
      <div class="pb-5">
          Please Tap the button for login your credential.
      </div>
      <nuxt-link to="/auth/login">
          <b-button class="thank-you-button">Continue</b-button>
      </nuxt-link>
      </b-col>
      </b-row>
  </b-container>
</template>

<script>
export default {
    auth: false,
}
</script>

<style>
.thank-you-icon span{
    font-size: 150px;
    color: #0075ff;

}
.thank-you-button{
    padding: 12px 40px 12px 40px;
    background-color: #0075ff;
    border: none;
}
.thank-you-header{
    font-size: 48px;
    font-weight: bold;
    color: #0075ff;
}
.thank-you-container{
    height: calc(100vh - 250px);
    display: flex;
    align-items: center;
}
</style>