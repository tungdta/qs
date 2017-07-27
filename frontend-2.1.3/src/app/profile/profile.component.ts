import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router'
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'my-profile',
  templateUrl: './profile.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class ProfileComponent {
  constructor(meta: Meta, title: Title) {
    title.setTitle('My Spiffy Home Page');

    meta.addTags([
      { name: 'author',   content: 'Coursetro.com'},
      { name: 'keywords', content: 'angular seo, angular 4 universal, etc'},
      { name: 'description', content: 'This is my Angular SEO-based App, enjoy it!' }
    ]);
  }
}
