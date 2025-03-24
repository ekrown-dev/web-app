'use client';

const testimonials = [
  {
    quote: "eKROWN | Technologies transformed our IT infrastructure and improved our operational efficiency by 200%. Their networking expertise is unmatched in the industry.",
    author: "John Smith",
    company: "Tech Solutions Inc.",
  },
  {
    quote: "The best IT service provider we've worked with. eKROWN's team is professional, responsive, and incredibly knowledgeable about system administration.",
    author: "Emily Brown",
    company: "Digital Ventures",
  },
  {
    quote: "Outstanding DevOps implementation by eKROWN | Technologies that streamlined our deployment process and reduced our time-to-market significantly.",
    author: "David Wilson",
    company: "Innovation Labs",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Client Testimonials
          </h2>
          <p className="text-xl text-gray-400">
            What our clients say about our services
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#040B24]/95 p-8 rounded-xl hover:bg-[#0A1535] transition-all duration-300"
            >
              <p className="text-lg text-gray-300 italic mb-8 leading-relaxed">"{testimonial.quote}"</p>
              <div>
                <p className="text-xl font-bold text-white mb-2">{testimonial.author}</p>
                <p className="text-blue-400">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 