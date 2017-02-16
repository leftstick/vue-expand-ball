import hljs from 'highlight.js';

export default {
    bind(el, bindings) {
        const snippets = el.querySelectorAll('.snippet pre code');
        Array
            .prototype
            .slice
            .apply(snippets)
            .forEach(s => {
                hljs.highlightBlock(s);
            });
    }
};
