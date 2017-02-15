<template>
    <div class="expand-ball" 
        :data-open="opts.openTxt" :data-close="opts.closeTxt" 
        v-toggle-expand="opts" 
        v-setup-style="opts"
        v-draggable>
        <div class="center-ball" @click="toggle">{{ opts.expanded ? opts.openTxt : opts.closeTxt }}</div>
        <div class="rounded-menus">
            <slot></slot>
        </div>
    </div>
</template>

<script>
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
                    openTxt: '-',
                    closeTxt: '+',
                    ballSize: 40,
                    menuSize: 40,
                    radius: 60,
                    ballColor: '#41b883',
                    menuColor: '#41b883'
                };
            }
        }
    },
    computed: {
        opts() {
            const ballSize = this.options.ballSize || 40;
            const ballColor = this.options.ballColor || '#41b883';
            return {
                openTxt: this.options.openTxt || '-',
                closeTxt: this.options.closeTxt || '+',
                ballSize: ballSize,
                menuSize: !this.options.menuSize || this.options.menuSize > ballSize ? ballSize : this.options.menuSize,
                expanded: this.expanded,
                radius: this.options.radius || 60,
                ballColor: ballColor,
                menuColor: this.options.menuColor || ballColor
            };
        }
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