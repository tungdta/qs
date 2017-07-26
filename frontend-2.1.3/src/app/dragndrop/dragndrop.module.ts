import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TreeModule } from 'angular-tree-component';
import { FlexLayoutModule } from '@angular/flex-layout';

import { SharedModule } from '../shared/shared.module';

import { DragndropRoutes } from './dragndrop.routing';
import { DragndropComponent } from './dragndrop.component';

import { DndModule } from 'ng2-dnd';

@NgModule({
  imports: [
    RouterModule.forChild(DragndropRoutes),
    SharedModule
  ],
  declarations: [DragndropComponent]
})

export class DragndropModule { }
