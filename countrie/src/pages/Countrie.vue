<template>
    <main>
        <h1>
            Countrie: {{countrie.name}} 🚩
        </h1>
        <section class="layout">
            <figure class="layout__image">
                <img :src="countrie.flag" :alt="countrie.name">
            </figure>
            <section class="layout__information">
                <ul>
                    <li>Region: {{countrie.region}}</li>
                    <li>Capital: {{countrie.capital}}</li>
                    <li>Population: {{countrie.population}} mill. </li>
                    <li>Time Zone: {{countrie.timezones[0]}}</li>
                    <li>Currency: {{countrie.currencies[0].name}}</li>
                    <li>{{`lat: ${countrie.latlng[0]} - long: ${countrie.latlng[1]}`}}</li>
                </ul>
            </section>
            <Button
            text="Ir a home"
            v-on:anyAction="toHome"
            />
        </section>
    </main>
</template>

<script>
import api from '@/utils/api';
import Button from '@/components/Button';
export default {
    name: 'Countrie',
    components: {
        Button
    },
    data() {
        return {
            countrie: {}
        }
    },
    methods: {
        toHome() {
            this.$router.back();
        }
    },
    async created() {
        try {
            const countrieData = await api.getCountrie('https://restcountries.eu/rest/v2/name', this.$route.params.id);
            this.countrie = countrieData[0];
        } catch (error) {
            console.log(error.message);
        }
    }

}
</script>

<style scoped>

</style>