import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainBoardComponent } from './admin-module/main-board/main-board.component';
import { PlayerListComponent } from './admin-module/player-list/player-list.component';
import { BanListComponent } from './admin-module/ban-list/ban-list.component';
import { CommandsComponent } from './admin-module/commands/commands.component';
import { VehicleSpawnerComponent } from './admin-module/vehicle-spawner/vehicle-spawner.component';
import { WeaponSpawnerComponent } from './admin-module/weapon-spawner/weapon-spawner.component';
import { WeatherComponent } from './admin-module/weather/weather.component';

const routes: Routes = [
  { path: 'AdminPanel', component: MainBoardComponent,
    children: [
      { path: '', redirectTo: 'Home', pathMatch: 'full' }, 
      { path: 'home', component: MainBoardComponent },
      { path: 'playerList', component: PlayerListComponent },
      { path: 'banList', component: BanListComponent },
      { path: 'commands', component: CommandsComponent },
      { path: 'vehicleSpawner', component: VehicleSpawnerComponent },
      { path: 'weaponSpawner', component: WeaponSpawnerComponent },
      { path: 'weather', component: WeatherComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
