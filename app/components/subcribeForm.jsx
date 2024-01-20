import { Borel } from 'next/font/google'
import { useState} from 'react';
import { Alert } from 'flowbite-react';

const borel = Borel({
    subsets: ['latin'],
    weight: '400'
})
const SubscribeForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        last_name: '',
        email: '',
        phone: '',
    });

    const [thankYouMessage, setThankYouMessage] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3500/clients', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                console.log('Suscripción exitosa');
                setThankYouMessage('¡Gracias por suscribirte!');
                setFormData({
                    name: '',
                    last_name: '',
                    email: '',
                    phone: '',
                });
            } else {
                console.error('Error en la suscripción');
            }
        } catch (error) {
            console.error('Error en la suscripción: ', error);
        }
    };

    return (
        <form className='flex flex-col items-center' onSubmit={handleSubmit}>
            <label className='flex w-3/4 text-left text-fuchsia-900 pt-2' htmlFor="">Nombre:</label>
            <input className='flex w-3/4 my-1 py-1' type="text" name="name" value={formData.name} onChange={handleChange} />
            <label className='flex w-3/4 text-left text-fuchsia-900 pt-2' htmlFor="">Apellido:</label>
            <input className='flex w-3/4 my-1 py-1' type="text" name="last_name" value={formData.last_name} onChange={handleChange}/>
            <label className='flex w-3/4 text-left text-fuchsia-900 pt-2' htmlFor="">Correo Electronico:</label>
            <input className='flex w-3/4 my-1 py-1' type="text" name="email" value={formData.email} onChange={handleChange}/>
            <label className='flex w-3/4 text-left text-fuchsia-900 pt-2' htmlFor="">Telefono:</label>
            <input className='flex w-3/4 my-1 py-1' type="number" name="phone" value={formData.phone} onChange={handleChange}/>
            {thankYouMessage && (
                <div className="bg-fuchsia-200 text-fuchsia-800 p-4 rounded-md my-4">
                <span className="font-medium">{thankYouMessage}</span>
            </div>
            )}
            <button className='text-center text-fuchsia-200 mt-3 mb-8 bg-fuchsia-500 w-3/4 rounded-lg pt-3 pb-2 hover:text-fuchsia-900 hover:bg-fuchsia-400' type="submit">Suscribirse</button>
        </form>
    );
};

export default SubscribeForm;
