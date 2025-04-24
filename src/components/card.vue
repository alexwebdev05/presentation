<script>

export default {
    name: 'Card',
    props: {
        imagePath: {
            type: String,
            required: true
        },
        imageUrl: {
            type: String
        }
    }
}

</script>

<template>
    

    <a :href="imageUrl" target="_blank"><img :src="imagePath" alt="Project 1"></a>


</template>

<style scoped lang="scss">

a {
    display: flex;
    justify-content: center;
    flex: 33%;
}

$img-width: 20rem;

img {
    width: $img-width;
    cursor: pointer;
    border-radius: 0.5rem;
    transition: transform 0.5s;

    margin: 1rem;

    &:hover {
        transform: scale(1.04);
    }
}

</style>