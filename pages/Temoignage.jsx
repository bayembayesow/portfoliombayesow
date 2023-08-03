import { useSelector, useDispatch } from 'react-redux';
import { ajouterTemoignage, supprimerTemoignage, editerTemoignage } from '../store';
import TemoignageForm from '../components/TemoignageForm';
import TemoignageListe from '../components/TemoignageListe';

export default function Temoignages() {
  const temoignages = useSelector(state => state.temoignages);
  const dispatch = useDispatch();

  const handleSubmit = message => {
    dispatch(ajouterTemoignage(message));
  };

  const handleDelete = id => {
    dispatch(supprimerTemoignage(id));
  };

  const handleEdit = (id, newMessage) => {
    dispatch(editerTemoignage(id, newMessage));
  };

  return (
    <div>
      <TemoignageListe
        temoignages={temoignages}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
      <TemoignageForm handleSubmit={handleSubmit} />
    </div>
  );
}
