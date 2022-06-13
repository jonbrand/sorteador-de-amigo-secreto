import { Footer } from '../../components/Footer/Footer';
import { Form } from '../../components/Form/Form';
import { ListParticipants } from '../../components/ListParticipants/ListParticipants';
import { Card } from '../../components/Card/Card';

export const Settings = () => {
  return (
    <Card>
      <section>
        <h2>
          Vamos Comecar
        </h2>
        <Form />
        <ListParticipants />
        <Footer />
      </section>
    </Card>
  )
}