// ! ###############   Importing   ###############
// ===============   Animation   ===============
import { motion } from "framer-motion";

// ! ###############   Code   ###############
export default function SecondContactSection() {
  return (
    <section className="container">
      <div className="max-w-3xl text-center my-32 mx-auto">
        <div>
          <p>
            With over 5 years of experience creating User Experience focused
            websites and my own agency in the making, I&#39;m able to create a
            website which perfectly suits your needs, ensuring that it will
            engage your customers while making your job easier.
          </p>

          <h3>Just looking to chat?</h3>

          <p>
            I&#39;m happy to answer any questions like how I went from a
            freelancer to an agency owner, or how I typically design and develop
            websites. Send me an email and start a conversation, or&nbsp;
            <a
              href="https://twitter.com/dan_spratling"
              className="bg-[#ff0000]"
            >
              reach out to me on twitter
            </a>
            .
          </p>

          <p>
            <a href="mailto:dan@danspratling.dev" className="bg-[#ff0000]">
              dan@danspratling.dev
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
