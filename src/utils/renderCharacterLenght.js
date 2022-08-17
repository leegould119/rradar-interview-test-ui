/**
 * 
 * @param {string} text - the text 
 * @param {number} count - number of characters 
 * @param {boolean} insertDots - insert dots
 * @returns {string} - the reduced string 
 */
const renderCharacterLength = (text, count, insertDots) => {
    return text.slice(0, count) + (((text.length > count) && insertDots) ? "..." : "");
  };

export default renderCharacterLength;