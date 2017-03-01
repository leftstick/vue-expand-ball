<template>
    <div class="home">
        <h1 class="page-title">vue-expand-ball</h1>
        <img src="../../img/preview.gif" alt="preview"/>

        <github></github>

        <div class="home-desc">
            <about class="section"></about>
            <contribution class="section"></contribution>
        </div>
    </div>
</template>

<script>
import github from './subs/github';
import about from './subs/about';
import contribution from './subs/contribution';

export default {
    data() {
        return {
            opts: {
                ballSize: 45,
                menuSize: 40,
                menuColor: 'red'
            }
        };
    },
    components: {
        github,
        about,
        contribution
    }
};
</script>

<style scoped>
    $width: 800px;
    $s-width: 100%;

    .home {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .home-desc {
        width: $width;
    }

    @media screen and (max-width: 800px) {
        .home-desc {
            width: $s-width;
        }
        img {
            width: $s-width;
        }
    }
</style>