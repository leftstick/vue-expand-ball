<template>
    <div class="quickstart">
        <div class="container">
            <h1 class="page-title">Quickstart</h1>
            <p style="margin-bottom: 15px;">To start using <code>vue-expand-ball</code>, follow these simple steps for module setup. Afterwards, read <router-link to="/apidoc">API DOCUMENTATION</router-link> to learn about advanced usage.</p>
            <install class="section"></install>
            <import-it class="section"></import-it>
            <usage class="section"></usage>
        </div>
    </div>
</template>

<script>
import install from './subs/install';
import importIt from './subs/import-it';
import usage from './subs/usage';

export default {
    components: {
        install,
        importIt,
        usage
    }
};
</script>

<style>
    .quickstart .menu {
        list-style-type: circle;
    }

    .quickstart .menu li {
        margin-bottom: 10px;
    }

    .quickstart .type-name {
        margin-bottom: 10px;
    }
</style>

<style scoped>
    $width: 1000px;

    .quickstart {
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .quickstart .container {
        width: $width;
    }

    @media screen and (max-width: $width) {
        .quickstart .container {
            width: 100%;
        }
    }
</style>