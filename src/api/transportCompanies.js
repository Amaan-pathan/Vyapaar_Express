export const getTransportCompanies = () => {
  return Promise.resolve([
    {
      name: "SpeedGo",
      rating: 4.8,
      availableTrucks: 5,
      pricePerKg: 10,
    },
    {
      name: "SafeTrack",
      rating: 4.5,
      availableTrucks: 3,
      pricePerKg: 8,
    },
    {
      name: "QuickLift",
      rating: 4.2,
      availableTrucks: 8,
      pricePerKg: 9,
    },
  ]);
}; 