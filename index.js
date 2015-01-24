
/**
 * Pheromone updating.
 *
 * Intended to allocate a greater amount of pheromone
 * to shorter tours with the ant colony systen and make
 * the search more directed.
 *
 * @param {Number} before pheromone level already on edge
 * @param {delta} delta level to apply for local or global update
 * @param {Number} decay (between 0 and 1, default 0.1)
 * @return {Number}
 * @api public
 */

module.exports = function(before, delta, decay) {
	decay = decay || 0.1;
  return (1 - decay) * before + decay * delta;
};