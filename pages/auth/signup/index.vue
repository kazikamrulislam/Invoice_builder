<template>
<div>
    <div class="mb-4">
        <img height="60" src="~assets/images/new_logo.svg" alt="auth-image">
    </div>
    <div class="signup_desc">
        <h1 class="pb-2">
            Artificial Intelligence Driving Results For The all Indrustry
        </h1>
        <div class="pb-4">
            Welcome! Please create your account.
        </div>
    </div>
    <div class="form">
        <div class="d-flex justify-content-between">
            <div class="input_group_first_name">
                <label for="first-name" class="pt-2  mb-0">First Name</label>
                <b-input-group >
                <b-form-input 
                v-model="firstname" 
                @input="$store.commit('authentication/userSignupfirstname', firstname)"
                class="pl-3 border-1 pb-2"
                id="first-name" 
                type="text" 
                placeholder="ex: Polas"
                > </b-form-input>
                </b-input-group>
            </div>
            <div class="input_group_last_name">
                <label for="last-name" class="pt-2  mb-0">Last Name</label>
                <b-input-group >
                <b-form-input
                v-model="lastname"
                @input="$store.commit('authentication/userSignuplastname', lastname)"
                class="pl-3 border-1 pb-2" 
                id="last-name" 
                type="text" 
                placeholder="ex: Rahman"
                > </b-form-input>
                </b-input-group>
            </div>
        </div>
        <div>
            <label for="email" class="pt-2  mb-0 ">E-mail</label>
            <b-input-group>
                <b-form-input
                v-model="email" 
                @input="$store.commit('authentication/userSignupEmail', email)"
                class="w-100 pl-3 border-1 pb-2 " 
                id="email" 
                type="text" 
                placeholder="abc@example.com"
                > </b-form-input>
                </b-input-group>
        </div>
        <div>
            <label for="password" class="pt-2 mb-0 ">Password</label>
            <b-input-group>
          <template #append>
            <b-input-group-text class="border-1 bg-white" style="cursor:pointer;" @click="togglePass()">
              <i class="material-icons-outlined">{{showPassword?'visibility_off':'visibility'}}</i>
            </b-input-group-text>
          </template>
          <b-form-input
            v-model="password"
            @input="$store.commit('authentication/userSignupsignuppassword', password)"
            class="pl-3 border-1 pb-2 " 
            id="password" 
            :type="showPassword?'password':'text'"
            placeholder="******"
          >
          </b-form-input>
        </b-input-group>
        </div>
        <div>
            <label class="pt-2 mb-0" for="inline-form-custom-select-pref">Industry</label>
            <b-form-select
            v-model="industry"
            @change="$store.commit('authentication/userSignupindustry', industry)"
            id="inline-form-custom-select-pref"
            class="w-100 pl-3 border-1"
            :options="industryOptions"
            ></b-form-select>
        </div>
    </div>
</div>
</template>

<script>
    export default {
        layout: 'auth',
        auth: false,
        data(){
            return {
                industryOptions: [
                    { text: 'Select', value: null }
                ],
                firstname: "",
                lastname: "",
                email: "",
                industry: null,
                password: "",
                showPassword: true
            }
        },
        mounted(){
            this.getIndustries();
        },
        methods:{
             // Toggle Password
            togglePass(){
            this.showPassword = !this.showPassword;
            },

            async getIndustries(){
                let self = this;
                await this.$axios.$get('/industrylist').then((response)=>{
                    for (const iterator of response) {
                        self.industryOptions.push(
                        {
                            text: iterator.industryName,
                            value: iterator.id
                        }
                    );
                    }
                });
            }
        },  
    }
</script>

<style scoped>

 a{
    text-decoration: none;
    color: #000;
 }

 a:hover{
    text-decoration: none;
    color: #000;
 }

.signup_desc h1{
    font-size: 36px;
    color: #614DFF;
    font-weight: 700;
}
.signup_desc p{
        color: #00000099;
    }


 /* .border input::placeholder{
    color: #0075FF;
 } */

.form{
    width: 496px;
}

.input_group_first_name,
.input_group_last_name{
    width: 48%;
}

.input-group>.form-control{
  height: 50px;
  border-radius: 8px;
}

.input-group-text{
  border-radius: 8px;
}

select{
    height: 50px;
    border-radius: 8px;
}

input{
    color: #0075FF;
}
input:focus,
input:focus-visible{
    outline: none;
    box-shadow: none;
 }
.custom-select:focus{
    box-shadow: none;
    outline: none;
 }

.form-control:focus{
  border-color: #614DFF;
}

.custom-select:focus{
    border-color: #614DFF;
}

.custom-select option:nth-child(n-1){
    color: #0075FF;
}

input:-webkit-autofill,
input:-webkit-autofill:hover, 
input:-webkit-autofill:focus, 
input:-webkit-autofill:active{
    -webkit-box-shadow: 0 0 0 30px #FFFFFF inset !important;
}
</style>