<template>
    <main>
        <h1>
            soy el home bro 😎
        </h1>
        <section class="search">
            <input type="text" v-model="searchCountrie">
        </section>
        <section class="wrapper" v-for="countrie in filterCountries" v-bind:key="countrie.name">
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
            countries: [],
            searchCountrie: ''
        }
    },
    computed:{
        filterCountries() {
            const filterValue = this.searchCountrie.toLowerCase();
            const result = this.countries.filter(countrie => countrie.name.toLowerCase().includes(filterValue) );
            return result;
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