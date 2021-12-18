import { useState } from 'react';
import { ImSearch } from 'react-icons/im';
import { toast } from 'react-toastify';
import styles from './Searchbar.module.css';

//const styles = { form: { marginBottom: 20 } };

const Searchbar = ({ onSubmit }) => {
  const [image, setImage] = useState('');

  const handleNameChange = event => {
    setImage(event.currentTarget.value.toLowerCase());
    if (image.trim() === '') {
      return;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (image.trim() === '') {
      toast.error('Введите имя картинки.');
      return;
    }

    onSubmit(image);
    setImage('');
  };

  return (
    <header className={styles.searchbar}>
      <form
        className={styles.SearchForm}
        onSubmit={handleSubmit}
        style={styles.form}
      >
        <input
          className={styles.SearchForminput}
          type="text"
          name="image"
          value={image}
          onChange={handleNameChange}
          placeholder="Search images and photos"
        />
        <button type="submit" className={styles.SearchFormbutton}>
          {<ImSearch />}
          <span className={styles.SearchFormbuttonlabel}>Search</span>
        </button>
      </form>
    </header>
  );
};
export default Searchbar;
