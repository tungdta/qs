import { Directive, ElementRef, Input, Renderer, OnInit} from '@angular/core';
import {AuthService} from './auth.service';

@Directive({
  selector: '[appAuthDisabled]'
})
export class AuthDisabledDirective implements OnInit {


  perms: string;
  @Input('authDisabled')
  set options(value: any) {
    this.perms = value;
  }

  constructor(private el: ElementRef, private auth: AuthService, private renderer: Renderer) {
    this.el = el;
  }

  ngOnInit(): any {
    const perms = this.perms.split(',');

    if (this.auth.userHasPermission(perms)) {
      this.renderer.setElementProperty(this.el.nativeElement, 'disabled', false);
    } else {
      this.renderer.setElementProperty(this.el.nativeElement, 'disabled', true);
    }
  }
}
