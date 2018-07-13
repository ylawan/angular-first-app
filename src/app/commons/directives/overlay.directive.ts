import { Directive, ElementRef, Renderer, Input} from '@angular/core';
// import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { EventService } from '../../../services/event.service';

@Directive({
  selector: '[appOverlay]',
  host: {
    '(click)': 'closeModal($event)'
  }
})
export class OverlayDirective {
  defaultOverlayOptions = {
    modal: false, //false means clicking anywhere on the overlay will close it
  };

  @Input() 
  set overlayOptions(value) {
    if(value && value.modal != null){
      this._overlayOptions = value;
    }
  };
  get overlayOptions() {
    return this._overlayOptions;
  };
  _overlayOptions = this.defaultOverlayOptions;


  get isModalDialog(){
    return this.overlayOptions && this.overlayOptions.modal === true;
  }

  openSub = null;
  closeSub = null;

  targetSelector = null;
  targetElement = null;

  el = null;

  constructor(private elementRef: ElementRef, 
    private renderer: Renderer, 
    private eventService: EventService
  ) {
    this.el = elementRef.nativeElement;
    this.targetSelector = this.el.getAttribute("appOverlay");
    if(this.targetSelector){
      this.targetElement = this.el.parentElement;

      if(this.targetElement){
        renderer.setElementStyle(this.targetElement, 'display', 'none');
      }
    }
  }

  ngOnInit(){
    if(!this.isModalDialog){
      this.renderer.setElementStyle(this.el, 'cursor', 'pointer');
    }else{
      this.renderer.setElementStyle(this.el, 'cursor', 'default');
    }

    this.openSub = this.eventService.subscribe(EventService.EVENTS.OPEN_MODAL, 
      (eventData)=>{
        this.openModal(eventData);
      });

    this.closeSub = this.eventService.subscribe(EventService.EVENTS.CLOSE_MODAL, 
      (eventData)=>{
        this.closeModal(eventData);
      });
  }

  openModal(eventData){
    if(eventData.id === this.el.id){
      if(this.targetElement){
        this.renderer.setElementStyle(this.targetElement, 'display', 'block');
        if(this.isModalDialog){
          this.renderer.setElementStyle(this.targetElement, 'display', 'block');
        }
      }

      this.eventService.emit(EventService.EVENTS.MODAL_OPENED, eventData);
    }
  }

  closeModal(eventData){
    const target = eventData.target;
    if((eventData.id === this.el.id) || 
       (!this.isModalDialog && target && target.hasAttribute('appoverlay'))
    ){
      if(this.targetElement){
        this.renderer.setElementStyle(this.targetElement, 'display', 'none');
      }

      this.eventService.emit(EventService.EVENTS.MODAL_CLOSED, eventData);
    }
  }

  ngOnDestroy(){
    if(this.openSub) this.openSub.unsubscribe();
    if(this.closeSub) this.closeSub.unsubscribe();
  }
}
