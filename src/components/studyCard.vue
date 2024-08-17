<script>

export default {
    name: "studyCard",
    props: {
        cardContent: {
            type: String,
            required: true
        }
    }
}

</script>

<template>
    <main>
        <div id="info">
            <span v-t="'studies.info.qualification'">:</span>
            <span v-t="'studies.info.school'">:</span>
            <span v-t="'studies.info.date'">:</span>
        </div>
        <div id="data">
            <span v-t="`${cardContent}.name`"></span>
            <span v-t="`${cardContent}.center`"></span>
            <span v-t="`${cardContent}.date`"></span>
        </div>
    </main>
    
</template>

<style scoped>

main {
    display: flex;
    justify-content: center;
    margin: 1rem 1rem;

    flex: 0.5;

    padding: 1rem;
    border-radius: 0.5rem;

    background: linear-gradient(45deg, var(--gradient-col1), var(--gradient-col2)) ;
}

#data, #info {
    display: flex;
    flex-direction: column;
    align-items: center;
}

span {
    width: 100%;
    margin: 0.2rem 1rem;
}

</style>