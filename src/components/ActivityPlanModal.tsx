import React, { useState } from 'react';
import { X, Users } from 'lucide-react';
import { planActivity } from '../services/api';

interface ActivityPlanModalProps {
  destinationId: string;
  destinationName: string;
  activities: string[];
  onClose: () => void;
  onSuccess: () => void;
}

const ActivityPlanModal: React.FC<ActivityPlanModalProps> = ({
  destinationId,
  destinationName,
  activities,
  onClose,
  onSuccess
}) => {
  const [selectedActivity, setSelectedActivity] = useState('');
  const [date, setDate] = useState('');
  const [participants, setParticipants] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const success = await planActivity(destinationId, selectedActivity, date, participants);
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
          <h3 className="text-xl font-semibold">Plan Activity</h3>
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
            <label className="block text-sm font-medium mb-2">Activity</label>
            <select
              value={selectedActivity}
              onChange={(e) => setSelectedActivity(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500"
            >
              <option value="">Select an activity</option>
              {activities.map((activity) => (
                <option key={activity} value={activity}>
                  {activity}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Date</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              min={new Date().toISOString().split('T')[0]}
              required
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Number of Participants</label>
            <div className="flex items-center">
              <Users className="h-5 w-5 text-gray-400 mr-2" />
              <input
                type="number"
                value={participants}
                onChange={(e) => setParticipants(parseInt(e.target.value))}
                min="1"
                max="20"
                required
                className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-emerald-500"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-2 px-4 rounded-lg disabled:opacity-50"
          >
            {isSubmitting ? 'Planning...' : 'Plan Activity'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ActivityPlanModal;