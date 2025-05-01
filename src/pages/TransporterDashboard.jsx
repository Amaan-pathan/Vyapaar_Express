import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const TransporterDashboard = () => {
  const navigate = useNavigate();
  const [parcels, setParcels] = useState([
    {
      id: 1,
      pickupLocation: 'Mumbai',
      dropLocation: 'Delhi',
      weight: 500,
      date: '2024-03-25',
      price: 5000
    },
    {
      id: 2,
      pickupLocation: 'Delhi',
      dropLocation: 'Kolkata',
      weight: 300,
      date: '2024-03-26',
      price: 3000
    },
    {
      id: 3,
      pickupLocation: 'Bangalore',
      dropLocation: 'Chennai',
      weight: 200,
      date: '2024-03-27',
      price: 2000
    }
  ]);

  const [suggestedRoute, setSuggestedRoute] = useState(null);

  useEffect(() => {
    const calculateRoute = () => {
      const totalWeight = parcels.reduce((sum, parcel) => sum + parcel.weight, 0);
      const totalProfit = parcels.reduce((sum, parcel) => sum + parcel.price, 0);
      
      const route = parcels
        .sort((a, b) => b.weight - a.weight)
        .map(parcel => ({
          from: parcel.pickupLocation,
          to: parcel.dropLocation,
          weight: parcel.weight
        }));

      setSuggestedRoute({
        route,
        totalWeight,
        estimatedProfit: totalProfit
      });
    };

    calculateRoute();
  }, [parcels]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Transporter Dashboard</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Assigned Parcels Section */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold text-gray-800">Assigned Parcels</h2>
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                {parcels.length} Parcels
              </span>
            </div>
            
            <div className="space-y-4">
              {parcels.map(parcel => (
                <div key={parcel.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-200">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-gray-500">Pickup</p>
                      <p className="font-medium">{parcel.pickupLocation}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Drop</p>
                      <p className="font-medium">{parcel.dropLocation}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Weight</p>
                      <p className="font-medium">{parcel.weight} kg</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Price</p>
                      <p className="font-medium">₹{parcel.price}</p>
                    </div>
                  </div>
                  <div className="mt-3 pt-3 border-t border-gray-100">
                    <p className="text-sm text-gray-500">Date</p>
                    <p className="font-medium">{parcel.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Route Optimization Section */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">Route Optimization</h2>
            {suggestedRoute && (
              <div>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <p className="text-sm text-gray-500">Total Parcels</p>
                    <p className="text-xl font-bold text-blue-600">{parcels.length}</p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4">
                    <p className="text-sm text-gray-500">Total Weight</p>
                    <p className="text-xl font-bold text-green-600">{suggestedRoute.totalWeight} kg</p>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-4">
                    <p className="text-sm text-gray-500">Estimated Profit</p>
                    <p className="text-xl font-bold text-purple-600">₹{suggestedRoute.estimatedProfit}</p>
                  </div>
                </div>
                
                <div className="mt-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Suggested Route</h3>
                  <div className="space-y-3">
                    {suggestedRoute.route.map((step, index) => (
                      <div key={index} className="flex items-center bg-gray-50 p-3 rounded-lg">
                        <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center mr-3">
                          {index + 1}
                        </span>
                        <div className="flex-1">
                          <p className="font-medium">
                            {step.from} → {step.to}
                          </p>
                          <p className="text-sm text-gray-500">
                            Weight: {step.weight} kg
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransporterDashboard; 