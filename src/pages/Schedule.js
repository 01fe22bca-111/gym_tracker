import React from 'react';
import '.components/pages/Schedule.css';

const Schedule = () => {
  const timeSlots = [
    { value: 'morning', label: 'Morning', start: '9:00', end: '12:00' },
    { value: 'afternoon', label: 'Afternoon', start: '13:00', end: '17:00' },
    { value: 'evening', label: 'Evening', start: '18:00', end: '21:00' },
  ];

  return (
    <div className="schedule-container">
      <h2>Select Schedule</h2>
      <div className="schedule-options">
        {timeSlots.map((slot) => (
          <label key={slot.value}>
            <input
              type="radio"
              id={slot.value}
              name="schedule"
              value={slot.value}
              checked={selectedSlot === slot.value}
              onChange={handleSlotChange}
            />
            {slot.label} ({slot.start} - {slot.end})
          </label>
        ))}
      </div>
      <table className="schedule-table">
        <thead>
          <tr>
            <th>Time</th>
            <th>Morning</th>
            <th>Afternoon</th>
            <th>Evening</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>9:00</td>
            <td>Morning</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>10:00</td>
            <td>Morning</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>11:00</td>
            <td>Morning</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>12:00</td>
            <td>Morning</td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>13:00</td>
            <td></td>
            <td>Afternoon</td>
            <td></td>
          </tr>
          <tr>
            <td>14:00</td>
            <td></td>
            <td>Afternoon</td>
            <td></td>
          </tr>
          <tr>
            <td>15:00</td>
            <td></td>
            <td>Afternoon</td>
            <td></td>
          </tr>
          <tr>
            <td>16:00</td>
            <td></td>
            <td>Afternoon</td>
            <td></td>
          </tr>
          <tr>
            <td>17:00</td>
            <td></td>
            <td>Afternoon</td>
            <td></td>
          </tr>
          <tr>
            <td>18:00</td>
            <td></td>
            <td></td>
            <td>Evening</td>
          </tr>
          <tr>
            <td>19:00</td>
            <td></td>
            <td></td>
            <td>Evening</td>
          </tr>
          <tr>
            <td>20:00</td>
            <td></td>
            <td></td>
            <td>Evening</td>
          </tr>
          <tr>
            <td>21:00</td>
            <td></td>
            <td></td>
            <td>Evening</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default Schedule;