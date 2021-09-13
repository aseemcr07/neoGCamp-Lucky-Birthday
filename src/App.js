import React, { useState } from "react";
import "./styles.css";

import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";

export default function App() {
  var [message, setMessage] = useState("<Result here>");

  function sumOfDigits(number) {
    var sum = 0;
    while (number !== 0) {
      sum = sum + Math.floor(number % 10);
      number = number / 10;
    }
    return sum;
  }
  function onClickHandler(event) {
    var dateOfBirth = document.querySelector(".dob").value;
    var numToCheck = document.querySelector(".lucky-num").value;

    if (dateOfBirth && numToCheck) {
      dateOfBirth = Number(dateOfBirth.replaceAll("-", ""));
      var dobSum = sumOfDigits(dateOfBirth);
      if (dobSum % numToCheck === 0) {
        message = numToCheck + " is a lucky number! 🥳 🥳";
      } else {
        message = numToCheck + " is not that lucky 😕";
      }
    } else {
      message = "Please enter both fields!";
    }
    setMessage(message);
  }

  return (
    <div className="App">
      <h1>Is Your Birthday Lucky? 🤔</h1>
      <div className="main-app">
        <div className="input-heading">Date of Birth:</div>
        <input
          className="dob"
          type="date"
          min="1950-01-01"
          max="2015-12-31"
        ></input>
        <div className="input-heading">Lucky Number:</div>
        <input
          className="lucky-num"
          type="number"
          placeholder="Enter a number"
        ></input>
        <button className="check-button" onClick={onClickHandler}>
          Check
        </button>
        <div className="message" type="text" readOnly>
          {message}
        </div>
      </div>
      <footer className="footer">
        <div className="footer-header">Connect with me</div>
        <ul className="social-links list-non-bullet">
          <li className="list-item-inline">
            <a
              className="link"
              href="https://github.com/aseemcr07"
              target="_blank"
            >
              <FaGithub />
            </a>
          </li>
          <li className="list-item-inline">
            <a
              className="link"
              href="https://twitter.com/TheAbdulAseem"
              target="_blank"
            >
              <FaTwitter />
            </a>
          </li>
          <li className="list-item-inline">
            <a
              className="link"
              href="https://www.linkedin.com/in/abdul-aseem-shaikh-684b511a4/"
              target="_blank"
            >
              <FaLinkedin />
            </a>
          </li>
          <li className="list-item-inline">
            <a
              className="link"
              href="mailto:aseemcr07@gmail.com"
              target="_blank"
            >
              <FaRegEnvelope />
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
