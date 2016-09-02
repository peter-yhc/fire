import {Component} from '@angular/core'

@Component({
    selector: 'instructions',
    template: `<h2>Instructions</h2>
              {{title}}
              <ul>
              <li *ngFor="let instruction of instructions">
                   {{instruction}}
              </li>
              </ul>
              `
})
export class InstructionsComponent {
    title = "Title of insctructions page";
    instructions = ["Step1", "Step2", "Step3"];

}