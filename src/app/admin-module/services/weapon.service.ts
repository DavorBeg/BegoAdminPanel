import { Injectable } from '@angular/core';
import { WeaponListModel } from 'src/app/models/WeaponList.model';
import { WeaponListPackage } from 'src/app/models/WeaponListPackage.module';
import WeaponList from '../../../assets/images/MetaDataWeapon.json'
import { BehaviorSubject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class WeaponService {

  AllWeaponsArray: WeaponListModel[] = [];
  AllWeaponGroups: string[] = [];

  pageIndex = 1;
  totalItems?: number = undefined;

  weaponsPerPage: number = 20;

  weaponSearchString: string = "";


  WeaponObjectToArray = (group?: string) => {
    this.AllWeaponsArray.length = 0;
    Object.entries(WeaponList).forEach(entry => {
      
      const [key, value] = entry;
      this.AllWeaponGroups.push(key);
      if(group === undefined)
      {
        this.AllWeaponsArray.push(...value);
      }
      else
      {
        if(key === group)
        {
          this.AllWeaponsArray.push(...value);
        }
      }
    });
    this.totalItems = this.AllWeaponsArray.length;
  }

  WeaponPackages$ = new BehaviorSubject<WeaponListModel[]>(this.AllWeaponsArray);

  constructor() 
  { 
      this.WeaponObjectToArray();
      this.totalItems = (this.AllWeaponsArray.length);
      this.WeaponPackages$.next(this.AllWeaponsArray.slice(0, this.pageIndex * this.weaponsPerPage))

  }
}
