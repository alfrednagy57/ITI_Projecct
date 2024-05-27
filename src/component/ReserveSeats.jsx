import { faChair } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../css/reserveSeats.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ReserveSeats() {
  const navigate = useNavigate();
  const [seats, setSeats] = useState(() => {
    const savedSeats = localStorage.getItem("seats");
    if (savedSeats) {
      return JSON.parse(savedSeats);
    } else {
      return [
        { id: 1, isBooked: false },
        { id: 2, isBooked: false },
        { id: 3, isBooked: false },
        { id: 4, isBooked: false },
        { id: 5, isBooked: false },
        { id: 6, isBooked: false },
        { id: 7, isBooked: false },
        { id: 8, isBooked: false },
        { id: 9, isBooked: false },
        { id: 10, isBooked: false },
        { id: 11, isBooked: false },
        { id: 12, isBooked: false },
        { id: 13, isBooked: false },
        { id: 14, isBooked: false },
        { id: 15, isBooked: false },
        { id: 16, isBooked: false },
        { id: 17, isBooked: false },
        { id: 18, isBooked: false },
        { id: 19, isBooked: false },
        { id: 20, isBooked: false },
        { id: 21, isBooked: false },
        { id: 22, isBooked: false },
        { id: 23, isBooked: false },
        { id: 24, isBooked: false },
      ];
    }
  });
  const handleBuyClick = () => {
    // Logic for buying the seats
    alert("Purchase successful!");
    navigate("/home/reserveSeats");
    };
  const handleSeatClick = (id) => {
    const updatedSeats = seats.map((seat) => {
      if (seat.id === id) {
        return { ...seat, isBooked: !seat.isBooked };
      }
      return seat;
    });
    setSeats(updatedSeats);
  };
  useEffect(() => {
    localStorage.setItem("seats", JSON.stringify(seats));
  }, [seats]);
  return (
    <div className="theatre-container">
      <div className="info d-flex justify-content-center mt-3 gap-4">
        <div>
          booked
          <FontAwesomeIcon className="booked mx-2" icon={faChair} />
        </div>
        <div>
          not booked
          <FontAwesomeIcon className="mx-2" icon={faChair} />
        </div>
      </div>
      <div className="screen"></div>

      <div className="row w-25">
        {seats.map((seat) => (
          <div
            key={seat.id}
            className={`seat col-2${seat.isBooked ? " booked" : ""}`}
            onClick={() => handleSeatClick(seat.id)}
          >
            <FontAwesomeIcon icon={faChair} />
          </div>
        ))}
      </div>
      <button className="btn btn-success mt-5"  onClick={handleBuyClick}>Buy</button>
    </div>
  );
}

export default ReserveSeats;
