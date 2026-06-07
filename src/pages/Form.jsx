import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Form = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    serviceBranch: '',
    payGrade: '',
    currentBase: '',
    destinationBase: '',
    reportDate: '',
    moveType: '',
    familySize: '',
    childrenAges: '',
    pets: '',
    spouseEmployment: [],
    specificNeeds: [],
    additionalNotes: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setErrors({}); // Clear errors on change

    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        [name]: checked ?
          [...prev[name], value] :
          prev[name].filter(item => item !== value)
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.currentBase.trim()) {
      newErrors.currentBase = 'Current base is required';
    }

    if (!formData.destinationBase.trim()) {
      newErrors.destinationBase = 'Destination base is required';
    }

    // Add more validations as needed
    if (!formData.serviceBranch) {
      newErrors.serviceBranch = 'Service branch is required';
    }

    if (!formData.payGrade) {
      newErrors.payGrade = 'Pay grade/rank is required';
    }

    if (!formData.reportDate) {
      newErrors.reportDate = 'Estimated report date is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ data: formData }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate PCS plan');
      }

      const result = await response.json();

      // Store the generated plan in sessionStorage or pass via state
      // For simplicity, we'll use a simple approach - in a real app you might use context or state management
      window.sessionStorage.setItem('milpathPlan', result.plan);

      navigate('/results');
    } catch (error) {
      console.error('Error:', error);
      // Handle error - show message to user
      alert('Failed to generate PCS plan. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const serviceBranches = [
    'Army',
    'Navy',
    'Air Force',
    'Marine Corps',
    'Coast Guard',
    'Space Force'
  ];

  const payGrades = [
    'E-1', 'E-2', 'E-3', 'E-4', 'E-5', 'E-6', 'E-7', 'E-8', 'E-9',
    'W-1', 'W-2', 'W-3', 'W-4', 'W-5',
    'O-1', 'O-2', 'O-3', 'O-4', 'O-5', 'O-6', 'O-7', 'O-8', 'O-9', 'O-10'
  ];

  const moveTypes = [
    'PCS (Permanent Change of Station)',
    'Deployment',
    'TDY (Temporary Duty)',
    'Retirement/Separation',
    'Other'
  ];

  const familySizes = [
    'Single',
    'Married, no children',
    'Married, 1 child',
    'Married, 2 children',
    'Married, 3+ children',
    'Single parent'
  ];

  const petsOptions = [
    'No pets',
    'Dog',
    'Cat',
    'Both dog and cat',
    'Other pets'
  ];

  const spouseEmploymentOptions = [
    'Not employed',
    'Employed',
    'Seeking employment',
    'Student',
    'Self-employed',
    'Military spouse (dual-military)'
  ];

  const specificNeedsOptions = [
    { label: 'Schools & Childcare', value: 'schools' },
    { label: 'Healthcare', value: 'healthcare' },
    { label: 'Housing', value: 'housing' },
    { label: 'Vehicle Shipping', value: 'vehicle' },
    { label: 'Storage', value: 'storage' },
    { label: 'Finances', value: 'finances' },
    { label: 'Childcare', value: 'childcare' },
    { label: 'Spouse Employment', value: 'spouse' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* American flag stripe */}
      <div className="h-4 flex">
        <div className="w-1/3 bg-red-600"></div>
        <div className="w-1/3 bg-white"></div>
        <div className="w-1/3 bg-blue-600"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-md border border-navy/20">
          <div className="p-8">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-navy mb-2">PCS Relocation Planner</h2>
              <p className="text-gray-600">
                Fill out the form below to receive your personalized PCS move plan powered by AI.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Service Branch */}
              <div>
                <label className="block text-sm font-medium text-navy mb-2">
                  Service Branch *
                </label>
                <select
                  value={formData.serviceBranch}
                  onChange={handleChange}
                  name="serviceBranch"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy focus:border-navy/50"
                >
                  <option value="">Select your service branch</option>
                  {serviceBranches.map(branch => (
                    <option key={branch} value={branch}>
                      {branch}
                    </option>
                  ))}
                </select>
                {errors.serviceBranch && (
                  <p className="mt-1 text-sm text-red-600">{errors.serviceBranch}</p>
                )}
              </div>

              {/* Pay Grade/Rank */}
              <div>
                <label className="block text-sm font-medium text-navy mb-2">
                  Pay Grade/Rank *
                </label>
                <select
                  value={formData.payGrade}
                  onChange={handleChange}
                  name="payGrade"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy focus:border-navy/50"
                >
                  <option value="">Select your pay grade</option>
                  {payGrades.map(grade => (
                    <option key={grade} value={grade}>
                      {grade}
                    </option>
                  ))}
                </select>
                {errors.payGrade && (
                  <p className="mt-1 text-sm text-red-600">{errors.payGrade}</p>
                )}
              </div>

              {/* Current Base */}
              <div>
                <label className="block text-sm font-medium text-navy mb-2">
                  Current Base *
                </label>
                <input
                  type="text"
                  value={formData.currentBase}
                  onChange={handleChange}
                  name="currentBase"
                  placeholder="e.g., Fort Bragg, Joint Base Andrews"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy focus:border-navy/50"
                >
                  {errors.currentBase && (
                    <p className="mt-1 text-sm text-red-600">{errors.currentBase}</p>
                  )}
                </input>
              </div>

              {/* Destination Base */}
              <div>
                <label className="block text-sm font-medium text-navy mb-2">
                  Destination Base *
                </label>
                <input
                  type="text"
                  value={formData.destinationBase}
                  onChange={handleChange}
                  name="destinationBase"
                  placeholder="e.g., Fort Gregg-Adams, Naval Base San Diego"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy focus:border-navy/50"
                >
                  {errors.destinationBase && (
                    <p className="mt-1 text-sm text-red-600">{errors.destinationBase}</p>
                  )}
                </input>
              </div>

              {/* Estimated Report Date */}
              <div>
                <label className="block text-sm font-medium text-navy mb-2">
                  Estimated Report Date *
                </label>
                <input
                  type="date"
                  value={formData.reportDate}
                  onChange={handleChange}
                  name="reportDate"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy focus:border-navy/50"
                >
                  {errors.reportDate && (
                    <p className="mt-1 text-sm text-red-600">{errors.reportDate}</p>
                  )}
                </input>
              </div>

              {/* Move Type */}
              <div>
                <label className="block text-sm font-medium text-navy mb-2">
                  Move Type
                </label>
                <select
                  value={formData.moveType}
                  onChange={handleChange}
                  name="moveType"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy focus:border-navy/50"
                >
                  <option value="">Select move type (optional)</option>
                  {moveTypes.map(type => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              {/* Family Size */}
              <div>
                <label className="block text-sm font-medium text-navy mb-2">
                  Family Size
                </label>
                <select
                  value={formData.familySize}
                  onChange={handleChange}
                  name="familySize"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy focus:border-navy/50"
                >
                  <option value="">Select family size (optional)</option>
                  {familySizes.map(size => (
                    <option key={size} value={size}>
                      {size}
                    </option>
                  ))}
                </select>
              </div>

              {/* Children's Ages */}
              <div>
                <label className="block text-sm font-medium text-navy mb-2">
                  Children's Ages (comma-separated)
                </label>
                <input
                  type="text"
                  value={formData.childrenAges}
                  onChange={handleChange}
                  name="childrenAges"
                  placeholder="e.g., 5, 8, 12"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy focus:border-navy/50"
                />
              </div>

              {/* Pets */}
              <div>
                <label className="block text-sm font-medium text-navy mb-2">
                  Pets
                </label>
                <select
                  value={formData.pets}
                  onChange={handleChange}
                  name="pets"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy focus:border-navy/50"
                >
                  <option value="">Select pet situation (optional)</option>
                  {petsOptions.map(option => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              {/* Spouse Employment */}
              <div>
                <label className="block text-sm font-medium text-navy mb-2">
                  Spouse Employment
                </label>
                <select
                  value={formData.spouseEmployment}
                  onChange={handleChange}
                  name="spouseEmployment"
                  multiple
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy focus:border-navy/50"
                >
                  {spouseEmploymentOptions.map(option => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              {/* Specific Needs */}
              <div>
                <label className="block text-sm font-medium text-navy mb-2">
                  Specific Needs (check all that apply)
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {specificNeedsOptions.map(option => (
                    <label key={option.value} className="flex items-start">
                      <input
                        type="checkbox"
                        checked={formData.specificNeeds.includes(option.value)}
                        onChange={handleChange}
                        name="specificNeeds"
                        value={option.value}
                        className="h-4 w-4 text-navy focus:ring-navy border-gray-300 rounded"
                      />
                      <span className="ml-2 text-sm text-gray-700">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Additional Notes */}
              <div>
                <label className="block text-sm font-medium text-navy mb-2">
                  Additional Notes
                </label>
                <textarea
                  value={formData.additionalNotes}
                  onChange={handleChange}
                  name="additionalNotes"
                  rows="4"
                  placeholder="Any additional details about your move, concerns, or special circumstances..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-navy focus:border-navy/50"
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`bg-navy text-white px-6 py-3 rounded-lg font-medium hover:bg-navy/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${
                    isSubmitting ? 'animate-pulse' : ''
                  }`}
                >
                  {isSubmitting ? 'Generating your plan...' : 'Generate PCS Plan'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;