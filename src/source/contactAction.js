export const addContact = (contact) => {
  return {
    type: "ADD_CONTACT",
    data: contact,
  };
};
export const deleteContact = (contactId) => {
  return {
    type: "DELETE_CONTACT",
    data: contactId,
  };
};
export const updateContact = (contactId, updatedContact) => {
  return {
    type: "UPDATE_CONTACT",
    data: contactId,
    updatedContact: updatedContact,
  };
};
