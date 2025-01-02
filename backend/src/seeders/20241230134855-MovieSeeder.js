'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Movies', [
      {
 
        name: 'Spider-Man: Across the Spider-Verse',
        image_path: '/Images/movies/spiderman.webp',
        language: 'English',
        synopsis: 'Miles Morales catapults across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence. When the heroes clash on how to handle a new threat, Miles must redefine what it means to be a hero.',
        rating: 8.8,
        duration: '2h 16m',
        top_cast: 'Oscar Isaac',
        release_date: '2024-06-23',
        genre_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {

        name: 'Extraction 2',
        image_path: '/Images/movies/extraction2.webp',
        language: 'English',
        synopsis: 'After barely surviving his grievous wounds from his mission in Dhaka, Bangladesh, Tyler Rake is back, and his team is ready to take on their next mission.',
        rating: 7.0,
        duration: '2h 3m',
        top_cast: 'Chris Hemsworth',
        release_date: '2024-06-13',
        genre_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {

        name: 'Murder Mystery 2',
        image_path: '/Images/movies/murderMystery.webp',
        language: 'English',
        synopsis: 'Full-time detectives Nick and Audrey are struggling to get their private eye agency off the ground. They find themselves at the center of international abduction when their friend Maharaja, is kidnapped at his own lavish wedding.',
        rating: 5.7,
        duration: '1h 30m',
        top_cast: 'Jennifer Aniston',
        release_date: '2024-03-31',
        genre_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {

        name: 'Mission: Impossible - Dead Reckoning Part One',
        image_path: '/Images/movies/missionImpossible.webp',
        language: 'English',
        synopsis: 'Ethan Hunt and the IMF team must track down a terrifying new weapon that threatens all of humanity if it falls into the wrong hands. With control of the future and the fate of the world at stake, a deadly race around the globe begins. Confronted by a mysterious, all-powerful enemy, Ethan is forced to consider that nothing can matter more than the mission -- not even the lives of those he cares about most.',
        rating: 8.0,
        duration: '2h 43m',
        top_cast: 'Tom Cruise',
        release_date: '2024-07-10',
        genre_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {

        name: 'Oppenheimer',
        image_path: '/Images/movies/oppenheimer.webp',
        language: 'English',
        synopsis: 'During World War II, Lt. Gen. Leslie Groves Jr. appoints physicist J. Robert Oppenheimer to work on the top-secret Manhattan Project. Oppenheimer and a team of scientists spend years developing and designing the atomic bomb. Their work comes to fruition on July 16, 1945, as they witness the world\'s first nuclear explosion, forever changing the course of history.',
        rating: 9.4,
        duration: '3h',
        top_cast: 'Cillian Murphy',
        release_date: '2024-07-21',
        genre_id: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Barbie',
        image_path: '/Images/movies/barbie.webp',
        language: 'English',
        synopsis: 'Barbie and Ken are having the time of their lives in the colorful and seemingly perfect world of Barbie Land. However, when they get a chance to go to the real world, they soon discover the joys and perils of living among humans.',
        rating: 7.6,
        duration: '1h 54m',
        top_cast: 'Margot Robbie',
        release_date: '2024-07-21',
        genre_id: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Movies', null, {});
  }
};
//        genre_id: 1,