import Layout from "@/components/Layout";
import PageBanner from "@/components/PageBanner";
import { courseDetails } from "@/data/courses";
import { Link, useParams } from "react-router-dom";
import { useState } from "react";
import NotFound from "./NotFound";
import { ChevronLeft, ChevronRight, CheckCircle2, Clock, Users, Award, BookOpen, Lightbulb, Briefcase } from "lucide-react";

const CourseDetail = () => {
  const { slug } = useParams();
  const course = courseDetails.find((item) => item.slug === slug);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!course) {
    return <NotFound />;
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % course.gallery.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + course.gallery.length) % course.gallery.length);
  };

  return (
    <Layout>
      <section className="bg-background">
        {/* Hero Section with Image Gallery */}
        <div className="max-w-6xl mx-auto px-4 py-8">
          <Link
            to="/courses"
            className="inline-flex items-center text-sm font-semibold text-accent hover:opacity-80 transition-opacity mb-6"
          >
            ← Back to Courses
          </Link>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Main Image Gallery - Left Side */}
            <div className="lg:col-span-2">
              <div className="rounded-2xl overflow-hidden border-2 border-accent/20 mb-4 bg-black/5">
                <div className="relative bg-black/10 aspect-video flex items-center justify-center">
                  <img
                    src={course.gallery[currentImageIndex]}
                    alt={`${course.name} course - Image ${currentImageIndex + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />

                  {course.gallery.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-accent hover:bg-accent/90 text-white rounded-full p-2 transition-all shadow-lg"
                        aria-label="Previous image"
                      >
                        <ChevronLeft className="w-6 h-6" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-accent hover:bg-accent/90 text-white rounded-full p-2 transition-all shadow-lg"
                        aria-label="Next image"
                      >
                        <ChevronRight className="w-6 h-6" />
                      </button>

                      <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        {currentImageIndex + 1}/{course.gallery.length}
                      </div>
                    </>
                  )}
                </div>

                {/* Thumbnails */}
                {course.gallery.length > 1 && (
                  <div className="bg-navy-light p-3 flex gap-2 overflow-x-auto">
                    {course.gallery.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentImageIndex(idx)}
                        className={`flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all ${
                          idx === currentImageIndex ? "border-accent shadow-md" : "border-border/40"
                        }`}
                      >
                        <img
                          src={img}
                          alt={`Thumbnail ${idx + 1}`}
                          className="w-20 h-20 object-cover hover:opacity-80 cursor-pointer"
                          loading="lazy"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Right Sidebar - Course Info & CTA */}
            <div className="lg:col-span-1">
              <div className="sticky top-6 bg-card rounded-2xl p-6 shadow-lg border border-border">
                <h1 className="font-display font-bold text-2xl text-primary mb-3">{course.name}</h1>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6 py-4 border-y border-border">
                  <div className="text-center">
                    <div className="font-bold text-xl text-accent">2</div>
                    <div className="text-xs text-muted-foreground">Years Duration</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-xl text-accent">60% + 40%</div>
                    <div className="text-xs text-muted-foreground">Practical + Theory</div>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-semibold text-primary">Flexible Learning</div>
                      <div className="text-xs text-muted-foreground">Self-paced training</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-semibold text-primary">Expert Training</div>
                      <div className="text-xs text-muted-foreground">Industry professionals</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Award className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-semibold text-primary">Certification</div>
                      <div className="text-xs text-muted-foreground">Advanced. D.Voc. Certificate</div>
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="space-y-2">
                  <Link
                    to="/admission"
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-6 py-3 rounded-lg transition-all text-center block"
                  >
                    Apply Now
                  </Link>
                  <button className="w-full bg-navy-light hover:bg-navy-light/80 text-primary font-semibold px-6 py-3 rounded-lg transition-all border border-border">
                    Learn More
                  </button>
                </div>

                {/* Eligibility */}
                <div className="mt-6 p-4 bg-navy-light rounded-lg border border-border">
                  <div className="text-xs font-semibold text-primary mb-2">Eligibility</div>
                  <div className="text-sm text-muted-foreground leading-relaxed">
                    {course.eligibility}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Course Details Section */}
        <div className="bg-navy-light/40 border-y border-border py-12">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="font-display font-bold text-3xl text-primary mb-8">About the Course</h2>
            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              <div className="space-y-4">
                {course.about.map((paragraph, idx) => (
                  <p key={idx} className="text-muted-foreground leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* What You'll Learn */}
              <div className="bg-card rounded-xl p-6 border border-border">
                <h3 className="font-display font-bold text-xl text-primary mb-6 flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-accent" />
                  What You'll Learn
                </h3>
                <div className="grid grid-cols-1 gap-3">
                  {course.skills.slice(0, 5).map((skill, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Three Column Sections */}
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* Practical Training */}
            <div className="bg-card rounded-2xl p-6 border border-border hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display font-bold text-lg text-primary mb-4">Practical Training Includes</h3>
              <ul className="space-y-2">
                {course.practical.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Skills Developed */}
            <div className="bg-card rounded-2xl p-6 border border-border hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-4">
                <Lightbulb className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display font-bold text-lg text-primary mb-4">Skills Developed</h3>
              <ul className="space-y-2">
                {course.skills.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Career Opportunities */}
            <div className="bg-card rounded-2xl p-6 border border-border hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-4">
                <Briefcase className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display font-bold text-lg text-primary mb-4">Career Opportunities</h3>
              <ul className="space-y-2">
                {course.careers.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Course Includes Section */}
        <div className="bg-gradient-to-r from-navy-light to-navy-light/50 border-y border-border py-12">
          <div className="max-w-6xl mx-auto px-4">
            <h3 className="font-display font-bold text-2xl text-primary mb-8">This Course Includes</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <div className="font-semibold text-primary text-sm">24 Months</div>
                  <div className="text-xs text-muted-foreground">Training Duration</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <div className="font-semibold text-primary text-sm">Live Classes</div>
                  <div className="text-xs text-muted-foreground">Expert instructors</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <div className="font-semibold text-primary text-sm">Certificate</div>
                  <div className="text-xs text-muted-foreground">Advanced. D.Voc. accredited</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <div className="font-semibold text-primary text-sm">Placement Support</div>
                  <div className="text-xs text-muted-foreground">Career assistance</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="bg-gradient-to-r from-accent/10 to-accent/5 rounded-2xl p-8 border-2 border-accent/30 text-center">
            <h2 className="font-display font-bold text-3xl text-primary mb-3">Ready to Start Your Career?</h2>
            <p className="text-muted-foreground mb-6 text-lg">Join our Advanced. D.Voc. program and transform your future</p>
            <Link
              to="/admission"
              className="inline-block bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-10 py-4 rounded-lg transition-all text-lg"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CourseDetail;
