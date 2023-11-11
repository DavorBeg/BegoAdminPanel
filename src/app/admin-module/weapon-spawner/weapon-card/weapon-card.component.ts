import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-weapon-card',
  templateUrl: './weapon-card.component.html',
  styleUrls: ['./weapon-card.component.less']
})
export class WeaponCardComponent {
  @Input() Title: string = '';
  @Input() Description: string = '';
  @Input() ImageLocation: string = '';
}
