export class AlertBaseComponent {

  showOrHide = 'hide';
  alertMessage = null;
  alertTimeout = null;
  subs = null;

  constructor() { }

  showMessage(data){
    this.alertMessage = data.message;
    this.showOrHide = 'show';
    this.alertTimeout = setTimeout(()=>{
      this.CloseAlert();
    },5000);
  }

  CloseAlert(){
    clearTimeout(this.alertTimeout);
    this.showOrHide = 'hide';
    this.alertMessage = null;    
  }

  ngOnDestroy(){
    if(this.subs) this.subs.unsubscribe();
  }
}
