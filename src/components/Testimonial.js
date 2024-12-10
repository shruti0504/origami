import React from 'react';

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      name: "Alice",
      message: "Origami is a fun and creative activity. Love it!",
      image: "assets/user1.jpg",
    },
    {
      id: 2,
      name: "Bob",
      message: "The instructions are clear and easy to follow. Great site!",
      image: "assets/user2.jpg",
    },
    {
      id: 3,
      name: "Charlie",
      message: "The models are beautiful, and I can’t stop folding!",
      image: "assets/user3.jpg",
    },
  ];

  return (
    <div className="testimonial-section">
      {testimonials.map((testimonial) => (
        <div key={testimonial.id} className="testimonial-card">
          <img src={testimonial.image} alt={testimonial.name} />
          <h4>{testimonial.name}</h4>
          <p>{testimonial.message}</p>
        </div>
      ))}
    </div>
  );
};

export default Testimonial;
