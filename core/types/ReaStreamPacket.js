module.exports = class {
    isAudio = false;
    isMidi = false;
    packetSize = 0;
    identifier;
    channels = 0x00;
    sampleRate = 0;
    blockLength = (0).toShort();
    midiEvents = [];
    MAX_BLOCK_LENGTH = 1200;
}