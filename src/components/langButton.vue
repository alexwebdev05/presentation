<script>
export default {
    data() {
        return {
            esp: true,
            eng: false,
            lenguages: {
                esp: 'ES',
                eng: 'EN'
            }
    }
    },
    methods: {
        change() {
            if (this.esp == true) {
                this.esp = false
                this.eng = true
            } else {
                this.esp = true
                this.eng = false
            }
        }
    },
    computed: {
        lenguage() {
            return this.esp ? this.lenguages.esp : this.lenguages.eng;
        }
    }
}

</script>
<template>
    <button id="lang" @click="change">
        {{ lenguage }}
    </button>
</template>

<style lang="scss">

@keyframes buttonHover {
    0% {
        transform: scale(1);
    }
    100% {
        transform: scale(1.1);
    }
}

@keyframes buttonHoverReverse {
    0% {
        transform: scale(1.1);
    }
    100% {
        transform: scale(1);
    }
}

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

    filter: drop-shadow(-6px 10px 5px rgba(0, 0, 0, 0.5));
    font-weight: bold;
}

#lang:hover {
    animation: buttonHover 500ms ease forwards;
}

#lang:not(:hover) {
    animation: buttonHoverReverse 500ms ease forwards;
}

</style>