export type Card = {
  id: string;
  title: string;
  description: string;
};
export type Baloon = {
    id: string,
    content: string
}

export type Label ={
    letter: string,
    title: string,
    desc: string
}
export const cards: Card[] = [
  {
    id: "deployment",
    title: "After deployment",
    description: "Make sure everything is still working after every release",
  },
  {
    id: "apis",
    title: "Running live APIs",
    description: "Keep track of your production endpoints in real time",
  },
  {
    id: "clients",
    title: "Managing client sites",
    description: "Monitor multiple client projects from one place",
  },
  {
    id: "dashboards",
    title: "Monitoring dashboards",
    description: "Stay updated with system health at a glance",
  },
];

export const Baloon = [
    {
        id: "1",
        content: "Instant Downtime Alerts"
    },
    {
        id: "2",
        content: "Clear Response Time Tracking"
    },
    {
        id: "3",
        content: "Simple & Focused Dashboard"
    },
    {
        id: "4",
        content: "Reliable Monitoring Every 5 minutes"
    }
]

export const label: Label[] = [
    {
        letter: "L",
        title: "Low-noise Alerts",
        desc: "Get notifiedonly when it matters"
    },
    {
        letter: "I",
        title: "Instant Awareness ",
        desc: "Know the moment something happens"
    },
    {
        letter: "F",
        title: "Fast Monitoring",
        desc: "Frequent checks to detect issues early"
    },
    {
        letter: "E",
        title: "Easy Setup",
        desc: "Start Monitoring in minutes"
    }
]