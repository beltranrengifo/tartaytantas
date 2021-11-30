import legal from '@/content/legal/legal.txt'

export default [
  /* legal */
  {
    name: 'legal',
    options: {
      fullwidth: true,
      flex: true,
    },
    components: [
      {
        name: 'text-block',
        options: {
          content: legal,
          decoration: false,
          tag: 'article',
          isParagraph: true,
          width: 'w-full',
          height: 'min-h-3/4-screen',
          contentWidth: 'w-full',
          background: 'bg-secondary',
          color: 'text-white',
          extraClasses: 'p-16',
        },
      },
    ],
  },
]
