<script>

export default {
    name: 'myFooter',
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
    position: absolute;
    left: 0;
    width: 100%;
    padding: 0.8rem 0;
    margin-top: 5rem;

    display: flex;
    justify-content: center;
    align-items: center;


    
    background: linear-gradient(45deg, var(--gradient-col1), var(--gradient-col2));
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
