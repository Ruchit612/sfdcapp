import { LightningElement, track } from 'lwc';
import * as jq from 'jquery';
import * as cs from 'slick-carousel';
export default class ChildContainer1 extends LightningElement {
    
    renderedCallback() {
        if (jq) {
            console.log("jquery is loaded");
        } else {
            console.log("Not loaded");
        }
        if(cs){
            console.log("caraousal is loaded");
        }
        else{
            console.log("Not loaded");
        }
    }
    startIndex=0;
    @track card = [
        {
            Label: 'Card 1'
        },
        {
            Label: 'Card 2'
        },
        {
            Label: 'Card 3'
        },
        {
            Label: 'Card 4'
        },
        {
            Label: 'Card 5'
        }
        /*{
            Label: 'Card 6'
        },
        {
            Label: 'Card 7'
        },
        {
            Label: 'Card 8'
        },
        {
            Label: 'Card 9'
        },
        {
            Label: 'Card 10'
        }*/
    ];

}
