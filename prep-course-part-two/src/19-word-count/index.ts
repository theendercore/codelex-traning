import { parse, stringify } from "ts-jest";

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

class Words {
  count(str: string) {
    return parse(
      stringify(
        str
          .toLowerCase()
          .replace(/[\t\n]/gm, " ")
          .split(" ")
          .reduce((acc: WordCounter, rec: string) => {
            rec.trim();
            if (rec === "") {
              return acc;
            }
            return {
              ...acc,
              [rec + "\t"]: (acc[rec + "\t"] || 0) + 1,
            };
          }, {})
      ).replace(/\\t/gm, "")
    );
  }
}

export { Words };
