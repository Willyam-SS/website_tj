import { Link } from "react-router-dom";
import "../styles/scoreboard.css";

export default function Scoreboard() {
  return (
    <>
      <Link
        to="/hasil"
        className="btn btn-warning btn-lg"
      >
        NEXT{" "}
        <img
          src="/next-button.png"
          width="30"
          alt="Next"
        />
      </Link>

      <div className="container-fluid p-4">

        <div className="container-box">

          {/* Header */}

          <div className="d-flex justify-content-center align-items-center mb-4">

            <img
              src="/images (1).jpg"
              className="btn btn-warning btn-lg"
              width="75"
              alt="Logo"
            />

            <div className="title mx-3">
              TARUNG DERAJAT
            </div>

            <img
              src="/images (1).jpg"
              className="btn btn-warning btn-lg"
              width="75"
              alt="Logo"
            />

          </div>

          <div className="row g-3">

            {/* MERAH */}

            <div className="col-md-4">

              <div className="card red-card p-4 text-white">

                <div className="label">
                  MERAH
                </div>

                <div className="name my-4">
                  Muhamad Rapli
                </div>

                <div className="team">
                  Meliau
                </div>

                <div className="mt-5">

                  <div className="border border-danger score-row d-flex justify-content-between">

                    <img
                      src="/avatar_4205556.png"
                      width="30"
                      alt="Jatuh"
                    />

                    <span>Jatuh</span>
                    <span>0</span>

                  </div>

                  <div className="border border-danger score-row d-flex justify-content-between">

                    <span>
                      <img
                        src="/warning_6897039.png"
                        width="30"
                        alt="Peringatan"
                      />
                    </span>

                    <span>Peringatan</span>
                    <span>0</span>

                  </div>

                  <div className="border border-danger score-row d-flex justify-content-between">

                    <span>
                      <img
                        src="/signs_17575714.png"
                        width="30"
                        alt="Diskualifikasi"
                      />
                    </span>

                    <span>Diskualifikasi</span>
                    <span>0</span>

                  </div>

                </div>

              </div>

            </div>

            {/* TENGAH */}

            <div className="col-md-4">

              <div className="center-card p-4 text-center h-100">

                <div className="kelas">
                  KELAS : Newbie -60 KG
                </div>

                <h2 className="mt-4">
                  RONDE : 1
                </h2>

                <div className="timer">
                  03:00
                </div>

                <div className="status mt-4">

                  <div>
                    STATUS:
                  </div>

                  PERTANDINGAN AKTIF

                </div>

              </div>

            </div>

            {/* BIRU */}

            <div className="col-md-4">

              <div className="card blue-card p-4 text-white">

                <div className="label">
                  BIRU
                </div>

                <div className="name my-4">
                  Ogiarius
                </div>

                <div className="team">
                  Balai Berkuak
                </div>

                <div className="mt-5">

                  <div className="border border-primary score-row d-flex justify-content-between">

                    <span>
                      <img
                        src="/avatar_4205556.png"
                        width="30"
                        alt="Jatuh"
                      />
                    </span>

                    <span>Jatuh</span>
                    <span>0</span>

                  </div>

                  <div className="border border-primary score-row d-flex justify-content-between">

                    <span>
                      <img
                        src="/warning_6897039.png"
                        width="30"
                        alt="Peringatan"
                      />
                    </span>

                    <span>Peringatan</span>
                    <span>0</span>

                  </div>

                  <div className="border border-primary score-row d-flex justify-content-between">

                    <span>
                      <img
                        src="/signs_17575714.png"
                        width="30"
                        alt="Diskualifikasi"
                      />
                    </span>

                    <span>Diskualifikasi</span>
                    <span>0</span>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </>
  );
}