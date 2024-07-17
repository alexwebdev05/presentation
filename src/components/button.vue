<script>

    export default {
        name: "buttonCollection",
    }

</script>

<template>
    <button>
        <slot></slot>
    </button>
</template>

<style scoped lang="scss">

button {
    display: flex;
    align-items: center;
    font-weight: bold;

    width: fit-content;
    border-radius: 0.5rem;
    border: transparent;
    background: linear-gradient(45deg, rgba(3, 49, 201, 0.4), rgba(17, 239, 255, 0.4));
    padding: 0.4rem 0.6rem;
    cursor: pointer;
    transition: transform 0.5s;

    filter: drop-shadow(-6px 10px 5px rgba(0, 0, 0, 0.5));
}

button:hover {
    transform: scale(1.04);
}


@media screen and (max-width: 920px) {
    button {
        max-height: 2rem;
    }
}

</style>