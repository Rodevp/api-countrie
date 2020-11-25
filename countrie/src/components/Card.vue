<template>
    <article class="card">
        <figure class="card__image">
            <img :src="flag" :alt="nameCountrie" class="card__image__thumbnail">
        </figure>
        <section class="card__body">
            <h2 class="card__body__title">
                {{nameCountrie}}
            </h2>
            <Button
            class="button"
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
    .card {
        border-radius: 5px;
        border: 1px solid #dbdbdb;
        display: flex;
        flex-basis: 300px;
        flex-direction: column;
        flex-grow: 2;
        height: 300px;
        align-items: center;
        margin: 1rem 0.5rem;
    }
    .card__image {
        border-bottom: 1px solid #9e9e9e;
        height: 150px;
        width: 100%;
        margin: 0;
    }
    .card__image__thumbnail {
        height: 100%;
        width: 100%;
    }
    .card__body {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        height: 100%;
        width: 100%;
    }
    .card__body__title {
        border-bottom: 1px solid #dbdbdb;
        height: 40px;
        width: 80%;
        margin: 10px 10%; 
        text-align: center;
    }
    .button {
        background-color: #00c853;
        border: 1px solid #00c853;
        height: 40px;
        width: 150px;
        text-align: center;
        margin: 0 auto;
        color: #ffffff;
    }
</style>