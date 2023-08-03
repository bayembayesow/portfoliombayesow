import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ajouterTemoignage } from '../store';

export default function TemoignageForm() {
  const [newTestimonial, setNewTestimonial] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    if (newTestimonial.trim() !== '') {
      dispatch(ajouterTemoignage(newTestimonial));
      setNewTestimonial('');
    }
  };

  return (
    <div>
      <h2>Ajouter un témoignage</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={newTestimonial}
          onChange={e => setNewTestimonial(e.target.value)}
        />
        <button type="submit">Ajouter</button>
      </form>
    </div>
  );
}
