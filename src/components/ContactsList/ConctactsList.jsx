import { useDispatch, useSelector } from 'react-redux';
import { deleteTask, getContacts, getFilter } from 'redux/contactsSlice';

import {
  ContContactList,
  ContListUl,
  ContListText,
  ContListItem,
  ContListBtn,
} from './ContactsList.styled';
const ContactsList = () => {
  const contactsArray = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const normalizedFilter = filter.toLowerCase();

  const filteredContacts = contactsArray.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <>
      {contactsArray.length > 0 && filteredContacts.length === 0 && (
        <p>No one found with that name</p>
      )}

      {contactsArray.length === 0 && (
        <p>Please add contact by click on "Add conctact" button</p>
      )}

      {contactsArray.length > 0 && (
        <ContContactList>
          <ContListUl>
            {filteredContacts.map(({ id, name, number }) => (
              <ContListItem key={id}>
                <ContListText>
                  {name}: <span className="number"> {number}</span>
                </ContListText>

                <ContListBtn
                  type="button"
                  onClick={() => dispatch(deleteTask(id))}
                >
                  Delete
                </ContListBtn>
              </ContListItem>
            ))}
          </ContListUl>
        </ContContactList>
      )}
    </>
  );
};

export default ContactsList;
