import { ITimelineProps } from '@/components/timeline';
import { IWideCardProps } from '@/components/wide-card';

export const cards: IWideCardProps[] = [
  {
    subtitle: '2015-2019',
    title: 'BSc in Computer Science',
  },
  {
    subtitle: '2021-2022 (course)',
    title: 'AWS Developer Associate',
  },
  {
    subtitle: '2021-2022 (course)',
    title: 'AWS Solutions Architect',
  },
  {
    subtitle: '2020-2021 (course)',
    title: 'Microservices with Node.js',
  },
  {
    subtitle: '2019-2020 (course)',
    title: 'React + Redux',
  },
  {
    subtitle: '2018 (course)',
    title: 'Node.js and MongoDB',
  },
];

export const tabs = {
  education: {
    id: 'education',
    value: 'Education',
  },
  skills: {
    id: 'skills',
    value: 'Skills',
  },
  experience: {
    id: 'experience',
    value: 'Experience',
  },
};

const aws = [
  {
    text: 'AWS ECS',
    value: 1,
  },
  {
    text: 'AWS App Mesh',
    value: 1,
  },
  {
    text: 'AWS Cloud Map',
    value: 1,
  },
  {
    text: 'AWS Fargate',
    value: 1,
  },
  {
    text: 'AWS S3',
    value: 1,
  },
  {
    text: 'AWS Lambda',
    value: 1,
  },
];

const backend = [
  {
    text: 'Node.js',
    value: 1,
  },
  {
    text: 'NestJS',
    value: 1,
  },
  {
    text: 'OpenAPI (Swagger)',
    value: 1,
  },
  {
    text: 'Kong API Gateway',
    value: 1,
  },
  {
    text: 'Keycloak',
    value: 1,
  },
  {
    text: 'RabbitMQ',
    value: 1,
  },
  {
    text: 'REST',
    value: 1,
  },
];

const dbms = [
  {
    text: 'MySQL',
    value: 1,
  },
  {
    text: 'PostgreSQL',
    value: 1,
  },
  {
    text: 'MongoDB',
    value: 1,
  },
];

const frontend = [
  {
    text: 'ReactJS',
    value: 1,
  },
  {
    text: 'Redux',
    value: 1,
  },
  {
    text: 'Bootstrap',
    value: 1,
  },
];

const infra = [
  {
    text: 'Microservices',
    value: 1,
  },
  {
    text: 'SonarQube',
    value: 1,
  },
  {
    text: 'Docker',
    value: 1,
  },
  {
    text: 'Kubernetes',
    value: 1,
  },
  {
    text: 'Terraform',
    value: 1,
  },
  {
    text: 'Terragrunt',
    value: 1,
  },
  {
    text: 'Prometheus',
    value: 1,
  },
  {
    text: 'Grafana',
    value: 1,
  },
];

const languages = [
  {
    text: 'Python',
    value: 1,
  },
  {
    text: 'Typescript',
    value: 1,
  },
  {
    text: 'Javascript',
    value: 1,
  },
];

export const skills = [
  ...aws,
  ...backend,
  ...dbms,
  ...frontend,
  ...infra,
  ...languages,
  {
    text: 'Jest',
    value: 1,
  },
  {
    text: 'Git',
    value: 1,
  },
  {
    text: 'SCRUM',
    value: 1,
  },
  {
    text: 'Jira',
    value: 1,
  },
  {
    text: 'Confluence',
    value: 1,
  },
  {
    text: 'Bitbucket',
    value: 1,
  },
  {
    text: 'Github',
    value: 1,
  },
  {
    text: 'Linux',
    value: 1,
  },
];

export const experiences: ITimelineProps['items'] = [
  {
    description: {
      subtitle: `Facilitating and mentoring colleagues to make the best technical decisions for the team and for the projects.
       Designing, architecting, developing and maintaining systems infrastructures.`,
      title: 'Tech Lead',
      techs:
        'Conflicts management, requirements gathering, microservices environments, modular systems, multi-tenant systems.',
    },
    period: {
      subtitle: 'Nov 2021 - now',
      title: 'Instituto CERTI Amazônia - ICA',
    },
  },
  {
    description: {
      subtitle: `Mainly developing MES (Manufacturing Execution System) systems for large companies,
      helping to architect, develop and improve the infrastructure of these systems based on microservices, message brokers,
      realtime, service discovery, internal communication encryption, cloud, web, desktop and integrated with ERP systems.`,
      title: 'Software Developer',
      techs: `AWS, Terraform, Docker, Node.js, Python, RabbitMQ, Kubernetes, React, Electron.js (check Skills tab)`,
    },
    period: {
      subtitle: 'Apr 2020 - Nov 2021',
      title: 'Instituto CERTI Amazônia - ICA',
    },
  },
  {
    description: {
      subtitle: `Managing databases, developing tools for managing data and supporting network users.`,
      title: 'Intern Software Developer',
      techs: 'VBA, MySQL and Microsoft Excel',
    },
    period: {
      subtitle: 'Aug 2017 - Jun 2019',
      title: 'ARSEPAM. Manaus - AM. Brazil.',
    },
  },
];

export const safetyMatchColors = ['#03C4E8', '#E803C4', '#C4E803'];
