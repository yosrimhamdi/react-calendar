import React, { useState } from 'react';
import DateTimePicker from 'react-datetime-picker';

const Reservation = ({ addReservation }) => {
  const [reservation, setReservation] = useState({
    room: 'salle: entretien',
    subject: 'test sujet',
    start: new Date(),
    end: new Date(),
  });

  const { room, subject, start, end } = reservation;

  return (
    <div>
      <h1>reserver une salle(Tunis pour le moment)</h1>
      <h4>choisir une salle</h4>
      <select
        onChange={(e) => {
          setReservation({ ...reservation, room: e.target.value });
        }}
      >
        <option value="salle: entretien">salle: entretien</option>
        <option value="mini salle 1">mini salle 1</option>
        <option value="mini salle 2">mini salle 2</option>
      </select>
      <h4>Saisir le sujet</h4>
      <input
        type="text"
        placeholder="sujet: reunion"
        value={subject}
        onChange={(e) =>
          setReservation({ ...reservation, subject: e.target.value })
        }
      />
      <br />
      <br />
      start:
      <DateTimePicker
        locale="fr"
        value={start}
        onChange={(date) => setReservation({ ...reservation, start: date })}
      />
      end:
      <DateTimePicker
        locale="fr"
        value={end}
        onChange={(date) => setReservation({ ...reservation, end: date })}
      />
      <br />
      <br />
      <button
        onClick={() => {
          console.log(reservation);
          addReservation({ ...reservation, title: `${room}: ${subject}` });
        }}
      >
        Reserver
      </button>
    </div>
  );
};

export default Reservation;
