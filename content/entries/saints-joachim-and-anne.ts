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
    livedWitness:
      "Although Scripture does not recount their lives, Christian tradition remembers a family in which Mary was prepared to listen to God and receive her vocation.",
    enduringRelevance:
      "Their memorial honors the quiet, often unseen work of handing faith from one generation to the next. It invites us to receive our roots with gratitude and to remain close to grandparents and elders.",
  },
  atAGlance: [
    { label: "Known as", value: "Parents of the Blessed Virgin Mary" },
    { label: "In tradition", value: "Grandparents of Jesus" },
    { label: "Witness", value: "Faith handed on within family life" },
    { label: "Calendar", value: "General Roman; United States" },
  ],
  storyArc: {
    primary: "hidden_faithfulness",
    rationale:
      "The canonical Scriptures do not narrate their lives; the Church's remembrance centers on the quiet transmission of faith within the family and the spiritual fruit borne by later generations.",
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
      id: "scriptural-silence",
      label: "Scripture",
      heading: "A silence that asks for honesty",
      paragraphs: [
        "Scripture tells us about Mary’s place in the mystery of Christ, but it does not name her parents or recount their lives. CatholicYou therefore cannot present a detailed biography of Joachim and Anne as though it came from the Bible.",
        "The readings appointed for their memorial look instead toward faithful ancestors and promises fulfilled across generations. Sirach praises the just whose heritage remains with their descendants, while the Gospel blesses those who see what earlier generations longed to see.",
      ],
      sourceIds: ["usccb-joachim-anne-readings", "john-paul-ii-joachim-anne"],
    },
    {
      id: "ancient-tradition",
      label: "Tradition",
      heading: "Names carried by ancient Christian tradition",
      paragraphs: [
        "The names Joachim and Anne come through an ancient tradition associated with the apocryphal Gospel of James, not through the canonical Gospels. Saint John Paul II explicitly identified that distinction when speaking before their liturgical memorial.",
        "That tradition tells of a married couple who suffered childlessness, prayed with perseverance, and received the promise of a daughter. The familiar scenes of Joachim in the wilderness, Anne praying in a garden, and their joyful meeting at Jerusalem’s gate belong to this devotional tradition. They can nourish prayer without being presented as verified history.",
      ],
      sourceIds: ["john-paul-ii-joachim-anne", "usccb-joachim-anne-novena"],
    },
    {
      id: "faith-at-home",
      label: "Tradition",
      heading: "The hidden work of a faithful home",
      paragraphs: [
        "The Church venerates Joachim and Anne as Mary’s parents and Jesus’ grandparents. Their importance is not attached to a public ministry recorded in Scripture. It is found in the mystery of a family life that preceded the Annunciation and in the generations through which God prepared a people to receive Christ.",
        "Pope Francis has used their memorial to reflect on the home as a place where faith is handed on with love, freedom, encouragement, and closeness. This does not give us a transcript of Mary’s childhood. It gives the Church a truthful spiritual lens: much of salvation history is prepared through fidelity that the world never sees.",
      ],
      sourceIds: ["francis-2013-angelus", "francis-2022-homily"],
    },
    {
      id: "grandparents-and-elders",
      label: "Documented history",
      heading: "A bond between generations",
      paragraphs: [
        "The memorial of Joachim and Anne has become a natural occasion for the Church to honor grandparents and elders. Pope Francis placed the World Day for Grandparents and the Elderly near their July memorial and repeatedly connected their witness with gratitude for those who preserve family memory and transmit faith.",
        "Their relevance now is both tender and demanding. Catholics are invited not merely to remember older relatives affectionately, but to resist their isolation, listen to their wisdom, and recognize that a person’s dignity does not diminish with age or dependence.",
      ],
      sourceIds: [
        "francis-2015-angelus",
        "francis-2022-homily",
        "usccb-grandparents",
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
        "Presents the ancient devotional story as an ancient story rather than as scriptural or verified biographical history.",
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
  ],
  editorial: {
    status: "fact_checked",
    factCheckedAt: "2026-07-26",
    factCheckedBy: "CatholicYou editorial research",
    humanReviewedAt: null,
    humanReviewedBy: null,
    notes: [
      "Private preview only: human review is still required before publication.",
      "The entry explicitly distinguishes canonical Scripture from the apocryphal and devotional tradition.",
      "Specific biographical details beyond the ancient tradition have been omitted.",
      "July 26, 2026 falls on a Sunday; the Sunday celebration takes precedence over this memorial in the ordinary parish calendar.",
    ],
  },
} as const satisfies ContentEntry;
