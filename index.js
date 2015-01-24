
/**
 * Pheromone updating.
 *
 * Intended to allocate a greater amount of pheromone
 * to shorter tours on ant colony systen and make
 * the search more directed.
 *
 * @param {Number} decay (between 0 and 1)
 * @param {Number} before pheromone level already on edge
 * @param {delta} delta level to apply for local or global update
 * @return {Number}
 * @api public
 */

module.exports = function(decay, before, delta) {
  return (1 - decay) * before + decay * delta;
};