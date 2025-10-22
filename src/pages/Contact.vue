<template>
  <div class="contact-container">
    <h1>Contact Me</h1>
    <p class="intro">Have a question or want to collaborate? Reach out below!</p>

    <form @submit.prevent="handleSubmit" class="contact-form">
      <div class="form-group">
        <label for="name">Name & Surname</label>
        <input
          type="text"
          id="name"
          v-model="form.name"
          required
          placeholder="Enter your full name"
        />
      </div>

      <div class="form-group">
        <label for="email">Email Address</label>
        <input
          type="email"
          id="email"
          v-model="form.email"
          required
          placeholder="Enter your email"
        />
      </div>

      <div class="form-group">
        <label for="message">Message</label>
        <textarea
          id="message"
          v-model="form.message"
          rows="5"
          required
          placeholder="Write your message..."
        ></textarea>
      </div>

      <button type="submit">Send Message</button>
    </form>

    <p v-if="submitted" class="thank-you">
      ✅ Thank you, {{ form.name.split(' ')[0] }}! I’ll get back to you soon.
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  message: ''
})

const submitted = ref(false)

function handleSubmit() {
  console.log('Form submitted:', form.value)
  submitted.value = true

  // Reset form
  form.value = {
    name: '',
    email: '',
    message: ''
  }
}
</script>

<style scoped>
    .contact-container {
    max-width: 600px;
    margin: 5rem auto;
    padding: 2rem;
    border: 2px solid white;
    border-radius: 20px;
    text-align: center;
    color: white;
    }

    h1 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    }

    .intro {
    font-size: 1.1rem;
    margin-bottom: 2rem;
    opacity: 0.8;
    }

    .contact-form {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    }

    .form-group {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    }

    label {
    margin-bottom: 0.5rem;
    font-weight: bold;
    }

    input,
    textarea {
    width: 100%;
    padding: 0.8rem;
    border-radius: 8px;
    border: none;
    background: rgba(255, 255, 255, 0.1);
    color: white;
    font-size: 1rem;
    }

    input:focus,
    textarea:focus {
    outline: 2px solid white;
    }

    button {
    background-color: white;
    color: black;
    font-weight: bold;
    padding: 0.8rem 1.5rem;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
    }

    button:hover {
    background-color: rgba(255, 255, 255, 0.8);
    }

    .thank-you {
    margin-top: 2rem;
    color: lightgreen;
    font-size: 1.2rem;
    }
</style>