import {Component} from '@angular/core'

@Component({
    templateUrl: 'app/instructions/instructions.component.html'
})
export class InstructionsComponent {
    title = "Title of instructions page";
    instructions = ["Step1", "Step2", "Step3"];
}