export const state = () => ({
    email: null,
    password: null,
    firstname: null,
    lastname: null,
    signupemail: null,
    industry: null,
    signuppassword: null
});

export const mutations = {
    userloginemail(state, message) {
        state.email = message
    },
    userloginpassword(state, message) {
        state.password = message
    },

    userSignupEmail(state, message){
        state.signupemail = message;
    },
    userSignupfirstname(state, message){
        state.firstname = message;
    },
    userSignuplastname(state, message){
        state.lastname = message;
    },
    userSignupindustry(state, message){
        state.industry = message;
    },
    userSignupsignuppassword(state, message){
        state.signuppassword = message;
    }
};