import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { TitleComponent }  from '@shared/title/title.component'
import { CommonModule } from '@angular/common';



@Component({
    standalone: true,
    imports: [TitleComponent, CommonModule],
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
    <app-title [title]="currentFramework()"  withShadow />
    <pre>{{ frameworkAsSignal() | json }}</pre>
    <pre>{{ frameworkAsProperty | json }}</pre>


    `,
})
export default class ChangeDetectionComponent {
  public currentFramework = computed( () =>
    `ChangeDetection - ${ this.frameworkAsSignal().name }`
  )


  public frameworkAsSignal = signal(
    {
      name: 'Angular',
      version: 2016
    }  );

  public frameworkAsProperty =     {
      name: 'Angular',
      version: 2016
    };

  constructor(){
    setTimeout( ()=> {
      this.frameworkAsProperty.name = 'React';
      this.frameworkAsSignal.update( value => ({...value,name : 'React before Angular' } ))
      console.log('Done');
    }
    ,3000 );

  }



}

