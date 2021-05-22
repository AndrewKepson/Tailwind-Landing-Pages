const Classes = {
  arcaneRealty: {
    components: {
      hero: {
        heroContainer: 'relative bg-gray-50',
        heroWrapper: 'lg:relative',
        heroContentContentContainer:
          'mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left',
        heroContentWrapper: 'p-4 lg:w-1/2 sm:px-8 xl:pr-16',
        header:
          'text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl',
        content:
          'mt-3 max-w-md mx-auto text-xl md:text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl',
        imageWrapper:
          'relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full',
        image: 'absolute inset-0 w-full h-full object-cover',
        ctaWrapper: 'mt-10 sm:flex sm:justify-center lg:justify-start',
        cta1: 'rounded-md shadow',
        a1:
          'w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10',
        cta2: 'mt-3 rounded-md shadow sm:mt-0 sm:ml-3',
        a2:
          'w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10'
      },
      faq: {
        faqWrapper: 'max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8',
        main: 'lg:grid lg:grid-cols-3 lg:gap-8',
        faqsWrapper: 'mt-12 lg:mt-0 lg:col-span-2',
        descriptionList: 'space-y-12',
        question: 'text-lg leading-6 font-medium text-gray-900',
        answer: 'mt-2 text-base text-gray-500',
        heading: 'text-3xl font-extrabold text-gray-900',
        support: 'mt-4 text-lg text-gray-500',
        supportLink: 'font-medium text-indigo-600 hover:text-indigo-500'
      },
      form: {
        container: 'relative bg-white',
        contentWrapper: 'relative max-w-7xl mx-auto lg:grid lg:grid-cols-5',
        formContainer:
          'bg-white py-16 px-4 sm:px-6 lg:col-span-3 lg:py-24 lg:px-8 xl:pl-12',
        formWrapper: 'max-w-lg mx-auto lg:max-w-none',
        form: 'grid grid-cols-1 gap-y-6',
        getStartedContainer:
          'bg-indigo-200 py-16 px-4 sm:px-6 lg:col-span-2 lg:px-8 lg:py-24 xl:pr-12',
        getStartedWrapper: 'max-w-lg mx-auto',
        getStartedHeader:
          'text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl',
        getStarted: 'mt-3 text-lg leading-6 text-gray-600',
        careers: 'mt-6 text-base text-gray-600',
        careersLink: 'font-medium text-gray-700 underline'
      },
      mainHeading: {
        container: 'bg-indigo-600',
        wrapper: 'max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8',
        content: 'text-center',
        heading:
          'mt-1 text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl',
        text: 'max-w-xl mt-5 mx-auto text-xl text-gray-100'
      }
    }
  }
}

export default Classes
