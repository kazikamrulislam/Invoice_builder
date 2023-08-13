<template>
  <div class="payment-page">
    <!-- Display a payment form -->
    <div v-if="isFormShow" >
      <div class="pb-3">
        <div class="d-flex justify-content-between">
          <img height="60" src="~assets/images/logo.svg" alt="Easy Invoice Builder logo">
          <div class="pp-text">
            Payment Portal
          </div>
        </div>
      </div>
      <form v-if="isStripeLoaded" @submit.prevent="hadleSubmit()" id="payment-form">
      <div id="payment-element">
        <!--Stripe.js injects the Payment Element-->
      </div>
      <button id="submit">
        <div class="spinner hidden" id="spinner"></div>
        <span id="button-text"> <b-spinner v-if="buttonLoader" small></b-spinner> <span v-else>Pay now</span></span>
      </button>
      <div id="payment-message" class="hidden"></div>
    </form>
    </div>
    <div v-else>
      <div class="msg-section">
        <div id="payment-message" class="hidden"></div>
        <nuxt-link to="/">
          <b-button class="msg-button">Continue</b-button>
      </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>

export default {
    auth: false,
     head () {
        return {
          title: 'Payment Page - Easy Invoice Builder',
          script: [
            {
              hid: 'stripe',
              src: 'https://js.stripe.com/v3/',
              defer: true,
              callback: () => { this.isStripeLoaded = true } 
            }
          ]
        }
      },
    data (){
      return {
        isStripeLoaded: false,
        buttonLoader: false,
        isFormShow: false,
        elements: null,

      }
    },
    computed: {
      stripe(){
        return Stripe("pk_test_51KbMAXCe4BpsITA24PjTdODSacFmMf5zxHYiHvYa5mtCK9Up93rFbiCPkyhJDIvrV99Mf83aTh3QQJIUvtiYzxQU008iO1aWD7");
      }
    },
    mounted(){
      this.getStripeIntent();
      this.checkStatus();
    },
    methods:{
      async getStripeIntent(){
        if (this.$route.query.provider !== undefined) {
          this.isFormShow = true;
        let self = this;
        try {
          await this.$axios.$post('/stripepaymentintend', this.$route.query).then((response)=>{
            var clientSecret = response.clientsecret;
            self.elements = self.stripe.elements({ clientSecret });
            const paymentElement = self.elements.create("payment");
            paymentElement.mount("#payment-element");
          });
        } catch (error) {
          
        }
        }else{
          this.isFormShow = false;
        }
      },
      async hadleSubmit(){
        this.buttonLoader = true;
        var elements = this.elements;
        const { error } = await this.stripe.confirmPayment({
    elements,
    confirmParams: {
      return_url: window.location.origin+"/payment-portal",
    },
  });

  if (error.type === "card_error" || error.type === "validation_error") {
     this.showMessage(error.message);
  } else {
    this.showMessage("An unexpected error occurred.");
  }
  this.buttonLoader = false;
      },

      async checkStatus() {
  const clientSecret = new URLSearchParams(window.location.search).get(
    "payment_intent_client_secret"
  );

  if (!clientSecret) {
    return;
  }

  const { paymentIntent } = await this.stripe.retrievePaymentIntent(clientSecret);

  switch (paymentIntent.status) {
    case "succeeded":
      this.showMessage("Payment succeeded!");
      break;
    case "processing":
      this.showMessage("Your payment is processing.");
      break;
    case "requires_payment_method":
      this.showMessage("Your payment was not successful, please try again.");
      break;
    default:
      this.showMessage("Something went wrong.");
      break;
  }
},
showMessage(messageText) {
  const messageContainer = document.querySelector("#payment-message");

  messageContainer.classList.remove("hidden");
  messageContainer.textContent = messageText;

  setTimeout(function () {
    // window.location.href = window.location.origin;
    messageContainer.classList.add("hidden");
    messageText.textContent = "";
  }, 4000);
}

    }

}
</script>

<style scoped>
.pp-text{
  font-size: 24px;
  font-weight: 600;
  color: #0075ff;
}
.msg-button{
  padding: 12px 40px 12px 40px;
    background-color: #0075ff;
    border: none;
}

.payment-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
}

form {
  width: 30vw;
  min-width: 500px;
  align-self: center;
  box-shadow: 0px 0px 0px 0.5px rgba(50, 50, 93, 0.1),
    0px 2px 5px 0px rgba(50, 50, 93, 0.1), 0px 1px 1.5px 0px rgba(0, 0, 0, 0.07);
  border-radius: 7px;
  padding: 40px;
}

.hidden {
  display: none;
}

#payment-message {
  color: rgb(105, 115, 134);
  font-size: 16px;
  line-height: 20px;
  padding-top: 12px;
  text-align: center;
}

#payment-element {
  margin-bottom: 24px;
}

/* Buttons and links */
button {
  background: #0075ff;
  font-family: Arial, sans-serif;
  color: #ffffff;
  border-radius: 4px;
  border: 0;
  padding: 12px 16px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  display: block;
  transition: all 0.2s ease;
  box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.07);
  width: 100%;
}
button:hover {
  filter: contrast(115%);
}
button:disabled {
  opacity: 0.5;
  cursor: default;
}

/* spinner/processing state, errors */
.spinner,
.spinner:before,
.spinner:after {
  border-radius: 50%;
}
.spinner {
  color: #ffffff;
  font-size: 22px;
  text-indent: -99999px;
  margin: 0px auto;
  position: relative;
  width: 20px;
  height: 20px;
  box-shadow: inset 0 0 0 2px;
  -webkit-transform: translateZ(0);
  -ms-transform: translateZ(0);
  transform: translateZ(0);
}
.spinner:before,
.spinner:after {
  position: absolute;
  content: "";
}
.spinner:before {
  width: 10.4px;
  height: 20.4px;
  background: #0075ff;
  border-radius: 20.4px 0 0 20.4px;
  top: -0.2px;
  left: -0.2px;
  -webkit-transform-origin: 10.4px 10.2px;
  transform-origin: 10.4px 10.2px;
  -webkit-animation: loading 2s infinite ease 1.5s;
  animation: loading 2s infinite ease 1.5s;
}
.spinner:after {
  width: 10.4px;
  height: 10.2px;
  background: #0075ff;
  border-radius: 0 10.2px 10.2px 0;
  top: -0.1px;
  left: 10.2px;
  -webkit-transform-origin: 0px 10.2px;
  transform-origin: 0px 10.2px;
  -webkit-animation: loading 2s infinite ease;
  animation: loading 2s infinite ease;
}

.msg-section{
  padding: 20px;
  border-radius: 12px;
  font-size: 32px;
  color: #0075ff;
  background-color: #cee5ff;
}

@-webkit-keyframes loading {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes loading {
  0% {
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@media only screen and (max-width: 600px) {
  form {
    width: 80vw;
    min-width: initial;
  }
}
</style>