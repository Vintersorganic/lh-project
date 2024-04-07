/**
 * Calculates three pagination options for displaying items. Could be better.
 *
 * @param {number} total The total number of items available.
 * @returns {number[]} Three pagination options: 
 * - The first is about one third of the total, rounded.
 * - The second is about half of the total, rounded.
 * - The third is the total itself.
 */
export function generatePaginationOptions(total: number): number[] {
    let option1 = Math.round(total / 3);
    let option2 = Math.round(total / 2);
    let option3 = total;
  
    return [option1, option2, option3];
  }
  