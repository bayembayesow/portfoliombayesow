import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { supprimerTemoignage, editerTemoignage } from '../store';

const TemoignageListe = () => {
  const testimonials = useSelector(state => state.testimonials);
  const dispatch = useDispatch();

  const [editedMessages, setEditedMessages] = useState({});

  const handleDelete = id => {
    dispatch(supprimerTemoignage(id));
  };

  const handleEdit = (id, message) => {
    setEditedMessages(prevState => ({
      ...prevState,
      [id]: { original: message, edited: message },
    }));
  };

  const handleSaveEdit = (id, editedMessage) => {
    dispatch(editerTemoignage({ id, message: editedMessage }));
    setEditedMessages(prevState => ({
      ...prevState,
      [id]: undefined,
    }));

    const testimonialsMisAJour = testimonials.map(temoignage => {
      if (temoignage.id === id) {
        return { ...temoignage, message: editedMessage };
      }
      return temoignage;
    });

    dispatch({ type: 'SET_TESTIMONIALS', testimonials: testimonialsMisAJour });
  };
  
  const handleEditChange = (id, value) => {
    setEditedMessages(prevState => ({
      ...prevState,
      [id]: { ...prevState[id], edited: value },
    }));
  };

  return (
    <ul>
      {testimonials.map(temoignage => (
        <li key={temoignage.id}>
          {editedMessages[temoignage.id] !== undefined ? (
            <>
              <input
                type="text"
                value={editedMessages[temoignage.id].edited}
                onChange={e => handleEditChange(temoignage.id, e.target.value)}
              />
              <button onClick={() => handleSaveEdit(temoignage.id, editedMessages[temoignage.id].edited)}>Enregistrer</button>
            </>
          ) : (
            <>
              <p>{temoignage.message}</p>
              <button onClick={() => handleDelete(temoignage.id)}>Supprimer</button>
              <button onClick={() => handleEdit(temoignage.id, temoignage.message)}>Éditer</button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TemoignageListe;
