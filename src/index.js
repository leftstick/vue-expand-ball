import ExpandBall from './components/expand-ball';

const components = [
    ExpandBall
];

export const VueExpandBall = {
    install(Vue) {
        if (VueExpandBall.installed) {
            return;
        }

        components.forEach(_component => {
            Vue.component(_component.name, _component);
        });
    }
};
