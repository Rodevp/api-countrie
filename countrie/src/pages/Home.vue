<template>
    <main>
        <h1>
            soy el home bro 😎
        </h1>
        <section class="wrapper" v-for="countrie in countries" v-bind:key="countrie.name">
            <Card
            :nameCountrie="countrie.name"
            :flag="countrie.flag"
            />
        </section>
    </main>    
</template>

<script>

import api from '@/utils/api';
import Card from '@/components/Card';

export default {
    name: 'Home',
    components: {
        Card
    },
    data() {
        return {
            countries: []
        }
    },
    async created() {
        const data = await api.getCountries('https://restcountries.eu/rest/v2/all');
        this.countries = data;
    }
}
</script>

<style scoped>

</style>