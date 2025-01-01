'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('features', [
      {
        id: 1,
        title: 'Unparalleled Cinematic Experience',
        description: 'Immerse yourself in stunning visuals and crystal-clear sound, as our state-of-the-art IMAX technology transports you directly into the heart of the action. With a screen that stretches beyond your peripheral vision every frame comes alive with unparalleled brilliance.',
        image_path: '/Images/features/imax.webp',
        theatre_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        title: 'Delight in Dolby Atmos',
        description: 'Experience sound like never before with Dolby Atmos, the epitome audio technology that takes you on an immersive sonic journey.With sound objects moving seamlessly around the theatre, you\'ll be transported into the heart of every scene, making you an integral part of the story.',
        image_path: '/Images/features/sound.webp',
        theatre_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 3,
        title: 'Tantalizing Treats',
        description: 'At our movie theatre, we take your movie-watching experience beyond the screen by offering a delectable array of food items at our concession stand. From freshly buttered popcorn, crispy nachos with zesty cheese dips, to gourmet hotdogs and a variety of refreshing beverages, our concession stand is a culinary paradise for movie enthusiasts.',
        image_path: '/Images/features/food.webp',
        theatre_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        title: 'Luxurious Escape',
        description: 'Step into a world of opulence and relaxation, designed to cater to your every need before and after the main event. Our Premium Lounge welcomes you with plush leather seating, elegant décor, and a refined ambiance that sets the stage for an unforgettable cinematic journey.',
        image_path: '/Images/features/lounge.webp',
        theatre_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 6,
        title: 'Unparalleled Cinematic Experience',
        description: 'Immerse yourself in stunning visuals and crystal-clear sound, as our state-of-the-art IMAX technology transports you directly into the heart of the action. With a screen that stretches beyond your peripheral vision every frame comes alive with unparalleled brilliance.',
        image_path: '/Images/features/imax.webp',
        theatre_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 7,
        title: 'Delight in Dolby Atmos',
        description: 'Experience sound like never before with Dolby Atmos, the epitome audio technology that takes you on an immersive sonic journey.With sound objects moving seamlessly around the theatre, you\'ll be transported into the heart of every scene, making you an integral part of the story.',
        image_path: '/Images/features/sound.webp',
        theatre_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 8,
        title: 'Tantalizing Treats',
        description: 'At our movie theatre, we take your movie-watching experience beyond the screen by offering a delectable array of food items at our concession stand. From freshly buttered popcorn, crispy nachos with zesty cheese dips, to gourmet hotdogs and a variety of refreshing beverages, our concession stand is a culinary paradise for movie enthusiasts.',
        image_path: '/Images/features/food.webp',
        theatre_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 9,
        title: 'Luxurious Escape',
        description: 'Step into a world of opulence and relaxation, designed to cater to your every need before and after the main event. Our Premium Lounge welcomes you with plush leather seating, elegant décor, and a refined ambiance that sets the stage for an unforgettable cinematic journey.',
        image_path: '/Images/features/lounge.webp',
        theatre_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('features', null, {});
  },
};
