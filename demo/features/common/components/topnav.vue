<template>
    <div class="topnav">
        <router-link to="/home">HOME</router-link>
        <router-link to="/quickstart">QUICK START</router-link>
        <router-link to="/apidoc">API DOCUMENTATION</router-link>
    </div>
</template>

<script>
export default { };
</script>

<style scoped>
    .topnav {
        width: 100%;
        height: 50px;
        display: flex;
        justify-content: center;
    }

    .topnav > a {
        color: #7f8c8d;
        cursor: pointer;
        text-decoration: none;
        padding: 15px;
    }

    .topnav > a.router-link-active {
        color: #424242;
    }

    .topnav > a:hover {
        border-bottom: 3px solid #dd1b16;
    }

    @media screen and (max-width: 800px) {
        .topnav > a {
            padding: 15px 5px 15px 5px;
        }
    }
</style>