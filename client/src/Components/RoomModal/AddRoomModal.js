import React, { useState } from "react";
import styles from "./RoomModal.module.css";
import TextInput from "../Shared/TextInput/TextInput";
import earthIcon from "../../images/earth-icon.png";
import socialIcon from "../../images/social-icon.png";
import lockIcon from "../../images/lock-icon.png";
import closeIcon from "../../images/close-icon.png";
import {createRooms as create} from "../Http/index";
import {useNavigate} from 'react-router-dom';
import playIcon from "../../images/play-icon.png";

const AddRoomModal = ({ onClose }) => {
  const [topic, setTopic] = useState("");
  const [roomType, setRoomType] = useState("open");
  const navigate = useNavigate();

  const createRoom = async() => {
    try{
      if(!topic || !roomType){
        return;
      }
      const {data} = await create({topic,roomType});
      console.log(data);
      navigate(`/room/${data.id}`);
    }
    catch(err){
        console.log(err);
    }
  }

  return (
    <div className={styles.modalMask}>
      <div className={styles.modalBody}>
        <button onClick={onClose} className={styles.closeButton}>
          <img
            src={closeIcon}
            alt="close"
          />
        </button>
        <div className={styles.modalHeader}>
          <h3 className={styles.heading}>Enter the topic to be disscussed</h3>
          <TextInput
            fullwidth="true"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
          />
          <h2 className={styles.subHeading}>Room types</h2>
          <div className={styles.roomTypes}>
            <div
              onClick={() => setRoomType("open")}
              className={`${styles.typeBox} ${
                roomType === "open" ? styles.active : ""
              }`}
            >
              <img src={earthIcon} alt="globe" />
              <span>Open</span>
            </div>
            <div
              onClick={() => setRoomType("social")}
              className={`${styles.typeBox} ${
                roomType === "social" ? styles.active : ""
              }`}
            >
              <img src={socialIcon} alt="social" />
              <span>Social</span>
            </div>
            <div
              onClick={() => setRoomType("private")}
              className={`${styles.typeBox} ${
                roomType === "private" ? styles.active : ""
              }`}
            >
              <img src={lockIcon} alt="lock" />
              <span>Private</span>
            </div>
          </div>
        </div>
        <div className={styles.modalFooter}>
          <h2>Start a room, open to everyone</h2>
          <button className={styles.footerButton} onClick={()=>createRoom()}>
            <img
              src={playIcon}
              alt="create"
            />
            <span>Let's go</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddRoomModal;
