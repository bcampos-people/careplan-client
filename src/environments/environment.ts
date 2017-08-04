// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  baseURL: 'https://localhost:8449/careplan',
  kafka: {
    'metadata.broker.list': 'localhost:9092',
    'security.protocol': 'plaintext'
  },
  activitycategory: {
    baseURL: '/api/careplan/activity/category'
  },
  allergy: {
    baseURL: '/api/careplan/allergy',
    paginationURL: '/paginate',
    categoryURL: '/category',
    criticalityURL: '/criticality',
    patientURL: '/patient',
    substanceURL: '/substance'
  },
  careplan: {
    baseURL: '/api/careplan',
    paginationURL: '/paginate',
    patientURL: '/patient',
    patientsURL: '/patients'
  },
  communication: {
    baseURL: '/api/careplan/communication',
    paginationURL: '/paginate'
  },
  detectedissue: {
    baseURL: '/api/careplan/detectedissue',
    paginationURL: '/paginate',
    patientURL: '/patient'
  },
  goal: {
    baseURL: '/api/careplan/goal',
    categoryURL: '/category',
    priorityURL: '/priority',
    statusURL: '/status'
  },
  login: {
    baseURL: '/users/login/smart',
    meURL: '/api/users/me'
  },
  patient: {
    baseURL: '/api/patient',
    hisURL: '/his',
    paginationURL: '/paginate'
  },
  valueset: {
    baseURL: '/api/valueset/item'
  }
};
