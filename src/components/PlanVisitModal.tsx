import React, { useState } from 'react';
import { X } from 'lucide-react';
import { planVisit } from '../services/api';

interface PlanVisitModalProps {
  destinationId: string;
  destinationName: string;
  onClose: () => void;
  onSuccess: () => void;
}

const PlanVisitModal: React.FC<PlanVisitModalProps> = ({
  destinationId,
  destinationName,
  onClose,
  onSuccess
}) => {
  const [date, setDate] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const success = await planVisit(destinationId, date);
      if (success) {
        onSuccess();
        onClose();
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-md w-full mx-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold">Plan Your Visit</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Destination</label>
            <input
              type="text"
              value={destinationName}
              disabled
              className="w-full px-3 py-2 bg-gray-100 border rounded-lg"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Visit Date</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              min={new Date().toISOString().split('T')[0]}
              required
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded-lg disabled:opacity-50"
          >
            {isSubmitting ? 'Planning...' : 'Plan Visit'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PlanVisitModal;