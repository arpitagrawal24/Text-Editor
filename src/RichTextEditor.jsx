import { useState } from "react";
import ReactPlayer from "react-player";
import { fontList, buttonList } from "./utils";
import Button from "./Button";

const RichTextEditor = () => {
  const [activeButtons, setActiveButtons] = useState([]);
  const [postVedios, setPostVedios] = useState([])
  const [postCode, setPostCode] = useState([])
  const [showCodeInput, setShowCodeInput] = useState(false);
  const [codeInput, setCodeInput] = useState("");

  const handleButtonClick = (action, value = null) => {
    if (action === "createLink") {
      return handleLinkButtonClick();
    }
    else if (action === "formatBlock" && value) {
      // Handle heading commands separately
      if (value.startsWith("H")) {
        document.execCommand("formatBlock", false, value);
      } else {
        // Handle other formatBlock commands
        document.execCommand(action, false, value);
      }
    } else {
      document.execCommand(action, false, value);
    }

    console.log("rvrguy")
    toggleActiveButton(action);
  };

  const toggleActiveButton = (action) => {
    setActiveButtons((prevButtons) => {
      if (prevButtons.includes(action)) {
        // Remove the action from the array if already present
        return prevButtons.filter((item) => item !== action);
      } else {
        // Add the action to the array if not present
        return [...prevButtons, action];
      }
    });
  };

  const handleLinkButtonClick = () => {
    const url = prompt("Enter the URL:");
    if (url) {
      handleButtonClick("createLink", url);
    } else {
      handleButtonClick("unlink");
    }
  };

  const handleVideo = () => {
    const url = prompt("Enter the URL:");
    if (url !== null)
      setPostVedios([...postVedios, url])
  }

  const handleCode = () => {
    setShowCodeInput(true);
  };

  const handleSubmitCode = () => {
    // Save the code to postCode state
    setPostCode([...postCode, codeInput]);
    // Reset code input and hide the text area
    setCodeInput("");
    setShowCodeInput(false);
  };

  return (
    <div className="absolute top-0 bg-purple-50 p-8 flex-col m-auto w-full rounded-md shadow-md">

      <h1 className="text-3xl font-bold text-center py-1 underline font-serif">Text Editor</h1>

      <div className=" flex flex-wrap justify-center items-center gap-4 p-5 bg-purple-100 border-0 rounded top-0 sticky">

        {/* Buttons with onClick handlers */}

        {buttonList.map((button, index) => (
          <Button
            key={index}
            index={index}
            icon={button.icon}
            action={button.action}
            isActive={activeButtons.includes(button.action)}
            handleButtonClick={handleButtonClick}
          />
        ))}

        <button
          onClick={handleVideo}
          className="bg-gray-800 text-white rounded p-1 focus:outline-none"
        >
          post video
        </button>
        <button
          onClick={handleCode}
          className="bg-gray-800 text-white rounded p-1 focus:outline-none"
        >
          post code
        </button>

        {/* Select components */}

        <select
          className="bg-gray-800 text-white rounded p-1 focus:outline-none"
          onChange={(e) => handleButtonClick("formatBlock", e.target.value)}
        >
          {["H1", "H2", "H3", "H4", "H5", "H6"].map((heading, index) => (
            <option key={index} value={`<${heading}>`}>
              {heading}
            </option>
          ))}
        </select>

        <select
          className="bg-gray-800 text-white rounded p-1 focus:outline-none"
          onChange={(e) => handleButtonClick("fontName", e.target.value)}
        >
          {fontList.map((font, index) => (
            <option key={index} value={font}>
              {font}
            </option>
          ))}
        </select>

        <select
          className="bg-gray-800 text-white rounded p-1 focus:outline-none"
          onChange={(e) => handleButtonClick("fontSize", e.target.value)}
        >
          {Array.from({ length: 7 }, (_, index) => (
            <option key={index + 1} value={index + 1}>
              {index + 1}
            </option>
          ))}
        </select>


        <div className="bg-gray-300 text-gray-700 rounded p-1 focus:outline-none flex items-center">
          <input
            type="color"
            className=""
            onChange={(e) => handleButtonClick("foreColor", e.target.value)}
          />
          <label htmlFor="foreColor">Font Color</label>
        </div>

        <div className="bg-gray-300 text-gray-700 rounded p-1 focus:outline-none flex items-center">
          <input
            type="color"
            className=""
            onChange={(e) => handleButtonClick("backColor", e.target.value)}
          />
          <label htmlFor="backColor">Highlight Color</label>
        </div>



      </div>

      <div className="my-5 border bg-purple-100 p-4 min-h-[650px]">

        <div
          className="p-5 bg-gray-300 rounded-md min-h-[500px] overflow-y-auto"
          contentEditable="true"
        />

        {showCodeInput && (
          <div className="flex flex-col items-center">
            <textarea
              value={codeInput}
              onChange={(e) => setCodeInput(e.target.value)}
              placeholder="Enter your code here..."
              className="border p-2 my-2 rounded w-full  min-h-[100px] focus:outline-none"
            />
            <button
              onClick={handleSubmitCode}
              className="bg-gray-800 text-white rounded p-2 focus:outline-none"
            >
              Submit Code
            </button>
          </div>
        )}

        {postVedios.length !== 0 ? <h1 className=" p-2 flex justify-center text-2xl ">Video</h1> : null}
        <div className="flex flex-wrap justify-center items-center gap-2 my-2  " >
          {postVedios && postVedios.map((post, index) => {
            return (
              <div key={index} className="p-2 flex">
                <ReactPlayer width='750px' height="500px" url={post} />
              </div>
            )
          })}
        </div>

        {postCode.length !== 0 ? <h1 className=" p-2 flex justify-center text-2xl ">Code</h1> : null}
        <div className="flex flex-wrap justify-center items-center gap-2 my-2   " >
          {postCode && postCode.map((post, index) => {
            return (
              <div key={index} className="p-2 w-full">
                <div className="bg-gray-500 text-slate-100 rounded-lg shadow-md p-1 border focus:outline-none whitespace-pre-wrap" >
                  {post}
                </div>
              </div>
            )
          })}
        </div>

      </div>

    </div>

  )
}

export default RichTextEditor
