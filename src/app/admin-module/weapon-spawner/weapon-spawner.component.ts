import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { WeaponListModel } from 'src/app/models/WeaponList.model';
import { WeaponService } from '../services/weapon.service';

@Component({
  selector: 'app-weapon-spawner',
  templateUrl: './weapon-spawner.component.html',
  styleUrls: ['./weapon-spawner.component.less']
})
export class WeaponSpawnerComponent implements OnInit, OnDestroy {


  searchWeapon?: string = "";
  selectedGroup?: string = "";

  filteredWeapons: string[] = [];
  weaponGroups: string[] = [];

  WeaponPackages?: Observable<WeaponListModel[]>;

  constructor(public wepService: WeaponService)
  {

  }

  ngOnDestroy(): void
  {

  }
  ngOnInit(): void
  {

  }

  changedWeaponGroup()
  {

      let filteredValue;
      this.wepService.pageIndex = 1;
      if(this.selectedGroup != undefined)
      {
        this.wepService.WeaponObjectToArray(this.selectedGroup);
        filteredValue = this.wepService.AllWeaponsArray
        .filter(x => x.Name.toLowerCase().startsWith(this.wepService.weaponSearchString.toLowerCase()))
        .slice((this.wepService.pageIndex - 1) * this.wepService.weaponsPerPage, this.wepService.pageIndex * this.wepService.weaponsPerPage);
  
      }
      else
      {

        this.wepService.WeaponObjectToArray();
        filteredValue = this.wepService.AllWeaponsArray
        .filter(x => x.Name.toLowerCase().startsWith(this.wepService.weaponSearchString.toLowerCase()))
        .slice((this.wepService.pageIndex -1) * this.wepService.weaponsPerPage, this.wepService.pageIndex * this.wepService.weaponsPerPage)

      }
      this.wepService.WeaponPackages$.next(filteredValue);


  }



  onSearchChange(value: string)
  {
    this.wepService.weaponSearchString = value;
    const filteredValue = this.wepService.AllWeaponsArray
    .filter(x => x.Name.toLowerCase().startsWith(this.wepService.weaponSearchString.toLowerCase()))
    .slice((this.wepService.pageIndex -1) * this.wepService.weaponsPerPage, this.wepService.pageIndex * this.wepService.weaponsPerPage)

    const filteredValuePages = this.wepService.AllWeaponsArray.filter(x => x.Name.toLowerCase().startsWith(value.toLowerCase()))

    if(value .length > 0)
    {
      this.wepService.totalItems = filteredValuePages.length;
    }
    else
    {
      this.wepService.totalItems = this.wepService.AllWeaponsArray.length;
    }

  }



  pageIndexChange(value: number)
  {
    this.wepService.pageIndex = value;
    this.wepService.WeaponPackages$.next(this.wepService.AllWeaponsArray
      .filter(x => x.Name.toLocaleLowerCase().startsWith(this.wepService.weaponSearchString.toLowerCase()))
      .slice(
        (this.wepService.pageIndex -1) * this.wepService.weaponsPerPage,
        this.wepService.pageIndex * this.wepService.weaponsPerPage))

    
  }

}
