import type {
  ContentEntry,
  StoryArc,
  StoryArcAssignment,
} from "./types.ts";

export interface StoryArcDefinition {
  id: StoryArc;
  label: string;
  editorialQuestion: string;
  sequence: readonly string[];
}

export const storyArcDefinitions = {
  correction_and_transformation: {
    id: "correction_and_transformation",
    label: "Correction and transformation",
    editorialQuestion:
      "How did grace correct, purify, or redirect this person's gifts?",
    sequence: [
      "Origin and calling",
      "Early gifts or privileged witness",
      "Documented misunderstanding, weakness, or misdirected desire",
      "Correction and formation",
      "Mature or costly fidelity",
      "Enduring legacy and invitation to prayer",
    ],
  },
  conversion: {
    id: "conversion",
    label: "Conversion",
    editorialQuestion:
      "What changed when this person encountered and responded to grace?",
    sequence: [
      "Life before conversion",
      "Search, resistance, or disordered desire",
      "Encounter or turning point",
      "Response and changed life",
      "Fruit of conversion",
      "Enduring legacy and invitation to prayer",
    ],
  },
  perseverance: {
    id: "perseverance",
    label: "Perseverance",
    editorialQuestion:
      "How did this person remain faithful through a prolonged trial?",
    sequence: [
      "Origin and vocation",
      "The hope or responsibility entrusted to the person",
      "Prolonged trial",
      "Practices of faithful perseverance",
      "Outcome, including unresolved suffering when applicable",
      "Enduring legacy and invitation to prayer",
    ],
  },
  courageous_witness: {
    id: "courageous_witness",
    label: "Courageous witness",
    editorialQuestion:
      "How did this person bear witness when fidelity became dangerous or costly?",
    sequence: [
      "Historical setting and vocation",
      "The truth or community served",
      "Pressure, opposition, or persecution",
      "Response and testimony",
      "Sacrifice, martyrdom, or aftermath",
      "Enduring legacy and invitation to prayer",
    ],
  },
  hidden_faithfulness: {
    id: "hidden_faithfulness",
    label: "Hidden faithfulness",
    editorialQuestion:
      "How did ordinary, largely unseen fidelity become spiritually fruitful?",
    sequence: [
      "Origin and ordinary vocation",
      "Daily practices of faithfulness",
      "Unseen sacrifice or difficulty",
      "Growth in holiness",
      "Spiritual fruit",
      "Enduring legacy and invitation to prayer",
    ],
  },
  service_and_self_gift: {
    id: "service_and_self_gift",
    label: "Service and self-gift",
    editorialQuestion:
      "How did responding to another person's need deepen into a life of self-gift?",
    sequence: [
      "Origin and vocation",
      "A need encountered",
      "Initial response",
      "Deepening commitment and personal cost",
      "Lasting work, community, or example",
      "Enduring legacy and invitation to prayer",
    ],
  },
  intellectual_or_spiritual_discovery: {
    id: "intellectual_or_spiritual_discovery",
    label: "Intellectual or spiritual discovery",
    editorialQuestion:
      "How did a sustained search for truth deepen this person's life and teaching?",
    sequence: [
      "Origin and central question",
      "Search, study, or spiritual longing",
      "Discovery, insight, or encounter",
      "Teaching and lived response",
      "Influence, limits, and historical context",
      "Enduring legacy and invitation to prayer",
    ],
  },
} as const satisfies Record<StoryArc, StoryArcDefinition>;

export function getStoryArcDefinition(arc: StoryArc): StoryArcDefinition {
  return storyArcDefinitions[arc];
}

export function getStoryArcIssues(
  entry: Pick<ContentEntry, "kind" | "storyArc">,
): readonly string[] {
  if (entry.kind !== "saint") return [];
  if (!entry.storyArc) return ["Saint entries require a primary story arc."];

  const issues: string[] = [];
  if (
    entry.storyArc.secondary &&
    entry.storyArc.secondary === entry.storyArc.primary
  ) {
    issues.push("A secondary story arc must differ from the primary arc.");
  }
  if (entry.storyArc.rationale.trim().length < 20) {
    issues.push("A story arc requires a source-grounded editorial rationale.");
  }
  return issues;
}

export function hasCompleteStoryArc(
  entry: Pick<ContentEntry, "kind" | "storyArc">,
): entry is Pick<ContentEntry, "kind"> & { storyArc: StoryArcAssignment } {
  return getStoryArcIssues(entry).length === 0;
}
