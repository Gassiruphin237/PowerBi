// App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, TextField, Autocomplete, Box, Typography } from '@mui/material';

function Csq() {
  const [list, setList] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [savedItems, setSavedItems] = useState([]);

  // Fonction pour récupérer la liste depuis json-server
  useEffect(() => {
    axios.get('http://localhost:8000/list')
      .then(response => {
        setList(response.data);
      })
      .catch(error => {
        console.error("Erreur lors de la récupération de la liste", error);
      });
  }, []);

  // Fonction pour générer une couleur aléatoire
  const generateRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  // Fonction pour ajouter l'élément sélectionné avec la date
  const addSelectedItem = () => {
    if (selectedItem && selectedDate) {
      const newItem = {
        ...selectedItem,
        date: selectedDate,
        color: generateRandomColor(),
      };

      // Ajouter localement l'élément à la liste des éléments enregistrés
      setSavedItems([...savedItems, newItem]);

      // Poster les nouvelles données à json-server
      axios.post('http://localhost:8000/data', newItem)
        .then(response => {
          setSelectedItem(null);
          setSelectedDate('');
        })
        .catch(error => {
          console.error("Erreur lors de l'ajout de l'élément", error);
        });
    } else {
      alert('Veuillez sélectionner un élément et une date');
    }
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2, mt: 5 }}>
      <h1>Ma demande de CSQ</h1>

      {/* Autocomplete pour la sélection des éléments */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, alignItems: 'center' }}>
        <Autocomplete
          options={list}
          getOptionLabel={(option) => option.content}
          onChange={(event, value) => setSelectedItem(value)}
          renderInput={(params) => (
            <TextField {...params} label="Sélectionner un élément" variant="outlined" />
          )}
          sx={{ width: 300 }}
        />

        {/* Champ de date */}
        <TextField
          label="Date"
          type="date"
          variant="outlined"
          value={selectedDate}
          onChange={e => setSelectedDate(e.target.value)}
          InputLabelProps={{
            shrink: true,
          }}
          sx={{ width: 300 }}
        />
      </Box>

      <Button variant="contained" color="primary" onClick={addSelectedItem} sx={{ mt: 2 }}>
        Ajouter une étape
      </Button>

      {/* Interface pour afficher les éléments enregistrés */}
      <Box sx={{ mt: 3, width: '80%', display: 'flex', flexDirection: 'column', gap: 2 }}>
        {savedItems.map((item, index) => (
          <Box
            key={index}
            sx={{
              backgroundColor: item.color,
              padding: 2,
              borderRadius: 2,
              textAlign: 'left',
              textTransform:'lowercase'
            }}
          >
            <Typography variant="h6" sx={{ color: '#fff',  }}>
              {item.content}
            </Typography>
            <Typography variant="body2" sx={{ color: '#fff' }}>
              {item.date}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default Csq;
