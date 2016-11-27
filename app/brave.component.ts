import { Component } from '@angular/core'

@Component({

    selector: 'brave-component',
    template: 'Hi, I am {{name}}'

})

export class BraveComponent {

    name: String;

    constructor() {
        this.name = 'The Most Brave Component';
    }

}