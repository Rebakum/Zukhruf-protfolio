export interface Step {
  id: number;
  num: string;
  title: string;
  desc: string;
}

export const steps: Step[] = [
  {
    id: 1,
    num: "01",
    title: "Research",
    desc: "Understanding your business, target audience & market.",
  },
  {
    id: 2,
    num: "02",
    title: "Sketch",
    desc: "Hand sketching ideas and preparing concepts.",
  },
  {
    id: 3,
    num: "03",
    title: "Design",
    desc: "Creating visual concepts and digital designs.",
  },
  {
    id: 4,
    num: "04",
    title: "Revision",
    desc: "Revisions and refinements until perfect.",
  },
  {
    id: 5,
    num: "05",
    title: "Final Delivery",
    desc: "Delivering final files with all required formats.",
  },
];