function addLeadingZeros(value: string) {
  const numberWithZero = ('0000' + value).slice(-4)
  return numberWithZero
}

export { addLeadingZeros }
