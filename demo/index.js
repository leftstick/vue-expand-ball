import Vue from 'vue';
import extensions from './fw/ext';
import directives from './features/common//directives';
import documentation from './documentation';

class App {

    constructor() {
        this.extensionsOpts = extensions();
        Vue.config.devtools = process.env.NODE_ENV === 'dev';
    }

    createVueOpts() {
        this.vueOps = {
            components: {
                documentation
            },
            ...this.extensionsOpts
        };
    }

    registerDirectives() {
        directives.forEach(dir => {
            Vue.directive(dir.name, dir.directive);
        });
    }

    destroySplash() {
        document.head.removeChild(document.querySelector('#splash-spinner'));
        document.body.removeChild(document.querySelector('.spinner'));
    }

    launch() {
        new Vue(this.vueOps).$mount('#application');
    }

    run() {
        this.createVueOpts();
        this.registerDirectives();
        this.destroySplash();
        this.launch();
    }

}

new App().run();
