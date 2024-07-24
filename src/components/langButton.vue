<script>
export default {
  name: 'lButton',
  data() {
    return {
      esp: true
    };
  },
  methods: {
    change() {
      this.esp = !this.esp;
      this.$i18n.locale = this.esp ? 'es' : 'en';
    }
  },
  computed: {
    language() {
      return this.esp ? 'es' : 'en';
    }
  }
};
</script>

<template>
    <button id="lang" @click="change">
        <p v-t="'name'"></p>
    </button>
</template>

<style lang="scss">

#lang {
    position: fixed;
    top: 0.5rem;
    left: 0.5rem;

    width: 3rem;
    height: 2rem;
    background: linear-gradient(45deg, rgba(3, 49, 201, 0.4), rgba(17, 239, 255, 0.4));
    color: white;
    border: none;
    border-radius: 0.5rem;
    transition: transform 0.5s;

    filter: drop-shadow(-6px 10px 5px rgba(0, 0, 0, 0.5));
    font-weight: bold;
    z-index: 99;
}

#lang:hover {
    transform: scale(1.04);
}

</style>