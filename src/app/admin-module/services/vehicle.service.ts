import { Injectable } from '@angular/core';
import VehicleList from '../../../assets/images/MetaData.json'
import { VehicleListModel } from 'src/app/models/VehicleList.model';
import { VehicleListPackage } from 'src/app/models/VehicleListPackage.module';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  AllVehiclesArray: VehicleListModel[] = [];
  AllVehiclesGroups: string[] = [];

  pageIndex = 1;
  totalItems?: number = undefined;
  vehiclePerPage: number = 20;

  searchString: string = "";

  VehicleObjectToArray = (group?: string) => {
    this.AllVehiclesArray.length = 0;
    Object.entries(VehicleList).forEach(entry => {
      
      const [key, value] = entry;
      this.AllVehiclesGroups.push(key);
      if(group === undefined)
      {
        this.AllVehiclesArray.push(...value);
      }
      else
      {
        if(key === group)
        {
          this.AllVehiclesArray.push(...value);
        }
      }
    });
    this.totalItems = this.AllVehiclesArray.length;
  }

  VehiclePackages$ = new BehaviorSubject<VehicleListModel[]>(this.AllVehiclesArray);


  constructor() 
  { 
    this.VehicleObjectToArray();
    this.totalItems = (this.AllVehiclesArray.length);
    this.VehiclePackages$.next(this.AllVehiclesArray.slice(0, this.pageIndex * this.vehiclePerPage))
  }
}
