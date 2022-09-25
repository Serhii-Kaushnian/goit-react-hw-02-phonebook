import React, { Component } from 'react';
import {
  ContactsListWrapper,
  Title,
  List,
  ItemContainer,
  Item,
  Button,
  ItemContainerSpan,
} from './ContactList.styled';
import { FaRegSadCry } from 'react-icons/fa';
export default class ContactList extends Component {
  render() {
    const { title, contactsList, onContactDelete } = this.props;
    return (
      <ContactsListWrapper>
        <Title>{title}</Title>
        {contactsList.length !== 0 ? (
          <List>
            {contactsList.map(value => {
              return (
                <Item key={value.id}>
                  <ItemContainer>
                    {value.name} :
                    <ItemContainerSpan>{value.number}</ItemContainerSpan>
                    <Button
                      onClick={onContactDelete}
                      id={value.id}
                      type="button"
                    >
                      Delete contact
                    </Button>
                  </ItemContainer>
                </Item>
              );
            })}
          </List>
        ) : (
          <>
            <h3>
              Contact list empty <FaRegSadCry />
            </h3>
          </>
        )}
      </ContactsListWrapper>
    );
  }
}
