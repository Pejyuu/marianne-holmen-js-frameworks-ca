<template>
  <div class="container">

    <b-alert v-if="errors.length" show variant="warning" dismissible>
    <!--<p v-if="errors.length">-->
      <h4 class="alert-heading">Please Correct The Following Errors</h4>
      <ul>
        <li v-for="error in errors" :key="error">{{ error }}</li>
      </ul>
    <!--</p>-->
    </b-alert>
    <b-alert v-if="success" show variant="success" dismissible>
      Thank you for submitting your message. :)
    </b-alert>
    <b-form
      @submit.prevent
      novalidate="true">

      <label for="firstName">First Name</label>
      <b-input
        v-model="firstName"
        id="firstName">
      </b-input>

      <label for="lastName">Last Name</label>
      <b-input
        v-model="lastName"
        id="lastName">
      </b-input>
      <label for="email">email</label>
      <b-input
        v-model="email"
        :state="v_email"
        id="email">
      </b-input>

      <label for="message">Message</label>
      <b-form-textarea
        id="message"
        v-model="message"
        placeholder="Write your Message"
        rows="3"
        max-rows="6"
       :state="v_message"
      ></b-form-textarea>
      <b-form-text id="message-help-block">
      Your Message needs to be longer than 10 characters. : {{ message.length }}
    </b-form-text>

    <b-button
      block
      variant="info"
      class="my-3"
      type="submit"
      value="Submit"
      v-on:click="checkForm">Submit</b-button>

     </b-form>
  </div>
</template>


<script>
export default {
  name: "ContactForm",
  data() {
      return {
        errors: [],
        firstName: "",
        lastName: "",
        email: "",
        message: "",
        success: false
      }
    },
    methods: {
      checkForm: function (e) {
        this.errors = [];

        // firstName
        if (!this.firstName ) {
          this.errors.push("First Name Required");
        } else if (this.firstName.length < 2) {
            this.errors.push('First Name Needs to be 2 or more Characters');
        }
        // firstName
        if (!this.lastName ) {
          this.errors.push("Last Name Required");
        } else if (this.firstName.length < 2) {
            this.errors.push('Last Name Needs to be 2 or more Characters');
        }
        if (!this.email) {
          this.errors.push('Email required.');
        } else if (!this.validEmail(this.email)) {
          this.errors.push('Valid email required.');
        }
        // firstName
        if (!this.message ) {
          this.errors.push("Message Required");
        } else if (this.message.length < 10) {
            this.errors.push('Message needs to be 10 or more characters');
        }

        if (!this.errors.length) {
          this.success = true
          return true;
        }

        e.preventDefault();
      },
      validEmail: function (email) {
        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
      }
    }
  }
</script>
