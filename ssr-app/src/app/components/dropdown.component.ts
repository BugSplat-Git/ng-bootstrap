import { Component } from '@angular/core';
import { NgbDropdownModule } from '@bugsplat/ng-bootstrap';

@Component({
	selector: 'dropdown-component',
	imports: [NgbDropdownModule],
	template: `
		<div ngbDropdown class="d-inline-block">
			<button class="btn btn-outline-primary" id="dropdown1" ngbDropdownToggle>Toggle dropdown</button>
			<div ngbDropdownMenu aria-labelledby="dropdown1">
				<button ngbDropdownItem>Action one</button>
				<button ngbDropdownItem>Action two</button>
			</div>
		</div>
	`,
})
export class DropdownComponent {}
