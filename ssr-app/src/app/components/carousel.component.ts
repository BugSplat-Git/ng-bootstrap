import { Component } from '@angular/core';
import { NgbCarouselModule } from '@bugsplat/ng-bootstrap';

@Component({
	selector: 'carousel-component',
	imports: [NgbCarouselModule],
	template: `
		<ngb-carousel>
			<ng-template ngbSlide>
				<img src="/one.jpeg" alt="Random first slide" />
				<div class="carousel-caption">
					<h3>First slide label</h3>
					<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
				</div>
			</ng-template>
			<ng-template ngbSlide>
				<img src="/two.jpeg" alt="Random second slide" />
				<div class="carousel-caption">
					<h3>Second slide label</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				</div>
			</ng-template>
			<ng-template ngbSlide>
				<img src="/three.jpeg" alt="Random third slide" />
				<div class="carousel-caption">
					<h3>Third slide label</h3>
					<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
				</div>
			</ng-template>
		</ngb-carousel>
	`,
})
export class CarouselComponent {}
