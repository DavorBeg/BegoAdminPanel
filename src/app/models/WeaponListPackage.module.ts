import { WeaponListModel } from "./WeaponList.model";

export interface WeaponListPackage
{
    Melee: WeaponListModel[],
    Handguns: WeaponListModel[],
    Submachines: WeaponListModel[],
    Shotguns: WeaponListModel[],
    AssaultRifles: WeaponListModel[],
    LightMachineGuns: WeaponListModel[],
    SniperRifles: WeaponListModel[],
    HeavyWeapons: WeaponListModel[],
    Throwables: WeaponListModel[],
    Miscellaneous: WeaponListModel[]
}