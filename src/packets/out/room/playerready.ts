import { OutPacketBase } from 'packets/out/packet'

import { RoomReadyStatus } from 'room/room'

/**
 * sends the ready status of an user
 * @class OutRoomPlayerReady
 */
export class OutRoomPlayerReady {
    private userId: number
    private readyStatus: RoomReadyStatus

    constructor(userId: number, readyStatus: RoomReadyStatus) {
        this.userId = userId
        this.readyStatus = readyStatus
    }

    public build(outPacket: OutPacketBase): void {
        outPacket.writeUInt32(this.userId)
        outPacket.writeUInt8(this.readyStatus)
    }
}
