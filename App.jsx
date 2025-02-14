import React, { useState } from 'react';
import { Leaf, Upload, Sprout } from 'lucide-react';
import Notif_Panel from './Notif_Panel';

// Card Components
const Card = ({ className, children }) => (
  <div className={`bg-white/90 backdrop-blur-sm rounded-xl shadow-xl ${className}`}>{children}</div>
);

const CardHeader = ({ children }) => (
  <div className="p-8 flex flex-col items-center border-b border-gray-200">{children}</div>
);

const CardTitle = ({ children, className }) => (
  <div className="text-center">
    <div className="flex justify-center mb-4">
      <Sprout className="h-12 w-12 text-green-600" />
    </div>
    <h2 className={`text-3xl font-bold text-green-600 ${className}`}>{children}</h2>
  </div>
);

const CardContent = ({ children }) => (
  <div className="p-8 ">{children}</div>
);

// Form Components
const Label = ({ htmlFor, children }) => (
  <label htmlFor={htmlFor} className="block text-sm font-semibold text-gray-800 mb-2 flex items-center gap-2">
    <Leaf className="h-4 w-4 text-green-600" />
    {children}
  </label>
);

const Input = ({ className, ...props }) => (
  <input
    className={`w-full px-4 py-3 border-2 border-gray-200 rounded-lg 
    focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 
    bg-white/50 backdrop-blur-sm transition-all duration-200 ${className}`}
    {...props}
  />
);

const Textarea = ({ className, ...props }) => (
  <textarea
    className={`w-full px-4 py-3 border-2 border-gray-200 rounded-lg 
    focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 
    bg-white/50 backdrop-blur-sm transition-all duration-200 ${className}`}
    {...props}
  />
);

const Select = ({ children, value, onChange }) => (
  <select
    value={value}
    onChange={onChange}
    className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg 
    focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-200 
    bg-white/50 backdrop-blur-sm transition-all duration-200"
  >
    {children}
  </select>
);

const Button = ({ children, className, ...props }) => (
  <button
    className={`w-full px-6 py-4 bg-gradient-to-r from-green-600 to-green-500 
    text-white rounded-lg font-semibold shadow-lg hover:from-green-700 
    hover:to-green-600 transform hover:-translate-y-0.5 transition-all duration-200 
    focus:outline-none focus:ring-2 focus:ring-green-300 ${className}`}
    {...props}
  >
    {children}
  </button>
);

function App() {
  const [formData, setFormData] = useState({
    address: '',
    crop: '',
    wasteType: '',
    farmPhoto: null
  });

  const [selectedFileName, setSelectedFileName] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFileName(file.name);
      setFormData(prev => ({
        ...prev,
        farmPhoto: file
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    
    
    <div className="min-h-screen bg-green-50 p-4 md:p-8 flex items-center justify-center">
      
      <div className='Notif_Panel'>
            <Notif_Panel>

            </Notif_Panel>
          </div>

      <div className='profilee'>
            <profilee>

            </profilee>
      </div>
            
      <Card className="max-w-2xl w-full">
        <CardHeader>
          <CardTitle>
            Farmer Information
          </CardTitle>
          <p className="mt-2 text-gray-600">Please fill in your farm details below</p>
        </CardHeader>
        
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="address">Farm Location</Label>
              <Textarea
                id="address"
                name="address"
                placeholder="Enter your farm's complete address"
                value={formData.address}
                onChange={handleInputChange}
                className="min-h-32"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="crop">Primary Crop</Label>
              <Input
                id="crop"
                name="crop"
                placeholder="What do you primarily grow?"
                value={formData.crop}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="wasteType">Agricultural Waste Type</Label>
              <Select
                name="wasteType"
                value={formData.wasteType}
                onChange={handleInputChange}
                required
              >
                <option value="">Select your main waste type</option>
                <option value="crop-residue">Crop Residue</option>
                <option value="animal-waste">Animal Waste</option>
                <option value="agricultural-byproducts">Agricultural Byproducts</option>
                <option value="packaging-materials">Packaging Materials</option>
                <option value="other">Other</option>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Farm Photo</Label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 hover:border-green-400 transition-colors bg-gray-100">
                <div className="flex flex-col items-center gap-4">
                  <Upload className="h-12 w-12 text-green-600" />
                  <div className="text-center">
                    <label htmlFor="farm-photo" className="text-green-600 hover:text-green-700 cursor-pointer font-semibold text-lg">
                      Upload Farm Image
                    </label>
                    <p className="text-sm text-gray-600 mt-2">
                      {selectedFileName || 'JPG, PNG or GIF accepted'}
                    </p>
                  </div>
                  <Input
                    id="farm-photo"
                    name="farmPhoto"
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden"
                    required
                  />
                </div>
              </div>
            </div>

            <Button type="submit">
              Submit Farm Information
            </Button>
          </form>
        </CardContent>
      </Card>
      <profilee>

      </profilee>
    </div>

    
  );
}

export default App;
