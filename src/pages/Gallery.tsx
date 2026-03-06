import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";
import { useState } from "react";
import { Filter } from "lucide-react";
import galleryLab from "@/assets/gallery-lab.png";
import galleryClassroom from "@/assets/gallery-classroom.png";
import galleryComputerLab from "@/assets/gallery-computer-lab.png";
import galleryCampus from "@/assets/gallery-campus.png";
import galleryPractical1 from "@/assets/gallery-practical1.png";
import galleryPractical2 from "@/assets/gallery-practical2.png";

const campusPhotos = [
  { src: galleryClassroom, caption: "Smart Classroom", desc: "Modern learning environment with advanced technology" },
  { src: galleryLab, caption: "Practical Training Lab", desc: "Hands-on training facilities for skill development" },
  { src: galleryComputerLab, caption: "Computer Lab", desc: "State-of-the-art computer laboratory" },
  { src: galleryCampus, caption: "Campus View", desc: "Beautiful campus grounds and facilities" },
  { src: galleryPractical1, caption: "Practical Session", desc: "Students engaged in practical learning" },
  { src: galleryPractical2, caption: "Hands-on Training", desc: "Industry-focused practical training" },
];

const culturalPhotos = [
  { src: "/funcion1.png", caption: "Cultural Celebration - 1", desc: "Festival celebration and cultural events" },
  { src: "/funcion2.png", caption: "Student Gathering - 2", desc: "Campus community engagement activities" },
  { src: "/function3.png", caption: "Festival Event - 3", desc: "Annual college festival highlights" },
  { src: "/funcion4.png", caption: "Cultural Program - 4", desc: "Traditional and cultural programs" },
  { src: "/funciton5.png", caption: "Student Event - 5", desc: "Student organizations and clubs" },
  { src: "/funciton6.png", caption: "Campus Life - 6", desc: "Vibrant campus community moments" },
];

const Gallery = () => {
  const [activeTab, setActiveTab] = useState<"campus" | "cultural">("campus");
  const photos = activeTab === "campus" ? campusPhotos : culturalPhotos;

  return (
    <Layout>
      <PageBanner title="Gallery" subtitle="A glimpse of our campus life and activities" />

      {/* Gallery Tabs */}
      <section className="bg-primary text-primary-foreground py-8 sticky top-16 z-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-6">
            <Filter className="w-5 h-5 text-accent" />
            <div className="flex gap-4">
              <button
                onClick={() => setActiveTab("campus")}
                className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                  activeTab === "campus"
                    ? "bg-accent text-accent-foreground shadow-lg"
                    : "bg-primary-foreground/20 hover:bg-primary-foreground/30"
                }`}
              >
                Campus & Training
              </button>
              <button
                onClick={() => setActiveTab("cultural")}
                className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                  activeTab === "cultural"
                    ? "bg-accent text-accent-foreground shadow-lg"
                    : "bg-primary-foreground/20 hover:bg-primary-foreground/30"
                }`}
              >
                Cultural Events
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding bg-background">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-12 animate-slideUp">
            <h2 className="section-title">
              {activeTab === "campus" ? "Campus & Training Facilities" : "Cultural Events & Celebrations"}
            </h2>
            <div className="gold-divider mx-auto" />
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              {activeTab === "campus"
                ? "Explore our world-class infrastructure and practical training facilities designed for student success."
                : "Experience the vibrant campus culture with our exciting events and celebrations."}
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {photos.map((p, index) => (
              <div
                key={p.caption}
                className="group relative rounded-xl overflow-hidden shadow-md card-hover aspect-video animate-slideUp border border-border/60"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                {/* Image */}
                <img
                  src={p.src}
                  alt={p.caption}
                  className="w-full h-full object-contain bg-navy-light group-hover:scale-110 transition-transform duration-500"
                />

                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-end justify-end p-5">
                  <div className="text-primary-foreground w-full">
                    <h3 className="font-bold text-lg mb-1">{p.caption}</h3>
                    <p className="text-sm opacity-90">{p.desc}</p>
                  </div>
                </div>

                {/* Bottom Badge */}
                <div className="absolute top-3 right-3 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {activeTab === "campus" ? "Campus" : "Event"}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;
