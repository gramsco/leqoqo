import React from "react"
import './intro.css'

function Intro() {
  return (
    <div className="intro">
      <h1 className="test1">WELCOME <br />TO LE QOQO</h1>
      <p className="text"><strong>
        WANNA DO SOMETHING WITH SOMEONE?</strong>
      </p >

      <p className="text">
        FIND AN ACTIVITY AND THE MEMBER FROM QOQOSPHERE THAT CORRESPONDS YOU
      </p>
      <div>
        <p className="music">#music</p>
      </div>
      <div className="small-div">
        <div className="qoqo">
          <p className="margin-1">#culture</p>
          <p className="margin-2">#dance</p>
          <p className="margin-3">#theatre</p>
        </div>
        <div className="qoqo-img">
          <img className="qoqoimg" src="/happy_qoqo.png" alt="logoqoqo" />
        </div>
        <div className="qoqo">

          <p className="margin-5">#expo</p>
          <p className="margin-6">#cinema</p>
          <p className="margin-7">#arts</p>
        </div>
      </div>
      <div>
        <p className="music"># loisirs</p>
      </div>


    </div>

  )


}

export default Intro;