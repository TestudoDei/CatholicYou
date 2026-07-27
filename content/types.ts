export type ContentKind = "saint" | "feast" | "novena" | "sacred_art";

export type EditorialStatus =
  | "draft"
  | "fact_checked"
  | "human_reviewed"
  | "published";

export type CalendarScope =
  | "general_roman"
  | "united_states"
  | "regional"
  | "local";

export type LiturgicalRank =
  | "solemnity"
  | "feast"
  | "memorial"
  | "optional_memorial";

export type SourceKind =
  | "scripture"
  | "holy_see"
  | "liturgical_calendar"
  | "official_shrine"
  | "scholarly_reference";

export type StoryArc =
  | "correction_and_transformation"
  | "conversion"
  | "perseverance"
  | "courageous_witness"
  | "hidden_faithfulness"
  | "service_and_self_gift"
  | "intellectual_or_spiritual_discovery";

export interface StoryArcAssignment {
  primary: StoryArc;
  secondary?: StoryArc;
  rationale: string;
}

export interface ContentSource {
  id: string;
  kind: SourceKind;
  title: string;
  publisher: string;
  url: string;
  publishedDate?: string;
  accessedDate: string;
  note: string;
}

export interface ContentSection {
  id: string;
  label: "Scripture" | "Documented history" | "Tradition" | "For prayer";
  heading: string;
  paragraphs: readonly string[];
  sourceIds: readonly string[];
}

export interface EditorialRecord {
  status: EditorialStatus;
  factCheckedAt: string | null;
  factCheckedBy: string | null;
  humanReviewedAt: string | null;
  humanReviewedBy: string | null;
  notes: readonly string[];
}

export interface LiturgicalObservance {
  month: number;
  day: number;
  rank: LiturgicalRank;
  color: "white" | "red" | "green" | "violet" | "rose";
  scopes: readonly CalendarScope[];
}

export interface EditorialPreview {
  origin: string;
  distinctiveSignificance: string;
  livingDevotion: string;
}

export interface AtAGlanceFact {
  label: string;
  value: string;
}

export interface ContentEntry {
  id: string;
  kind: ContentKind;
  slug: string;
  title: string;
  shortTitle: string;
  alternateNames: readonly string[];
  descriptor: string;
  summary: string;
  theme: string;
  prayerPrompt: string;
  preview: EditorialPreview;
  atAGlance: readonly AtAGlanceFact[];
  storyArc?: StoryArcAssignment;
  observance: LiturgicalObservance;
  scriptureReferences: readonly {
    citation: string;
    description: string;
    url: string;
  }[];
  sections: readonly ContentSection[];
  sources: readonly ContentSource[];
  editorial: EditorialRecord;
}
