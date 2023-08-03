// store.js

// Importez createStore et combineReducers depuis redux
import { createStore, combineReducers } from 'redux';

// Définissez les types d'actions
export const AJOUTER_TEMOIGNAGE = 'AJOUTER_TEMOIGNAGE';
export const SUPPRIMER_TEMOIGNAGE = 'SUPPRIMER_TEMOIGNAGE';
export const EDITER_TEMOIGNAGE = 'EDITER_TEMOIGNAGE';

// Créez une fonction pour générer un ID unique
const generateId = () => {
  return Math.random().toString(36).substr(2, 9);
};

// Définissez une action pour ajouter un témoignage
export const ajouterTemoignage = message => ({
  type: AJOUTER_TEMOIGNAGE,
  payload: { id: generateId(), message }
});

// Définissez une action pour supprimer un témoignage
export const supprimerTemoignage = id => ({
  type: SUPPRIMER_TEMOIGNAGE,
  payload: id
});

// Définissez une action pour éditer un témoignage
export const editerTemoignage = (id, message) => ({
  type: EDITER_TEMOIGNAGE,
  payload: { id, message }
});

// Définissez le reducer initial pour gérer les témoignages
const initialTestimonials = [
  { id: generateId(), message: 'Ceci est un témoignage.' },
  { id: generateId(), message: 'Un autre témoignage ici.' }
];

const testimonialsReducer = (state = initialTestimonials, action) => {
  switch (action.type) {
    case AJOUTER_TEMOIGNAGE:
      return [...state, { id: action.payload.id, message: action.payload.message }];
    case SUPPRIMER_TEMOIGNAGE:
      return state.filter(testimonial => testimonial.id !== action.payload);
    case EDITER_TEMOIGNAGE:
      return state.map(testimonial =>
        testimonial.id === action.payload.id
          ? { ...testimonial, message: action.payload.message }
          : testimonial
      );
    default:
      return state;
  }
};

// Combinez les reducers si vous avez d'autres fonctionnalités à ajouter
const rootReducer = combineReducers({
  testimonials: testimonialsReducer
});

// Créez le store en utilisant createStore et passez le rootReducer
const store = createStore(rootReducer);

export default store;
