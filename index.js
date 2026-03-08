'use strict';

/**
 * langston-hughes-dreams
 * An npm package inspired by Langston Hughes
 * An npm package inspired by Langston Hughes — generates jazz-inflected, soulful poems about dreams, justice, and the Black experience.
 */

const poems = [
  "This is a placeholder poem in the style of Langston Hughes.",
  "Replace these with generated or curated verses.",
  "Each invocation returns a random selection."
];

/**
 * Returns a random poem inspired by Langston Hughes
 * @returns {string} A poem string
 */
function getPoem() {
  const idx = Math.floor(Math.random() * poems.length);
  return poems[idx];
}

/**
 * Returns all poems in the collection
 * @returns {string[]} Array of poem strings
 */
function getAllPoems() {
  return poems.slice();
}

module.exports = { getPoem, getAllPoems };

if (require.main === module) {
  console.log(getPoem());
}
