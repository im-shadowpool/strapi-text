import Image from "next/image";
import Link from "next/link";
import HeroSection from "../components/HeroSction";

export default function AboutPage() {
  return (
    <main className="bg-white text-black">
      {/* HERO */}
      <HeroSection />

      {/* OUR STORY */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Founded with a passion for technology and creativity, our company
            has been building high-quality digital products that blend design
            and performance.
          </p>
          <p className="text-gray-600 leading-relaxed">
            From startups to enterprise brands, we focus on delivering scalable,
            user-focused, and modern solutions.
          </p>
        </div>
        <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
          <Image
            src="https://images.unsplash.com/photo-1492724441997-5dc865305da7"
            alt="Office"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div className="bg-white p-10 rounded-2xl shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To empower businesses with innovative, reliable, and scalable
              digital solutions that drive growth and impact.
            </p>
          </div>

          <div className="bg-white p-10 rounded-2xl shadow-md">
            <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To become a global leader in digital transformation, setting new
              standards for quality and creativity.
            </p>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Core Values
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Innovation",
              desc: "We constantly explore new technologies to deliver modern solutions.",
            },
            {
              title: "Integrity",
              desc: "Transparency and honesty guide everything we do.",
            },
            {
              title: "Excellence",
              desc: "We strive for perfection in every project.",
            },
          ].map((value, i) => (
            <div
              key={i}
              className="p-8 border rounded-2xl hover:shadow-xl transition duration-300"
            >
              <h4 className="text-xl font-semibold mb-4">{value.title}</h4>
              <p className="text-gray-600">{value.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TEAM */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Meet Our Team
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[1, 2, 3].map((member) => (
              <div key={member} className="text-center">
                <div className="relative w-40 h-40 mx-auto rounded-full overflow-hidden mb-6 shadow-lg">
                  <Image
                    src={`https://randomuser.me/api/portraits/men/${member + 10}.jpg`}
                    alt="Team member"
                    fill
                    className="object-cover"
                  />
                </div>
                <h4 className="text-lg font-semibold">John Doe</h4>
                <p className="text-gray-500 text-sm">Senior Developer</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center bg-black text-white">
        <h2 className="text-3xl font-bold mb-6">
          Let’s Build Something Great Together
        </h2>
        <Link
          href="/contact"
          className="inline-block bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-200 transition"
        >
          Contact Us
        </Link>
      </section>
    </main>
  );
}
