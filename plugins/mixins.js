import Vue from 'vue';

const mixin = {
    methods: {
        toast({header,body,position,variant,append}) {
            this.$bvToast.toast(body || 'Default Body', {
              title: header || 'Default Title',
              toaster: position || 'b-toaster-bottom-right',
              variant: variant || 'default',
              solid: true,
              appendToast: append || false
            })
          }
   }
 }
 
 Vue.mixin(mixin);