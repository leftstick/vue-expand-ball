<template>
    <div class="usage">
        <h1>Usage</h1>
        <ul class="menu" v-highlight>
            <li>
                <div>
                    <div class="type-name">Use <code>vue-expand-ball</code> module:</div>
                    <div class="snippet">
                        <pre><code class="javascript">Vue.use(VueExpandBall);</code></pre>
                    </div>
                </div>
            </li>
            <li>
                <div>
                    <div class="type-name">Add <code>&lt;expand-ball&gt;</code> element in template:</div>
                    <div class="snippet">
                        <pre><code class="html">&lt;expand-ball open="|" close="X"&gt;
    &lt;span&gt;menu1&lt;/span&gt;
    &lt;span&gt;menu2&lt;/span&gt;
    &lt;span&gt;menu3&lt;/span&gt;
&lt;/expand-ball&gt;</code></pre>
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