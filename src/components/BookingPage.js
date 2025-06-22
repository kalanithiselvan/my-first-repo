import React, { useEffect, useState } from "react";

const BookingPage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [availableTimes, setAvailableTimes] = useState([]);
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");

  const fetchAPI = window.fetchAPI || (() => ["17:00", "18:00", "19:00"]);
  const submitAPI = window.submitAPI || (() => true);

  useEffect(() => {
    const fetchTimes = async () => {
      const times = await fetchAPI(new Date(selectedDate));
      setAvailableTimes(times);
      if (times.length > 0 && !times.includes(time)) {
        setTime(times[0]);
      }
    };
    fetchTimes();
  }, [selectedDate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      date: selectedDate.toISOString().split("T")[0],
      time,
      guests,
      occasion,
    };
    const success = submitAPI(formData);
    if (success) {
      alert("Reservation successful!");
    } else {
      alert("Reservation failed. Please try again.");
    }
  };

  return (
    <section className="booking">
      <h2>Reserve Your Table</h2>
      <form className="booking-form" onSubmit={handleSubmit}>
        <label htmlFor="res-date">Choose Date</label>
        <input
          type="date"
          id="res-date"
          value={selectedDate.toISOString().split("T")[0]}
          onChange={(e) => setSelectedDate(new Date(e.target.value))}
          required
        />

        <label htmlFor="res-time">Choose Time</label>
        <select
          id="res-time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        >
          {availableTimes.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>

        <label htmlFor="guests">Number of Guests</label>
        <input
          type="number"
          id="guests"
          min="1"
          max="10"
          value={guests}
          onChange={(e) => setGuests(parseInt(e.target.value))}
          required
        />

        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
          required
        >
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
          <option value="Casual">Casual</option>
        </select>

        <button type="submit">Make Reservation</button>
      </form>
    </section>
  );
};

export default BookingPage;
