<template>
  <button @click.prevent="btnClick($event)" :type="type" class="base-btn">
  	<slot/> <!-- slot outlet -->
	</button>
</template>
<script>
export default {
  props: ['type'],
  methods: {
    btnClick(e){
      this.$emit("onClick",e);
    }
  }
}
</script>
<style>
.base-btn {
  padding: 12px 30px;
    border-radius: 0 8px 8px 8px;
    background: linear-gradient(165deg, #E786FF 10%, #4318FF 80%);
    box-shadow: 4px 10px 15px rgb(86 57 255 / 40%);
    /* background-image: radial-gradient(#868cff 2%, #81818100 72%); */
    border: none;
    font-size: 16px;
    font-weight: 500;
    color: #FFFFFF;
}
</style>