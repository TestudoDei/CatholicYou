import type { ContentEntry } from "../types.ts";

export const saintsJoachimAndAnne = {
  id: "saints-joachim-and-anne",
  kind: "saint",
  slug: "saints-joachim-and-anne",
  title: "Saints Joachim and Anne",
  shortTitle: "Saints Joachim and Anne",
  alternateNames: [
    "Parents of the Blessed Virgin Mary",
    "Grandparents of Jesus",
  ],
  descriptor: "Parents of Mary · Grandparents of Jesus",
  summary:
    "The Church venerates Joachim and Anne as the parents of the Virgin Mary and grandparents of Jesus, honoring the quiet faith handed from one generation to the next.",
  theme: "The faith handed on at home",
  prayerPrompt:
    "Pray for grandparents and elders, for families carrying faith across generations, and for those who fear their quiet love has gone unseen.",
  preview: {
    origin:
      "The Church venerates Joachim and Anne as the parents of the Virgin Mary and the grandparents of Jesus.",
    distinctiveSignificance:
      "Ancient Christian tradition remembers their joyful reunion at Jerusalem’s gate after learning that their long prayer for a child had been heard.",
    livingDevotion:
      "Couples hoping for a child, expectant parents, grandparents, and elders still seek their intercession. At Sainte-Anne-de-Beaupré in Québec, pilgrims have come since 1658 to pray for Saint Anne’s help.",
  },
  atAGlance: [
    { label: "Known as", value: "Parents of the Blessed Virgin Mary" },
    {
      label: "Devotion",
      value: "Marriage, expectant parents, families longing for a child, grandparents, and elders",
    },
    {
      label: "Living pilgrimage",
      value: "Sainte-Anne-de-Beaupré, Québec",
    },
    { label: "Calendar", value: "General Roman; United States" },
  ],
  storyArc: {
    primary: "hidden_faithfulness",
    rationale:
      "The Church's remembrance centers on the quiet transmission of faith within Mary’s family and the spiritual fruit borne by later generations rather than on a public ministry.",
  },
  observance: {
    month: 7,
    day: 26,
    rank: "memorial",
    color: "white",
    scopes: ["general_roman", "united_states"],
  },
  scriptureReferences: [
    {
      citation: "Sirach 44:1, 10–15",
      description:
        "The memorial praises the faithful ancestors whose heritage endures in their descendants.",
      url: "https://bible.usccb.org/bible/readings/0726-memorial-joachim-anne.cfm",
    },
    {
      citation: "Matthew 13:16–17",
      description:
        "Jesus blesses those who see and hear what prophets and righteous people longed to witness.",
      url: "https://bible.usccb.org/bible/readings/0726-memorial-joachim-anne.cfm",
    },
  ],
  sections: [
    {
      id: "parents-of-mary",
      label: "Tradition",
      heading: "The parents of Mary",
      paragraphs: [
        "The Church remembers Joachim and Anne as the parents of the Virgin Mary and the grandparents of Jesus. Their place in the Catholic imagination begins in a home: before the Annunciation, the Visitation, or Bethlehem, Mary was a daughter who received life and love within a family.",
        "Pope Francis has reflected on their home as part of the long chain through which faith and love of God were handed on to Mary. Their significance is quiet but immense. God’s work in one generation can prepare another generation to say yes.",
      ],
      sourceIds: ["francis-2013-angelus", "francis-2022-homily"],
    },
    {
      id: "long-awaited-child",
      label: "Tradition",
      heading: "The promise of a long-awaited child",
      paragraphs: [
        "An ancient Christian story remembers Joachim and Anne as a married couple who endured years without a child. Their sorrow did not end their trust in God: Joachim withdrew to fast and pray, while Anne carried her grief into a garden and pleaded for a child.",
        "The story continues with an angelic promise and the couple’s joyful reunion at Jerusalem’s gate after learning that their long prayer for a child had been heard. Their daughter would be Mary. Later devotion and sacred art came to know this scene as the Meeting at the Golden Gate. The image of the two embracing at the gate has endured because it gathers longing, perseverance, and gratitude into a single human moment.",
      ],
      sourceIds: ["john-paul-ii-joachim-anne", "usccb-joachim-anne-novena"],
    },
    {
      id: "intercession",
      label: "Documented history",
      heading: "Who asks for their prayers",
      paragraphs: [
        "Devotion to Joachim and Anne has made them especially close to married couples, expectant parents, families struggling to conceive, grandparents, and all who have grown old. The USCCB’s novena presents them as intercessors for each of these intentions.",
        "Their story speaks to people living through long seasons that cannot be hurried: waiting for a child, caring for aging parents, trying to pass on faith, or wondering whether years of quiet love will bear fruit. Their memorial offers no demand for dramatic achievement. It honors faithful love that makes room for another person’s vocation.",
      ],
      sourceIds: [
        "usccb-joachim-anne-novena",
        "francis-2015-angelus",
        "usccb-grandparents",
      ],
    },
    {
      id: "sainte-anne-de-beaupre",
      label: "Documented history",
      heading: "A living pilgrimage to Saint Anne",
      paragraphs: [
        "Along the Saint Lawrence River near Québec City stands the Basilica of Sainte-Anne-de-Beaupré, one of North America’s oldest pilgrimage destinations. Devotion there began in 1658, and the first chapel’s construction became associated with the reported healing of Louis Guimont after he placed stones in its foundation.",
        "Saint Anne was proclaimed patroness of Québec in 1876. Pilgrims still travel to the shrine, light candles, leave prayer intentions, celebrate Mass, and ask her intercession. Pope Francis celebrated Mass there in 2022 during his penitential pilgrimage to Canada. The shrine gives this memorial a physical destination: a place where inherited faith, suffering, hope, and prayer continue to meet.",
      ],
      sourceIds: [
        "vatican-news-beaupre",
        "beaupre-shrine",
        "francis-2022-beaupre",
      ],
    },
    {
      id: "prayer",
      label: "For prayer",
      heading: "A grace to ask for today",
      paragraphs: [
        "Saints Joachim and Anne, pray for families learning to hand on faith without force, for grandparents and elders who feel forgotten, and for all whose hidden fidelity is bearing fruit they may never live to see.",
      ],
      sourceIds: [],
    },
  ],
  sources: [
    {
      id: "usccb-joachim-anne-readings",
      kind: "liturgical_calendar",
      title:
        "Memorial of Saints Joachim and Anne, Parents of the Blessed Virgin Mary",
      publisher: "United States Conference of Catholic Bishops",
      url: "https://bible.usccb.org/bible/readings/0726-memorial-joachim-anne.cfm",
      accessedDate: "2026-07-26",
      note:
        "Provides the memorial’s title and assigned readings, which emphasize faithful ancestors and promises fulfilled across generations.",
    },
    {
      id: "john-paul-ii-joachim-anne",
      kind: "holy_see",
      title: "Angelus, 25 July 1999",
      publisher: "The Holy See",
      url: "https://www.vatican.va/content/john-paul-ii/en/angelus/1999/documents/hf_jp-ii_ang_19990725.html",
      publishedDate: "1999-07-25",
      accessedDate: "2026-07-26",
      note:
        "Saint John Paul II identifies the tradition about Joachim and Anne as dating to the apocryphal Gospel of James and reflects on the value of old age.",
    },
    {
      id: "usccb-joachim-anne-novena",
      kind: "scholarly_reference",
      title: "Faith and Perseverance: Saints Anne and Joachim Novena",
      publisher: "United States Conference of Catholic Bishops",
      url: "https://www.usccb.org/resources/faith-perseverance-sts-anne-joachim-novena",
      accessedDate: "2026-07-26",
      note:
        "Presents the ancient story of longing, prayer, the angelic promise, and the meeting at the Golden Gate, and identifies the intentions traditionally entrusted to their intercession.",
    },
    {
      id: "francis-2013-angelus",
      kind: "holy_see",
      title: "Angelus, 26 July 2013",
      publisher: "The Holy See",
      url: "https://www.vatican.va/content/francesco/en/angelus/2013/documents/papa-francesco_angelus_20130726_gmg-rio.html",
      publishedDate: "2013-07-26",
      accessedDate: "2026-07-26",
      note:
        "Pope Francis reflects on Joachim and Anne within the chain of family life through which faith and love of God are transmitted.",
    },
    {
      id: "francis-2015-angelus",
      kind: "holy_see",
      title: "Angelus, 26 July 2015",
      publisher: "The Holy See",
      url: "https://www.vatican.va/content/francesco/en/angelus/2015/documents/papa-francesco_angelus_20150726.html",
      publishedDate: "2015-07-26",
      accessedDate: "2026-07-26",
      note:
        "Pope Francis identifies Joachim and Anne as Mary’s parents and Jesus’ grandparents and thanks grandparents for their presence in families.",
    },
    {
      id: "francis-2022-homily",
      kind: "holy_see",
      title: "Homily at Edmonton on the Memorial of Saints Joachim and Anne",
      publisher: "The Holy See",
      url: "https://www.vatican.va/content/francesco/en/homilies/2022/documents/20220726-omelia-edmonton-canada.html",
      publishedDate: "2022-07-26",
      accessedDate: "2026-07-26",
      note:
        "Pope Francis develops the themes of inherited history, intergenerational love, freedom, and care for elders.",
    },
    {
      id: "usccb-grandparents",
      kind: "liturgical_calendar",
      title: "Grandparents and the Elderly",
      publisher: "United States Conference of Catholic Bishops",
      url: "https://www.usccb.org/topics/marriage-and-family-life-ministries/grandparents-elderly",
      accessedDate: "2026-07-26",
      note:
        "Explains the relationship between the memorial and the Church’s World Day for Grandparents and the Elderly, including its observance in the United States.",
    },
    {
      id: "vatican-news-beaupre",
      kind: "holy_see",
      title: "St. Anne de Beaupré: A Shrine for all Québec’s communities",
      publisher: "Vatican News",
      url: "https://www.vaticannews.va/en/church/news/2022-07/pope-canada-pilgrimage-st-anne-de-beaupre-mass-quebec.html",
      publishedDate: "2022-07-28",
      accessedDate: "2026-07-27",
      note:
        "Documents the shrine’s 1658 beginnings, the reported healing of Louis Guimont, its pilgrimage history, and Saint Anne’s patronage of Québec.",
    },
    {
      id: "beaupre-shrine",
      kind: "official_shrine",
      title: "Encounter Saint Anne",
      publisher: "Sanctuaire Sainte-Anne-de-Beaupré",
      url: "https://sanctuairesainteanne.org/en/pages/encounter-saint-anne",
      accessedDate: "2026-07-27",
      note:
        "The shrine’s official visitor resource documents its continuing prayer intentions, relics, pilgrimage, and devotion to Saint Anne.",
    },
    {
      id: "francis-2022-beaupre",
      kind: "holy_see",
      title: "Holy Mass at the National Shrine of Saint Anne de Beaupré",
      publisher: "The Holy See",
      url: "https://www.vatican.va/content/francesco/en/homilies/2022/documents/20220728-omelia-beaupre-canada.html",
      publishedDate: "2022-07-28",
      accessedDate: "2026-07-27",
      note:
        "Records Pope Francis’s 2022 Mass at the shrine during his penitential pilgrimage to Canada.",
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
      "Evidence boundaries are preserved in section labels, source notes, and editorial review without leading the reader-facing story with an absence-from-Scripture disclaimer.",
      "Specific biographical details beyond the ancient tradition have been omitted.",
      "The healing of Louis Guimont is described as reported by the shrine tradition, not independently adjudicated by CatholicYou.",
      "July 26, 2026 falls on a Sunday; the Sunday celebration takes precedence over this memorial in the ordinary parish calendar.",
    ],
  },
} as const satisfies ContentEntry;
