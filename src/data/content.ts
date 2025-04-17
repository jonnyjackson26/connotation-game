export type EmotionOption = {
  emotion: string
  options: string[]
  correctColor: string
}

export const colorEmotions: EmotionOption[] = [
  {
    emotion: 'Anger',
    options: ['red', 'yellow', 'blue', 'green'],
    correctColor: 'red'
  },
  {
    emotion: 'Happiness',
    options: ['red', 'white', 'yellow', 'purple'],
    correctColor: 'yellow'
  },
  {
    emotion: 'Sadness',
    options: ['blue', 'gray', 'red', 'orange'],
    correctColor: 'blue'
  },
  {
    emotion: 'Calm',
    options: ['green', 'red', 'black', 'orange'],
    correctColor: 'green'
  }
]



export const denotationPairs = [
  {
    word1: 'childlike',
    word2: 'childish',
    connotation1: 'positive',
    connotation2: 'negative',
    explanation: '"Childlike" suggests innocence and wonder, while "childish" implies immaturity.'
  },
  {
    word1: 'frugal',
    word2: 'cheap',
    connotation1: 'positive',
    connotation2: 'negative',
    explanation: '"Frugal" implies smart spending, but "cheap" often sounds stingy or low quality.'
  },
  {
    word1: 'unique',
    word2: 'weird',
    connotation1: 'positive',
    connotation2: 'negative',
    explanation: '"Unique" is flattering, while "weird" usually has a negative tone.'
  },
  {
    word1: 'slim',
    word2: 'skinny',
    connotation1: 'positive',
    connotation2: 'neutral',
    explanation: '"Slim" feels elegant, while "skinny" can sound unhealthy or harsh.'
  }
]



export const tweetComparisons = [
  {
    tweetPlain: "My whole world just fell apart.",
    tweetHashtag: "My whole world just fell apart. #oops",
    strongerEmotion: 'plain',
    explanation: '"Oops" lightens the emotional intensity. Without it, the message feels more raw and heavy.'
  },
  {
    tweetPlain: "I’m so tired of pretending everything’s okay.",
    tweetHashtag: "I’m so tired of pretending everything’s okay. #exhausted",
    strongerEmotion: 'plain',
    explanation: 'The plain tweet feels emotionally deeper and more vulnerable. The hashtag adds distance.'
  },
  {
    tweetPlain: "Just got promoted!",
    tweetHashtag: "Just got promoted! #blessed",
    strongerEmotion: 'hashtag',
    explanation: 'Adding "#blessed" conveys gratitude and excitement, enhancing the tone.'
  },
  {
    tweetPlain: "This day was magical.",
    tweetHashtag: "This day was magical. #tired",
    strongerEmotion: 'plain',
    explanation: 'The hashtag contradicts the positive tone, reducing the intensity of joy.'
  },
  {
    tweetPlain: "I’m fine.",
    tweetHashtag: "I’m fine. #sad",
    strongerEmotion: 'hashtag',
    explanation: 'The hashtag flips the meaning and reveals hidden sadness.'
  }
]

export const sameWordsGroups = [
  {
    phrase: '"It’s over."',
    options: [
      {
        context: 'Breakup text',
        intensity: 4,
        explanation: 'This phrase feels deeply emotional and final in the context of a breakup.'
      },
      {
        context: 'Movie review',
        intensity: 1,
        explanation: 'Used after a movie, it sounds neutral or even satisfied.'
      },
      {
        context: 'Video game stream',
        intensity: 2,
        explanation: 'Sounds playful or competitive, not emotionally heavy.'
      }
    ]
  },
  {
    phrase: '"Fire."',
    options: [
      {
        context: 'News headline',
        intensity: 4,
        explanation: 'Signals urgency and real danger.'
      },
      {
        context: 'Slang compliment',
        intensity: 1,
        explanation: 'Playfully means something is awesome or exciting.'
      },
      {
        context: 'Campfire invitation',
        intensity: 2,
        explanation: 'Simple and descriptive — low emotional weight.'
      }
    ]
  },
  {
    phrase: '"Cool."',
    options: [
      {
        context: 'Weather app alert',
        intensity: 1,
        explanation: 'Literal temperature — emotionally neutral.'
      },
      {
        context: 'Style compliment',
        intensity: 2,
        explanation: 'Mildly positive — a subtle emotional tone.'
      },
      {
        context: 'Awkward response to bad news',
        intensity: 3,
        explanation: 'Could feel cold, detached, or passive-aggressive.'
      }
    ]
  }
]






export const imagePairs = [
  {
    img1: {
      url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e', // calm beach
      label: 'Calm Ocean',
      intensity: 1
    },
    img2: {
      url: 'https://images.unsplash.com/photo-1474267119072-677dd7959e96?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      label: 'Stormy Sea',
      intensity: 4
    },
    explanation: 'Darker colors, crashing waves, and a lack of people all increase emotional intensity.'
  },
  {
    img1: {
      url: 'https://images.unsplash.com/photo-1597113117918-eb40fe0b84e7?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // peaceful kid
      label: 'Smiling Child',
      intensity: 1
    },
    img2: {
      url: 'https://images.unsplash.com/photo-1603389400023-a89abdcd92fa?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // sad kid
      label: 'Crying Child',
      intensity: 3
    },
    explanation: 'Facial expression, body language, and lighting all play into the emotional feel.'
  },
  {
    img1: {
      url: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // garden flowers
      label: 'Colorful Flowers',
      intensity: 1
    },
    img2: {
      url: 'https://images.unsplash.com/photo-1709097837515-42597117c0b3?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', // dying rose
      label: 'Withered Rose',
      intensity: 3
    },
    explanation: 'Color saturation and symbolism (like decay) convey sadness or depth.'
  }
]
