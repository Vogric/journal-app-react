import React from "react";

export const JournalEntry = () => {
  return (
    <div className="journal__entry pointer">
      <div
        className="journal__entry-picture"
        style={{
          backgroundSize: "cover",
          backgroundImage:
            "url(https://earthsky.org/upl/2018/12/comet-wirtanen-Jack-Fusco-dec-2018-Anza-Borrego-desert-CA-e1544613895713.jpg)",
        }}
      ></div>

      <div className="journal__entry-body">
        <p className="journal__entry-title">Lorem ipsum</p>
        <p className="journal__entry-content">
          Reprehenderit id in duis consectetur deserunt veniam fugiat.
        </p>
      </div>

      <div className="journal__entry-date-box">
        <span>Wednesday</span>
        <h4>30</h4>
      </div>
    </div>
  );
};
