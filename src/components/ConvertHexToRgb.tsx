import React from 'react'
import ParseToRgb from '../utils/ParseToRgb';

import classes from './ConvertHexToRgb.module.css';

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
        <div className={classes['container']}>
            <form className={classes['main-form']} onSubmit={handleSubmit}>
                <label htmlFor="hex"></label>
                <input type="text" id="hex" name="hex" className={classes['hex-input']}
                    value={form.hex}
                    onChange={handleChange} />
            </form>
            <div className={classes['rgb-input']} >{form.rgb}</div>
        </div>
    )
}
