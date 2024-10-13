import React from 'react'
import Neksiya from "../../assets/img/neksiya.png"
import "./galaxy.css"

export const Galaxy = () => {
  return (
    <section className="galaxy">
      <div className="container">
        <div className="galaxy-poison">
          <h1 className="ouyfits">Modellari</h1>
          <ul className="galaxy-list">
            <li className="galaxy-list-item">
              <a href="#" className="galax-list-link">
                <img src={Neksiya} alt="" className="ha" />
                <h2 className="regret">CHEVROLET</h2>
                <p className="glube">Narxi: 329 900 000 </p>
              </a>
            </li>
            <li className="galaxy-list-item">
              <a href="#" className="galax-list-link">
                <img src={Neksiya} alt="" className="ha" />
                <h2 className="regret">Lada</h2>
                <p className="glube">Narxi: 329 900 000 </p>
              </a>
            </li>
            <li className="galaxy-list-item">
              <a href="#" className="galax-list-link">
                <img src={Neksiya} alt="" className="ha" />
                <h2 className="regret">lamborghini</h2>
                <p className="glube">Narxi: 329 900 000 </p>
              </a>
            </li>
            <li className="galaxy-list-item">
              <a href="#" className="galax-list-link">
                <img src={Neksiya} alt="" className="ha" />
                <h2 className="regret">ferrari</h2>
                <p className="glube">Narxi: 329 900 000 </p>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
