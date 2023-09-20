import Form from '../Form';
import Section from '../Section';
import ContactsList from '../ContactsList';
import Filter from '../Filter';

export const App = () => {
  return (
    <div>
      <Section title="Phonebook">
        <Form />
      </Section>
      <Section>
        <Filter />
        <ContactsList />
      </Section>
    </div>
  );
};
