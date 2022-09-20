import React,{ useRef, useState, useEffect, useCallback } from "react";
// import Head from "next/head";
// import styles from "../styles/Home.module.scss";
import "./App.css"
import "@tensorflow/tfjs-core";
import "@tensorflow/tfjs-converter";
import "@tensorflow/tfjs-backend-webgl";
import * as bodyPix from "@tensorflow-models/body-pix";
import Webcam from "react-webcam";

import school from "./school.jpg"

function App() {

  // ---

  const webcamRef = useRef(null);
  const canvasRef=  useRef(null);
  
  const [bodypixnet,setBodypixnet] = useState();
  const [prevClassName,setPrevClassName] = useState();



  const drawimage = async (
    webcam,
    context,
    canvas
  ) => {
    // create tempCanvas
    const tempCanvas = document.createElement("canvas");
    tempCanvas.width = webcam.videoWidth;
    tempCanvas.height = webcam.videoHeight;
    const tempCtx = tempCanvas.getContext("2d");
    const segmentation = await bodypixnet.segmentPerson(webcam);
    const mask = bodyPix.toMask(segmentation);
    (async function drawMask() {
      requestAnimationFrame(drawMask);
      // draw mask on tempCanvas
      const segmentation = await bodypixnet.segmentPerson(webcam);
      const mask = bodyPix.toMask(segmentation);
      tempCtx.putImageData(mask, 0, 0);
      // draw original image
      context.drawImage(webcam, 0, 0, canvas.width, canvas.height);
      // use destination-out, then only masked area will be removed
      context.save();
      context.globalCompositeOperation = "destination-out";
      context.drawImage(tempCanvas, 0, 0, canvas.width, canvas.height);
      context.restore();
    })();
  };

  const clickHandler = async (className) => {
    const webcam = webcamRef.current.video;
    const canvas = canvasRef.current;
    webcam.width = canvas.width = webcam.videoWidth;
    webcam.height = canvas.height = webcam.videoHeight;
    const context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
    canvas.classList.add(className);
    if (bodypixnet) {
      drawimage(webcam, context, canvas);
    }

    if (prevClassName) {
      canvas.classList.remove(prevClassName);
      setPrevClassName(className);
    } else {
      setPrevClassName(className);
    }
    canvas.classList.add(className);
  };

  // --------

  const videoConstraints = {
    // width:0,
    // height:0,
    width:1280,
    height:720,
    facingMode:"user"
  }

  // const capture = useCallback(
  //   () => {
  //     const imageSrc = webcamRef.current.getScreenshot();
  //     console.log(imageSrc)
  //   },[webcamRef])

  useEffect(() => {
    bodyPix.load().then((net) => {
      setBodypixnet(net);
    })
    // clickHandler("schoolMain")
  },[])


  return (
    <div className="App">
        <Webcam 
          ref={webcamRef}
          audio={false}
          // height={0}
          // width={0}
          height={720}
          width={1280}
          screenshotFormat="image/jpeg"
          videoConstraints={videoConstraints}
          style={{visibility:"hidden"}}
        />
        <canvas ref={canvasRef} style={{width:"1280px",height:"720px", backgroundSize:"cover"}} />
        <button onClick={() => clickHandler("schoolMain")}>schoolMain</button>
        <button onClick={() => clickHandler("schoolMain")}></button>
        {/* <button onClick={capture}>capture</button> */}
    </div>
  );
}

export default App;
