<template>
    <div class="home">
        <h1 class="page-title">vue-expand-ball</h1>
        <expand-ball :options="opts" class="init-ball-pos">
            <span>menu1</span>
            <span>menu2</span>
            <span>menu3</span>
        </expand-ball>

        <github></github>

        <div class="home-desc">
            <about class="section"></about>
            <contribution class="section"></contribution>
        <div>
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
                openTxt: '|',
                ballSize: 60,
                menuSize: 40,
                ballColor: 'red'
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

    .init-ball-pos {
        top: 100px;
        left: 100px;
    }

    @media screen and (max-width: 800px) {
        .home-desc {
            width: $s-width;
        }
    }
</style>