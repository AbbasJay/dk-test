import { SET_SELECTED } from "../actions/actions";

export default (
  state = {
    titles: [
      {
        title: "Children's",
        url:
          "https://cdn.zeplin.io/5af97863c03454db0b7806df/assets/8478DB0F-6EFD-4B02-A113-934EBC55274A.png",
        selected: false
      },
      {
        title: "Crafts & Hobbies",
        url:
          "https://cdn.zeplin.io/5af97863c03454db0b7806df/assets/4906FB67-B52D-43FF-9521-1C3BA0365995.png",
        selected: false
      },
      {
        title: "Education & Teachers",
        url:
          "https://cdn.zeplin.io/5af97863c03454db0b7806df/assets/765B3685-670F-43D3-BD75-03A15A991C05.png",
        selected: false
      },
      {
        title: "Food & Drink",
        url:
          "https://cdn.zeplin.io/5af97863c03454db0b7806df/assets/A2BA5476-9E4E-4064-BB75-9B0DBF643124.png",
        selected: false
      },
      {
        title: "Gardening",
        url:
          "https://cdn.zeplin.io/5af97863c03454db0b7806df/assets/BD53890D-4492-425B-AC7B-4998A5AB0F3B.png",
        selected: false
      },
      {
        title: "Health & Fitness",
        url:
          "https://cdn.zeplin.io/5af97863c03454db0b7806df/assets/77EF2872-5F00-4463-BA8E-8229C58AF378.png",
        selected: false
      },
      {
        title: "History & Reference",
        url:
          "https://cdn.zeplin.io/5af97863c03454db0b7806df/assets/1A1D2FB4-A977-417B-BCE4-B388C9EA9B8B.png",
        selected: false
      },
      {
        title: "Lego Books",
        url:
          "https://cdn.zeplin.io/5af97863c03454db0b7806df/assets/E6889B4D-7BA4-432D-A358-0E4E9E4D2A1C.png",
        selected: false
      },
      {
        title: "Marvel",
        url:
          "https://cdn.zeplin.io/5af97863c03454db0b7806df/assets/55047CB1-5332-4706-BF6B-E59A50A2491B.png ",
        selected: false
      },
      {
        title: "Pregnancy",
        url:
          "https://cdn.zeplin.io/5af97863c03454db0b7806df/assets/DBEA0860-5078-4436-88F3-A5F6902C2B2C.png",
        selected: false
      },
      {
        title: "Star Wars",
        url:
          "https://cdn.zeplin.io/5af97863c03454db0b7806df/assets/6E6F8416-5307-40CA-9663-B7962F999DDD.png ",
        selected: false
      },
      {
        title: "Travel",
        url:
          "https://cdn.zeplin.io/5af97863c03454db0b7806df/assets/77971B70-9AEA-4DA8-947A-EC34A9D73839.png",
        selected: false
      }
    ]
  },
  action
) => {
  switch (action.type) {
    case SET_SELECTED: {
      const { index } = action;
      let newState = { ...state };
      newState = newState.titles;

      newState[index].selected = !newState[index].selected;
      return {
        ...state,
        titles: newState,
        selected: true
      };
    }

    default:
      return state;
  }
};
