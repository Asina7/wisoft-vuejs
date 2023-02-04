<template>
    <div>
        <div class="modal__application" id="application_form2">
    <div class="modal__apply">
      <button class="modal__close-2" id="apply_close2"><i class="fa-solid fa-xmark"></i></button>
      <div class="form-top">
      
        <h2 class="sec-title">Frontend Developer</h2>
        <p>Full time</p>
      </div>
      <div class="form-apply">
        <form @submit.prevent="submitForm">
          <div class="input-apply-2">
            <p>Name *</p>
            <input type="text" v-model="form.name" required>
          </div>
          <div class="input-apply-2">
            <p>Email *</p>
            <input type="email" v-model="form.email" required>
          </div>
          <div class="input-apply-2">
            <p>Phone *</p>
            <input type="tel" v-model="form.phone" required>
          </div>
          <div class="input-apply-2">
            <p>Upload CV *</p>
            <input type="file">
          </div>
        </form>
      </div>
      <div class="form-btn-2">
        <button class="wc-btn-primary btn-hover" id="back_form1"><span></span> Back <i
            class="fa-solid fa-arrow-right"></i></button>
        <button type="submit" class="wc-btn-primary btn-hover" @click="submitForm"><span></span> Submit <i
            class="fa-solid fa-arrow-right"></i></button>
      </div>
    </div>
  </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                name: '',
                email: '',
                phone: '',
                
            }
        }
    },
    methods: {
        submitForm() {
            if (!this.form.name || !this.form.email || !this.form.phone) {
                return
            }
            alert('Data submitted!')
        }
    }
}
</script>

<style>
    
</style>
