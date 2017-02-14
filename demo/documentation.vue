<template>
    <div class="root">
        <a href="https://github.com/leftstick/vue-expand-ball"><img style="position: absolute; top: 0; right: 0; border: 0;" src="https://camo.githubusercontent.com/38ef81f8aca64bb9a64448d0d70f1308ef5341ab/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f6461726b626c75655f3132313632312e706e67" alt="Fork me on GitHub" data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png"></a>

        <topnav></topnav>

        <router-view id="view"></router-view>
    </div>
</template>

<script>
import topnav from './features/common/components/topnav';
export default {
    components: {
        topnav
    }
};

</script>

<style>
    .root {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }

    #view {
        padding: 30px 10px 10px 10px;
        display: flex;
        flex-grow: 2;
    }

    code {
        font-style: italic;
        font-weight: bold;
        color: gray;
    }

    p {
        line-height: 25px;
        margin-top: 3px;
        font-family: 'Noto Sans','PT Sans','Open Sans','Helvetica Neue',Arial,Helvetica,sans-serif;
    }

    .page-title {
        text-align: center;
        margin-bottom: 15px;
    }

    .section {
        display: block;
        margin-bottom: 20px;
    }

    .section h1 {
        margin-bottom: 10px;
    }

    .snippet {
        padding: 10px;
        background-color: #f5f5f5;
        border: 1px solid #cccccc;
    }

    .snippet code {
        font-style: normal;
        font-weight: normal;
        color: #fff;
    }

    blockquote {
        margin: 10px 0 10px 0;
        border-left: 5px solid gray;
        padding-left: 10px;
    }

    .matrix {
        width: 100%;
        border-collapse: collapse;
        margin: 10px 0 10px 0;
    }

    .matrix td,
    .matrix th {
        border:1px solid #98bf21;
        padding:3px 7px 2px 7px;
    }

    .matrix th {
        text-align: left;
        padding-top: 5px;
        padding-bottom: 4px;
        background-color: #A7C942;
        color: #ffffff;
    }

    .matrix tbody > tr {
        line-height: 25px; 
    }

    .matrix .label {
        display: inline-block;
        padding-left: 5px;
        padding-right: 5px;
        border-radius: 2px;
        background-color: #5bc0de;
        color: #fff;
        line-height: normal;
    }

    .matrix .label.required {
        background-color: #f04124;
    }
</style>