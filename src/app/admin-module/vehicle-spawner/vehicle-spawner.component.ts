import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import * as VehicleList from '../../../assets/images/MetaData.json'
import { VehicleListModel } from 'src/app/models/VehicleList.model';
import { VehicleListPackage } from 'src/app/models/VehicleListPackage.module';
import { BehaviorSubject, Observable, Subscription, map, of, switchMap, take, tap } from 'rxjs';
import { VehicleService } from '../services/vehicle.service';
import { CollectionViewer, DataSource } from '@angular/cdk/collections';

@Component({
  selector: 'app-vehicle-spawner',
  templateUrl: './vehicle-spawner.component.html',
  styleUrls: ['./vehicle-spawner.component.less']
})
export class VehicleSpawnerComponent implements OnInit, OnDestroy {


  searchVehicle?: string;
  selectedGroup?: string;
  filteredVehicles: string[] = [];
  vehicleGroups: string[] = [];

  // BoatList: VehicleListModel = VehicleList[0];
  VehiclePackages?: Observable<VehicleListModel[]>
  constructor(public vehService: VehicleService)
  {

  }
  ngOnDestroy(): void {

  }

  ngOnInit(): void {

  }
  ChangedVehicleGroup()
  {
    let filteredValue;
    this.vehService.pageIndex = 1;
    if(this.selectedGroup != undefined)
    {
      this.vehService.VehicleObjectToArray(this.selectedGroup);
      filteredValue = this.vehService.AllVehiclesArray
      .filter(x => x.Name.toLowerCase().startsWith(this.vehService.searchString.toLowerCase()))
      .slice((this.vehService.pageIndex - 1) * this.vehService.vehiclePerPage, this.vehService.pageIndex * this.vehService.vehiclePerPage);
    }
    else
    {
      this.vehService.VehicleObjectToArray();
      filteredValue = this.vehService.AllVehiclesArray
      .filter(x => x.Name.toLowerCase().startsWith(this.vehService.searchString.toLowerCase()))
      .slice((this.vehService.pageIndex - 1) * this.vehService.vehiclePerPage, this.vehService.pageIndex * this.vehService.vehiclePerPage);     
    }
    this.vehService.VehiclePackages$.next(filteredValue);
    

  }
  onSearchChange(value: string) { 
    this.vehService.searchString = value;
    const filteredValue = this.vehService.AllVehiclesArray
    .filter(x => x.Name.toLowerCase().startsWith(value.toLowerCase()))
    .slice((this.vehService.pageIndex - 1) * this.vehService.vehiclePerPage, this.vehService.pageIndex * this.vehService.vehiclePerPage);
    
    const filteredValuePages = this.vehService.AllVehiclesArray
    .filter(x => x.Name.toLowerCase().startsWith(value.toLowerCase()));

    if(value.length > 0)
    {
      this.vehService.totalItems = filteredValuePages.length;
    }
    else
    {
      this.vehService.totalItems = this.vehService.AllVehiclesArray.length;
    }
    this.vehService.VehiclePackages$.next(filteredValue);
  }
  pageIndexChange(value: number)
  {
    this.vehService.pageIndex = value;
    this.vehService.VehiclePackages$.next(this.vehService.AllVehiclesArray
      .filter(x => x.Name.toLowerCase().startsWith(this.vehService.searchString.toLowerCase()))
      .slice((this.vehService.pageIndex - 1) * this.vehService.vehiclePerPage, this.vehService.pageIndex * this.vehService.vehiclePerPage));
  }

}
