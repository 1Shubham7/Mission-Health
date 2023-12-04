import React from "react";
import "./me.css";
import myPic from "./myPic.png";

export default function Me() {
  return (
    <>
      <div className="segment">
        {/* <div className="flexarea"> */}
        <div className="my-text">
          <p className="love">Made with Love by</p>
          <p className="name">Shubham Singh</p>
          <p className="description">
            Technical writing intern @GeeksforGeeks | Ex-Hugo Intern @Hooman Digital | Contributor - CNCF ORAS | GSSoC'23 Top 100 | CNCF Zero to Merge | Web Dev | DevOps | 
            Postman Student Expert | Second year Undergrad (CSE)
          </p>
        </div>
        <img src={myPic} alt="hi" className="pic" />
      </div>
      {/* </div> */}
    </>
  );
}
