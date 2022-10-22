import { LightningElement, track } from 'lwc';
export default class ChildContainer1 extends LightningElement {
    
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
