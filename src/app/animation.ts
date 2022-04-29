import {animate, animateChild, group, query, style, transition, trigger} from "@angular/animations";

const steps = [
    style({position: 'relative'}),
    query(':enter, :leave', [
        style({
            position: 'absolute',
            top: 0,
            right: 0,
            width: '100%'
        })
    ]),
    query(':enter', [
        style({right: '-100%'})
    ]),
    query(':leave',  animateChild()),
    group([
        query(':leave', [
            animate('0ms ease-out', style({display: 'none'}))
        ]),
        query(':enter', [
            animate('300ms ease-out', style({right: '0%'}))
        ]),
    ]),
]

export const slideInAnimation =
    trigger('routeAnimations', [
        transition('* <=> *', steps),
    ]);
