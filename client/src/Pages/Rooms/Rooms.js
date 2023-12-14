import React, { useState, useEffect} from "react";
import styles from "./Rooms.module.css";
import RoomCard from "../../Components/RoomCard/RoomCard";
import AddRoomModal from "../../Components/RoomModal/AddRoomModal";
import { getAllRooms } from "../../Components/Http";
import signal from "../../images/signal.png";
import search from "../../images/search-icon.png";

const Rooms = () => {
  const [showModal, setShowModal] = useState(false);

  function openModal() {
    setShowModal(true);
  }

  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const accessAllRooms = async () => {
      const { data } = await getAllRooms();
      setRooms(data);
      console.log(data);
    };
    accessAllRooms();
  }, []);

  return (
    <>
      <div className="container">
        <div className={styles.roomsHeader}>
          <div className={styles.left}>
            <span className={styles.heading}>All voice rooms</span>
            <div className={styles.searchBox}>
              <img src={search} alt="search" />
              <input type="text" className={styles.searchInput} />
            </div>
          </div>
          <div className={styles.right}>
            <button
              className={styles.startRoomButton}
              onClick={() => openModal()}
            >
              <img src={signal} alt="add-room" />
              <span>Start a room</span>
            </button>
          </div>
        </div>

        <div className={styles.roomList}>
          {rooms.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
      </div>
      {showModal && <AddRoomModal onClose={() => setShowModal(false)} />}
    </>
  );
};

export default Rooms;
