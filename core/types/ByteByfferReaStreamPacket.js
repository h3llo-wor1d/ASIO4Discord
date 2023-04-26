module.exports = class {
    buffer = Buffer();
    
    constructor(buffer) {
        this.buffer = buffer;
    }

    audioIdentifier = [77, 82, 83, 82].toByteArray();
    midiIdentifier = [109, 82, 83, 82].toByteArray();
    packetSizeOffset = 4
    identifierOffset = 8

    // audio
    channelOffset = 40
    sampleRateOffset = 41
    blockLengthOffset = 45
    audioDataOffset = 47

    // MIDI
    midiEventsOffset = 40

    AUDIO_PACKET_HEADER_BYTE_SIZE = 4 + 4 + 32 + 1 + 4 + 2
    MIDI_PACKET_HEADER_BYTE_SIZE = 4 + 4 + 32

    is = (type="audio") => {
        const buffer = this.buffer;
        const identifier = this[`${type.toLowerCase()}Identifier`];
        return (buffer[0] == identifier[0]
            && buffer[1] == identifier[1]
            && buffer[2] == identifier[2]
            && buffer[3] == identifier[3] ? true : false);
    }
}