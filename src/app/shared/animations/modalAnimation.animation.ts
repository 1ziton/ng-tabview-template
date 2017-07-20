import {trigger, state, style,transition,animate} from "@angular/core";

export let modalAnimation=trigger('modalState',[
    state('in',style({
        right: '0'
    })),
    state('out', style({
        right: '-1040px'
    })),
    transition('out => in', animate('200ms ease-in')),
    transition('in => out', animate('200ms ease-out'))
]);
