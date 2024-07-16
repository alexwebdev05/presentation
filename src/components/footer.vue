<script>

export default {
    name: 'footerCollection',
    data() {
        return {
            language: this.$i18n.locale
        }
    }
}

</script>

<template>
    
    <footer id="footer">
        <p id="text"><slot></slot></p>
    </footer>

</template>

<style scoped>

#footer {
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;

    width: 100%;
    padding: 0.8rem 0;
    background: linear-gradient(45deg, rgba(3, 49, 201, 0.4), rgba(17, 239, 255, 0.4));
}

#text {
    margin: 0 2rem;
}

@media screen and (max-width: 920px) {

    p {
        margin: 0 1rem;
    }
    
    #footer {
        font-size: 0.7rem;
        text-align: center;
    }

    #text {
        padding: 0 1rem;
        margin: 0 5rem;
    }

}

</style>
