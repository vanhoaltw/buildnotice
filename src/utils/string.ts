export const safeParse = (str: string): any => {
  try {
    return JSON.parse(str)
  } catch (e) {
    return null
  }
}
