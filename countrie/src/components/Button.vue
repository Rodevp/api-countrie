<template>
    <button v-on:click="anyAction">
        {{text}}
    </button>
</template>

<script>
export default {
    props: {
        text: String
    },
    methods: {
        anyAction() {
            this.$emit('anyAction');
        }
    }
}
</script>

<style scoped>

</style>