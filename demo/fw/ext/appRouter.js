import Vue from 'vue';
import VueRouter from 'vue-router';

import {routes} from '../../features';

export default function() {
    Vue.use(VueRouter);

    let defaultPaths = routes
        .filter(route => route.isDefault)
        .map(route => route.path);

    if (!defaultPaths.length) {
        defaultPaths = [routes[0].path];
    }

    const defaultRoute = {
        path: '*',
        redirect: defaultPaths[0]
    };

    return new VueRouter({
        routes: [...routes, defaultRoute],
        mode: 'hash',
        scrollBehavior: function(to, from, savedPosition) {
            const defaultPos = {
                x: 0,
                y: 0
            };
            return savedPosition || defaultPos;
        }
    });
}
