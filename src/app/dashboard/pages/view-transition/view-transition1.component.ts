import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  selector: 'app-view-transition1',
  standalone: true,
  imports: [CommonModule, TitleComponent],

  template: `
    <app-title title="View Transitions API 1"/>
    <section  class="flex justify-start">
      <img
        srcset = "https://picsum.photos/id/237/200/400"
        alt = "Picsum Inc."
        width = 200
        height = 300
        style = "view-transition-name: hero1"
      />
      <div class="bg-teal-300 w-32 h-32"
        style = "view-transition-name: hero2"
      ></div>
    </section>
  `

})
export default class ViewTransitionComponent {

}
