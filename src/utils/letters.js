export const english = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
]

export const welsh = [
  'A',
  'B',
  'C',
  'Ch',
  'D',
  'Dd',
  'E',
  'F',
  'Ff',
  'G',
  'Ng',
  'H',
  'I',
  'L',
  'Ll',
  'M',
  'N',
  'O',
  'P',
  'Ph',
  'R',
  'Rh',
  'S',
  'T',
  'Th',
  'U',
  'W',
  'Y'
]

export const isVowelEnglish = (letter) => {
  switch (letter) {
    case 'A':
    case 'E':
    case 'I':
    case 'O':
    case 'U':
      return 'vowels__letter--vowel'
    case 'Y':
      return 'vowels__letter--y'
    default:
      return ''
  }
}

export const isVowelWelsh = (letter) => {
  switch (letter) {
    case 'A':
    case 'E':
    case 'I':
    case 'O':
    case 'U':
    case 'W':
    case 'Y':
      return 'vowels__letter--vowel'
    default:
      return ''
  }
}
