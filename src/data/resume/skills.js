// TODO: Add Athletic Skills, Office Skills,
// Data Engineering, Data Science, ML Engineering, ... ?

const skills = [
  {
    title: 'Javascript',
    competency: 4,
    category: ['Web Development', 'Languages', 'Javascript'],
  },
  {
    title: 'Node.JS',
    competency: 3,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'React',
    competency: 3,
    category: ['Web Development', 'Javascript'],
  },
  {
    title: 'Amazon Web Services',
    competency: 2,
    category: ['Web Development', 'Tools'],
  },
  {
    title: 'MongoDB',
    competency: 2,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'PostgreSQL/SQLite3/SQL',
    competency: 3,
    category: ['Web Development', 'Databases', 'Languages'],
  },
  {
    title: 'Data Mining',
    competency: 3,
    category: ['Data Science'],
  },
  {
    title: 'Git/Mercurial',
    competency: 3,
    category: ['Tools'],
  },
  {
    title: 'Google Cloud Compute',
    competency: 2,
    category: ['Tools', 'Web Development'],
  },
  {
    title: 'Numpy',
    competency: 5,
    category: ['Data Science', 'Data Engineering', 'Python'],
  },
  {
    title: 'Numba',
    competency: 2,
    category: ['Data Science', 'Data Engineering', 'Python'],
  },
  {
    title: 'Tensorflow + Keras',
    competency: 1,
    category: ['Data Science', 'Python'],
  },
  {
    title: 'Jupyter',
    competency: 5,
    category: ['Data Science', 'Python'],
  },
  {
    title: 'HTML + SASS/SCSS/CSS',
    competency: 4,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'Python',
    competency: 5,
    category: ['Languages', 'Python'],
  },
  {
    title: 'MATLAB',
    competency: 2,
    category: ['Languages'],
  },
  {
    title: 'R',
    competency: 4,
    category: ['Languages'],
  },
  {
    title: 'Data Visualization',
    competency: 5,
    category: ['Data Science', 'Javascript'],
  },
  {
    title: 'Pandas',
    competency: 5,
    category: ['Data Engineering', 'Data Science', 'Python'],
  },
  {
    title: 'Matplotlib',
    competency: 5,
    category: ['Data Engineering', 'Data Science', 'Python'],
  },
  {
    title: 'Scikit-Learn',
    competency: 4,
    category: ['Data Engineering', 'Data Science', 'Python'],
  },
  {
    title: 'Pylint',
    competency: 2,
    category: ['Data Engineering', 'Python'],
  },
  {
    title: 'NLTK',
    competency: 2,
    category: ['Data Engineering', 'Python'],
  },
  {
    title: 'Seaborn',
    competency: 4,
    category: ['Data Science', 'Python'],
  },
  {
    title: 'GGplot',
    competency: 4,
    category: ['Data Engineering', 'Python'],
  },
  {
    title: 'Tableau',
    competency: 4,
    category: ['Data Science', 'Web Development'],
  },
  {
    title: 'Scipy',
    competency: 2,
    category: ['Data Science', 'Python'],
  },
  {
    title: 'Excel',
    competency: 5,
    category: ['Databases', 'Tools'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be == to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [
  ...new Set(skills.reduce((acc, { category }) => acc.concat(category), [])),
]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
