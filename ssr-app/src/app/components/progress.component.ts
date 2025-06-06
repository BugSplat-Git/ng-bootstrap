import { Component } from '@angular/core';
import { NgbProgressbarModule } from '@bugsplat/ng-bootstrap';

@Component({
	selector: 'progress-component',
	imports: [NgbProgressbarModule],
	template: ` <ngb-progressbar [showValue]="true" type="success" [value]="50"></ngb-progressbar> `,
})
export class ProgressComponent {}
