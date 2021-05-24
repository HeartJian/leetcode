const audioCtx = new window.AudioContext();

let headerBuffer =null;
let segment = []
const getDecode = async () => {
    const response = await fetch('./test.wav', {
        headers: { Range: `bytes=0-100` }, // 前100字节
    });
    const buffer = await response.arrayBuffer();
    const {  dataSizeBuffer, dataBuffer, dataSize } = getFirstBufferIndo(buffer);
    const fristInfo = {
         dataSizeBuffer, dataBuffer, dataSize
    }
    let remainLength = dataSize - buffer.byteLength + 54 // 54 代表协议的四个字节跟中旬讯息字节
    while (remainLength > 0) {
        remainLength = remainLength - callNext(dataSize, remainLength, fristInfo);
    }

}

const callNext = (remainLength, fristInfo) => {
    const begin = dataSize - remainLength;
    const end = dataSize - remainLength > 1024 ? dataSize - remainLength + 1024 : dataSize + 54;
    const response = await fetch('./test.wav', {
        headers: { Range: `bytes=${begin}-${end}` }, // 前100字节
    });
    const buffer = response.arrayBuffer();
  
    const newByteLength = buffer.byteLength + begin;
    segment.push({
        vw:new Uint8Array(buffer),
        offset:begin
    })
    const newBuffer = new ArrayBuffer(newByteLength);
    const dataView = new Uint8Array(newBuffer);
    setWavHeadDataLength(newByteLength,headerBuffer)
    const headView = new Uint8Array(headerBuffer);
    dataView.set(headView);
    segment.forEach((vw,offset)=>{
        dataView.set(vw,offset)
    });

    return dataBuffer;
}

// 返回了一个新的head
const setWavHeadDataLength = (byteLength) =>{
    const view = new DataView(headerBuffer);
    view.setUint32(offset, byteLength, true);
}



const getFirstBufferIndo = (buffer) => {
    const dv = new DataView(buffer);
    window.buffer = buffer;
    window.dv = dv;
    const dvList = [];
    let offset = 0;
    for (let i = 0, len = dv.byteLength; i < len; i += 1) {
        dvList.push(dv.getInt8(i));
        if (String.fromCharCode(dv.getInt8(i)) === "d") {
            if (String.fromCharCode(dv.getInt8(i + 1)) === "a" && String.fromCharCode(dv.getInt8(i + 2)) === "t" && String.fromCharCode(dv.getInt8(i + 3)) === "a") {
                offset = i + 4;
            }
        }
    };
    // 到data
    const headerBuffer = buffer.slice(0, offset);
    // 到dataSize
    const dataSizeBuffer = buffer.slice(offset, 4 + offset);
    const dataBuffer = buffer.slice(offset + 4, dataSizeBuffer.byteLength + 1);
    return {
        headerBuffer,
        dataSize: dv.getUint32(offset, true),
        dataSizeBuffer,
        dataBuffer,
        offset,
    }
}

export default function Index() {
    return <button onClick={() => getDecode()}>启动</button>
}