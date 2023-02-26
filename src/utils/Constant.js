import roomIcon from "../assets/livingroom (1).png";
import personIcon from "../assets/person.png";
import kidIcon from "../assets/kids.png";
export const constant = {
  SEARCH_FIELDS: {
    CITY_FIELD: {
      ID: 0,
      TYPE: "select",
      LABEL: "",
      PLACE_HOLDER: "Select city",
      ICON: "",
      ITEMS: [
        { ID: 0, LABEL: "Mashad", FARSI_LABEL: "مشهد", NAME: "city" },
        { ID: 1, LABEL: "Tehran", FARSI_LABEL: "تهران", NAME: "city" },
      ],
    },
    DATE_FIELD: {
      ID: 1,
      TYPE: "datapicker",
      LABEL: "",
      PLACE_HOLDER: "Select date",
      ICON: "",
    },
    ROOM_TYPE_FIELD: {
      ID: 2,
      TYPE: "menuitems",
      LABEL: "",
      PLACE_HOLDER: "",
      ICON: "",
      ITEMS: [
        {
          ID: 0,
          LABEL: "Adult",
          FARSI_LABEL: "بالغ",
          NAME: "room",
          ICON: personIcon,
        },
        {
          ID: 1,
          LABEL: "Children",
          FARSI_LABEL: "کودک",
          NAME: "room",
          ICON: kidIcon,
        },
        {
          ID: 2,
          LABEL: "Rooms",
          FARSI_LABEL: "اتاق ها",
          NAME: "room",
          ICON: roomIcon,
        },
      ],
    },
  },
};
