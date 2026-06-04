// Per-dimension insight paragraphs, keyed by low (0-1) vs high (2-3) scores.

export type DimensionInsights = { low: string; high: string }

export const INSIGHTS: Record<number, DimensionInsights> = {
  1: {
    low: "The risk isn't your pitch. It's that your investor can feel the gap between your words and your conviction. Sophisticated capital reads the room before it reads the deck. The work isn't a better presentation. It's closing the gap between what you say and what you believe.",
    high: "Your narrative holds under pressure. The work here is sharpening, not building. Make sure the conviction translates across every layer of capital you'll meet — strategic, institutional, family office. Each room reads the same story differently.",
  },
  2: {
    low: "Your deal team already knows. They've seen the reactive call, the decision reversed 48 hours later, the meeting where the energy shifted because you were unsettled. The risk isn't one bad decision. It's that your state becomes the deal room's weather.",
    high: "You can hold state when the deal compresses. That's the foundation. The work here is making sure the systems around you — your deal team, advisors, board — know how to bring information to a leader who responds from clarity rather than feed reactivity.",
  },
  3: {
    low: "You're leaking leverage in every board meeting and investor conversation. Sophisticated capital doesn't respect the leader who agrees. It respects the leader it can't push past when that leader is right. Every time you fold on something you know is wrong, the message is: this person can be moved.",
    high: "You can hold the line. That's rare. The work here is making sure you're picking the right lines to hold. Holding the line on everything reads as rigidity. Holding it on the right things reads as judgment.",
  },
  4: {
    low: "You're running on a depreciating asset. Willpower has a half-life. The expensive mistake in month 14 doesn't happen because you got less smart. It happens because your operating system couldn't sustain the load. The leader who treats discipline and recovery as optional is the leader who makes the call they can't take back.",
    high: "Your system holds. The work here is stress-testing it for the actual compression of a capital event, which is different from the daily pressure most operators learn to manage. Schedule the recovery into the calendar before the deal lands. The deal will fill every space you leave open.",
  },
  5: {
    low: "The deal has become the destination instead of the vehicle. Decisions are being made that serve the raise, not the business the raise was meant to build. The leader who can't articulate what the company is for, independent of the capital event, is building a company shaped by the deal.",
    high: "You haven't lost the thread. That puts you in a small minority. The work here is staying with the thesis when the deal pressure starts to bend it — which it will, in the final weeks before close, when every term feels like a referendum on whether the deal happens.",
  },
}

export function insightFor(dimensionId: number, score: number): string {
  const pair = INSIGHTS[dimensionId]
  if (!pair) return ""
  return score <= 1 ? pair.low : pair.high
}
