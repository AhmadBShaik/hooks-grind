import React from "react";

type RecorderStatus = "NOT_STARTED" | "RECORDING" | "PAUSED" | "FINISHED";
export const UseEffectSample4 = () => {
  // hooks
  const [num, setNum] = React.useState(0);
  const [recorderState, setRecorderState] =
    React.useState<RecorderStatus>("NOT_STARTED");
  const [showRecordingBlinker, setShowRecordingBlinker] =
    React.useState<boolean>(false);
  React.useEffect(() => {
    const handler = setInterval(() => {
      setNum((prevNum) => {
        return recorderState === "RECORDING" ? prevNum + 1 : prevNum;
      });
    }, 1000);
    return () => clearInterval(handler);
  }, [recorderState]);

  React.useEffect(() => {
    const handler = setInterval(() => {
      console.log(recorderState);

      if (recorderState === "RECORDING") {
        setShowRecordingBlinker((prevState) => !prevState);
      }
    }, 750);
    return () => clearInterval(handler);
  },[recorderState]);

  return (
    <>
      <h1>Simple Recorder</h1>
      <div
        style={{
          border: "2px solid black",
          margin: "0 auto",
          maxWidth: "500px",
          minHeight: "300px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 20,
            right: 10,
          }}
        >
          {recorderState === "RECORDING" ? (
            showRecordingBlinker && <div style={{color:"green"}}>&#9679; Recording</div>
          ) : recorderState === "PAUSED" ? (
            <div style={{color:"orange"}}>Paused</div>
          ) : (
            <></>
          )}
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 40,
            left: 0,
            right: 0,
          }}
        >
          {new Date(num*1000).toISOString().split("T")[1].split(".000")[0]}
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 12,
            left: 0,
            right: 0,
          }}
        >
          {recorderState === "NOT_STARTED" ? (
            <button onClick={() => setRecorderState("RECORDING")}>Start</button>
          ) : (
            <>
              {recorderState === "PAUSED" ? (
                <button onClick={() => setRecorderState("RECORDING")}>
                  resume
                </button>
              ) : (
                <button onClick={() => setRecorderState("PAUSED")}>
                  pause
                </button>
              )}
              <button
                onClick={() => {
                  setNum(0);
                  setRecorderState("NOT_STARTED");
                }}
              >
                Finish
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};
