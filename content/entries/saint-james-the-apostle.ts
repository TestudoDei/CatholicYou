import type { ContentEntry } from "../types.ts";

export const saintJamesTheApostle = {
  id: "saint-james-the-apostle",
  kind: "saint",
  slug: "saint-james-the-apostle",
  title: "Saint James the Apostle",
  shortTitle: "Saint James",
  alternateNames: ["James the Greater", "James, son of Zebedee"],
  descriptor: "Apostle · Martyr",
  summary:
    "James, the son of Zebedee and brother of John, followed Jesus from the fishing boat to the Transfiguration, Gethsemane, and ultimately martyrdom.",
  theme: "A faith worth walking for",
  prayerPrompt:
    "Ask for the courage to follow Christ generously, especially when the road is difficult.",
  preview: {
    origin:
      "James, the son of Zebedee and brother of John, was among the first disciples called by Jesus.",
    livedWitness:
      "Scripture places him at the Transfiguration and in Gethsemane, close to Christ at moments of glory and anguish.",
    enduringRelevance:
      "Among the Twelve, James is the first whose martyrdom is recorded in the New Testament. For centuries, pilgrims have walked the Camino de Santiago in his honor—a long road that turns every step into prayer.",
  },
  observance: {
    month: 7,
    day: 25,
    rank: "feast",
    color: "red",
    scopes: ["general_roman", "united_states"],
  },
  scriptureReferences: [
    {
      citation: "Matthew 4:21–22",
      description: "Jesus calls James and John from their father’s boat.",
      url: "https://bible.usccb.org/bible/matthew/4",
    },
    {
      citation: "Mark 9:2–8",
      description: "James witnesses the Transfiguration with Peter and John.",
      url: "https://bible.usccb.org/bible/mark/9",
    },
    {
      citation: "Mark 10:35–45",
      description: "Jesus redirects James and John from honor toward service.",
      url: "https://bible.usccb.org/bible/mark/10",
    },
    {
      citation: "Mark 14:32–42",
      description: "James is invited to watch and pray in Gethsemane.",
      url: "https://bible.usccb.org/bible/mark/14",
    },
    {
      citation: "Acts 12:1–2",
      description: "Herod Agrippa has James killed by the sword.",
      url: "https://bible.usccb.org/bible/acts/12",
    },
  ],
  sections: [
    {
      id: "called-from-the-boat",
      label: "Scripture",
      heading: "Called into the company of Jesus",
      paragraphs: [
        "The Gospels identify James as the son of Zebedee and the brother of John. Jesus called the brothers while they were mending their nets, and they left the boat and their father to follow him.",
        "James then appears with Peter and John at several decisive moments: the raising of Jairus’s daughter, the Transfiguration, and Jesus’s agony in Gethsemane. Scripture therefore places him close to both the revealed glory of Christ and the suffering through which that glory would be fulfilled.",
      ],
      sourceIds: ["usccb-scripture", "benedict-james"],
    },
    {
      id: "learning-service",
      label: "Scripture",
      heading: "An ambition corrected by the Gospel",
      paragraphs: [
        "James and John asked Jesus for places of honor in his glory. Jesus did not conceal their misunderstanding. He taught them that greatness among his disciples takes the form of service and that following him means sharing his cup.",
        "This failure is not incidental to James’s story. It makes his later fidelity more instructive: an apostle can be corrected, purified, and taught to receive discipleship as self-gift rather than status.",
      ],
      sourceIds: ["usccb-scripture", "benedict-james"],
    },
    {
      id: "martyrdom",
      label: "Documented history",
      heading: "The first of the Twelve recorded as a martyr",
      paragraphs: [
        "Acts reports that King Herod Agrippa had “James, the brother of John” killed by the sword. The USCCB’s note places the event around A.D. 44. Among the Twelve, James is the first whose martyrdom is recorded in the New Testament.",
      ],
      sourceIds: ["usccb-acts-12", "benedict-james"],
    },
    {
      id: "compostela",
      label: "Tradition",
      heading: "Apostle and patron of pilgrims",
      paragraphs: [
        "Later traditions connect James with evangelization in Spain or with the translation of his relics to Santiago de Compostela. These claims are devotional traditions rather than events established by the New Testament.",
        "Santiago nevertheless became one of Christianity’s great pilgrimage destinations. The pilgrim’s staff associated with James can point beyond geography: Christian life itself is a journey in which glory and suffering are both received in the company of Christ.",
      ],
      sourceIds: ["benedict-james"],
    },
    {
      id: "prayer",
      label: "For prayer",
      heading: "A grace to ask for today",
      paragraphs: [
        "Saint James, pray that we may answer Christ promptly, receive correction without defensiveness, and learn the greatness of serving rather than being served.",
      ],
      sourceIds: [],
    },
  ],
  sources: [
    {
      id: "usccb-scripture",
      kind: "scripture",
      title: "New American Bible, Revised Edition: Gospel accounts concerning James",
      publisher: "United States Conference of Catholic Bishops",
      url: "https://bible.usccb.org/bible",
      accessedDate: "2026-07-26",
      note:
        "Primary scriptural basis for James’s call, presence at the Transfiguration and Gethsemane, and instruction on service.",
    },
    {
      id: "usccb-acts-12",
      kind: "scripture",
      title: "Acts of the Apostles, chapter 12",
      publisher: "United States Conference of Catholic Bishops",
      url: "https://bible.usccb.org/bible/acts/12",
      accessedDate: "2026-07-26",
      note:
        "Records James’s death by the sword; the USCCB note identifies him as the son of Zebedee and dates the event to approximately A.D. 44.",
    },
    {
      id: "benedict-james",
      kind: "holy_see",
      title: "General Audience: James, the Greater",
      publisher: "The Holy See",
      url: "https://www.vatican.va/content/benedict-xvi/en/audiences/2006/documents/hf_ben-xvi_aud_20060621.html",
      publishedDate: "2006-06-21",
      accessedDate: "2026-07-26",
      note:
        "Pope Benedict XVI distinguishes scriptural testimony from later Spanish traditions and develops James’s journey from glory through suffering.",
    },
    {
      id: "usccb-calendar-2026",
      kind: "liturgical_calendar",
      title: "Liturgical Calendar for the Dioceses of the United States of America, 2026",
      publisher: "United States Conference of Catholic Bishops",
      url: "https://www.usccb.org/committees/divine-worship/liturgical-calendar",
      accessedDate: "2026-07-26",
      note:
        "Confirms July 25 as the Feast of Saint James, Apostle, in the calendar used in the dioceses of the United States.",
    },
  ],
  editorial: {
    status: "fact_checked",
    factCheckedAt: "2026-07-26",
    factCheckedBy: "CatholicYou editorial research",
    humanReviewedAt: null,
    humanReviewedBy: null,
    notes: [
      "Private preview only: human review is still required before publication.",
      "Patronage claims beyond the established pilgrimage tradition were intentionally omitted.",
      "No quotation has been attributed to James.",
    ],
  },
} as const satisfies ContentEntry;
