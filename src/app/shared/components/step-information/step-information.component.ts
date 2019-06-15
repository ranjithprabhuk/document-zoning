import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-step-information',
  templateUrl: './step-information.component.html',
  styleUrls: ['./step-information.component.scss']
})
export class StepInformationComponent {
  @Input() step = 1;
  @Input() title = '';
  @Input() icon = '';
}
