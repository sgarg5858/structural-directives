import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-pass-ng-template-via-input-binding',
  templateUrl: './pass-ng-template-via-input-binding.component.html',
  styleUrls: ['./pass-ng-template-via-input-binding.component.scss']
})
export class PassNgTemplateViaInputBindingComponent implements OnInit {

  constructor() { }

  @Input() userTemplate:TemplateRef<any>|undefined;

  ngOnInit(): void {
  }

}
