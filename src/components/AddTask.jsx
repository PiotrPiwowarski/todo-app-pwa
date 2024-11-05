import { useState, useEffect } from 'react';

const AddTask = ({ addTaskAndFilterVisibility, onTaskSubmit }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState('');
    const [location, setLocation] = useState('');
    const [deadline, setDeadline] = useState('');

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                setLocation(`Latitude: ${latitude}, Longitude: ${longitude}`);
            },
            (error) => {
                console.error("Błąd przy pobieraniu lokalizacji:", error);
                setLocation("Lokalizacja niedostępna");
            }
        );
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTask = {
            title,
            description,
            priority,
            status: 'nowe',
            location,
            dateOfCreation: new Date().toISOString().replace('T', ' ').split('.')[0],
            deadline
        };
        onTaskSubmit(newTask);
        resetForm();
    };

    const resetForm = () => {
        setTitle('');
        setDescription('');
        setPriority('');
        setLocation('');
        setDeadline('');
    };

    if (addTaskAndFilterVisibility.addTaskVisibility) {
        return (
            <div className='add-task'>
                <h2>NOWE ZADANIE</h2>
                <form onSubmit={handleSubmit} className='form'> 
                    <label>
                        Tytuł:
                        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
                    </label>
                    <label>
                        Opis:
                        <input value={description} onChange={(e) => setDescription(e.target.value)} required />
                    </label>
                    <label>
                        Priorytet:
                        <select value={priority} onChange={(e) => setPriority(e.target.value)} required>
                            <option value="">Wybierz priorytet</option>
                            <option value="wysoki">Wysoki</option>
                            <option value="sredni">Średni</option>
                            <option value="niski">Niski</option>
                        </select>
                    </label>
                    <label>
                        Lokalizacja:
                        <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
                    </label>
                    <label>
                        Termin wykonania:
                        <input type="date" value={deadline} onChange={(e) => setDeadline(e.target.value)} />
                    </label>
                    <button type="submit">Dodaj zadanie</button>
                </form>
            </div>
        );
    } else {
        return null;
    }
};

export default AddTask;
