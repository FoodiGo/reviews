const getRandomNumber = limit => (
  Math.floor(Math.random() * limit)
);

const reviewRatings = {
  1: [
    [1, 1, 1],
    [1, 1, 1, 1],
  ],
  2: [
    [2, 2, 2],
    [2, 3, 1],
    [1, 1, 4],
    [1, 1, 3, 3],
    [2, 2, 1, 3],
  ],
  3: [
    [3, 3, 3],
    [3, 2, 4],
    [1, 5, 2, 4],
    [3, 3, 1, 5],
    [3, 1, 5],
  ],
  4: [
    [4, 4, 4],
    [4, 3, 5],
    [3, 3, 5, 5],
    [5, 5, 2],
    [4, 4, 3, 5],
  ],
  5: [
    [5, 5, 5],
    [5, 5, 5, 5],
  ],
};

const dates = [
  'January 31, 2018 21:35:00',
  'February 19, 2018 11:22:00',
  'December 21, 2017 17:45:00',
  'November 7, 2017 09:13:00',
  'January 10, 2018 03:39:00',
  'January 18, 2018 18:18:00',
  'February 4, 2018 22:36:00',
  'February 9, 2018 10:35:00',
  'January 14, 2018 08:35:00',
  'December 19, 2017 01:28:00',
  'December 2, 2017 12:45:00',
  'November 23, 2017 19:19:00',
  'October 10, 2017 17:48:00',
  'September 16, 2017 16:01:00',
  'October 19, 2017 13:55:00',
  'December 4, 2017 17:09:00',
  'November 5, 2017 03:18:00',
  'February 12, 2018 11:49:00',
  'January 19, 2018 07:22:00',
  'February 17, 2018 13:21:00',
  'February 23, 2018 14:07:00',
];

const types = {
  Pizza: [110, 121, 129, 135, 144, 146, 168, 176, 186, 189, 192],
  American: [104, 105, 108, 114, 115, 119, 127, 130, 133, 150, 152,
    158, 165, 169, 170, 172, 178, 185, 187, 195, 196],
  Chinese: [106, 113, 122, 123, 131, 138, 139, 147, 148, 181],
  Italian: [101, 120, 145, 151, 154, 160, 163, 167, 177, 194, 198],
  Mexican: [107, 109, 124, 132, 134, 149, 153, 155, 156, 157, 159,
    161, 162, 164, 166, 188, 191, 199, 200],
  Indian: [111, 112, 136, 137, 183, 190, 197],
  French: [102, 116, 118, 125, 140, 141, 143, 179, 180, 193],
  Brunch: [103, 117, 126, 128, 142, 171, 173, 174, 175, 182, 184],
};

module.exports.dates = dates;
module.exports.reviewRatings = reviewRatings;
module.exports.getRandomNumber = getRandomNumber;
module.exports.types = types;

