import { LightningElement} from 'lwc';
export default class App extends LightningElement {
    hide(){
        this.template.querySelector('.hell').hide();
    }

    show(){
        this.template.querySelector('.hell').show();
    }
}
