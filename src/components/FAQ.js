import React, { useState } from 'react';

const FAQ = () => {
    const faqs = [
        {
            question: "What is Origami and how did it start?",
            answer: "Origami, the traditional Japanese art of paper folding, traces its roots back to the 17th century. The word origami comes from the Japanese words ori (folding) and kami (paper). Initially, it was a ceremonial art used for religious purposes and to decorate gifts. Over time, it evolved into a form of entertainment, with artists creating intricate designs using a single sheet of paper, without any cuts or glue. The practice gained popularity globally, especially after the 20th century, with modern origami encompassing everything from simple animals to complex geometric models. Today, origami is enjoyed by people of all ages and continues to be a creative and therapeutic hobby.",
        },
        {
            question: "What are some of the most difficult Origami models?",
            answer: "It can be simple or complex depending on the model. Beginners can start with easy models.",
        },
        {
            question: "What materials do I need to start with Origami?",
            answer: "You can learn origami from online resources, books, and tutorials.",
        },
    ];

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="faq-section">
            {faqs.map((faq, index) => (
                <div key={index} className="faq-item">
                    <h3 onClick={() => toggleFAQ(index)}>{faq.question}</h3>
                    {activeIndex === index && <p>{faq.answer}</p>}
                </div>
            ))}
        </div>
    );
};

export default FAQ;
