<template>
    <div>
        <p>
            The <code>expand-ball</code> component is the core of this module. It is used to instantiate a draggable menu item in your page.
        </p>
        <h2 class="title">Usage</h2>
        <div class="snippet" v-highlight>
            <pre><code class="html">&lt;expand-ball :options="{expression}"&gt;
    &lt;span slot="menu"&gt;Menu1&lt;span&gt;
    &lt;span slot="menu"&gt;Menu2&lt;span&gt;
&lt;/expand-ball&gt;</code></pre>
        </div>
        <br/>
        <h2 class="title">Attributes</h2>
        <blockquote>Required properties are in red</blockquote>
        <table class="matrix">
            <thead>
                <tr>
                    <th style="width: 80px;">Param</th>
                    <th>Type</th>
                    <th>Details</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>options</td>
                    <td><span class="label">expression</span></td>
                    <td>
                    Literal for constructing expand-ball. See below
                    </td>
                </tr>
            </tbody>
        </table>

        <br/>
        <h2 class="title">Options</h2>
        <blockquote>Required properties are in red</blockquote>
        <table class="matrix">
            <thead>
                <tr>
                    <th style="width: 80px;">Param</th>
                    <th>Type</th>
                    <th>Details</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>ballSize</td>
                    <td><span class="label">number</span></td>
                    <td>
                    The diameter of the center ball item. Default is: <code>30</code>
                    </td>
                </tr>
                <tr>
                    <td>menuSize</td>
                    <td><span class="label">number</span></td>
                    <td>
                    The diameter of the rounded menu item. Default is: same as <code>ballSize</code>
                    </td>
                </tr>
                <tr>
                    <td>radius</td>
                    <td><span class="label">number</span></td>
                    <td>
                    The length between center ball item and rounded menu item. Default is: <code>60</code>
                    </td>
                </tr>
                <tr>
                    <td>ballColor</td>
                    <td><span class="label">string</span></td>
                    <td>
                    The color of center ball item. Default is: <code>41b883</code>
                    </td>
                </tr>
                <tr>
                    <td>menuColor</td>
                    <td><span class="label">string</span></td>
                    <td>
                    The color of rounded menu item. Default is: same as <code>ballColor</code>
                    </td>
                </tr>
            </tbody>
        </table>

        <br/>
        <h2 class="title">Slots</h2>
        <blockquote>Required properties are in red</blockquote>
        <table class="matrix">
            <thead>
                <tr>
                    <th style="width: 80px;">Param</th>
                    <th>Type</th>
                    <th>Details</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>ball-open</td>
                    <td><span class="label">any</span></td>
                    <td>
                    Element to be used as open status for center ball item. Default is: <code>-</code>
                    </td>
                </tr>
                <tr>
                    <td>ball-close</td>
                    <td><span class="label">any</span></td>
                    <td>
                    Element to be used as close status for center ball item. Default is: <code>+</code>
                    </td>
                </tr>
                <tr>
                    <td>menu</td>
                    <td><span class="label">any</span></td>
                    <td>
                    Element to be used as rounded menu item
                    </td>
                </tr>
            </tbody>
        </table>

        <br/>
        <h2 class="title">Example</h2>
        <expand-ball :options="opts" class="ball-pos">
            <label slot="ball-open">O</label>
            <span slot="menu" @click="clicked('M1')">M1</span>
            <span slot="menu" @click="clicked('M2')">M2</span>
            <span slot="menu" @click="clicked('M3')">M3</span>
        </expand-ball>
        <div class="snippet" v-highlight>
            <pre><code class="html">&lt;expand-ball :options="opts"  class="ball-pos"&gt;
    &lt;label slot="ball-open"&gt;O&lt;/label&gt;

    &lt;span slot="menu" @click="clicked('M1')"&gt;M1&lt;/span&gt;
    &lt;span slot="menu" @click="clicked('M2')"&gt;M2&lt;/span&gt;
    &lt;span slot="menu" @click="clicked('M3')"&gt;M3&lt;/span&gt;
&lt;/expand-ball&gt;</code></pre>
        </div>
        <br/>
        <div class="snippet" v-highlight>
            <pre><code class="javascript">export default {
    data() {
        return {
            opts: {
                ballSize: 40,
                menuSize: 30,
                menuColor: 'red'
            }
        };
    },
    methods: {
        clicked(str) {
            alert(str + ' is just clicked!!');
        }
    }
};</code></pre>
        </div>
        <br/>
        <div class="snippet" v-highlight>
            <pre><code class="css">.ball-pos {
    bottom: 200px;
    right: 200px;
}</code></pre>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            opts: {
                ballSize: 40,
                menuSize: 30,
                menuColor: 'red'
            }
        };
    },
    methods: {
        clicked(str) {
            alert(str + ' is just clicked!!');
        }
    }
};
</script>

<style scoped>
    .ball-pos {
        bottom: 200px;
        right: 200px;
    }
</style>