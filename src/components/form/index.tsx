import { useState, ChangeEvent } from 'react';
import { useTranslation } from 'react-i18next';
import User from 'helpers/type/user';
import userFormat from 'helpers/format/user';
import reverseDate from 'helpers/reverse-date';
import 'styling/form.css';

type SetUser = React.Dispatch<React.SetStateAction<User>>;
type FormType = { setUser: SetUser };

const Form: React.FC<FormType> = ({ setUser }) => {
    const [t] = useTranslation();
    const [formData, setFormData] = useState({ ...userFormat });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section className="user_input">
            <form
                className="user_input__form"
                onSubmit={e => {
                    e.preventDefault();

                    formData.birthday = reverseDate(formData.birthday);

                    setUser(formData);
                    setFormData({ ...userFormat });
                }}
            >
                <span>
                    <label htmlFor="name">{t('pages.form.name.title')}:</label>
                    <input
                        type="text"
                        placeholder={t('pages.form.name.placeholder')}
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        autoComplete="nothing"
                    />
                </span>

                <span>
                    <label htmlFor="surname">
                        {t('pages.form.surname.title')}:
                    </label>
                    <input
                        type="text"
                        placeholder={t('pages.form.surname.placeholder')}
                        id="surname"
                        name="surname"
                        value={formData.surname}
                        onChange={handleChange}
                        required
                        autoComplete="nothing"
                    />
                </span>

                <span>
                    <label htmlFor="countries">
                        {t('pages.form.countries.title')}:
                    </label>
                    <input
                        list="countriesList"
                        placeholder={t('pages.form.countries.placeholder')}
                        id="country"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        required
                        autoComplete="nothing"
                    />
                </span>

                <span>
                    <label htmlFor="birthday">
                        {t('pages.form.birthday.title')}:
                    </label>
                    <input
                        type="date"
                        id="birthday"
                        name="birthday"
                        value={formData.birthday}
                        onChange={handleChange}
                        required
                        autoComplete="nothing"
                    />
                </span>

                <button type="submit">{t('btn.save')}</button>
            </form>
        </section>
    );
};

export default Form;
