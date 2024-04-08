<script>

export default {
    name: 'DivCollection',
    data() {
        return {
            language: this.$i18n.locale
        }
    }
}

</script>

<template>

        <div id="divRight-container">
            <div id="divRight-content">
                <slot></slot>
            </div>
        </div> 
    
</template>

<style scoped>

#divRight-container {
    perspective: 1500px;
}

#divRight-content {
    padding: 1.5rem;
    border-radius: 0.5rem;
    background: linear-gradient(45deg, rgba(3, 49, 201, 0.4), rgba(17, 239, 255, 0.4)) ;
    filter: drop-shadow(-6px 10px 5px rgba(0, 0, 0, 0.5));
}

</style>