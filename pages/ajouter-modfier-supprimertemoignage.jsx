import React from 'react';
import TemoignageForm from '../components/TemoignageForm';
import { useDispatch } from 'react-redux';
import { ADD_TESTIMONIAL, EDIT_TESTIMONIAL, DELETE_TESTIMONIAL } from '../store';
import { useRouter } from 'next/router';

const AjouterModifierSupprimerTemoignagePage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { id, text } = router.query;

  const handleAdd = newText => {
    if (newText.trim() !== '') {
      dispatch({ type: ADD_TESTIMONIAL, payload: { id: Date.now(), text: newText } });
      router.push('/temoignages');
    }
  };

  const handleEdit = editText => {
    if (editText.trim() !== '') {
      dispatch({ type: EDIT_TESTIMONIAL, payload: { id, text: editText } });
      router.push('/temoignages');
    }
  };

  const handleDelete = () => {
    dispatch({ type: DELETE_TESTIMONIAL, payload: id });
    router.push('/temoignages');
  };

  const handleCancel = () => {
    router.push('/temoignages');
  };

  return (
    <div>
      <h1>{id ? 'Modifier' : 'Ajouter'}/Supprimer un Temoignage</h1>
      <TemoignageForm
        id={id}
        initialText={text}
        onAdd={handleAdd}
        onEdit={handleEdit}
        onCancel={handleCancel}
      />
      {id && (
        <div>
          <button onClick={handleDelete}>Supprimer</button>
        </div>
      )}
    </div>
  );
};

export default AjouterModifierSupprimerTemoignagePage;
