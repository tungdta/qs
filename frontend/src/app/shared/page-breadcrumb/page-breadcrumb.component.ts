import {
  Component,
  OnInit,
  DoCheck,
  OnChanges,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy
} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'page-breadcrumb-selector',
  templateUrl: 'page-breadcrumb.component.html'
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageBreadcrumbComponent implements OnInit, DoCheck, OnChanges {
  @Input() space: string;
  // public mapPathAndName: KeyValue[] = [];


  constructor(private current: ActivatedRoute,
    public router: Router) {
  }

  ngOnInit() {
    console.log('PageBreadcrumbComponent space:', this.space);
    // this.pageService.getPageFullPathName(this.space).subscribe(
    //    data => {
    //       this.mapPathAndName = data;
    //   },
    //    error => {
    //        //this.alertService.httpError(error);
    //    }
    // );
  }

  ngOnChanges(changes: any): void {
  }

  ngDoCheck() {
    // console.log("AttachmentListComponent: DoCheck");
  }

}
