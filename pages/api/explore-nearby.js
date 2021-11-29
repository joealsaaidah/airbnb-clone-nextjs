export default function exploreNearby(req, res) {
  res
    .status(200)
    .json(
      {
        img: "/images/sc1.webp",
        location: "London",
        distance: "45-minute drive",
      },
      {
        img: "/images/sc2.webp",
        location: "Manchester",
        distance: "4.5-hour drive",
      },
      {
        img: "/images/sc3.webp",
        location: "Liverpool",
        distance: "4.5-hour drive",
      },
      { img: "/images/sc4.webp", location: "York", distance: "4-hour drive" },
      {
        img: "/images/sc5.webp",
        location: "Cardiff",
        distance: "45-minute drive",
      },
      {
        img: "/images/sc6.webp",
        location: "Birkenhead",
        distance: "4.5-hour drive",
      },
      {
        img: "/images/sc7.webp",
        location: "Newquay",
        distance: "6-hour drive",
      },
      { img: "/images/sc8.webp", location: "Hove", distance: "2-hour drive" }
    );
}
