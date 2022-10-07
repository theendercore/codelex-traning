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

class Words {
  count(str: string) {
    let newStr: string = str.toLowerCase().replaceAll(/,\t\r\n/gm, "");
    // console.log(newStr);
    return newStr.split(" ").reduce((acc: any, rec: any) => {
      return { ...acc, [rec]: (acc[rec] || 0) + 1 };
    }, {});
  }
}

export { Words };
