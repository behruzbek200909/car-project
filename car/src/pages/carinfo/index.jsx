import React from 'react'
import Pastels from "../../assets/img/Pastels.png"
import Academy from "../../assets/img/Academy.png"
import "./carinfo.css"

export const Carinfo = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="section-new">
          <div className="section-new-language">
            <h1 className="titans">Chevrolet Malibu</h1>
            <p className="best">329 900 000 so‘m dan</p>
            <img src={Pastels} alt="" className="violin" />
            <p className="music">
              Marka:
              <span className="music-paganini">CHEVROLET</span>
            </p>
            <p className="music">
              Tanirovkasi:
              <span className="music-paganini">Yo‘q</span>
            </p>
            <p className="music">
              Motor:
              <span className="music-paganini">1.6</span>
            </p>
            <p className="music">
              Year:
              <span className="music-paganini">2016</span>
            </p>
            <p className="music">
              Color:
              <span className="music-paganini">Oq</span>
            </p>
            <p className="music">
              Distance:
              <span className="music-paganini">3000 km</span>
            </p>
            <p className="music">
              Deseription:
              <span className="music-paganin">
                Mishina ideal holatda krasska top toza 100tali. Ayol kishiniki
                judayam akuratno haydalgan.
              </span>
              <div className="arsenal"></div>
              <p className="music">
                Umumiy xarajat:
                <span className="music-paganini">329 900 000 so'm dan</span>
              </p>
            </p>
          </div>
          <div className="clash">
            <h2 className="of">Chevrolet Malibu</h2>
            <img src={Academy} alt="" className="date" width={700} />
            <p className="noise">
              Tasvir tanlangan konfiguratsiyaga mos kelmasligi mumkin.
              Mashinaning rangi ushbu saytda taqdim etilganidan farq qilishi
              mumkin.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
