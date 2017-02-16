<template>
    <div class="expand-ball" 
        v-toggle-expand="opts" 
        v-setup-style="opts"
        v-draggable>
        <div class="center-ball" @click="toggle">
            <slot name="ball-open" v-if="opts.expanded">-</slot>
            <slot name="ball-close" v-if="!opts.expanded">+</slot>
        </div>
        <div class="rounded-menus">
            <slot name="menu"></slot>
        </div>
    </div>
</template>

<script>
import {retrieveMenuNodes} from '../helper/dom';

import toggleExpand from '../directives/toggleExpand';
import setupStyle from '../directives/setupStyle';
import draggable from '../directives/draggable';

export default {
    name: 'expand-ball',
    data() {
        return {
            expanded: false
        };
    },
    props: {
        options: {
            type: Object,
            default() {
                return {
                    ballSize: 30,
                    menuSize: 30,
                    radius: 60,
                    ballColor: '#41b883',
                    menuColor: '#41b883'
                };
            }
        }
    },
    computed: {
        opts() {
            const ballSize = this.options.ballSize || 30;
            const ballColor = this.options.ballColor || '#41b883';
            return {
                ballSize: ballSize,
                menuSize: !this.options.menuSize || this.options.menuSize > ballSize ? ballSize : this.options.menuSize,
                expanded: this.expanded,
                radius: this.options.radius || 60,
                ballColor: ballColor,
                menuColor: this.options.menuColor || ballColor
            };
        }
    },
    mounted() {
        retrieveMenuNodes(this.$el)
        .forEach(node => {
            node.addEventListener('click', () => {
                if (this.expanded) {
                    this.expanded = !this.expanded;
                }
            }, false);
        });
    },
    methods: {
        toggle() {
            if (this.$el.dataset.dragging === 'true') {
                return;
            }
            this.expanded = !this.expanded;
        }
    },
    directives: {
        toggleExpand,
        setupStyle,
        draggable
    }
};

</script>

<style scoped>
    .expand-ball {
        position: fixed;
        margin: 0;
        padding: 0;
        text-align: center;
        color: #fff;
        cursor: pointer;
        user-select: none;
    }

    .expand-ball .rounded-menus > *,
    .center-ball {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }

    .expand-ball .rounded-menus > * {
        transition: all 0.5s;
    }

    .center-ball {
        z-index: 1;
        border-radius: 50%;
    }
</style>