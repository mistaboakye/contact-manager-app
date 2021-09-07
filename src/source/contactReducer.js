const firstState = {
  contacts: [
    {
      name: "Mista Boakye",
      email: "mistaboakye@gmail.com",
      location: "Ghana",
      id: "kvsdjghbeirdht327489",
    },
  ],
};

const contactReducer = (state = firstState, action) => {
  switch (action.type) {
    case "ADD_CONTACT":
      const newContact = {
        name: action.data.name,
        number: action.data.number,
        location: action.data.location,
        id: action.data.id,
      };
      return { ...state, contacts: [...state.contacts, newContact] };

    case "DELETE_CONTACT":
      const filteredContact = state.contacts.filters(
        (contact) => contact.id !== action.data
      );
      return { ...state, contacts: filteredContact };
    case "UPDATE_CONTACT":
      const updateContact = state.contacts.map((contact) => {
        if (contact.id === action.data) {
          return { ...contact, ...action.updatedContact };
        } else {
          return contact;
        }
      });
      return { ...state, contacts: updateContact };
    default:
      return state;
  }
};

export default contactReducer;
