const newsData = [
  {
    _id: "1",
    title: "Luxury Villas in Beverly Hills",
    content:
      "Explore the latest trends in luxury real estate with a spotlight on the magnificent villas of Beverly Hills. These homes feature state-of-the-art designs and breathtaking views.",
    owner: "user_001",
    reviews: ["comment_1", "comment_2"],
    createdAt: "2024-11-01T09:00:00Z",
    updatedAt: "2024-11-05T17:00:00Z",
  },
  {
    _id: "2",
    title: "Real Estate Trends for 2024",
    content:
      "Discover what's shaping the real estate market in 2024. From urban developments to suburban retreats, stay informed on the latest insights and predictions.",
    owner: "user_002",
    reviews: ["comment_3"],
    createdAt: "2024-10-15T11:00:00Z",
    updatedAt: "2024-11-03T10:30:00Z",
  },
  {
    _id: "3",
    title: "Investing in Waterfront Properties",
    content:
      "Waterfront properties remain one of the most coveted investments in the real estate world. Learn about the benefits and challenges of owning these scenic homes.",
    owner: "user_003",
    reviews: [],
    createdAt: "2024-10-20T08:30:00Z",
    updatedAt: "2024-10-21T14:00:00Z",
  },
  {
    _id: "4",
    title: "Bla Bla4",
    content:
      "Waterfront properties remain one of the most coveted investments in the real estate world. Learn about the benefits and challenges of owning these scenic homes.",
    owner: "user_003",
    reviews: [],
    createdAt: "2024-10-10T08:30:00Z",
    updatedAt: "2024-10-20T14:00:00Z",
  },
  {
    _id: "5",
    title: "Bla Bla5",
    content:
      "Waterfront properties remain one of the most coveted investments in the real estate world. Learn about the benefits and challenges of owning these scenic homes.",
    owner: "user_003",
    reviews: [],
    createdAt: "2024-10-10T08:30:00Z",
    updatedAt: "2024-10-20T14:00:00Z",
  },
  {
    _id: "6",
    title: "Bla Bla6",
    content:
      "Waterfront properties remain one of the most coveted investments in the real estate world. Learn about the benefits and challenges of owning these scenic homes.",
    owner: "user_003",
    reviews: [],
    createdAt: "2024-10-10T08:30:00Z",
    updatedAt: "2024-10-20T14:00:00Z",
  },
  {
    _id: "7",
    title: "Bla Bla7",
    content:
      "Waterfront properties remain one of the most coveted investments in the real estate world. Learn about the benefits and challenges of owning these scenic homes.",
    owner: "user_003",
    reviews: [],
    createdAt: "2024-10-10T08:30:00Z",
    updatedAt: "2024-10-20T14:00:00Z",
  },
  {
    _id: "8",
    title: "Bla Bla8",
    content:
      "Waterfront properties remain one of the most coveted investments in the real estate world. Learn about the benefits and challenges of owning these scenic homes.",
    owner: "user_003",
    reviews: [],
    createdAt: "2024-10-10T08:30:00Z",
    updatedAt: "2024-10-20T14:00:00Z",
  },
  {
    _id: "9",
    title: "Bla Bla9",
    content:
      "Waterfront properties remain one of the most coveted investments in the real estate world. Learn about the benefits and challenges of owning these scenic homes.",
    owner: "user_003",
    reviews: [],
    createdAt: "2024-10-10T08:30:00Z",
    updatedAt: "2024-10-20T14:00:00Z",
  },
  {
    _id: "10",
    title: "Bla Bla10",
    content:
      "Waterfront properties remain one of the most coveted investments in the real estate world. Learn about the benefits and challenges of owning these scenic homes.",
    owner: "user_003",
    reviews: [],
    createdAt: "2024-10-10T08:30:00Z",
    updatedAt: "2024-10-20T14:00:00Z",
  },
  {
    _id: "11",
    title: "Bla Bla11",
    content:
      "Waterfront properties remain one of the most coveted investments in the real estate world. Learn about the benefits and challenges of owning these scenic homes.",
    owner: "user_003",
    reviews: [],
    createdAt: "2024-10-10T08:30:00Z",
    updatedAt: "2024-10-20T14:00:00Z",
  },
  {
    _id: "12",
    title: "Bla Bla12",
    content:
      "Waterfront properties remain one of the most coveted investments in the real estate world. Learn about the benefits and challenges of owning these scenic homes.",
    owner: "user_003",
    reviews: [],
    createdAt: "2024-10-10T08:30:00Z",
    updatedAt: "2024-10-20T14:00:00Z",
  },
  {
    _id: "13",
    title: "Bla Bla13",
    content:
      "Waterfront properties remain one of the most coveted investments in the real estate world. Learn about the benefits and challenges of owning these scenic homes.",
    owner: "user_003",
    reviews: [],
    createdAt: "2024-10-10T08:30:00Z",
    updatedAt: "2024-10-20T14:00:00Z",
  },
  {
    _id: "14",
    title: "Bla Bla14",
    content:
      "Waterfront properties remain one of the most coveted investments in the real estate world. Learn about the benefits and challenges of owning these scenic homes.",
    owner: "user_003",
    reviews: [],
    createdAt: "2024-10-10T08:30:00Z",
    updatedAt: "2024-10-20T14:00:00Z",
  },
  {
    _id: "15",
    title: "Bla Bla15",
    content:
      "Waterfront properties remain one of the most coveted investments in the real estate world. Learn about the benefits and challenges of owning these scenic homes.",
    owner: "user_003",
    reviews: [],
    createdAt: "2024-10-10T08:30:00Z",
    updatedAt: "2024-10-20T14:00:00Z",
  },
  {
    _id: "16",
    title: "Bla Bla16",
    content:
      "Waterfront properties remain one of the most coveted investments in the real estate world. Learn about the benefits and challenges of owning these scenic homes.",
    owner: "user_003",
    reviews: [],
    createdAt: "2024-10-10T08:30:00Z",
    updatedAt: "2024-10-20T14:00:00Z",
  },
  {
    _id: "17",
    title: "Bla Bla17",
    content:
      "Waterfront properties remain one of the most coveted investments in the real estate world. Learn about the benefits and challenges of owning these scenic homes.",
    owner: "user_003",
    reviews: [],
    createdAt: "2024-10-10T08:30:00Z",
    updatedAt: "2024-10-20T14:00:00Z",
  },
  {
    _id: "18",
    title: "Bla Bla18",
    content:
      "Waterfront properties remain one of the most coveted investments in the real estate world. Learn about the benefits and challenges of owning these scenic homes.",
    owner: "user_003",
    reviews: [],
    createdAt: "2024-10-10T08:30:00Z",
    updatedAt: "2024-10-20T14:00:00Z",
  },
  {
    _id: "19",
    title: "Bla Bla19",
    content:
      "Waterfront properties remain one of the most coveted investments in the real estate world. Learn about the benefits and challenges of owning these scenic homes.",
    owner: "user_003",
    reviews: [],
    createdAt: "2024-10-10T08:30:00Z",
    updatedAt: "2024-10-20T14:00:00Z",
  },
  {
    _id: "20",
    title: "Bla Bla20",
    content:
      "Waterfront properties remain one of the most coveted investments in the real estate world. Learn about the benefits and challenges of owning these scenic homes.",
    owner: "user_003",
    reviews: [],
    createdAt: "2024-10-10T08:30:00Z",
    updatedAt: "2024-10-20T14:00:00Z",
  },
  {
    _id: "21",
    title: "Bla Bla21",
    content:
      "Waterfront properties remain one of the most coveted investments in the real estate world. Learn about the benefits and challenges of owning these scenic homes.",
    owner: "user_003",
    reviews: [],
    createdAt: "2024-10-10T08:30:00Z",
    updatedAt: "2024-10-20T14:00:00Z",
  },
  {
    _id: "22",
    title: "Bla Bla22",
    content:
      "Waterfront properties remain one of the most coveted investments in the real estate world. Learn about the benefits and challenges of owning these scenic homes.",
    owner: "user_003",
    reviews: [],
    createdAt: "2024-10-10T08:30:00Z",
    updatedAt: "2024-10-20T14:00:00Z",
  },
  {
    _id: "23",
    title: "Bla Bla23",
    content:
      "Waterfront properties remain one of the most coveted investments in the real estate world. Learn about the benefits and challenges of owning these scenic homes.",
    owner: "user_003",
    reviews: [],
    createdAt: "2024-10-10T08:30:00Z",
    updatedAt: "2024-10-20T14:00:00Z",
  },
  {
    _id: "24",
    title: "Bla Bla24",
    content:
      "Waterfront properties remain one of the most coveted investments in the real estate world. Learn about the benefits and challenges of owning these scenic homes.",
    owner: "user_003",
    reviews: [],
    createdAt: "2024-10-10T08:30:00Z",
    updatedAt: "2024-10-20T14:00:00Z",
  },
  {
    _id: "25",
    title: "Bla Bla25",
    content:
      "Waterfront properties remain one of the most coveted investments in the real estate world. Learn about the benefits and challenges of owning these scenic homes.",
    owner: "user_003",
    reviews: [],
    createdAt: "2024-10-10T08:30:00Z",
    updatedAt: "2024-10-20T14:00:00Z",
  },
  {
    _id: "26",
    title: "Bla Bla26",
    content:
      "Waterfront properties remain one of the most coveted investments in the real estate world. Learn about the benefits and challenges of owning these scenic homes.",
    owner: "user_003",
    reviews: [],
    createdAt: "2024-10-10T08:30:00Z",
    updatedAt: "2024-10-20T14:00:00Z",
  },
  {
    _id: "27",
    title: "Bla Bla27",
    content:
      "Waterfront properties remain one of the most coveted investments in the real estate world. Learn about the benefits and challenges of owning these scenic homes.",
    owner: "user_003",
    reviews: [],
    createdAt: "2024-10-10T08:30:00Z",
    updatedAt: "2024-10-20T14:00:00Z",
  },
  {
    _id: "28",
    title: "Bla Bla28",
    content:
      "Waterfront properties remain one of the most coveted investments in the real estate world. Learn about the benefits and challenges of owning these scenic homes.",
    owner: "user_003",
    reviews: [],
    createdAt: "2024-10-10T08:30:00Z",
    updatedAt: "2024-10-20T14:00:00Z",
  },
  {
    _id: "29",
    title: "Bla Bla29",
    content:
      "Waterfront properties remain one of the most coveted investments in the real estate world. Learn about the benefits and challenges of owning these scenic homes.",
    owner: "user_003",
    reviews: [],
    createdAt: "2024-10-10T08:30:00Z",
    updatedAt: "2024-10-20T14:00:00Z",
  },
  {
    _id: "30",
    title: "Bla Bla30",
    content:
      "Waterfront properties remain one of the most coveted investments in the real estate world. Learn about the benefits and challenges of owning these scenic homes.",
    owner: "user_003",
    reviews: [],
    createdAt: "2024-10-10T08:30:00Z",
    updatedAt: "2024-10-20T14:00:00Z",
  },
  {
    _id: "31",
    title: "Bla Bla31",
    content:
      "Waterfront properties remain one of the most coveted investments in the real estate world. Learn about the benefits and challenges of owning these scenic homes.",
    owner: "user_003",
    reviews: [],
    createdAt: "2024-10-10T08:30:00Z",
    updatedAt: "2024-10-20T14:00:00Z",
  },
  {
    _id: "32",
    title: "Bla Bla32",
    content:
      "Waterfront properties remain one of the most coveted investments in the real estate world. Learn about the benefits and challenges of owning these scenic homes.",
    owner: "user_003",
    reviews: [],
    createdAt: "2024-10-10T08:30:00Z",
    updatedAt: "2024-10-20T14:00:00Z",
  },
  {
    _id: "33",
    title: "Bla Bla33",
    content:
      "Waterfront properties remain one of the most coveted investments in the real estate world. Learn about the benefits and challenges of owning these scenic homes.",
    owner: "user_003",
    reviews: [],
    createdAt: "2024-10-10T08:30:00Z",
    updatedAt: "2024-10-20T14:00:00Z",
  },
  {
    _id: "34",
    title: "Bla Bla34",
    content:
      "Waterfront properties remain one of the most coveted investments in the real estate world. Learn about the benefits and challenges of owning these scenic homes.",
    owner: "user_003",
    reviews: [],
    createdAt: "2024-10-10T08:30:00Z",
    updatedAt: "2024-10-20T14:00:00Z",
  },
  {
    _id: "35",
    title: "Bla Bla35",
    content:
      "Waterfront properties remain one of the most coveted investments in the real estate world. Learn about the benefits and challenges of owning these scenic homes.",
    owner: "user_003",
    reviews: [],
    createdAt: "2024-10-10T08:30:00Z",
    updatedAt: "2024-10-20T14:00:00Z",
  },
  {
    _id: "36",
    title: "Bla Bla36",
    content:
      "Waterfront properties remain one of the most coveted investments in the real estate world. Learn about the benefits and challenges of owning these scenic homes.",
    owner: "user_003",
    reviews: [],
    createdAt: "2024-10-10T08:30:00Z",
    updatedAt: "2024-10-20T14:00:00Z",
  },
  {
    _id: "37",
    title: "Bla Bla37",
    content:
      "Waterfront properties remain one of the most coveted investments in the real estate world. Learn about the benefits and challenges of owning these scenic homes.",
    owner: "user_003",
    reviews: [],
    createdAt: "2024-10-10T08:30:00Z",
    updatedAt: "2024-10-20T14:00:00Z",
  },
  {
    _id: "38",
    title: "Bla Bla38",
    content:
      "Waterfront properties remain one of the most coveted investments in the real estate world. Learn about the benefits and challenges of owning these scenic homes.",
    owner: "user_003",
    reviews: [],
    createdAt: "2024-10-10T08:30:00Z",
    updatedAt: "2024-10-20T14:00:00Z",
  },
  {
    _id: "39",
    title: "Bla Bla39",
    content:
      "Waterfront properties remain one of the most coveted investments in the real estate world. Learn about the benefits and challenges of owning these scenic homes.",
    owner: "user_003",
    reviews: [],
    createdAt: "2024-10-10T08:30:00Z",
    updatedAt: "2024-10-20T14:00:00Z",
  },
  {
    _id: "40",
    title: "Bla Bla40",
    content:
      "Waterfront properties remain one of the most coveted investments in the real estate world. Learn about the benefits and challenges of owning these scenic homes.",
    owner: "user_003",
    reviews: [],
    createdAt: "2024-10-10T08:30:00Z",
    updatedAt: "2024-10-20T14:00:00Z",
  },
  {
    _id: "41",
    title: "Bla Bla41",
    content:
      "Waterfront properties remain one of the most coveted investments in the real estate world. Learn about the benefits and challenges of owning these scenic homes.",
    owner: "user_003",
    reviews: [],
    createdAt: "2024-10-10T08:30:00Z",
    updatedAt: "2024-10-20T14:00:00Z",
  },
  {
    _id: "42",
    title: "Bla Bla42",
    content:
      "Waterfront properties remain one of the most coveted investments in the real estate world. Learn about the benefits and challenges of owning these scenic homes.",
    owner: "user_003",
    reviews: [],
    createdAt: "2024-10-10T08:30:00Z",
    updatedAt: "2024-10-20T14:00:00Z",
  },
  {
    _id: "43",
    title: "Bla Bla43",
    content:
      "Waterfront properties remain one of the most coveted investments in the real estate world. Learn about the benefits and challenges of owning these scenic homes.",
    owner: "user_003",
    reviews: [],
    createdAt: "2024-10-10T08:30:00Z",
    updatedAt: "2024-10-20T14:00:00Z",
  },
  {
    _id: "44",
    title: "Bla Bla44",
    content:
      "Waterfront properties remain one of the most coveted investments in the real estate world. Learn about the benefits and challenges of owning these scenic homes.",
    owner: "user_003",
    reviews: [],
    createdAt: "2024-10-10T08:30:00Z",
    updatedAt: "2024-10-20T14:00:00Z",
  },
  {
    _id: "45",
    title: "Bla Bla45",
    content:
      "Waterfront properties remain one of the most coveted investments in the real estate world. Learn about the benefits and challenges of owning these scenic homes.",
    owner: "user_003",
    reviews: [],
    createdAt: "2024-10-10T08:30:00Z",
    updatedAt: "2024-10-20T14:00:00Z",
  },
  {
    _id: "46",
    title: "Bla Bla46",
    content:
      "Waterfront properties remain one of the most coveted investments in the real estate world. Learn about the benefits and challenges of owning these scenic homes.",
    owner: "user_003",
    reviews: [],
    createdAt: "2024-10-10T08:30:00Z",
    updatedAt: "2024-10-20T14:00:00Z",
  },
  {
    _id: "47",
    title: "Bla Bla47",
    content:
      "Waterfront properties remain one of the most coveted investments in the real estate world. Learn about the benefits and challenges of owning these scenic homes.",
    owner: "user_003",
    reviews: [],
    createdAt: "2024-10-10T08:30:00Z",
    updatedAt: "2024-10-20T14:00:00Z",
  },
  {
    _id: "48",
    title: "Bla Bla48",
    content:
      "Waterfront properties remain one of the most coveted investments in the real estate world. Learn about the benefits and challenges of owning these scenic homes.",
    owner: "user_003",
    reviews: [],
    createdAt: "2024-10-10T08:30:00Z",
    updatedAt: "2024-10-20T14:00:00Z",
  },
  {
    _id: "49",
    title: "Bla Bla49",
    content:
      "Waterfront properties remain one of the most coveted investments in the real estate world. Learn about the benefits and challenges of owning these scenic homes.",
    owner: "user_003",
    reviews: [],
    createdAt: "2024-10-10T08:30:00Z",
    updatedAt: "2024-10-20T14:00:00Z",
  },
  {
    _id: "50",
    title: "Bla Bla50",
    content:
      "Waterfront properties remain one of the most coveted investments in the real estate world. Learn about the benefits and challenges of owning these scenic homes.",
    owner: "user_003",
    reviews: [],
    createdAt: "2024-10-10T08:30:00Z",
    updatedAt: "2024-10-20T14:00:00Z",
  },
  {
    _id: "51",
    title: "Bla Bla51",
    content:
      "Waterfront properties remain one of the most coveted investments in the real estate world. Learn about the benefits and challenges of owning these scenic homes.",
    owner: "user_003",
    reviews: [],
    createdAt: "2024-10-10T08:30:00Z",
    updatedAt: "2024-10-20T14:00:00Z",
  },
  {
    _id: "52",
    title: "Bla Bla52",
    content:
      "Waterfront properties remain one of the most coveted investments in the real estate world. Learn about the benefits and challenges of owning these scenic homes.",
    owner: "user_003",
    reviews: [],
    createdAt: "2024-10-10T08:30:00Z",
    updatedAt: "2024-10-20T14:00:00Z",
  },
  {
    _id: "53",
    title: "Bla Bla53",
    content:
      "Waterfront properties remain one of the most coveted investments in the real estate world. Learn about the benefits and challenges of owning these scenic homes.",
    owner: "user_003",
    reviews: [],
    createdAt: "2024-10-10T08:30:00Z",
    updatedAt: "2024-10-20T14:00:00Z",
  },
  {
    _id: "54",
    title: "Bla Bla54",
    content:
      "Waterfront properties remain one of the most coveted investments in the real estate world. Learn about the benefits and challenges of owning these scenic homes.",
    owner: "user_003",
    reviews: [],
    createdAt: "2024-10-10T08:30:00Z",
    updatedAt: "2024-10-20T14:00:00Z",
  },
  {
    _id: "55",
    title: "Bla Bla55",
    content:
      "Waterfront properties remain one of the most coveted investments in the real estate world. Learn about the benefits and challenges of owning these scenic homes.",
    owner: "user_003",
    reviews: [],
    createdAt: "2024-10-10T08:30:00Z",
    updatedAt: "2024-10-20T14:00:00Z",
  },
  {
    _id: "56",
    title: "Bla Bla56",
    content:
      "Waterfront properties remain one of the most coveted investments in the real estate world. Learn about the benefits and challenges of owning these scenic homes.",
    owner: "user_003",
    reviews: [],
    createdAt: "2024-10-10T08:30:00Z",
    updatedAt: "2024-10-20T14:00:00Z",
  },
  {
    _id: "57",
    title: "Bla Bla57",
    content:
      "Waterfront properties remain one of the most coveted investments in the real estate world. Learn about the benefits and challenges of owning these scenic homes.",
    owner: "user_003",
    reviews: [],
    createdAt: "2024-10-10T08:30:00Z",
    updatedAt: "2024-10-20T14:00:00Z",
  },
  {
    _id: "58",
    title: "Bla Bla58",
    content:
      "Waterfront properties remain one of the most coveted investments in the real estate world. Learn about the benefits and challenges of owning these scenic homes.",
    owner: "user_003",
    reviews: [],
    createdAt: "2024-10-10T08:30:00Z",
    updatedAt: "2024-10-20T14:00:00Z",
  },
  {
    _id: "59",
    title: "Bla Bla59",
    content:
      "Waterfront properties remain one of the most coveted investments in the real estate world. Learn about the benefits and challenges of owning these scenic homes.",
    owner: "user_003",
    reviews: [],
    createdAt: "2024-10-10T08:30:00Z",
    updatedAt: "2024-10-20T14:00:00Z",
  },
  {
    _id: "60",
    title: "Bla Bla60",
    content:
      "Waterfront properties remain one of the most coveted investments in the real estate world. Learn about the benefits and challenges of owning these scenic homes.",
    owner: "user_003",
    reviews: [],
    createdAt: "2024-10-10T08:30:00Z",
    updatedAt: "2024-10-20T14:00:00Z",
  },
];

export default newsData;
