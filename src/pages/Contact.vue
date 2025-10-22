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
       Thank you, {{ form.name.split(' ')[0] }}! I’ll get back to you soon.
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

  //Hide message after some time
  setTimeout( () => {
    submitted.value = false
  }, 3000)

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
    color: rgb(196, 144, 238);
    font-size: 1.2rem;
    font-weight: bold;
    opacity: 1;
    animation: fadeOut 3s ease forwards;
  }

  /* Futuristic cinematic fade-out animation */
  @keyframes fadeOut {
    0% {
      opacity: 1;
      transform: scale(1);
      text-shadow: 0 0 10px rgba(196, 144, 238, 0.8);
    }
    50% {
      opacity: 0.7;
      transform: scale(1.05);
      text-shadow: 0 0 20px rgba(196, 144, 238, 1);
    }
    100% {
      opacity: 0;
      transform: scale(0.95);
      text-shadow: 0 0 0 rgba(196, 144, 238, 0);
    }
  }
</style>