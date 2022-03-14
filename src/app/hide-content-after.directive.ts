import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

class HideContentContext{
  public get $implicit():number
  {
    return this.appHideContentAfter;
  }
  appHideContentAfter:number=0;
  counter:number =0;
}

@Directive({
  selector: '[appHideContentAfter]'
})
export class HideContentAfterDirective implements OnInit {

  private _delay:number=0;

  // (number | null) as we might want to use this directive with async pipe which can emit null
  @Input('appHideContentAfter') set delay(delay:number | null)
  {
    this._delay = delay ?? 0;
    this.context.appHideContentAfter = this.context.counter = this._delay;
    console.log(this._delay,this.context);
    this.createView();
  }

  @Input('appHideContentAfterLater') placeholder: TemplateRef<HideContentContext> | null = null;

  private context = new HideContentContext();

  static ngTemplateContextGuard(dir:HideContentAfterDirective,ctx:unknown): ctx is HideContentContext{
    return true;
  }


  createView()
  {

    let counterId=setInterval(()=>{
      this.context.counter-=1000;
    },1000)

    this.viewContainerRef.createEmbeddedView(this.templateRef,this.context);
    setTimeout(()=>{

      clearInterval(counterId);
      this.viewContainerRef.clear();

      if(this.placeholder)
      {
      this.viewContainerRef.createEmbeddedView(this.placeholder,this.context);
      }

    },this._delay)
  }

  ngOnInit(): void {
      
  }

  
  constructor(private templateRef:TemplateRef<HideContentContext>,private viewContainerRef:ViewContainerRef) { }

}
