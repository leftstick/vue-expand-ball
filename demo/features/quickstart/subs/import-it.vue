<template>
    <div class="import-it">
        <h1>Import</h1>
        <ul class="menu" v-highlight>
            <li>
                <div>
                    <div class="type-name">ES2015:</div>
                    <div class="snippet">
                        <pre><code class="javascript">import VueExpandBall from 'vue-expand-ball';</code></pre>
                    </div>
                    <p>It is recommended to use <a href="http://webpack.github.io/" target="_blank">webpack</a> to bootstrap dependencies via ES2015 or CommonJS modular</p>
                </div>
            </li>
            <li>
                <div>
                    <div class="type-name">CommonJS:</div>
                    <div class="snippet">
                        <pre><code class="javascript">const VueExpandBall = require('vue-expand-ball');</code></pre>
                    </div>
                    <p>It is recommended to use <a href="http://webpack.github.io/" target="_blank">webpack</a> to bootstrap dependencies via ES2015 or CommonJS modular</p>
                </div>
            </li>
            <li>
                <div>
                    <div class="type-name">Script:</div>
                    <div class="snippet">
                        <pre><code class="html">&lt;script type="text/javascript" src="https://unpkg.com/vue/dist/vue.js"&gt;&lt;/script&gt;
&lt;script type="text/javascript" src="node_modules/vue-expand-ball/dist/vue-expand-ball.js"&gt;&lt;/script&gt;
&lt;script type="text/javascript"&gt;
    var VueExpandBall = window.VueExpandBall;
&lt;/script&gt;</code></pre>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default { };
</script>

<style scoped>
</style>