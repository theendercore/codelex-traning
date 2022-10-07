/**
 * Given a phrase, count the occurrences of each word in that phrase.
 *
 * For example for the input "olly olly in come free"
 *
 *  olly: 2
 *  in: 1
 *  come: 1
 *  free: 1
 */
interface WordCounter {
  [Key: string]: number;
}
// function setKey(key:string, value: number): void {

// }

const getkey = () => "constructor";
class Words {
  count(str: string) {
    let newStr: string = str.toLowerCase().replace(/[\t\n]/gm, " ");
    let x = newStr.split(" ").reduce((acc: WordCounter, rec: string) => {
      rec.trim();
      if (rec === "") {
        return acc;
      }
      return {
        ...acc,
        [rec]:
          ((typeof acc[rec] === "function"
            ? acc[getkey()]
              ? 0
              : acc[getkey()]
            : acc[rec]) || 0) + 1,
      };
    }, {});
    return x;
  }
}

export { Words };
