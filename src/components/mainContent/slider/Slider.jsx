import React, { useState } from "react";
import "./slider.css";
import { useRef } from "react";
import { useEffect } from "react";
import stomach from "../../../img/stomach.svg";
import tooth from "../../../img/tooth.svg";
import leg from "../../../img/leg.svg";
import heart from "../../../img/heart.svg";
import virus from "../../../img/virus.svg";
import vector from "../../../img/vector.svg";
import { NavLink } from "react-router-dom";

const Slider = () => {
  const [position, setPostion] = useState(0);
  const slider = useRef(null);
  const wrap = useRef(null);
  const slideLeft = () => {
    setPostion(position + 300);
  };
  useEffect(() => {
    if (slider.current !== null) {
      let width = slider.current.scrollWidth - slider.current.offsetWidth + 100;
      if (width + 100 <= position) {
        setPostion(0);
        slider.current.scrollLeft = position;
        wrap.current.style.paddingRight = "0px";
      } else if (width - 200 >= 0 && width - 200 <= position) {
        slider.current.scrollLeft = width;
        wrap.current.style.paddingRight = "32px";
      } else {
        slider.current.scrollLeft = position;
      }
    }
  }, [position]);
  return (
    <>
      <div className="slider">
        <div className="slider-win" ref={slider}>
          <div
            className="slider-wrapper"
            ref={wrap}>
            <div className="slider-item" id="stomach">
              <NavLink style={{textDecoration: 'none', color:'#007bff'}} to="box">
                <div className="flexHelp">
                  <div>
                    <img src={stomach} alt="" />
                  </div>
                  <p>⋮</p>
                </div>
                <div className="flexHelp">
                  <span>Боли в животе</span>
                </div>
              </NavLink>
            </div>
            <div className="slider-item" id="tooth">
              <NavLink style={{textDecoration: 'none', color:'#007bff'}} to="box">
                <div className="flexHelp">
                  <div>
                    <img src={tooth} alt="" />
                  </div>
                  <p>⋮</p>
                </div>
                <div className="flexHelp">
                  <span>Зубная боль</span>
                </div>
              </NavLink>
            </div>
            <div className="slider-item" id="leg">
              <NavLink style={{textDecoration: 'none', color:'#007bff'}} to="box">
                <div className="flexHelp">
                  <div>
                    <img src={leg} alt="" />
                  </div>
                  <p>⋮</p>
                </div>
                <div className="flexHelp">
                  <span>Последствия травм</span>
                </div>
              </NavLink>
            </div>
            <div className="slider-item" id="heart">
              <NavLink style={{textDecoration: 'none', color:'#007bff'}} to="box">
                <div className="flexHelp">
                  <div>
                    <img src={heart} alt="" />
                  </div>
                  <p>⋮</p>
                </div>
                <div className="flexHelp">
                  <span>Проблемы с сердцем</span>
                </div>
              </NavLink>
            </div>
            <div className="slider-item" id="virus">
              <NavLink style={{textDecoration: 'none', color:'#007bff'}} to="box">
                <div className="flexHelp">
                  <div>
                    <img src={virus} alt="" />
                  </div>
                  <p>⋮</p>
                </div>
                <div className="flexHelp">
                  <span>Простуда</span>
                </div>
              </NavLink>
            </div>
          </div>
          <div className="slider-control" onClick={slideLeft}>
            <div className="vector">
              <div>
                <img src={vector} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
