import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (props.photos) {
    return (
      <section className="Photos">
        <div className="row">
          {props.photos.map(function (photo, index) {
            return (
              <div className="col-4">
                <a
                  href="{photos.src.original}"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={photo.src.tiny}
                    key={index}
                    className="img-fluid"
                    alt="example of the word"
                  />{" "}
                </a>
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
