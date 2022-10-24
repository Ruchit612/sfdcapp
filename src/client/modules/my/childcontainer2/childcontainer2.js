import { LightningElement, track} from 'lwc';
export default class ChildContainer2 extends LightningElement {
    loaded = false;
    left = 0;
    current = 5;
    right = 9;
    sliderLength = 5;
    rightVariants=true;
    leftVariants=false;
    @track updatedCard = [];
    @track card = [
        {
            label: 'Card 11',
            id: 0
        },
        {
            label: 'Card 12',
            id: 1
        },
        {
            label: 'Card 13',
            id: 2
        },
        {
            label: 'Card 14',
            id: 3
        },
        {
            label: 'Card 15',
            id: 4
        },
        {
            label: 'Card 16',
            id: 5
        },
        {
            label: 'Card 17',
            id: 6
        },
        {
            label: 'Card 18',
            id: 7
        },
        {
            label: 'Card 19',
            id: 8
        },
        {
            label: 'Card 20',
            id: 9
        }
    ];

    renderedCallback() {
        if (!this.loaded) {
            console.log('in');
            this.updatedCard = this.card.filter(
                (element) => element.id < this.current
            );
        }
        this.loaded = true;
    }
    

    handleLeft(){
        if(this.left>0){
            this.left=this.left-1;
            this.updatedCard=[];
            this.rightVariants=[];
            for(let i=this.left; i<(this.sliderLength+this.left); i++){
                this.updatedCard.push(this.card[i])
            }
            if(this.left==0){
                this.leftVariants=false;
            }
        }
    }

    handleRight(){
        if(this.left<=(this.right-this.sliderLength)){
            this.leftVariants=true;
            this.left=this.left+1;
            this.rightVariants=true;
            this.updatedCard=[];
            for(let i=0; i<(this.sliderLength+this.left); i++){
                if(i>=this.left){
                    this.updatedCard.push(this.card[i])
                }
            }
            if(this.left>(this.right-this.sliderLength)){
                this.rightVariants=false;
            }
        }
    }
}