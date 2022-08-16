// ! ###############   Importing   ###############
// ===============   Next JS   ===============
import Link from "next/link";

// ! ###############   Code   ###############
export default function Home() {
  return (
    <div>
      <div className="gallery">
        <Link className="absolute" href="/khrystynanehrych/home">
          <img
            src="https://assets.codepen.io/1480814/archer.jpg"
            alt=""
          />
        </Link>
        <Link className="absolute" href="/eugenfedoriuc/home">
          <img
            src="https://assets.codepen.io/1480814/saber.jpg"
            alt=""
          />
        </Link>
      </div>
    </div>
  );
}
