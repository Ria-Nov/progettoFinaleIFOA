interface FavouriteState {
  list: any[];
}

interface MainState {
  favourite: FavouriteState;
}

const initialState: MainState = {
  favourite: {
    list: [],
  },
};

type ActionType = 'ADD_TO_FAVOURITE' | 'REMOVE_FROM_FAVOURITE';

interface Action {
  type: ActionType;
  payload: any; 
}

const rootReducer = (state: MainState = initialState, action: Action): MainState => {
  switch (action.type) {
    case 'ADD_TO_FAVOURITE':
      return {
        ...state,
        favourite: {
          ...state.favourite,
          list: [...state.favourite.list, action.payload],
        },
      };
    case 'REMOVE_FROM_FAVOURITE':
      return {
        ...state,
        favourite: {
          ...state.favourite,
          list: state.favourite.list.filter((fav) => fav !== action.payload),
        },
      };
    default:
      return state;
  }
};

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
