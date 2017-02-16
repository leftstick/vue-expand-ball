<template>
    <div class="api-sidebar">
        <div class="api-nav">
            <div class="api-nav-header">Components</div>
            <div class="api-nav-item" v-bind:class="{active: api === 'expand-ball'}"><router-link to="/apidoc?api=expand-ball">expand-ball</router-link></div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        api: {
            type: String,
            required: true
        }
    }
};
</script>

<style scoped>
    .api-sidebar {
        display: block;
        width: 210px;
        padding: 15px;
        border: 1px solid #cccccc;
        border-radius: 4px 0 0 4px;
    }

    .api-sidebar .api-nav .api-nav-header {
        font-weight: bold;
    }

    .api-sidebar .api-nav > .api-nav-item {
        padding: 3px 0 3px 10px;
    }

    .api-sidebar .api-nav > .api-nav-item.active {
        background-color: #eee;
    }

    .api-sidebar .api-nav > .api-nav-item > a {
        text-decoration: none;
    }

    @media screen and (max-width: 960px) {
        .api-sidebar {
            display: none;
        }
    }
</style>