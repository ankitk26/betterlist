export const getMostFrequentGenre = (genres: string[]) => {
  let mostFrequentGenre = ""
  const genreFrequencyMap: Record<string, number> = {}
  let maxCounter = 0

  for (const genre of genres) {
    // set counter to 1 if genre is found for the first time
    if (genreFrequencyMap[genre] === undefined) {
      genreFrequencyMap[genre] = 1
    } else {
      genreFrequencyMap[genre]++
    }
    const currCounter = genreFrequencyMap[genre]

    // update maxCounter and mostFrequentGenre if higher count is found
    if (currCounter > maxCounter) {
      mostFrequentGenre = genre
      maxCounter = currCounter
    }
  }
  return mostFrequentGenre
}
