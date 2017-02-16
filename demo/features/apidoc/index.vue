<template>
    <div class="apidoc">
        <div class="container">
            <h1 class="page-title">API Documentation</h1>
            <div class="doc">
                <api-sidebar v-if="api" :api="api"></api-sidebar>
                <api-content v-if="api" :api="api"></api-content>
            </div>
        </div>
    </div>
</template>

<script>
import apiSidebar from './subs/api-sidebar';
import apiContent from './subs/api-content';

export default {
    computed: {
        api() {
            return this.$route.query.api;
        }
    },
    mounted() {
        if (!this.$route.query.api) {
            this.$router.replace({
                path: 'apidoc',
                query: {
                    api: 'expand-ball'
                }
            });
        }
    },
    components: {
        apiSidebar,
        apiContent
    }
};
</script>

<style scoped>
    $width: 1200px;

    .apidoc {
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .apidoc .container {
        width: $width;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .apidoc .container .doc {
        display: flex;
        width: 100%;
        flex-grow: 2;
    }

    .apidoc .container .doc api-sidebar {
        flex-shrink: 0;
    }

    @media screen and (max-width: $width) {
        .apidoc .container {
            width: 100%;
        }
    }
</style>