import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainBoardComponent } from './main-board/main-board.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { PlayerListComponent } from './player-list/player-list.component';
import { BanListComponent } from './ban-list/ban-list.component';
import { CommandsComponent } from './commands/commands.component';
import { VehicleSpawnerComponent } from './vehicle-spawner/vehicle-spawner.component';
import { WeaponSpawnerComponent } from './weapon-spawner/weapon-spawner.component';
import { WeatherComponent } from './weather/weather.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { VehicleCardComponent } from './vehicle-spawner/vehicle-card/vehicle-card.component';
import { RouterModule } from '@angular/router';
import { VehicleService } from './services/vehicle.service';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { FormsModule } from '@angular/forms';
import { NzSelectModule } from 'ng-zorro-antd/select';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { WeaponCardComponent } from './weapon-spawner/weapon-card/weapon-card.component';


@NgModule({
  declarations: [
    MainBoardComponent,
    PlayerListComponent,
    BanListComponent,
    CommandsComponent,
    VehicleSpawnerComponent,
    WeaponSpawnerComponent,
    WeatherComponent,
    VehicleCardComponent,
    WeaponCardComponent
  ],
  imports: [
    CommonModule,
    NzLayoutModule,
    NzIconModule,
    NzButtonModule,
    NzDividerModule,
    NzCardModule,
    NzGridModule,
    RouterModule,
    NzPaginationModule,
    NzAutocompleteModule,
    FormsModule,
    NzSelectModule,
    ScrollingModule
  ],
  providers: [
    VehicleService
  ]
})
export class AdminModule { }
