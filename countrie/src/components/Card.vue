<template>
    <article>
        <figure>
            <img :src="flag" :alt="nameCountrie">
        </figure>
        <section class="">
            <h2>
                {{nameCountrie}}
            </h2>
            <Button
            text="Ver detalles"
            v-on:anyAction="toCountrie"
            />
        </section>
    </article>
</template>

<script>
import Button from '@/components/Button';
export default {
    components: {
        Button
    },
    props: {
        nameCountrie: String,
        flag: String
    },
    methods: {
        toCountrie() {
            this.$router.push( {name: 'countrie', params: {id: this.nameCountrie} } );
        }
    }
}
</script>

<style scoped>

</style>