import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@bugsplat/ng-bootstrap';

@Component({
	imports: [FormsModule, NgbModule],
	templateUrl: './dropdown-focus.component.html',
})
export class DropdownFocusComponent {
	container;
	withItems = true;
}
