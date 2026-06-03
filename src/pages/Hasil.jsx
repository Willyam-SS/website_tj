import { Link } from "react-router-dom";
import "../styles/hasil.css";

export default function Hasil() {
  return (
    <>
      <Link
        to="/"
        className="btn btn-warning btn-lg"
      >
        KEMBALI{" "}
        <img
          src="/left-arrow (1).png"
          width="33"
          alt="Kembali"
        />
      </Link>

      <div className="container-fluid p-4">
        <div className="main-box">

          {/* TITLE */}

          <img
            src="/—Pngtree—a boy and girl karate_17237870.png"
            className="btn btn-warning btn-lg"
            width="190"
            alt="Karate"
          />

          <div className="title">
            HASIL PERTANDINGAN
          </div>

          {/* SCORE */}

          <div className="row align-items-center g-4">

            {/* RED */}

            <div className="col-lg-5">
              <div className="red-side">

                <div className="d-flex justify-content-between align-items-center">

               {/* menurutku ini tidak perlu sih :v ribet (nambahin foto atlet)  */}
                  {/* <div className="d-flex align-items-center gap-3">
                    <img
                      src="/WhatsApp Image 2026-05-28 at 13.36.31.jpeg"
                      width="150"
                      alt="Merah"
                    />
                  </div> */}

                  <div>

                    <div className="corner">
                      MERAH
                    </div>

                    <div className="fighter">
                      Muhamad Rapli
                    </div>

                    <div className="team">
                      Meliau
                    </div>

                  </div>

                  <div className="text-center">

                    <div className="point">
                      3
                    </div>

                    <div className="point-text">
                      POIN
                    </div>

                  </div>

                </div>

              </div>
            </div>

            {/* VS */}

            <div className="col-lg-2">
              <div className="vs">
                VS
              </div>
            </div>

            {/* BLUE */}

            <div className="col-lg-5">

              <div className="blue-side">

                <div className="d-flex justify-content-between align-items-center">

                  <div className="d-flex align-items-center gap-3">

                    <div className="text-center">

                      <div className="point">
                        1
                      </div>

                      <div className="point-text">
                        POIN
                      </div>

                    </div>

                  </div>

                  <div className="text-end">

                    <div className="corner">
                      BIRU
                    </div>

                    <div className="fighter">
                      Ogiarius
                    </div>

                    <div className="team">
                      Balai Berkuak
                    </div>

                  </div>

                </div>

                {/* <img
                  src="/WhatsApp Image 2026-05-28 at 13.52.05.jpeg"
                  width="150"
                  alt="Biru"
                /> */}

              </div>

            </div>

          </div>

          {/* WINNER */}

          <div className="winner-box">

            <div className="winner-title">
              PEMENANG
            </div>

            <div className="winner-name">
              Muhamad Rapli
            </div>

            <div className="star">
              ★ ★ ★
            </div>

            <div className="winner-bottom">

              <span className="winner-label">
                MERAH
              </span>

              <span className="winner-score">
                3 POIN
              </span>

            </div>

          </div>

        </div>
      </div>
    </>
  );
}