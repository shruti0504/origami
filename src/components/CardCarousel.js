import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CardCarousel = () => {
    const cards = [
        {
            id: 1,
            title: "Kutilang Bluebird",
            description: "Beautiful origami bird design.",
            image: "assets/bluebird.jpg",
        },
        {
            id: 2,
            title: "Mother's Peter Rabbit",
            description: "Cute and classic rabbit.",
            image: "assets/rabbit.jpg",
        },
        {
            id: 3,
            title: "Katak ijo Jumping",
            description: "Fun frog origami art.",
            image: "assets/frog.jpg",
        },
        {
            id: 4,
            title: "Flower Orange Blue",
            description: "Elegant floral origami.",
            image: "assets/flower.jpg",
        },
        {
            id: 5,
            title: "Ship Yellow Knit",
            description: "A creative origami boat.",
            image: "assets/ship.jpg",
        },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className="carousel-container">
            <Slider {...settings}>
                {cards.map((card) => (
                    <div key={card.id} className="card">
                        <img src={card.image} alt={card.title} />
                        <h3>{card.title}</h3>
                        <p>{card.description}</p>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default CardCarousel;
