import { VehicleListModel } from "./VehicleList.model";

export interface VehicleListPackage
{
    Boats: VehicleListModel[],
    Commercials: VehicleListModel[],
    Compacts: VehicleListModel[],
    Coupes: VehicleListModel[],
    Cycles: VehicleListModel[],
    Emergency: VehicleListModel[],
    Helicopters: VehicleListModel[],
    Industrial: VehicleListModel[],
    Military: VehicleListModel[],
    Motorcycles: VehicleListModel[],
    Muscle: VehicleListModel[],
    offroad: VehicleListModel[],
    openwheel: VehicleListModel[],
    planes: VehicleListModel[],
    suvs: VehicleListModel[],
    sedans: VehicleListModel[],
    service: VehicleListModel[],
    sports: VehicleListModel[],
    sportclassic: VehicleListModel[],
    super: VehicleListModel[],
    trailers: VehicleListModel[],
    trains: VehicleListModel[],
    utility: VehicleListModel[],
    vans: VehicleListModel[]
}