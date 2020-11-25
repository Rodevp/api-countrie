<template>
    <main>
        <h1 class="countrie__tittle">
            Countrie: {{countrie.name}} 🚩
        </h1>
        <section class="layout">
            <figure class="layout__image">
                <img :src="countrie.flag" :alt="countrie.name" class="image__layout__thubmnail">
            </figure>
            <section class="layout__information">
                <ul class="items__information">
                    <li>Region: {{countrie.region}}</li>
                    <li>Capital: {{countrie.capital}}</li>
                    <li>Population: {{countrie.population}} mill. </li>
                    <li>Time Zone: {{countrie.timezones[0]}}</li>
                    <li>Currency: {{countrie.currencies[0].name}}</li>
                    <li>{{`lat: ${countrie.latlng[0]} - long: ${countrie.latlng[1]}`}}</li>
                </ul>
            </section>
            <Button
            class="button"
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
    .countrie__tittle {
        border-bottom: 1px solid #dbdbdb;
        height: 40px;
        text-align: center;
    }
    .layout {
        display: flex;
        flex-direction: column;
        height: 500px;
        justify-content: center;
        align-items: center;
        width: 80%;
        margin: 0 10%;
    }
    .layout__image {
        height: 300px;
        width: 100%;
    }
    .image__layout__thubmnail {
        width: 80%;
        height: 100%;
        padding: 0 10%;
    }

    .layout__information {
        height: 150px;
        width: 80%;
    }
    .items__information {
        align-items: center;
        display: flex;
        flex-wrap: wrap;
        width: 90%;
        justify-content: space-between;
        list-style: none;
    }
    .items__information li {
        border-bottom: 1px solid #9b9b9b;
        height: 50px;
        flex-basis: 125px;
        text-align: center;
    }
    .button {
        background-color: #00c853;
        border: 1px solid #00c853;
        color: #ffffff;
        height: 50px;
        width: 150px;
    }

    @media screen and (min-width: 660px) {
        .countrie__tittle {
            margin: 2rem 0;
        }
        .layout {
            min-height: 500px;
        }
        .layout__information {
            margin: 1rem 0;
        }
        .button {
            margin: 1.5rem 0;
        }
    }

</style>