import { LightningElement,track} from 'lwc';
export default class Navbar extends LightningElement {
    @track mq
    @track mobileview
    connectedCallback() {
        window.addEventListener('resize', this.myFunction); 
        this.mq = window.matchMedia("(min-width: 1200px)");
        this.widthChange()
          
    }
    //@track count = 0;
myFunction = () => {
    //this.count = this.count += 1;
    //console.log('resized => ', this.count);
    this.mq = window.matchMedia("(min-width: 1200px)");
    this.mq.addListener(this.widthChange());
};

widthChange() {
    if (this.mq.matches) 
    {
        this.mobileview=true;
    } 
    else 
    {
       this.mobileview=false;
    }
}

}
