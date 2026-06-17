export interface ComparisonRow {
  question: string;
  qatobit: string;
  tradingFirst: string;
}

export const comparisonData: ComparisonRow[] = [
  {
    question: "Built for",
    qatobit:
      "Published criteria per index. The construction logic is readable before any money moves.",
    tradingFirst:
      '"Expert-curated." The experts are unnamed. The criteria are unpublished.',
  },
  {
    question: "What happens after I buy?",
    qatobit:
      "Monthly rebalancing on a documented methodology. Stated cadence.",
    tradingFirst:
      "Rebalancing with no stated cadence or trigger. Some charge a fee each time it happens.",
  },
  {
    question: "What does this app want from me?",
    qatobit:
      "An allocation that stays. Nothing here is engineered to make you trade more.",
    tradingFirst: "Another trade, today. The revenue is the churn.",
  },
  {
    question: "Where are my assets, right now?",
    qatobit: "Real-time balances. Includes multi-asset breakdown and internal notes.",
    tradingFirst: "Periodic attestations, where they exist.",
  },
  {
    question: "What am I actually paying?",
    qatobit: "The fee, on screen, before you confirm.",
    tradingFirst: "The spread; it never appears on a screen.",
  },
  {
    question: "Can my money leave?",
    qatobit: "INR to your bank from ₹200. No fee, either direction.",
    tradingFirst: "Withdrawal conditions that appear only when you try.",
  },
  {
    question: "In-app guidance",
    qatobit: "QAI. Market data and methodology, scoped to your holdings.",
    tradingFirst: "Price alerts.",
  },
];
