interface TradingFloorData {
  id: number;
  displayOrder: number;
  status: number;
  longitude: string;
  latitude: string;
  createdAt: string;
  updatedAt: string;
  locale:string;
  name: string;
  address: string;
  translation: {
      id: number;
      tradingFloorId: number;
      locale: string;
      name: string;
      address: string
  }
}

export default TradingFloorData;
