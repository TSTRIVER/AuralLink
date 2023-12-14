import {Room} from "../models/roomModel.js";

export const createRoomService = async({topic,roomType,ownerId}) => {
   const newRoom = await Room.create({
      topic,
      roomType,
      ownerId,
      speakers: [ownerId]
   })
   return newRoom;
}

export const fetchRoomService = async(types) => {
   const rooms = await Room.find({ roomType: { $in: types } }).populate(
      'speakers'
    );
    return rooms;
}

export const fetchRoomByIdService = async(id) => {
   const room = await Room.findOne({_id: id});
   return room;
}