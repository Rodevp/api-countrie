<template>
    <main>
        <h1 class="title__home">
            Home 😎
        </h1>
        <section class="search">
            <input type="text" v-model="searchCountrie" placeholder="Buscar pais">
        </section>
        <section class="wrapper" >
            <Card
            v-for="countrie in filterCountries" v-bind:key="countrie.name"
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
    .title__home {
        border-bottom: 1px solid #bdbdbd;
        height: 50px;
        text-align: center;
    }
    .search {
        border-bottom: 1px solid #bdbdbd;
        height: 50px;
    }
    .search input {
        height: 25px;
        width: 80%;
        margin: 2px 10%;
    }
    .wrapper {
        border: 1px solid black;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        min-height: 500px;
        margin: 0 10%;
        width: 80%;
    }
</style>