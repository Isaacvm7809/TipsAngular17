import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

type grade = 'A'|'B'|'F';

@Component({
    selector: 'app-control-flow',
    standalone: true,
    templateUrl: './control-flow.component.html',
    styles: ``,
    imports: [CommonModule, TitleComponent]
})
export default class ControlFlowComponent {

  public showcontent = signal(false);
  public grades = signal<grade>('F');
  public frameworks = signal(['Angular', 'Vue', 'Qwik', 'React','Svelte']);
  public frameworksCopy = signal([]);



  toggleContent() {
    this.showcontent.update(value=> !value);
  }

}
