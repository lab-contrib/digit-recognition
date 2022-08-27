import { Component } from 'nefbl'

import style from './index.scss'
import template from './index.html'

@Component({
    template,
    styles: [style]
})
export default class {

    callback: Function

    init(init: any) {
        this.callback = init.callback
    }

    doBack(event: Event) {
        this.callback(+(<HTMLElement>event.target).innerText)
    }

}
