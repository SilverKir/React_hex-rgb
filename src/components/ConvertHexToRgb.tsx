import React from 'react'
import ParseToRgb from '../utils/ParseToRgb';

export const ConvertHexToRgb = () => {
    const [form, setForm] = React.useState({
        hex: '#',
        rgb: 'Введите цвет'
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        if (value.length < 8) {
            setForm({
                ...form,
                [name]: value
            });
        } else {
            const rgb = ParseToRgb(form.hex);
            if (rgb === 'Ошибка!') {
                setForm({
                    ...form,
                    rgb: 'Ошибка!',
                });
                document.body.style.backgroundColor = 'rgb(223, 65, 65)';
            } else {
                setForm({
                    ...form,
                    rgb: rgb
                });
                document.body.style.backgroundColor = form.hex;
            }
        }
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setForm({
            ...form,
            hex: '#',
            rgb: 'Введите цвет',
        });
    }

    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <label htmlFor="hex"></label>
                <input type="text" id="hex" name="hex"
                    value={form.hex}
                    onChange={handleChange} />
                <div className='rgb-input' >{form.rgb}</div>
            </form>

        </div>
    )
}
