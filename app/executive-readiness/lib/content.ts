// Content for the Executive Readiness Diagnostic.
// 5 dimensions, each with intro / scored question / 4 options / reflection prompt.

export type Dimension = {
  id: number
  name: string
  intro: string
  question: string
  options: { score: 0 | 1 | 2 | 3; label: string }[]
  reflection: string
}

export const DIMENSIONS: Dimension[] = [
  {
    id: 1,
    name: "Capital Narrative Conviction",
    intro:
      "Your equity story isn't a slide deck. It's a nervous system event. When a sophisticated investor pushes back on your valuation, your body responds before your mind catches up. The leader who holds the story under pressure isn't the one with better data. It's the one whose conviction lives deeper than the script.",
    question:
      "When you state your company's valuation to a room of sophisticated investors, where does your conviction come from?",
    options: [
      { score: 0, label: "From the deck. If someone challenges the numbers, I reach for new data." },
      { score: 1, label: "From rehearsal. The words are right but I can feel the performance." },
      { score: 2, label: "From the business itself. I believe it. Under hard pushback, I sometimes waver." },
      {
        score: 3,
        label:
          "From somewhere I can't be talked out of. I've been pushed hard and the story held. Not because I was stubborn. Because I'd done the work.",
      },
    ],
    reflection:
      "Think about the last time you stated your valuation out loud. Where did you feel it in your body? Any tightening? Any impulse to qualify or hedge? That's data.",
  },
  {
    id: 2,
    name: "Decision-Making Under Pressure",
    intro:
      "A capital event compresses decision timelines. Term sheets arrive Friday with a Monday answer expected. Due diligence surfaces something ugly the week before signing. The leader who freezes or defaults to reactive thinking costs the company money or the deal itself. The question isn't whether pressure comes. It's what your nervous system does in the first 60 seconds.",
    question:
      "When the deal compresses (term sheet, DD finding, walk-away threat), what happens first?",
    options: [
      { score: 0, label: "I react before I think. The first call I make is usually the wrong one." },
      { score: 1, label: "I feel the hit. I recover in hours, not minutes. First day is messy." },
      { score: 2, label: "I take a beat. I respond strategically. I sometimes notice reactivity underneath." },
      { score: 3, label: "I hold state. I've trained for this. The response comes from clarity, not adrenaline." },
    ],
    reflection:
      "Think about the last time a high-pressure decision landed without warning. What did your body do first? That response, before the strategic mind kicked in, is the real answer.",
  },
  {
    id: 3,
    name: "Board and Investor Communication",
    intro:
      "Sophisticated capital tests the leader through pushback. A board member's bad idea. An investor's overreach. A co-investor's pressure to accept worse terms. The leader who can't hold the line loses leverage that doesn't come back. The skill is holding the line while staying in relationship.",
    question:
      "When you disagree with a board member or investor on something that matters, what happens?",
    options: [
      { score: 0, label: "I fold. Holding the line feels like risking the relationship." },
      { score: 1, label: "I push back, but it costs something. I walk away drained." },
      { score: 2, label: "I hold the line. The relationship survives. Sometimes barely." },
      {
        score: 3,
        label: "I hold the line as standard. They know I'll tell them the truth. It deepens the relationship.",
      },
    ],
    reflection:
      "Think about the last time you disagreed with someone who had more leverage than you. Did you say what you actually thought, or a version of it? Notice what you edited out.",
  },
  {
    id: 4,
    name: "Personal Operating System",
    intro:
      "A capital event is an 18-month compression. The leader without a real operating system breaks somewhere: burnout, home, or the deal itself. Discipline, state control, and recovery aren't soft. They're load-bearing. They're the infrastructure that keeps judgment intact when everything else is compressing.",
    question:
      "Under sustained pressure (months, not days), does your system hold or start to break?",
    options: [
      {
        score: 0,
        label: "It breaks. I run on adrenaline and willpower. Recovery happens when something breaks first.",
      },
      { score: 1, label: "I have habits that help when things are calm. They disappear when things get hard." },
      { score: 2, label: "I have an operating system that mostly holds. It bends. I adjust." },
      { score: 3, label: "My system is built for compression. It holds at the worst. Non-negotiable, not preference." },
    ],
    reflection:
      "What broke first during the last sustained high-pressure window? Sleep? Decision quality? The closest relationship? The thing that breaks first is the thing your current system doesn't protect.",
  },
  {
    id: 5,
    name: "Strategic Clarity",
    intro:
      "The capital event is a tool, not a goal. The leader who forgets that optimizes for the raise itself. By then, the deal has reshaped the company in ways nobody wanted. Hiring, spending, structuring: all bent toward the raise instead of the business the raise was meant to build.",
    question:
      "Is the capital event a tool in service of a thesis, or has it become the thesis itself?",
    options: [
      { score: 0, label: "The capital event is the goal. Everything else is organized around getting it done." },
      { score: 1, label: "I have a thesis, but the capital event has become the primary filter for decisions." },
      { score: 2, label: "The thesis is clear. The capital event mostly serves it. There's some drift." },
      { score: 3, label: "The thesis is clear. The capital event is a means. I'd walk away from a bad version of it." },
    ],
    reflection:
      "If the capital event disappeared tomorrow, what would your company be optimizing for? If you can't answer that cleanly, the deal has already reshaped the strategy.",
  },
]
