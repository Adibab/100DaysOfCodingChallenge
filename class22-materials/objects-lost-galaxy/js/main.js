/*
    The editor of the FT likes short headlines with only a few words!
    Implement the function below, which returns the title with the fewest words.
    (you can assume words will always be seperated by a space)
*/
function titleWithFewestWords(allArticleTitles) {
  // TODO
  let fewestWordArticle = []
  for (let i = 0; i < allArticleTitles.length; i++) {
    if (allArticleTitles[i] <  allArticleTitles[0]) {
      fewestWordArticle.push[allArticleTitles[i]];
    }
    
  }
  return fewestWordArticle
}

console.log(titleWithFewestWords());
