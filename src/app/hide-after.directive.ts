import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

class HideAfterContext{
  //TO use as operator this property name should match Directive input where we want to use
  public hideAfterDelay:number=0;
  public counter:number=0;
}

@Directive({
  selector: '[hideAfterDelay]'
})
export class HideAfterDirective  implements OnInit {
  private _delay:number=0;
  //keeping it generic as we might use async pipe and async pipe can also return null
  @Input('hideAfterDelay') set delay(delay:number|null)
  {
    this._delay=delay ?? 0;
    this.context.hideAfterDelay=this._delay;
    this.context.counter=this._delay/1000;
  }

  //This is for accessing the then block similar to how ngIf renders else block
  // selectorName+Then
  @Input('hideAfterDelayThen')
  placeholder:TemplateRef<HideAfterContext>|null=null;

  private context = new HideAfterContext();

  constructor(
    private viewContainerRef:ViewContainerRef,
    private templateRef:TemplateRef<HideAfterContext>
    ) { }


    static ngTemplateContextGuard(dir:HideAfterDirective,context:unknown) : context is HideAfterContext
    {
      return true ;
    }

    ngOnInit(): void {
      this.viewContainerRef.createEmbeddedView(this.templateRef,this.context);

    const intervalId=  setInterval(()=>{
        this.context.counter -=1;
      },1000)

      setTimeout(()=>{

        this.viewContainerRef.clear();
        clearInterval(intervalId);

        if(this.placeholder!=null)
        {
          this.viewContainerRef.createEmbeddedView(this.placeholder,this.context);
        }

      },this._delay)

    }

    

}
