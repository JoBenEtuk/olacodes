/* eslint-disable quotes */
export interface IInfo {
  intro: string
  linkedIn: string
  dribbble: string
  instagram: string
  mail: string
  arena: string
  phone: string
  surname: string
  name: string
  infoText1: string
  infoText2: string
  worksIntro: string
  companyName: string
  process: { tag: string; description: string }[]
}

export const info: IInfo = {
  intro:
    'Olacodes is a user interface designer working with agencies and startups worldwide to tackle complex projects. Having collaborated with clients, Olacodes knows what it’s like to create, design and develop complex user interfaces.',
  linkedIn: '',
  dribbble: '',
  instagram: '',
  mail: 'hello@olacodes.com',
  arena: '',
  phone: '+2348169945591',
  surname: 'Olanrewaju',
  name: 'Olaniyi',
  worksIntro:
    'Selecting befitting projects that I’ve worked on, both clients works and my personal projects that speak well of my digital design journey',
  infoText1:
    'I am is a user interface designer working with agencies and startups worldwide to tackle complex projects. Having collaborated with clients, Olacodes knows what it’s like to create, design and develop complex user interfaces.',
  infoText2:
    "Combining aesthetics and usefulness, I create solid user interfaces in an artistic way. I love to spend time improving the aesthetics of digital products without forgetting about usability. I'm currently working with the fine folks at",
  companyName: 'The Sole Company',
  process: [
    {
      tag: 'IDENTIFY',
      description:
        "I start with identifying and specifying all components of the project. This process entails examining the client's purpose and requirements, developing user personas, researching competitors and the market, etc.",
    },
    {
      tag: 'DESIGN',
      description:
        "I begin to envision the project's visual story. I begin by planning, researching and designing concepts that will aid in the creation of a pleasurable and easy-to-use interface and experience that functions as a problem solver.",
    },
    {
      tag: 'DELIVER',
      description:
        'When the design is accepted and approved by the client at the conclusion of the project, I collaborate with developers to ensure that reality fits the concept/idea.',
    },
  ],
}
