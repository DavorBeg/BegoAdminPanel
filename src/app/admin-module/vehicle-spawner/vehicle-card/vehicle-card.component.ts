import { Component, Host, HostListener, Input } from '@angular/core';
import { VehicleListModel } from 'src/app/models/VehicleList.model';

@Component({
  selector: 'app-vehicle-card',
  templateUrl: './vehicle-card.component.html',
  styleUrls: ['./vehicle-card.component.less']
})
export class VehicleCardComponent {

  @Input() VehicleModelObject?: VehicleListModel;
  @Input() Title: string = '';
  @Input() Description: string = '';
  @Input() ImageLocation: string = '';

  @HostListener("OnSpawnClick",  [])
  public OnSpawnClick()
  {
    let event = new CustomEvent("testEvent", { "detail": this.VehicleModelObject });
    document.dispatchEvent(event);

  }
}
